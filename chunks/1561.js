n.d(t, { P: () => f }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(532712),
    u = n(84735),
    c = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f extends (i = a.Component) {
    renderNonInteractive() {
        let { tag: e, focusProps: t, innerRef: n, onClick: i, role: r, tabIndex: s, ignoreKeyPress: o, ...l } = this.props;
        return a.createElement(e, {
            ref: this.setRef,
            ...l
        });
    }
    renderInner() {
        let { tag: e, onClick: t, className: n, children: i, focusProps: r, innerRef: s, ignoreKeyPress: l, ...u } = this.props;
        return null == t
            ? a.createElement(
                  e,
                  {
                      ref: this.setRef,
                      className: o()(n),
                      ...u
                  },
                  i
              )
            : a.createElement(
                  e,
                  {
                      onClick: t,
                      ref: this.setRef,
                      onKeyPress: this.handleKeyPress,
                      className: o()(n),
                      ...u
                  },
                  i
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, r.jsx)(u.t, {
                  ...this.props.focusProps,
                  children: this.renderInner()
              });
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', void 0),
            d(this, 'handleKeyPress', (e) => {
                let { onClick: t, href: n, onKeyPress: i, ignoreKeyPress: r } = this.props;
                e.repeat || (r || null == t || null == this.ref || (e.charCode !== c.yXg.SPACE && e.charCode !== c.yXg.ENTER) || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != i && i(e));
            }),
            d(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
            });
    }
}
d(f, 'contextType', l.g),
    d(f, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });

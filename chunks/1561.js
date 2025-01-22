r.d(n, {
    P: function () {
        return h;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(532712),
    d = r(84735),
    f = r(981631);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class h extends (i = s.Component) {
    renderNonInteractive() {
        let { tag: e, focusProps: n, innerRef: r, onClick: i, role: a, tabIndex: o, ...l } = this.props;
        return s.createElement(e, {
            ref: this.setRef,
            ...l
        });
    }
    renderInner() {
        let { tag: e, onClick: n, className: r, children: i, focusProps: a, innerRef: o, ...l } = this.props;
        return null == n
            ? s.createElement(
                  e,
                  {
                      ref: this.setRef,
                      className: u()(r),
                      ...l
                  },
                  i
              )
            : s.createElement(
                  e,
                  {
                      onClick: n,
                      ref: this.setRef,
                      onKeyPress: this.handleKeyPress,
                      className: u()(r),
                      ...l
                  },
                  i
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, o.jsx)(d.t, {
                  ...this.props.focusProps,
                  children: this.renderInner()
              });
    }
    constructor(...e) {
        super(...e),
            p(this, 'ref', void 0),
            p(this, 'handleKeyPress', (e) => {
                let { onClick: n, href: r, onKeyPress: i, ignoreKeyPress: a } = this.props;
                !e.repeat && (!a && null != n && null != this.ref && (e.charCode === f.yXg.SPACE || e.charCode === f.yXg.ENTER) && (null == r && e.preventDefault(), null == this.ref.click ? n(e) : this.ref.click()), null != i && i(e));
            }),
            p(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: n } = this.props;
                null != n && ('function' == typeof n ? n(e) : n.hasOwnProperty('current') && (n.current = e));
            });
    }
}
p(h, 'contextType', c.g),
    p(h, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });

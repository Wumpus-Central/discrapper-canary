n.d(t, { P: () => h }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(532712),
    s = n(84735),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class h extends (r = o.Component) {
    renderNonInteractive() {
        let e = this.props,
            { tag: t, focusProps: n, innerRef: r, onClick: i, role: a, tabIndex: s, ignoreKeyPress: l } = e,
            c = _(e, ['tag', 'focusProps', 'innerRef', 'onClick', 'role', 'tabIndex', 'ignoreKeyPress']);
        return o.createElement(t, u({ ref: this.setRef }, c));
    }
    renderInner() {
        let e = this.props,
            { tag: t, onClick: n, className: r, children: i, focusProps: a, innerRef: s, ignoreKeyPress: l } = e,
            c = _(e, ['tag', 'onClick', 'className', 'children', 'focusProps', 'innerRef', 'ignoreKeyPress']);
        return null == n
            ? o.createElement(
                  t,
                  u(
                      {
                          ref: this.setRef,
                          className: r
                      },
                      c
                  ),
                  i
              )
            : o.createElement(
                  t,
                  u(
                      {
                          onClick: n,
                          ref: this.setRef,
                          onKeyPress: this.handleKeyPress,
                          className: r
                      },
                      c
                  ),
                  i
              );
    }
    render() {
        return this.context ? this.renderNonInteractive() : (0, i.jsx)(s.t, f(u({}, this.props.focusProps), { children: this.renderInner() }));
    }
    constructor(...e) {
        super(...e),
            c(this, 'ref', void 0),
            c(this, 'handleKeyPress', (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                e.repeat || (i || null == t || null == this.ref || (e.charCode !== l.yXg.SPACE && e.charCode !== l.yXg.ENTER) || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e));
            }),
            c(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
            });
    }
}
c(h, 'contextType', a.g),
    c(h, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });

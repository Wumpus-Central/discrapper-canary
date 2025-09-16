n.d(t, { P: () => p }), n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(793030),
    s = n(981631);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class p extends (r = a.Component) {
    renderNonInteractive() {
        let e = this.props,
            { tag: t, focusProps: n, innerRef: r, onClick: i, role: o, tabIndex: s, ignoreKeyPress: l } = e,
            u = f(e, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex", "ignoreKeyPress"]);
        return a.createElement(t, c({ ref: this.setRef }, u));
    }
    renderInner() {
        let e = this.props,
            { tag: t, onClick: n, className: r, children: i, focusProps: o, innerRef: s, ignoreKeyPress: l } = e,
            u = f(e, ["tag", "onClick", "className", "children", "focusProps", "innerRef", "ignoreKeyPress"]);
        return null == n
            ? a.createElement(
                  t,
                  c(
                      {
                          ref: this.setRef,
                          className: r,
                      },
                      u,
                  ),
                  i,
              )
            : a.createElement(
                  t,
                  c(
                      {
                          onClick: n,
                          ref: this.setRef,
                          onKeyPress: this.handleKeyPress,
                          className: r,
                      },
                      u,
                  ),
                  i,
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, i.jsx)(o.tEY, d(c({}, this.props.focusProps), { children: this.renderInner() }));
    }
    constructor(...e) {
        super(...e),
            l(this, "ref", void 0),
            l(this, "handleKeyPress", (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                e.repeat ||
                    (i ||
                        null == t ||
                        null == this.ref ||
                        (e.charCode !== s.yXg.SPACE && e.charCode !== s.yXg.ENTER) ||
                        (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()),
                    null != r && r(e));
            }),
            l(this, "setRef", (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e));
            });
    }
}
l(p, "contextType", o.g$b),
    l(p, "defaultProps", {
        tag: "div",
        role: "button",
        tabIndex: 0,
    });

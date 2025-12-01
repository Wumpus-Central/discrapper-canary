n.d(t, { P: () => m }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(873294),
    s = n(155127),
    l = n(295907);
function c(e, t, n) {
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
function u(e) {
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
function p(e, t) {
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
class m extends (r = a.Component) {
    renderNonInteractive() {
        let e = this.props,
            { tag: t, focusProps: n, innerRef: r, onClick: i, role: o, tabIndex: s, ignoreKeyPress: l } = e,
            c = p(e, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex", "ignoreKeyPress"]);
        return a.createElement(t, u({ ref: this.setRef }, c));
    }
    renderInner() {
        let e = this.props,
            { tag: t, onClick: n, className: r, children: i, focusProps: o, innerRef: s, ignoreKeyPress: l } = e,
            c = p(e, ["tag", "onClick", "className", "children", "focusProps", "innerRef", "ignoreKeyPress"]);
        return null == n
            ? a.createElement(
                  t,
                  u(
                      {
                          ref: this.setRef,
                          className: r,
                      },
                      c,
                  ),
                  i,
              )
            : a.createElement(
                  t,
                  u(
                      {
                          onClick: n,
                          ref: this.setRef,
                          onKeyPress: this.handleKeyPress,
                          className: r,
                      },
                      c,
                  ),
                  i,
              );
    }
    render() {
        return this.context
            ? this.renderNonInteractive()
            : (0, i.jsx)(s.tE, f(u({}, this.props.focusProps), { children: this.renderInner() }));
    }
    constructor(...e) {
        super(...e),
            c(this, "ref", void 0),
            c(this, "handleKeyPress", (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                e.repeat ||
                    (i ||
                        null == t ||
                        null == this.ref ||
                        (e.key !== l.vn.SPACE && e.key !== l.vn.ENTER) ||
                        (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()),
                    null != r && r(e));
            }),
            c(this, "setRef", (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e));
            });
    }
}
c(m, "contextType", o.g),
    c(m, "defaultProps", {
        tag: "div",
        role: "button",
        tabIndex: 0,
    });

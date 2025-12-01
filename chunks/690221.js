n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(703656),
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
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let _ = i.forwardRef(function (e, t) {
    var { href: n, children: l, onClick: u, onKeyPress: p, focusProps: _ } = e,
        m = f(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]);
    let h = i.useCallback(
            (e) => {
                e.repeat ||
                    ((e.charCode === s.yXg.SPACE || e.charCode === s.yXg.ENTER) &&
                        (e.preventDefault(), null != n && (0, o.uL)(n), null == u || u()),
                    null == p || p(e));
            },
            [n, p, u],
        ),
        g = i.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != n && (0, o.uL)(n), null == u || u());
            },
            [n, u],
        ),
        E = (0, r.jsx)(
            "a",
            d(
                c(
                    {
                        ref: t,
                        href: n,
                        onClick: g,
                        onKeyPress: h,
                    },
                    m,
                ),
                { children: l },
            ),
        );
    return (0, r.jsx)(a.tEY, d(c({}, _), { children: E }));
});

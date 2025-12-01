n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(357156),
    c = n(343747),
    u = n(388032),
    d = n(463063),
    f = n(799641);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function b(e) {
    var { guild: t, focused: n, onSelectItem: i } = e,
        p = g(e, ["guild", "focused", "onSelectItem"]);
    let { canCreateExpressions: m } = (0, l.XJ)(t);
    return (0, r.jsx)(o.u, {
        text: u.intl.string(u.t["fHo+z1"]),
        shouldShow: !m,
        children: (0, r.jsx)("li", {
            className: d.soundButtonWrapper,
            children: (0, r.jsxs)(
                s.kL8,
                h(_({}, p), {
                    "aria-label": u.intl.formatToPlainString(u.t.c1qVYh, { guildName: t.name }),
                    className: a()(f.soundAddButton, {
                        [f.focused]: n,
                        [f.disabled]: !m,
                    }),
                    onClick: () => (null != i ? i() : (0, c.Z)(t.id)),
                    children: [
                        (0, r.jsx)(s.qJs, {
                            size: "sm",
                            color: "currentColor",
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/semibold",
                            color: m ? "currentColor" : "text-muted",
                            children: u.intl.string(u.t["8Fu/S7"]),
                        }),
                    ],
                }),
            ),
        }),
    });
}

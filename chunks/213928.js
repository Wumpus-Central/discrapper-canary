n.d(t, { Z: () => f });
var r = n(951288),
    i = n(442837),
    a = n(681715),
    o = n(481060),
    s = n(885110),
    l = n(51144),
    c = n(231338),
    u = n(388032),
    d = n(385612);
function f() {
    var e;
    let t = (0, i.e7)([s.Z], () => s.Z.getStatus()),
        n = null != (e = (0, l.u5)(t)) ? e : "",
        f = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE;
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsxs)(o.nn4, {
                tag: "div",
                children: [u.intl.string(u.t.AHoLf3), ":"],
            }),
            n,
            n.length > 0 &&
                f &&
                (0, r.jsx)(a.u, {
                    asContainer: !0,
                    text: u.intl.string(u.t.L99HQk),
                    children: (0, r.jsx)(o.Mgn, {
                        size: "xs",
                        color: o.TVs.colors.STATUS_WARNING,
                        "aria-label": u.intl.string(u.t.L99HQk),
                    }),
                }),
        ],
    });
}

n.d(t, { Z: () => m });
var a = n(951288),
    i = n(442837),
    l = n(681715),
    r = n(481060),
    s = n(885110),
    o = n(51144),
    c = n(231338),
    d = n(388032),
    u = n(61952);
function m() {
    var e;
    let t = (0, i.e7)([s.Z], () => s.Z.getStatus()),
        n = null != (e = (0, o.u5)(t)) ? e : "",
        m = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE;
    return (0, a.jsxs)("div", {
        className: u.container,
        children: [
            (0, a.jsxs)(r.nn4, {
                tag: "div",
                children: [d.intl.string(d.t.AHoLf4), ":"],
            }),
            n,
            n.length > 0 &&
                m &&
                (0, a.jsx)(l.u, {
                    text: d.intl.string(d.t.L99HQm),
                    children: (0, a.jsx)(r.Mgn, {
                        size: "xs",
                        color: r.TVs.colors.STATUS_WARNING,
                        "aria-label": d.intl.string(d.t.L99HQm),
                    }),
                }),
        ],
    });
}

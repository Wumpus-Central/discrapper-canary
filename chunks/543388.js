n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(681715),
    a = n(481060),
    o = n(925329),
    s = n(388032),
    l = n(56651);
function c(e) {
    let { application: t, children: n } = e;
    return (0, r.jsx)(i.i_, {
        asset: (0, r.jsx)(o.Z, {
            size: o.A.MEDIUM_LARGE,
            game: t,
        }),
        body: s.intl.format(s.t.J3s8JP, { applicationName: t.name }),
        position: "top",
        asContainer: !0,
        "aria-label": s.intl.string(s.t["5nMcv1"]),
        children: (0, r.jsx)(a.P3F, {
            tag: "span",
            children: n,
        }),
    });
}
function u(e) {
    let { application: t, compact: n, children: i } = e;
    return (0, r.jsxs)(c, {
        application: t,
        children: [
            n
                ? null
                : (0, r.jsx)(a.iWm, {
                      className: l.gameIcon,
                      size: "custom",
                      width: 14,
                      height: 14,
                  }),
            i,
        ],
    });
}

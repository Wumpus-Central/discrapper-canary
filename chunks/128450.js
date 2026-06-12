n.d(l, { A: () => h });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    t = n.n(r),
    s = n(834730),
    u = n(742158),
    d = n(244367),
    c = n(453771),
    o = n(450232),
    p = n(212168),
    g = n(850949);
function f(e) {
    let { errors: l } = e;
    return (0, a.jsx)(a.Fragment, {
        children: l.map((e, l) =>
            (0, a.jsx)(
                s.E,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: g.gJ,
                    children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                        let l = 1024 * parseInt(e, 10);
                        return isNaN(l) ? e : (0, c.Hb)(l);
                    }),
                },
                l,
            ),
        ),
    });
}
let h = i.forwardRef(function (e, l) {
    let {
        title: n,
        titleIcon: i,
        titleBadge: r,
        titleId: s,
        description: c,
        children: h,
        className: x,
        errors: m,
        disabled: v = !1,
        hideDivider: b = !1,
        showBorder: A = !1,
        borderType: j,
        hasBackground: N = !1,
        forcedDivider: k = !1,
        showPremiumIcon: y = !1,
    } = e;
    return (0, a.jsx)("div", {
        className: t()(g.fz, x, { [g.r9]: v, [g.Ai]: b, [g.Ac]: A, [g.Cx]: k }),
        ref: l,
        children: (0, a.jsxs)(p.A, {
            className: g.D6,
            backgroundClassName: g.fr,
            isShown: A,
            type: j,
            hasBackground: N,
            children: [
                (0, a.jsxs)(u.z, {
                    className: g.DD,
                    id: s,
                    "data-migration-pending": !0,
                    children: [n, y && (0, a.jsx)(o.A, { size: "xs" }), i, r],
                }),
                null != c
                    ? (0, a.jsx)(d.a, {
                          type: d.a.Types.DESCRIPTION,
                          className: g.yV,
                          "data-migration-pending": !0,
                          children: c,
                      })
                    : null,
                h,
                null != m && (0, a.jsx)(f, { errors: m }),
            ],
        }),
    });
});

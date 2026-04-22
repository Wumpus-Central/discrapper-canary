n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(834730),
    o = n(742158),
    d = n(244367),
    u = n(453771),
    c = n(450232),
    g = n(212168),
    m = n(850949);
function _(e) {
    let { errors: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                r.E,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: m.gJ,
                    children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                        let t = 1024 * parseInt(e, 10);
                        return isNaN(t) ? e : (0, u.Hb)(t);
                    }),
                },
                t,
            ),
        ),
    });
}
let A = s.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: s,
        titleId: l,
        description: r,
        children: u,
        className: A,
        errors: h,
        disabled: p = !1,
        hideDivider: x = !1,
        showBorder: E = !1,
        borderType: T,
        hasBackground: S = !1,
        forcedDivider: f = !1,
        showPremiumIcon: b = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(m.fz, A, { [m.r9]: p, [m.Ai]: x, [m.Ac]: E, [m.Cx]: f }),
        ref: t,
        children: (0, i.jsxs)(g.A, {
            className: m.D6,
            backgroundClassName: m.fr,
            isShown: E,
            type: T,
            hasBackground: S,
            children: [
                (0, i.jsxs)(o.z, {
                    className: m.DD,
                    id: l,
                    "data-migration-pending": !0,
                    children: [n, b && (0, i.jsx)(c.A, { size: "xs" }), s],
                }),
                null != r
                    ? (0, i.jsx)(d.a, {
                          type: d.a.Types.DESCRIPTION,
                          className: m.yV,
                          "data-migration-pending": !0,
                          children: r,
                      })
                    : null,
                u,
                null != h && (0, i.jsx)(_, { errors: h }),
            ],
        }),
    });
});

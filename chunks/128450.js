n.d(t, { A: () => h });
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
    _ = n(850949);
function m(e) {
    let { errors: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                r.E,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: _.gJ,
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
let h = s.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: s,
        titleBadge: l,
        titleId: r,
        description: u,
        children: h,
        className: A,
        errors: p,
        disabled: E = !1,
        hideDivider: T = !1,
        showBorder: S = !1,
        borderType: x,
        hasBackground: f = !1,
        forcedDivider: b = !1,
        showPremiumIcon: N = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(_.fz, A, { [_.r9]: E, [_.Ai]: T, [_.Ac]: S, [_.Cx]: b }),
        ref: t,
        children: (0, i.jsxs)(g.A, {
            className: _.D6,
            backgroundClassName: _.fr,
            isShown: S,
            type: x,
            hasBackground: f,
            children: [
                (0, i.jsxs)(o.z, {
                    className: _.DD,
                    id: r,
                    "data-migration-pending": !0,
                    children: [n, N && (0, i.jsx)(c.A, { size: "xs" }), s, l],
                }),
                null != u
                    ? (0, i.jsx)(d.a, {
                          type: d.a.Types.DESCRIPTION,
                          className: _.yV,
                          "data-migration-pending": !0,
                          children: u,
                      })
                    : null,
                h,
                null != p && (0, i.jsx)(m, { errors: p }),
            ],
        }),
    });
});

n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(453771),
    c = n(450232),
    d = n(212168),
    u = n(317448);
function _(e) {
    let { errors: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                r.Text,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: u.gJ,
                    children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                        let t = 1024 * parseInt(e, 10);
                        return isNaN(t) ? e : (0, o.Hb)(t);
                    }),
                },
                t,
            ),
        ),
    });
}
let m = s.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: s,
        titleId: a,
        description: o,
        children: m,
        className: A,
        errors: g,
        disabled: h = !1,
        hideDivider: x = !1,
        showBorder: p = !1,
        borderType: E,
        hasBackground: C = !1,
        forcedDivider: T = !1,
        showPremiumIcon: S = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: l()(u.fz, A, { [u.r9]: h, [u.Ai]: x, [u.Ac]: p, [u.Cx]: T }),
        ref: t,
        children: (0, i.jsxs)(d.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: p,
            type: E,
            hasBackground: C,
            children: [
                (0, i.jsxs)(r.zEo, {
                    className: u.DD,
                    id: a,
                    "data-migration-pending": !0,
                    children: [n, S && (0, i.jsx)(c.A, { size: "xs" }), s],
                }),
                null != o
                    ? (0, i.jsx)(r.ayl, {
                          type: r.ayl.Types.DESCRIPTION,
                          className: u.yV,
                          "data-migration-pending": !0,
                          children: o,
                      })
                    : null,
                m,
                null != g && (0, i.jsx)(_, { errors: g }),
            ],
        }),
    });
});

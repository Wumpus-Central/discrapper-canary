n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    o = n(453771),
    c = n(450232),
    d = n(212168),
    u = n(317448);
function _(e) {
    let { errors: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                l.Text,
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
        titleId: r,
        description: o,
        children: m,
        className: A,
        errors: g,
        disabled: E = !1,
        hideDivider: h = !1,
        showBorder: p = !1,
        borderType: C,
        hasBackground: x = !1,
        forcedDivider: T = !1,
        showPremiumIcon: I = !1,
    } = e;
    return (0, i.jsx)("div", {
        className: a()(u.fz, A, { [u.r9]: E, [u.Ai]: h, [u.Ac]: p, [u.Cx]: T }),
        ref: t,
        children: (0, i.jsxs)(d.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: p,
            type: C,
            hasBackground: x,
            children: [
                (0, i.jsxs)(l.zEo, {
                    className: u.DD,
                    id: r,
                    "data-migration-pending": !0,
                    children: [n, I && (0, i.jsx)(c.A, {}), s],
                }),
                null != o
                    ? (0, i.jsx)(l.ayl, {
                          type: l.ayl.Types.DESCRIPTION,
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

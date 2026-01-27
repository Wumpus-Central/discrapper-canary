n.d(t, {
    A: () => p,
}),
    n(747238),
    n(812715),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(453771),
    c = n(450232),
    d = n(212168),
    u = n(317448);

function _(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                a.Text,
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
let p = i.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: i,
        titleId: l,
        description: o,
        children: p,
        className: m,
        errors: g,
        disabled: A = !1,
        hideDivider: f = !1,
        showBorder: h = !1,
        borderType: b,
        hasBackground: E = !1,
        forcedDivider: x = !1,
        showPremiumIcon: O = !1,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(u.fz, m, {
            [u.r9]: A,
            [u.Ai]: f,
            [u.Ac]: h,
            [u.Cx]: x,
        }),
        ref: t,
        children: (0, r.jsxs)(d.A, {
            className: u.D6,
            backgroundClassName: u.fr,
            isShown: h,
            type: b,
            hasBackground: E,
            children: [
                (0, r.jsxs)(a.zEo, {
                    className: u.DD,
                    id: l,
                    "data-migration-pending": !0,
                    children: [n, O && (0, r.jsx)(c.A, {}), i],
                }),
                null != o
                    ? (0, r.jsx)(a.ayl, {
                          type: a.ayl.Types.DESCRIPTION,
                          className: u.yV,
                          "data-migration-pending": !0,
                          children: o,
                      })
                    : null,
                p,
                null != g &&
                    (0, r.jsx)(_, {
                        errors: g,
                    }),
            ],
        }),
    });
});

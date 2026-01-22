n.d(t, {
    A: () => _,
}),
    n(747238),
    n(812715),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(453771),
    c = n(450232),
    u = n(212168),
    d = n(317448);

function f(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, l.Hb)(t);
    });
}

function p(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                o.Text,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: d.gJ,
                    children: f(e),
                },
                t,
            ),
        ),
    });
}
let _ = i.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: i,
        titleId: a,
        description: l,
        children: f,
        className: _,
        errors: h,
        disabled: m = !1,
        hideDivider: g = !1,
        showBorder: E = !1,
        borderType: b,
        hasBackground: y = !1,
        forcedDivider: O = !1,
        showPremiumIcon: A = !1,
    } = e;
    return (0, r.jsx)("div", {
        className: s()(d.fz, _, {
            [d.r9]: m,
            [d.Ai]: g,
            [d.Ac]: E,
            [d.Cx]: O,
        }),
        ref: t,
        children: (0, r.jsxs)(u.A, {
            className: d.D6,
            backgroundClassName: d.fr,
            isShown: E,
            type: b,
            hasBackground: y,
            children: [
                (0, r.jsxs)(o.zEo, {
                    className: d.DD,
                    id: a,
                    "data-migration-pending": !0,
                    children: [n, A && (0, r.jsx)(c.A, {}), i],
                }),
                null != l
                    ? (0, r.jsx)(o.ayl, {
                          type: o.ayl.Types.DESCRIPTION,
                          className: d.yV,
                          "data-migration-pending": !0,
                          children: l,
                      })
                    : null,
                f,
                null != h &&
                    (0, r.jsx)(p, {
                        errors: h,
                    }),
            ],
        }),
    });
});

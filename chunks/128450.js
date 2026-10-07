n.d(l, { A: () => h });
var i = n(477900);
n(582128);
var a = n(503698),
    t = n.n(a),
    r = n(834730),
    s = n(742158),
    u = n(244367),
    d = n(450232),
    c = n(252732),
    o = n(212168),
    p = n(3294);
function g(e) {
    let { errors: l } = e;
    return (0, i.jsx)(i.Fragment, {
        children: l.map((e, l) =>
            (0, i.jsx)(
                r.E,
                { variant: "text-xs/normal", color: "text-feedback-critical", className: p.gJ, children: (0, c.d3)(e) },
                l,
            ),
        ),
    });
}
function h(e) {
    let {
        title: l,
        titleIcon: n,
        titleBadge: a,
        titleId: r,
        description: c,
        children: h,
        className: x,
        errors: f,
        disabled: m = !1,
        hideDivider: v = !1,
        showBorder: A = !1,
        borderType: b,
        hasBackground: j = !1,
        forcedDivider: N = !1,
        showPremiumIcon: k = !1,
        ref: y,
    } = e;
    return (0, i.jsx)("div", {
        className: t()(p.fz, x, { [p.r9]: m, [p.Ai]: v, [p.Ac]: A, [p.Cx]: N }),
        ref: y,
        children: (0, i.jsxs)(o.A, {
            className: p.D6,
            backgroundClassName: p.fr,
            isShown: A,
            type: b,
            hasBackground: j,
            children: [
                (0, i.jsxs)(s.z, {
                    className: p.DD,
                    id: r,
                    "data-migration-pending": !0,
                    children: [l, k && (0, i.jsx)(d.A, { size: "xs", inline: !0 }), n, a],
                }),
                null != c
                    ? (0, i.jsx)(u.a, {
                          type: u.a.Types.DESCRIPTION,
                          className: p.yV,
                          "data-migration-pending": !0,
                          children: c,
                      })
                    : null,
                h,
                null != f && (0, i.jsx)(g, { errors: f }),
            ],
        }),
    });
}

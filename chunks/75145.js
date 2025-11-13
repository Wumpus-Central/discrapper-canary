n.d(t, {
    Kn: () => m,
    ZP: () => E,
    fi: () => g,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(607070),
    d = n(243778),
    f = n(921944),
    _ = n(388032),
    p = n(788457);
let h = 0.2,
    m = 41;
function g() {
    let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [t, a] = (0, d.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
        h = t === l.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                h && a(f.L.TAKE_ACTION);
            },
            [h, a],
        ),
        (0, r.jsxs)("div", {
            className: p.nitroTopDividerContainer,
            children: [
                (0, r.jsx)("div", { className: p.nitroTopDividerUpper }),
                (0, r.jsx)("div", { className: o()(p.nitroTopDividerShadow, p.glow, { [p.reducedMotion]: e || !h }) }),
                (0, r.jsxs)("div", {
                    className: p.nitroTopDividerLockContainer,
                    children: [
                        (0, r.jsx)("div", { className: p.nitroTopDividerLockBorder }),
                        !e &&
                            h &&
                            (0, r.jsx)(c.Fmz, {
                                className: p.premiumUnlockAnimation,
                                loop: !1,
                                importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: o()(p.premiumUnlockedWithNitroPillContainer, { [p.reducedMotion]: e || !h }),
                            children: [
                                (0, r.jsx)(c.SrA, {
                                    size: "xs",
                                    color: "white",
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: _.intl.string(_.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", { className: p.nitroTopDividerLockBorderReversed }),
                    ],
                }),
                (0, r.jsx)("div", { className: p.reverseTrialTopDividerLower }),
            ],
        })
    );
}
let E = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = h, enableBrandRefresh: a = !1 } = e;
    return (0, r.jsxs)("div", {
        className: o()(p.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)("div", { className: p.nitroTopDividerUpper }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 0 : t },
                className: p.nitroTopDividerShadow,
            }),
            (0, r.jsxs)("div", {
                className: p.nitroTopDividerLockContainer,
                children: [
                    (0, r.jsx)("div", { className: o()(p.nitroTopDividerLockBorder, { [p.brandRefresh]: a }) }),
                    (0, r.jsx)("div", {
                        className: o()(p.nitroTopDividerLockCircle, { [p.brandRefresh]: a }),
                        children: (0, r.jsx)(c.mBM, {
                            size: "xs",
                            color: "white",
                        }),
                    }),
                    (0, r.jsx)("div", { className: o()(p.nitroTopDividerLockBorderReversed, { [p.brandRefresh]: a }) }),
                ],
            }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 1 : i },
                className: o()(p.nitroTopDividerLower, { [p.brandRefresh]: a }),
            }),
        ],
    });
};

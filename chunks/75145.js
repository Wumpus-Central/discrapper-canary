n.d(t, {
    Kn: () => g,
    ZP: () => b,
    fi: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(410030),
    d = n(607070),
    f = n(243778),
    p = n(921944),
    _ = n(388032),
    m = n(774325);
let h = 0.2,
    g = 41;
function E() {
    let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        [t, a] = (0, f.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
        u = t === l.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                u && a(p.L.TAKE_ACTION);
            },
            [u, a],
        ),
        (0, r.jsxs)("div", {
            className: m.nitroTopDividerContainer,
            children: [
                (0, r.jsx)("div", { className: m.nitroTopDividerUpper }),
                (0, r.jsx)("div", { className: o()(m.nitroTopDividerShadow, m.glow, { [m.reducedMotion]: e || !u }) }),
                (0, r.jsxs)("div", {
                    className: m.nitroTopDividerLockContainer,
                    children: [
                        (0, r.jsx)("div", { className: m.nitroTopDividerLockBorder }),
                        !e &&
                            u &&
                            (0, r.jsx)(c.Fmz, {
                                className: m.premiumUnlockAnimation,
                                loop: !1,
                                importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: o()(m.premiumUnlockedWithNitroPillContainer, { [m.reducedMotion]: e || !u }),
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
                        (0, r.jsx)("div", { className: m.nitroTopDividerLockBorderReversed }),
                    ],
                }),
                (0, r.jsx)("div", { className: m.reverseTrialTopDividerLower }),
            ],
        })
    );
}
let b = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = h, enableBrandRefresh: a = !1 } = e,
        s = (0, u.ZP)(),
        l = (0, c.apv)(s);
    return (0, r.jsxs)("div", {
        className: o()(m.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)("div", { className: m.nitroTopDividerUpper }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 0 : t },
                className: m.nitroTopDividerShadow,
            }),
            (0, r.jsxs)("div", {
                className: m.nitroTopDividerLockContainer,
                children: [
                    (0, r.jsx)("div", { className: o()(m.nitroTopDividerLockBorder, { [m.brandRefresh]: a }) }),
                    (0, r.jsx)("div", {
                        className: o()(m.nitroTopDividerLockCircle, { [m.brandRefresh]: a }),
                        children: (0, r.jsx)(c.mBM, {
                            size: "xs",
                            color: a && l ? "black" : "white",
                        }),
                    }),
                    (0, r.jsx)("div", { className: o()(m.nitroTopDividerLockBorderReversed, { [m.brandRefresh]: a }) }),
                ],
            }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 1 : i },
                className: o()(m.nitroTopDividerLower, { [m.brandRefresh]: a }),
            }),
        ],
    });
};

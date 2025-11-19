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
    _ = n(921944),
    p = n(388032),
    h = n(826522);
let m = 0.2,
    g = 41;
function E() {
    let e = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        [t, a] = (0, f.US)([l.z.TRIAL_NUX_EMOJI_PICKER]),
        u = t === l.z.TRIAL_NUX_EMOJI_PICKER;
    return (
        i.useEffect(
            () => () => {
                u && a(_.L.TAKE_ACTION);
            },
            [u, a],
        ),
        (0, r.jsxs)("div", {
            className: h.nitroTopDividerContainer,
            children: [
                (0, r.jsx)("div", { className: h.nitroTopDividerUpper }),
                (0, r.jsx)("div", { className: o()(h.nitroTopDividerShadow, h.glow, { [h.reducedMotion]: e || !u }) }),
                (0, r.jsxs)("div", {
                    className: h.nitroTopDividerLockContainer,
                    children: [
                        (0, r.jsx)("div", { className: h.nitroTopDividerLockBorder }),
                        !e &&
                            u &&
                            (0, r.jsx)(c.Fmz, {
                                className: h.premiumUnlockAnimation,
                                loop: !1,
                                importData: () => n.e("21812").then(n.t.bind(n, 741855, 19)),
                            }),
                        (0, r.jsxs)("div", {
                            className: o()(h.premiumUnlockedWithNitroPillContainer, { [h.reducedMotion]: e || !u }),
                            children: [
                                (0, r.jsx)(c.SrA, {
                                    size: "xs",
                                    color: "white",
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    color: "always-white",
                                    lineClamp: 1,
                                    children: p.intl.string(p.t["BMw+7I"]),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", { className: h.nitroTopDividerLockBorderReversed }),
                    ],
                }),
                (0, r.jsx)("div", { className: h.reverseTrialTopDividerLower }),
            ],
        })
    );
}
let b = function (e) {
    let { glowOpacity: t, className: n, colorOpacity: i = m, enableBrandRefresh: a = !1 } = e,
        s = (0, u.ZP)(),
        l = (0, c.apv)(s);
    return (0, r.jsxs)("div", {
        className: o()(h.nitroTopDividerContainer, n),
        children: [
            (0, r.jsx)("div", { className: h.nitroTopDividerUpper }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 0 : t },
                className: h.nitroTopDividerShadow,
            }),
            (0, r.jsxs)("div", {
                className: h.nitroTopDividerLockContainer,
                children: [
                    (0, r.jsx)("div", { className: o()(h.nitroTopDividerLockBorder, { [h.brandRefresh]: a }) }),
                    (0, r.jsx)("div", {
                        className: o()(h.nitroTopDividerLockCircle, { [h.brandRefresh]: a }),
                        children: (0, r.jsx)(c.mBM, {
                            size: "xs",
                            color: a && l ? "black" : "white",
                        }),
                    }),
                    (0, r.jsx)("div", { className: o()(h.nitroTopDividerLockBorderReversed, { [h.brandRefresh]: a }) }),
                ],
            }),
            (0, r.jsx)("div", {
                style: { opacity: a ? 1 : i },
                className: o()(h.nitroTopDividerLower, { [h.brandRefresh]: a }),
            }),
        ],
    });
};

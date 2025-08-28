n.d(t, {
    Z: () => b,
    x: () => E,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(243778),
    c = n(367074),
    u = n(104494),
    d = n(639119),
    f = n(655525),
    _ = n(924540),
    p = n(170671),
    h = n(921944),
    m = n(474936),
    g = n(563042);
function E() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, d.N)(),
        a = (0, u.Ng)(),
        o = (0, c.Vi)(),
        p = (null == n ? void 0 : n.trial_id) === m.a7,
        g = [];
    o && g.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [E, b] = (0, l.US)(g, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && E === s.z.BOGO_2025_NITRO_TAB_BADGE && b(h.L.AUTO_DISMISS);
        }, [b, t, E]),
        o
            ? (e = (0, r.jsx)(f.Z, {}))
            : null != a
              ? (e = (0, r.jsx)(_.GN, {
                    isTabSelected: t,
                    userDiscount: a,
                    includesAmountOff: !1,
                }))
              : null == n ||
                p ||
                (e = (0, r.jsx)(_.$H, {
                    isTabSelected: t,
                    trialOffer: n,
                })),
        e
    );
}
function b(e) {
    var t, n;
    let { decoration: i, label: a, isSelected: s } = e,
        l = (0, c.Vi)(),
        u = null != (n = null != (t = E(s)) ? t : i) ? n : (0, r.jsx)(p.Z, { isSelected: s });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(g.premiumLabel, { [g.selected]: s && !l }),
                children: [a, u],
            }),
            (0, r.jsx)("div", { className: o()(g.background, { [g.selectedBackground]: !l && s }) }),
        ],
    });
}

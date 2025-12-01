n.d(t, {
    Z: () => v,
    x: () => O,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(692547),
    c = n(481060),
    u = n(436774),
    d = n(243778),
    f = n(367074),
    p = n(347896),
    _ = n(622909),
    m = n(639119),
    h = n(655525),
    g = n(924540),
    E = n(921944),
    b = n(474936),
    y = n(563042);
function O() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, m.N)(),
        a = (0, _.N)(),
        o = (0, f.Vi)(),
        l = null != (0, p.Z)(),
        c = o || l,
        u = (null == n ? void 0 : n.trial_id) === b.a7,
        y = [];
    c && y.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [O, v] = (0, d.US)(y, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && O === s.z.BOGO_2025_NITRO_TAB_BADGE && v(E.L.AUTO_DISMISS);
        }, [v, t, O]),
        c
            ? (e = (0, r.jsx)(h.Z, {}))
            : null != a
              ? (e = (0, r.jsx)(g.GN, {
                    isTabSelected: t,
                    userDiscount: a,
                    includesAmountOff: !1,
                }))
              : null == n ||
                u ||
                (e = (0, r.jsx)(g.$H, {
                    isTabSelected: t,
                    trialOffer: n,
                })),
        e
    );
}
function v(e) {
    var t, n;
    let { decoration: i, label: a, isSelected: s } = e,
        d = (0, f.Vi)(),
        p =
            null != (n = null != (t = O(s)) ? t : i)
                ? n
                : (0, r.jsx)(c.SrA, {
                      size: "sm",
                      color: s ? l.Z.unsafe_rawColors.WHITE_500.css : u.JX.PREMIUM_TIER_2,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(y.premiumLabel, { [y.selected]: s && !d }),
                children: [a, p],
            }),
            (0, r.jsx)("div", { className: o()(y.background, { [y.selectedBackground]: !d && s }) }),
        ],
    });
}

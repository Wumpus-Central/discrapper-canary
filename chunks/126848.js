n.d(t, {
    Z: () => I,
    x: () => v,
}),
    n(539854),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(481060),
    c = n(44315),
    u = n(436774),
    d = n(243778),
    f = n(367074),
    _ = n(347896),
    p = n(622909),
    h = n(639119),
    m = n(655525),
    g = n(924540),
    E = n(981631),
    b = n(921944),
    y = n(474936),
    O = n(494723);
function v() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, h.N)(),
        a = (0, p.N)(),
        o = (0, f.Vi)(),
        l = null != (0, _.Z)(),
        c = o || l,
        u = (null == n ? void 0 : n.trial_id) === y.a7,
        E = [];
    c && E.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [O, v] = (0, d.US)(E, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && O === s.z.BOGO_2025_NITRO_TAB_BADGE && v(b.L.AUTO_DISMISS);
        }, [v, t, O]),
        c
            ? (e = (0, r.jsx)(m.Z, {}))
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
function I(e) {
    var t, n;
    let { decoration: i, label: a, isSelected: s } = e,
        d = (0, f.Vi)(),
        _ =
            null != (n = null != (t = v(s)) ? t : i)
                ? n
                : (0, r.jsx)(l.SrA, {
                      size: "sm",
                      color: s ? (0, c.Lq)(E.Ilk.WHITE_500) : u.JX.PREMIUM_TIER_2,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(O.premiumLabel, { [O.selected]: s && !d }),
                children: [a, _],
            }),
            (0, r.jsx)("div", { className: o()(O.background, { [O.selectedBackground]: !d && s }) }),
        ],
    });
}

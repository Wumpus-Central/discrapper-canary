n.d(t, {
    Z: () => v,
    x: () => O,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(481060),
    c = n(44315),
    u = n(436774),
    d = n(243778),
    f = n(367074),
    _ = n(104494),
    p = n(639119),
    h = n(655525),
    m = n(924540),
    g = n(981631),
    E = n(921944),
    b = n(474936),
    y = n(563042);
function O() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, p.N)(),
        a = (0, _.Ng)(),
        o = (0, f.Vi)(),
        l = (null == n ? void 0 : n.trial_id) === b.a7,
        c = [];
    o && c.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [u, g] = (0, d.US)(c, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === t && u === s.z.BOGO_2025_NITRO_TAB_BADGE && g(E.L.AUTO_DISMISS);
        }, [g, t, u]),
        o
            ? (e = (0, r.jsx)(h.Z, {}))
            : null != a
              ? (e = (0, r.jsx)(m.GN, {
                    isTabSelected: t,
                    userDiscount: a,
                    includesAmountOff: !1,
                }))
              : null == n ||
                l ||
                (e = (0, r.jsx)(m.$H, {
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
        _ =
            null != (n = null != (t = O(s)) ? t : i)
                ? n
                : (0, r.jsx)(l.SrA, {
                      size: "sm",
                      color: s ? (0, c.Lq)(g.Ilk.WHITE_500) : u.JX.PREMIUM_TIER_2,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: o()(y.premiumLabel, { [y.selected]: s && !d }),
                children: [a, _],
            }),
            (0, r.jsx)("div", { className: o()(y.background, { [y.selectedBackground]: !d && s }) }),
        ],
    });
}

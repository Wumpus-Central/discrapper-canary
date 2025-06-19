n.d(t, { Z: () => y }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    a = n(704215),
    c = n(243778),
    u = n(367074),
    d = n(104494),
    p = n(639119),
    f = n(655525),
    g = n(52188),
    b = n(924540),
    m = n(351402),
    _ = n(170671),
    v = n(921944),
    h = n(474936),
    O = n(374594);
function y(e) {
    let t,
        { decoration: n, label: s, isSelected: y } = e,
        j = (0, p.N)(),
        x = (0, d.Ng)(),
        S = (0, u.Vi)(),
        C = (0, l.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == j && null == n,
        E = (null == j ? void 0 : j.trial_id) === h.a7,
        P = [];
    S && P.push(a.z.BOGO_2025_NITRO_TAB_BADGE);
    let [w, T] = (0, c.US)(P, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === y && w === a.z.BOGO_2025_NITRO_TAB_BADGE && T(v.L.AUTO_DISMISS);
        }, [T, y, w]),
        (t = S
            ? (0, r.jsx)(f.Z, {})
            : null != x
              ? (0, r.jsx)(b.GN, {
                    isTabSelected: y,
                    userDiscount: x,
                    includesAmountOff: !1
                })
              : null == j || E
                ? null != n
                    ? n
                    : C
                      ? (0, r.jsx)(g.k, { entryPoint: g.U.SettingsMenu })
                      : (0, r.jsx)(_.Z, { isSelected: y })
                : (0, r.jsx)(b.$H, {
                      isTabSelected: y,
                      trialOffer: j
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: o()(O.premiumLabel, { [O.selected]: (y || C) && !S }),
                    children: [s, t]
                }),
                (0, r.jsx)('div', {
                    className: o()(O.background, {
                        [O.auPromo]: C && !y,
                        [O.auPromoSelected]: C && y,
                        [O.selectedBackground]: !C && !S && y
                    })
                })
            ]
        })
    );
}

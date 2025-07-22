(n.d(t, { Z: () => E }), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(704215),
    c = n(243778),
    u = n(367074),
    d = n(104494),
    f = n(639119),
    p = n(655525),
    g = n(52188),
    b = n(924540),
    m = n(351402),
    v = n(170671),
    h = n(921944),
    O = n(474936),
    y = n(374594);
function E(e) {
    let t,
        { decoration: n, label: s, isSelected: E } = e,
        S = (0, f.N)(),
        j = (0, d.Ng)(),
        x = (0, u.Vi)(),
        C = (0, o.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == S && null == n,
        P = (null == S ? void 0 : S.trial_id) === O.a7,
        _ = [];
    x && _.push(a.z.BOGO_2025_NITRO_TAB_BADGE);
    let [N, w] = (0, c.US)(_, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === E && N === a.z.BOGO_2025_NITRO_TAB_BADGE && w(h.L.AUTO_DISMISS);
        }, [w, E, N]),
        (t = x
            ? (0, r.jsx)(p.Z, {})
            : null != j
              ? (0, r.jsx)(b.GN, {
                    isTabSelected: E,
                    userDiscount: j,
                    includesAmountOff: !1
                })
              : null == S || P
                ? null != n
                    ? n
                    : C
                      ? (0, r.jsx)(g.k, { entryPoint: g.U.SettingsMenu })
                      : (0, r.jsx)(v.Z, { isSelected: E })
                : (0, r.jsx)(b.$H, {
                      isTabSelected: E,
                      trialOffer: S
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: l()(y.premiumLabel, { [y.selected]: (E || C) && !x }),
                    children: [s, t]
                }),
                (0, r.jsx)('div', {
                    className: l()(y.background, {
                        [y.auPromo]: C && !E,
                        [y.auPromoSelected]: C && E,
                        [y.selectedBackground]: !C && !x && E
                    })
                })
            ]
        })
    );
}

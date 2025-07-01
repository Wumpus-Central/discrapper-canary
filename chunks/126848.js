(n.d(t, { Z: () => j }), n(539854), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(704215),
    c = n(243778),
    u = n(367074),
    d = n(104494),
    f = n(639119),
    p = n(655525),
    g = n(52188),
    b = n(924540),
    v = n(351402),
    m = n(170671),
    h = n(921944),
    O = n(474936),
    y = n(374594);
function j(e) {
    let t,
        { decoration: n, label: i, isSelected: j } = e,
        S = (0, f.N)(),
        E = (0, d.Ng)(),
        P = (0, u.Vi)(),
        x = (0, o.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == S && null == n,
        C = (null == S ? void 0 : S.trial_id) === O.a7,
        _ = [];
    P && _.push(a.z.BOGO_2025_NITRO_TAB_BADGE);
    let [w, N] = (0, c.US)(_, void 0, !0);
    return (
        s.useEffect(() => {
            !0 === j && w === a.z.BOGO_2025_NITRO_TAB_BADGE && N(h.L.AUTO_DISMISS);
        }, [N, j, w]),
        (t = P
            ? (0, r.jsx)(p.Z, {})
            : null != E
              ? (0, r.jsx)(b.GN, {
                    isTabSelected: j,
                    userDiscount: E,
                    includesAmountOff: !1
                })
              : null == S || C
                ? null != n
                    ? n
                    : x
                      ? (0, r.jsx)(g.k, { entryPoint: g.U.SettingsMenu })
                      : (0, r.jsx)(m.Z, { isSelected: j })
                : (0, r.jsx)(b.$H, {
                      isTabSelected: j,
                      trialOffer: S
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: l()(y.premiumLabel, { [y.selected]: (j || x) && !P }),
                    children: [i, t]
                }),
                (0, r.jsx)('div', {
                    className: l()(y.background, {
                        [y.auPromo]: x && !j,
                        [y.auPromoSelected]: x && j,
                        [y.selectedBackground]: !x && !P && j
                    })
                })
            ]
        })
    );
}

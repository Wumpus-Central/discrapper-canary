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
    v = n(351402),
    m = n(170671),
    h = n(921944),
    O = n(474936),
    y = n(374594);
function E(e) {
    let t,
        { decoration: n, label: s, isSelected: E } = e,
        j = (0, f.N)(),
        S = (0, d.Ng)(),
        x = (0, u.Vi)(),
        P = (0, o.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == j && null == n,
        C = (null == j ? void 0 : j.trial_id) === O.a7,
        _ = [];
    x && _.push(a.z.BOGO_2025_NITRO_TAB_BADGE);
    let [w, N] = (0, c.US)(_, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === E && w === a.z.BOGO_2025_NITRO_TAB_BADGE && N(h.L.AUTO_DISMISS);
        }, [N, E, w]),
        (t = x
            ? (0, r.jsx)(p.Z, {})
            : null != S
              ? (0, r.jsx)(b.GN, {
                    isTabSelected: E,
                    userDiscount: S,
                    includesAmountOff: !1
                })
              : null == j || C
                ? null != n
                    ? n
                    : P
                      ? (0, r.jsx)(g.k, { entryPoint: g.U.SettingsMenu })
                      : (0, r.jsx)(m.Z, { isSelected: E })
                : (0, r.jsx)(b.$H, {
                      isTabSelected: E,
                      trialOffer: j
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: l()(y.premiumLabel, { [y.selected]: (E || P) && !x }),
                    children: [s, t]
                }),
                (0, r.jsx)('div', {
                    className: l()(y.background, {
                        [y.auPromo]: P && !E,
                        [y.auPromoSelected]: P && E,
                        [y.selectedBackground]: !P && !x && E
                    })
                })
            ]
        })
    );
}

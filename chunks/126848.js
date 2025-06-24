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
    f = n(639119),
    p = n(655525),
    g = n(52188),
    b = n(924540),
    m = n(351402),
    _ = n(170671),
    h = n(921944),
    v = n(474936),
    O = n(374594);
function y(e) {
    let t,
        { decoration: n, label: s, isSelected: y } = e,
        S = (0, f.N)(),
        C = (0, d.Ng)(),
        j = (0, u.Vi)(),
        x = (0, l.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == S && null == n,
        E = (null == S ? void 0 : S.trial_id) === v.a7,
        P = [];
    j && P.push(a.z.BOGO_2025_NITRO_TAB_BADGE);
    let [w, T] = (0, c.US)(P, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === y && w === a.z.BOGO_2025_NITRO_TAB_BADGE && T(h.L.AUTO_DISMISS);
        }, [T, y, w]),
        (t = j
            ? (0, r.jsx)(p.Z, {})
            : null != C
              ? (0, r.jsx)(b.GN, {
                    isTabSelected: y,
                    userDiscount: C,
                    includesAmountOff: !1
                })
              : null == S || E
                ? null != n
                    ? n
                    : x
                      ? (0, r.jsx)(g.k, { entryPoint: g.U.SettingsMenu })
                      : (0, r.jsx)(_.Z, { isSelected: y })
                : (0, r.jsx)(b.$H, {
                      isTabSelected: y,
                      trialOffer: S
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: o()(O.premiumLabel, { [O.selected]: (y || x) && !j }),
                    children: [s, t]
                }),
                (0, r.jsx)('div', {
                    className: o()(O.background, {
                        [O.auPromo]: x && !y,
                        [O.auPromoSelected]: x && y,
                        [O.selectedBackground]: !x && !j && y
                    })
                })
            ]
        })
    );
}

s.d(t, { Z: () => v });
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(442837),
    l = s(650032),
    a = s(104494),
    c = s(639119),
    u = s(655525),
    d = s(52188),
    f = s(346497),
    p = s(924540),
    g = s(351402),
    x = s(170671),
    h = s(474936),
    m = s(913074);
function v(e) {
    let t,
        { decoration: s, label: i, isSelected: v } = e,
        b = (0, c.N)(),
        C = (0, a.Ng)(),
        S = (0, f.Vi)(),
        E = (0, o.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == b && null == s,
        { enabled: j } = l._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        N = j && (null == b ? void 0 : b.trial_id) === h.a7;
    return (
        (t = S
            ? (0, n.jsx)(u.Z, {})
            : null != C
              ? (0, n.jsx)(p.GN, {
                    isTabSelected: v,
                    userDiscount: C,
                    includesAmountOff: !1
                })
              : null == b || N
                ? null != s
                    ? s
                    : E
                      ? (0, n.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, n.jsx)(x.Z, { isSelected: v })
                : (0, n.jsx)(p.$H, {
                      isTabSelected: v,
                      trialOffer: b
                  })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: r()(m.premiumLabel, { [m.selected]: (v || E) && !S }),
                    children: [i, t]
                }),
                (0, n.jsx)('div', {
                    className: r()(m.background, {
                        [m.auPromo]: E && !v,
                        [m.auPromoSelected]: E && v,
                        [m.selectedBackground]: !E && !S && v
                    })
                })
            ]
        })
    );
}

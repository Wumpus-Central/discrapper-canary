s.d(t, {
    Z: function () {
        return m;
    }
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(442837),
    c = s(650032),
    a = s(104494),
    l = s(639119),
    u = s(655525),
    d = s(52188),
    f = s(346497),
    p = s(924540),
    g = s(351402),
    b = s(170671),
    x = s(474936),
    h = s(913074);
function m(e) {
    let t,
        { decoration: s, label: i, isSelected: m } = e,
        v = (0, l.N)(),
        S = (0, a.Ng)(),
        C = (0, f.Vi)(),
        E = (0, o.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == v && null == s,
        { enabled: N } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        j = N && (null == v ? void 0 : v.trial_id) === x.a7;
    return (
        (t = C
            ? (0, n.jsx)(u.Z, {})
            : null != S
              ? (0, n.jsx)(p.GN, {
                    isTabSelected: m,
                    userDiscount: S,
                    includesAmountOff: !1
                })
              : null == v || j
                ? null != s
                    ? s
                    : E
                      ? (0, n.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, n.jsx)(b.Z, { isSelected: m })
                : (0, n.jsx)(p.$H, {
                      isTabSelected: m,
                      trialOffer: v
                  })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: r()(h.premiumLabel, { [h.selected]: (m || E) && !C }),
                    children: [i, t]
                }),
                (0, n.jsx)('div', {
                    className: r()(h.background, {
                        [h.auPromo]: E && !m,
                        [h.auPromoSelected]: E && m,
                        [h.selectedBackground]: !E && !C && m
                    })
                })
            ]
        })
    );
}

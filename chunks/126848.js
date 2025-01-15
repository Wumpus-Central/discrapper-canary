n.d(t, {
    Z: function () {
        return m;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    o = n(442837),
    c = n(650032),
    l = n(104494),
    a = n(639119),
    u = n(655525),
    d = n(52188),
    f = n(346497),
    p = n(924540),
    g = n(351402),
    x = n(170671),
    h = n(474936),
    b = n(913074);
function m(e) {
    let t,
        { decoration: n, label: i, isSelected: m } = e,
        v = (0, a.N)(),
        S = (0, l.Ng)(),
        C = (0, f.Vi)(),
        E = (0, o.e7)([g.Z], () => g.Z.isLocalizedPromoEnabled) && null == v && null == n,
        { enabled: N } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        j = N && (null == v ? void 0 : v.trial_id) === h.a7;
    return (
        (t = C
            ? (0, s.jsx)(u.Z, {})
            : null != S
              ? (0, s.jsx)(p.GN, {
                    isTabSelected: m,
                    userDiscount: S,
                    includesAmountOff: !1
                })
              : null == v || j
                ? null != n
                    ? n
                    : E
                      ? (0, s.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, s.jsx)(x.Z, { isSelected: m })
                : (0, s.jsx)(p.$H, {
                      isTabSelected: m,
                      trialOffer: v
                  })),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: r()(b.premiumLabel, { [b.selected]: (m || E) && !C }),
                    children: [i, t]
                }),
                (0, s.jsx)('div', {
                    className: r()(b.background, {
                        [b.auPromo]: E && !m,
                        [b.auPromoSelected]: E && m,
                        [b.selectedBackground]: !E && !C && m
                    })
                })
            ]
        })
    );
}

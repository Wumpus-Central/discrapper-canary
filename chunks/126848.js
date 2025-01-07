n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    s = n.n(l),
    r = n(442837),
    o = n(650032),
    a = n(104494),
    c = n(639119),
    u = n(655525),
    d = n(52188),
    h = n(346497),
    m = n(924540),
    p = n(351402),
    b = n(170671),
    f = n(474936),
    v = n(913074);
function S(e) {
    let t,
        { decoration: n, label: l, isSelected: S } = e,
        x = (0, c.N)(),
        g = (0, a.Ng)(),
        j = (0, h.Vi)(),
        N = (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) && null == x && null == n,
        { enabled: C } = o._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        y = C && (null == x ? void 0 : x.trial_id) === f.a7;
    return (
        (t = j
            ? (0, i.jsx)(u.Z, {})
            : null != g
              ? (0, i.jsx)(m.GN, {
                    isTabSelected: S,
                    userDiscount: g,
                    includesAmountOff: !1
                })
              : null == x || y
                ? null != n
                    ? n
                    : N
                      ? (0, i.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, i.jsx)(b.Z, { isSelected: S })
                : (0, i.jsx)(m.$H, {
                      isTabSelected: S,
                      trialOffer: x
                  })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: s()(v.premiumLabel, { [v.selected]: (S || N) && !j }),
                    children: [l, t]
                }),
                (0, i.jsx)('div', {
                    className: s()(v.background, {
                        [v.auPromo]: N && !S,
                        [v.auPromoSelected]: N && S,
                        [v.selectedBackground]: !N && !j && S
                    })
                })
            ]
        })
    );
}

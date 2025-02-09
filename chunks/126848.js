n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(650032),
    a = n(104494),
    c = n(639119),
    d = n(655525),
    u = n(52188),
    h = n(346497),
    m = n(924540),
    p = n(351402),
    f = n(170671),
    b = n(474936),
    C = n(116970);
function v(e) {
    let t,
        { decoration: n, label: s, isSelected: v } = e,
        x = (0, c.N)(),
        S = (0, a.Ng)(),
        j = (0, h.Vi)(),
        g = (0, r.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) && null == x && null == n,
        { enabled: N } = o._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        _ = N && (null == x ? void 0 : x.trial_id) === b.a7;
    return (
        (t = j
            ? (0, i.jsx)(d.Z, {})
            : null != S
              ? (0, i.jsx)(m.GN, {
                    isTabSelected: v,
                    userDiscount: S,
                    includesAmountOff: !1
                })
              : null == x || _
                ? null != n
                    ? n
                    : g
                      ? (0, i.jsx)(u.k, { entryPoint: u.U.SettingsMenu })
                      : (0, i.jsx)(f.Z, { isSelected: v })
                : (0, i.jsx)(m.$H, {
                      isTabSelected: v,
                      trialOffer: x
                  })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: l()(C.premiumLabel, { [C.selected]: (v || g) && !j }),
                    children: [s, t]
                }),
                (0, i.jsx)('div', {
                    className: l()(C.background, {
                        [C.auPromo]: g && !v,
                        [C.auPromoSelected]: g && v,
                        [C.selectedBackground]: !g && !j && v
                    })
                })
            ]
        })
    );
}

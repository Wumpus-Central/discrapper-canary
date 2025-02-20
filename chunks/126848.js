n.d(t, { Z: () => h });
var s = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(442837),
    c = n(650032),
    a = n(104494),
    l = n(639119),
    u = n(655525),
    d = n(52188),
    p = n(346497),
    f = n(924540),
    b = n(351402),
    g = n(170671),
    m = n(474936),
    O = n(118261);
function h(e) {
    let t,
        { decoration: n, label: r, isSelected: h } = e,
        v = (0, l.N)(),
        x = (0, a.Ng)(),
        j = (0, p.Vi)(),
        y = (0, o.e7)([b.Z], () => b.Z.isLocalizedPromoEnabled) && null == v && null == n,
        { enabled: S } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        P = S && (null == v ? void 0 : v.trial_id) === m.a7;
    return (
        (t = j
            ? (0, s.jsx)(u.Z, {})
            : null != x
              ? (0, s.jsx)(f.GN, {
                    isTabSelected: h,
                    userDiscount: x,
                    includesAmountOff: !1
                })
              : null == v || P
                ? null != n
                    ? n
                    : y
                      ? (0, s.jsx)(d.k, { entryPoint: d.U.SettingsMenu })
                      : (0, s.jsx)(g.Z, { isSelected: h })
                : (0, s.jsx)(f.$H, {
                      isTabSelected: h,
                      trialOffer: v
                  })),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: i()(O.premiumLabel, { [O.selected]: (h || y) && !j }),
                    children: [r, t]
                }),
                (0, s.jsx)('div', {
                    className: i()(O.background, {
                        [O.auPromo]: y && !h,
                        [O.auPromoSelected]: y && h,
                        [O.selectedBackground]: !y && !j && h
                    })
                })
            ]
        })
    );
}

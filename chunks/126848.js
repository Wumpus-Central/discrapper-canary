r.d(t, { Z: () => P });
var n = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    o = r(442837),
    l = r(704215),
    a = r(605236),
    c = r(650032),
    u = r(351367),
    d = r(104494),
    p = r(639119),
    f = r(655525),
    b = r(52188),
    g = r(346497),
    O = r(924540),
    h = r(474486),
    m = r(227140),
    x = r(351402),
    j = r(170671),
    y = r(474936),
    C = r(388032),
    v = r(118261);
function P(e) {
    let t,
        { decoration: r, label: s, isSelected: P } = e,
        _ = (0, p.N)(),
        S = (0, d.Ng)(),
        E = (0, g.Vi)(),
        N = (0, o.e7)([x.Z], () => x.Z.isLocalizedPromoEnabled) && null == _ && null == r,
        { enabled: w } = c._.useExperiment({ location: 'UserSettingsPremiumLabel' }, { autoTrackExposure: !1 }),
        T = w && (null == _ ? void 0 : _.trial_id) === y.a7,
        R = (0, u.m)({ location: 'UserSettingsPremiumLabel' }),
        L = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_PROMO_SHEET);
    return (
        (t =
            !0 === R
                ? !0 === L
                    ? (0, n.jsx)(h.Du, {})
                    : (0, n.jsx)(m.Z, {
                          copy: C.NW.string(C.t.OS9KPj),
                          showStars: !1
                      })
                : E
                  ? (0, n.jsx)(f.Z, {})
                  : null != S
                    ? (0, n.jsx)(O.GN, {
                          isTabSelected: P,
                          userDiscount: S,
                          includesAmountOff: !1
                      })
                    : null == _ || T
                      ? null != r
                          ? r
                          : N
                            ? (0, n.jsx)(b.k, { entryPoint: b.U.SettingsMenu })
                            : (0, n.jsx)(j.Z, { isSelected: P })
                      : (0, n.jsx)(O.$H, {
                            isTabSelected: P,
                            trialOffer: _
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: i()(v.premiumLabel, { [v.selected]: (P || N) && !E }),
                    children: [s, t]
                }),
                (0, n.jsx)('div', {
                    className: i()(v.background, {
                        [v.auPromo]: N && !P,
                        [v.auPromoSelected]: N && P,
                        [v.selectedBackground]: !N && !E && P
                    })
                })
            ]
        })
    );
}

s.d(t, { Z: () => v });
var r = s(200651);
s(192379);
var n = s(120356),
    i = s.n(n),
    o = s(442837),
    l = s(704215),
    a = s(605236),
    c = s(351367),
    u = s(104494),
    d = s(639119),
    p = s(655525),
    f = s(52188),
    b = s(346497),
    g = s(924540),
    O = s(474486),
    x = s(227140),
    m = s(351402),
    h = s(170671),
    j = s(474936),
    y = s(388032),
    C = s(374594);
function v(e) {
    let t,
        { decoration: s, label: n, isSelected: v } = e,
        P = (0, d.N)(),
        S = (0, u.Ng)(),
        w = (0, b.Vi)(),
        _ = (0, o.e7)([m.Z], () => m.Z.isLocalizedPromoEnabled) && null == P && null == s,
        E = (null == P ? void 0 : P.trial_id) === j.a7,
        N = (0, c.m)({ location: 'UserSettingsPremiumLabel' }),
        T = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
    return (
        (t =
            !0 === N
                ? !0 === T
                    ? (0, r.jsx)(O.Du, {})
                    : (0, r.jsx)(x.Z, {
                          copy: y.NW.string(y.t.OS9KPj),
                          showStars: !1
                      })
                : w
                  ? (0, r.jsx)(p.Z, {})
                  : null != S
                    ? (0, r.jsx)(g.GN, {
                          isTabSelected: v,
                          userDiscount: S,
                          includesAmountOff: !1
                      })
                    : null == P || E
                      ? null != s
                          ? s
                          : _
                            ? (0, r.jsx)(f.k, { entryPoint: f.U.SettingsMenu })
                            : (0, r.jsx)(h.Z, { isSelected: v })
                      : (0, r.jsx)(g.$H, {
                            isTabSelected: v,
                            trialOffer: P
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: i()(C.premiumLabel, { [C.selected]: (v || _) && !w }),
                    children: [n, t]
                }),
                (0, r.jsx)('div', {
                    className: i()(C.background, {
                        [C.auPromo]: _ && !v,
                        [C.auPromoSelected]: _ && v,
                        [C.selectedBackground]: !_ && !w && v
                    })
                })
            ]
        })
    );
}

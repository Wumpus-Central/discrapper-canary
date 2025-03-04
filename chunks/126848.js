r.d(t, { Z: () => v });
var n = r(200651);
r(192379);
var s = r(120356),
    i = r.n(s),
    o = r(442837),
    l = r(704215),
    a = r(605236),
    c = r(351367),
    u = r(104494),
    d = r(639119),
    p = r(655525),
    f = r(52188),
    b = r(346497),
    g = r(924540),
    O = r(474486),
    m = r(227140),
    h = r(351402),
    x = r(170671),
    j = r(474936),
    y = r(388032),
    C = r(663407);
function v(e) {
    let t,
        { decoration: r, label: s, isSelected: v } = e,
        P = (0, d.N)(),
        _ = (0, u.Ng)(),
        S = (0, b.Vi)(),
        N = (0, o.e7)([h.Z], () => h.Z.isLocalizedPromoEnabled) && null == P && null == r,
        E = (null == P ? void 0 : P.trial_id) === j.a7,
        w = (0, c.m)({ location: 'UserSettingsPremiumLabel' }),
        T = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
    return (
        (t =
            !0 === w
                ? !0 === T
                    ? (0, n.jsx)(O.Du, {})
                    : (0, n.jsx)(m.Z, {
                          copy: y.NW.string(y.t.OS9KPj),
                          showStars: !1
                      })
                : S
                  ? (0, n.jsx)(p.Z, {})
                  : null != _
                    ? (0, n.jsx)(g.GN, {
                          isTabSelected: v,
                          userDiscount: _,
                          includesAmountOff: !1
                      })
                    : null == P || E
                      ? null != r
                          ? r
                          : N
                            ? (0, n.jsx)(f.k, { entryPoint: f.U.SettingsMenu })
                            : (0, n.jsx)(x.Z, { isSelected: v })
                      : (0, n.jsx)(g.$H, {
                            isTabSelected: v,
                            trialOffer: P
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: i()(C.premiumLabel, { [C.selected]: (v || N) && !S }),
                    children: [s, t]
                }),
                (0, n.jsx)('div', {
                    className: i()(C.background, {
                        [C.auPromo]: N && !v,
                        [C.auPromoSelected]: N && v,
                        [C.selectedBackground]: !N && !S && v
                    })
                })
            ]
        })
    );
}

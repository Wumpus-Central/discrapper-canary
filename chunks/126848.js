r.d(t, { Z: () => m });
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(442837),
    l = r(704215),
    a = r(605236),
    c = r(351367),
    h = r(104494),
    v = r(639119),
    u = r(655525),
    f = r(52188),
    p = r(346497),
    d = r(924540),
    b = r(474486),
    Z = r(227140),
    M = r(351402),
    g = r(170671),
    j = r(474936),
    O = r(388032),
    y = r(374594);
function m(e) {
    let t,
        { decoration: r, label: i, isSelected: m } = e,
        H = (0, v.N)(),
        V = (0, h.Ng)(),
        x = (0, p.Vi)(),
        w = (0, o.e7)([M.Z], () => M.Z.isLocalizedPromoEnabled) && null == H && null == r,
        P = (null == H ? void 0 : H.trial_id) === j.a7,
        _ = (0, c.m)({ location: 'UserSettingsPremiumLabel' }),
        C = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
    return (
        (t =
            !0 === _
                ? !0 === C
                    ? (0, n.jsx)(b.Du, {})
                    : (0, n.jsx)(Z.Z, {
                          copy: O.intl.string(O.t.OS9KPj),
                          showStars: !1
                      })
                : x
                  ? (0, n.jsx)(u.Z, {})
                  : null != V
                    ? (0, n.jsx)(d.GN, {
                          isTabSelected: m,
                          userDiscount: V,
                          includesAmountOff: !1
                      })
                    : null == H || P
                      ? null != r
                          ? r
                          : w
                            ? (0, n.jsx)(f.k, { entryPoint: f.U.SettingsMenu })
                            : (0, n.jsx)(g.Z, { isSelected: m })
                      : (0, n.jsx)(d.$H, {
                            isTabSelected: m,
                            trialOffer: H
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: s()(y.premiumLabel, { [y.selected]: (m || w) && !x }),
                    children: [i, t]
                }),
                (0, n.jsx)('div', {
                    className: s()(y.background, {
                        [y.auPromo]: w && !m,
                        [y.auPromoSelected]: w && m,
                        [y.selectedBackground]: !w && !x && m
                    })
                })
            ]
        })
    );
}

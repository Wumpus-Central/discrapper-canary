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
    g = r(227140),
    Z = r(351402),
    j = r(170671),
    M = r(474936),
    O = r(388032),
    y = r(374594);
function m(e) {
    let t,
        { decoration: r, label: i, isSelected: m } = e,
        H = (0, v.N)(),
        x = (0, h.Ng)(),
        V = (0, p.Vi)(),
        w = (0, o.e7)([Z.Z], () => Z.Z.isLocalizedPromoEnabled) && null == H && null == r,
        C = (null == H ? void 0 : H.trial_id) === M.a7,
        P = (0, c.m)({ location: 'UserSettingsPremiumLabel' }),
        _ = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
    return (
        (t =
            !0 === P
                ? !0 === _
                    ? (0, n.jsx)(b.Du, {})
                    : (0, n.jsx)(g.Z, {
                          copy: O.NW.string(O.t.OS9KPj),
                          showStars: !1
                      })
                : V
                  ? (0, n.jsx)(u.Z, {})
                  : null != x
                    ? (0, n.jsx)(d.GN, {
                          isTabSelected: m,
                          userDiscount: x,
                          includesAmountOff: !1
                      })
                    : null == H || C
                      ? null != r
                          ? r
                          : w
                            ? (0, n.jsx)(f.k, { entryPoint: f.U.SettingsMenu })
                            : (0, n.jsx)(j.Z, { isSelected: m })
                      : (0, n.jsx)(d.$H, {
                            isTabSelected: m,
                            trialOffer: H
                        })),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: s()(y.premiumLabel, { [y.selected]: (m || w) && !V }),
                    children: [i, t]
                }),
                (0, n.jsx)('div', {
                    className: s()(y.background, {
                        [y.auPromo]: w && !m,
                        [y.auPromoSelected]: w && m,
                        [y.selectedBackground]: !w && !V && m
                    })
                })
            ]
        })
    );
}

n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(442837),
    l = n(704215),
    a = n(605236),
    c = n(351367),
    u = n(104494),
    d = n(639119),
    f = n(655525),
    p = n(52188),
    g = n(346497),
    b = n(924540),
    m = n(474486),
    h = n(227140),
    v = n(351402),
    _ = n(170671),
    O = n(474936),
    y = n(388032),
    j = n(374594);
function x(e) {
    let t,
        { decoration: n, label: i, isSelected: x } = e,
        C = (0, d.N)(),
        S = (0, u.Ng)(),
        P = (0, g.Vi)(),
        E = (0, o.e7)([v.Z], () => v.Z.isLocalizedPromoEnabled) && null == C && null == n,
        w = (null == C ? void 0 : C.trial_id) === O.a7,
        N = (0, c.m)({ location: 'UserSettingsPremiumLabel' }),
        T = (0, a.wE)(l.z.Q1_2025_MARKETING_MOMENT_OFFER_BADGE);
    return (
        (t =
            !0 === N
                ? !0 === T
                    ? (0, r.jsx)(m.Du, {})
                    : (0, r.jsx)(h.Z, {
                          copy: y.intl.string(y.t.OS9KPj),
                          showStars: !1
                      })
                : P
                  ? (0, r.jsx)(f.Z, {})
                  : null != S
                    ? (0, r.jsx)(b.GN, {
                          isTabSelected: x,
                          userDiscount: S,
                          includesAmountOff: !1
                      })
                    : null == C || w
                      ? null != n
                          ? n
                          : E
                            ? (0, r.jsx)(p.k, { entryPoint: p.U.SettingsMenu })
                            : (0, r.jsx)(_.Z, { isSelected: x })
                      : (0, r.jsx)(b.$H, {
                            isTabSelected: x,
                            trialOffer: C
                        })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: s()(j.premiumLabel, { [j.selected]: (x || E) && !P }),
                    children: [i, t]
                }),
                (0, r.jsx)('div', {
                    className: s()(j.background, {
                        [j.auPromo]: E && !x,
                        [j.auPromoSelected]: E && x,
                        [j.selectedBackground]: !E && !P && x
                    })
                })
            ]
        })
    );
}

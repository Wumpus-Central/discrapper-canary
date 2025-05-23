n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(442837),
    a = n(104494),
    l = n(639119),
    c = n(655525),
    u = n(52188),
    d = n(346497),
    p = n(924540),
    f = n(351402),
    g = n(170671),
    b = n(474936),
    m = n(374594);
function _(e) {
    let t,
        { decoration: n, label: i, isSelected: _ } = e,
        v = (0, l.N)(),
        h = (0, a.Ng)(),
        O = (0, d.Vi)(),
        x = (0, o.e7)([f.Z], () => f.Z.isLocalizedPromoEnabled) && null == v && null == n,
        j = (null == v ? void 0 : v.trial_id) === b.a7;
    return (
        (t = O
            ? (0, r.jsx)(c.Z, {})
            : null != h
              ? (0, r.jsx)(p.GN, {
                    isTabSelected: _,
                    userDiscount: h,
                    includesAmountOff: !1
                })
              : null == v || j
                ? null != n
                    ? n
                    : x
                      ? (0, r.jsx)(u.k, { entryPoint: u.U.SettingsMenu })
                      : (0, r.jsx)(g.Z, { isSelected: _ })
                : (0, r.jsx)(p.$H, {
                      isTabSelected: _,
                      trialOffer: v
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: s()(m.premiumLabel, { [m.selected]: (_ || x) && !O }),
                    children: [i, t]
                }),
                (0, r.jsx)('div', {
                    className: s()(m.background, {
                        [m.auPromo]: x && !_,
                        [m.auPromoSelected]: x && _,
                        [m.selectedBackground]: !x && !O && _
                    })
                })
            ]
        })
    );
}

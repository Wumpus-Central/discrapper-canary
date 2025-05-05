n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
    o = n(442837),
    l = n(104494),
    a = n(639119),
    c = n(655525),
    u = n(52188),
    d = n(346497),
    f = n(924540),
    p = n(351402),
    g = n(170671),
    b = n(474936),
    m = n(374594);
function v(e) {
    let t,
        { decoration: n, label: s, isSelected: v } = e,
        h = (0, a.N)(),
        O = (0, l.Ng)(),
        _ = (0, d.Vi)(),
        j = (0, o.e7)([p.Z], () => p.Z.isLocalizedPromoEnabled) && null == h && null == n,
        y = (null == h ? void 0 : h.trial_id) === b.a7;
    return (
        (t = _
            ? (0, r.jsx)(c.Z, {})
            : null != O
              ? (0, r.jsx)(f.GN, {
                    isTabSelected: v,
                    userDiscount: O,
                    includesAmountOff: !1
                })
              : null == h || y
                ? null != n
                    ? n
                    : j
                      ? (0, r.jsx)(u.k, { entryPoint: u.U.SettingsMenu })
                      : (0, r.jsx)(g.Z, { isSelected: v })
                : (0, r.jsx)(f.$H, {
                      isTabSelected: v,
                      trialOffer: h
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: i()(m.premiumLabel, { [m.selected]: (v || j) && !_ }),
                    children: [s, t]
                }),
                (0, r.jsx)('div', {
                    className: i()(m.background, {
                        [m.auPromo]: j && !v,
                        [m.auPromoSelected]: j && v,
                        [m.selectedBackground]: !j && !_ && v
                    })
                })
            ]
        })
    );
}

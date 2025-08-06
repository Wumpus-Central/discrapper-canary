n.d(t, { Z: () => g }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(704215),
    a = n(243778),
    c = n(367074),
    u = n(104494),
    d = n(639119),
    f = n(655525),
    p = n(924540),
    b = n(170671),
    O = n(921944),
    h = n(474936),
    m = n(374594);
function g(e) {
    let t,
        { decoration: n, label: l, isSelected: g } = e,
        j = (0, d.N)(),
        y = (0, u.Ng)(),
        v = (0, c.Vi)(),
        S = (null == j ? void 0 : j.trial_id) === h.a7,
        E = [];
    v && E.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
    let [x, P] = (0, a.US)(E, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === g && x === o.z.BOGO_2025_NITRO_TAB_BADGE && P(O.L.AUTO_DISMISS);
        }, [P, g, x]),
        (t = v
            ? (0, r.jsx)(f.Z, {})
            : null != y
              ? (0, r.jsx)(p.GN, {
                    isTabSelected: g,
                    userDiscount: y,
                    includesAmountOff: !1,
                })
              : null == j || S
                ? null != n
                    ? n
                    : (0, r.jsx)(b.Z, { isSelected: g })
                : (0, r.jsx)(p.$H, {
                      isTabSelected: g,
                      trialOffer: j,
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: s()(m.premiumLabel, { [m.selected]: g && !v }),
                    children: [l, t],
                }),
                (0, r.jsx)("div", { className: s()(m.background, { [m.selectedBackground]: !v && g }) }),
            ],
        })
    );
}

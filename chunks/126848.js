n.d(t, { Z: () => g }), n(539854), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(704215),
    c = n(243778),
    a = n(367074),
    u = n(104494),
    d = n(639119),
    f = n(655525),
    p = n(924540),
    b = n(170671),
    O = n(921944),
    m = n(474936),
    h = n(563042);
function g(e) {
    let t,
        { decoration: n, label: l, isSelected: g } = e,
        j = (0, d.N)(),
        y = (0, u.Ng)(),
        v = (0, a.Vi)(),
        S = (null == j ? void 0 : j.trial_id) === m.a7,
        x = [];
    v && x.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [P, E] = (0, c.US)(x, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === g && P === s.z.BOGO_2025_NITRO_TAB_BADGE && E(O.L.AUTO_DISMISS);
        }, [E, g, P]),
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
                    className: o()(h.premiumLabel, { [h.selected]: g && !v }),
                    children: [l, t],
                }),
                (0, r.jsx)("div", { className: o()(h.background, { [h.selectedBackground]: !v && g }) }),
            ],
        })
    );
}

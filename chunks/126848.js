(n.d(t, { Z: () => v }), n(539854), n(388685));
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
    g = n(170671),
    m = n(921944),
    b = n(474936),
    h = n(374594);
function v(e) {
    let t,
        { decoration: n, label: l, isSelected: v } = e,
        O = (0, d.N)(),
        y = (0, u.Ng)(),
        E = (0, c.Vi)(),
        S = (null == O ? void 0 : O.trial_id) === b.a7,
        j = [];
    E && j.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
    let [C, _] = (0, a.US)(j, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === v && C === o.z.BOGO_2025_NITRO_TAB_BADGE && _(m.L.AUTO_DISMISS);
        }, [_, v, C]),
        (t = E
            ? (0, r.jsx)(f.Z, {})
            : null != y
              ? (0, r.jsx)(p.GN, {
                    isTabSelected: v,
                    userDiscount: y,
                    includesAmountOff: !1
                })
              : null == O || S
                ? null != n
                    ? n
                    : (0, r.jsx)(g.Z, { isSelected: v })
                : (0, r.jsx)(p.$H, {
                      isTabSelected: v,
                      trialOffer: O
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: s()(h.premiumLabel, { [h.selected]: v && !E }),
                    children: [l, t]
                }),
                (0, r.jsx)('div', { className: s()(h.background, { [h.selectedBackground]: !E && v }) })
            ]
        })
    );
}

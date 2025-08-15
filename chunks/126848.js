n.d(t, { Z: () => C }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    l = n.n(s),
    o = n(704215),
    a = n(243778),
    u = n(367074),
    c = n(104494),
    d = n(639119),
    h = n(655525),
    p = n(924540),
    g = n(170671),
    f = n(921944),
    v = n(474936),
    m = n(563042);
function C(e) {
    let t,
        { decoration: n, label: s, isSelected: C } = e,
        b = (0, d.N)(),
        y = (0, c.Ng)(),
        O = (0, u.Vi)(),
        S = (null == b ? void 0 : b.trial_id) === v.a7,
        E = [];
    O && E.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
    let [_, w] = (0, a.US)(E, void 0, !0);
    return (
        r.useEffect(() => {
            !0 === C && _ === o.z.BOGO_2025_NITRO_TAB_BADGE && w(f.L.AUTO_DISMISS);
        }, [w, C, _]),
        (t = O
            ? (0, i.jsx)(h.Z, {})
            : null != y
              ? (0, i.jsx)(p.GN, {
                    isTabSelected: C,
                    userDiscount: y,
                    includesAmountOff: !1,
                })
              : null == b || S
                ? null != n
                    ? n
                    : (0, i.jsx)(g.Z, { isSelected: C })
                : (0, i.jsx)(p.$H, {
                      isTabSelected: C,
                      trialOffer: b,
                  })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: l()(m.premiumLabel, { [m.selected]: C && !O }),
                    children: [s, t],
                }),
                (0, i.jsx)("div", { className: l()(m.background, { [m.selectedBackground]: !O && C }) }),
            ],
        })
    );
}

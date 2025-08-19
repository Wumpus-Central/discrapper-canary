n.d(t, { Z: () => v }), n(539854), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    l = n.n(s),
    o = n(704215),
    a = n(243778),
    c = n(367074),
    u = n(104494),
    d = n(639119),
    h = n(655525),
    p = n(924540),
    g = n(170671),
    f = n(921944),
    m = n(474936),
    b = n(563042);
function v(e) {
    let t,
        { decoration: n, label: s, isSelected: v } = e,
        C = (0, d.N)(),
        _ = (0, u.Ng)(),
        y = (0, c.Vi)(),
        O = (null == C ? void 0 : C.trial_id) === m.a7,
        S = [];
    y && S.push(o.z.BOGO_2025_NITRO_TAB_BADGE);
    let [E, w] = (0, a.US)(S, void 0, !0);
    return (
        r.useEffect(() => {
            !0 === v && E === o.z.BOGO_2025_NITRO_TAB_BADGE && w(f.L.AUTO_DISMISS);
        }, [w, v, E]),
        (t = y
            ? (0, i.jsx)(h.Z, {})
            : null != _
              ? (0, i.jsx)(p.GN, {
                    isTabSelected: v,
                    userDiscount: _,
                    includesAmountOff: !1,
                })
              : null == C || O
                ? null != n
                    ? n
                    : (0, i.jsx)(g.Z, { isSelected: v })
                : (0, i.jsx)(p.$H, {
                      isTabSelected: v,
                      trialOffer: C,
                  })),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: l()(b.premiumLabel, { [b.selected]: v && !y }),
                    children: [s, t],
                }),
                (0, i.jsx)("div", { className: l()(b.background, { [b.selectedBackground]: !y && v }) }),
            ],
        })
    );
}

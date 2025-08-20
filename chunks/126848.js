n.d(t, { Z: () => E }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(704215),
    l = n(243778),
    c = n(367074),
    u = n(104494),
    d = n(639119),
    f = n(655525),
    _ = n(924540),
    p = n(170671),
    h = n(921944),
    m = n(474936),
    g = n(563042);
function E(e) {
    let t,
        { decoration: n, label: a, isSelected: E } = e,
        b = (0, d.N)(),
        y = (0, u.Ng)(),
        O = (0, c.Vi)(),
        v = (null == b ? void 0 : b.trial_id) === m.a7,
        I = [];
    O && I.push(s.z.BOGO_2025_NITRO_TAB_BADGE);
    let [T, S] = (0, l.US)(I, void 0, !0);
    return (
        i.useEffect(() => {
            !0 === E && T === s.z.BOGO_2025_NITRO_TAB_BADGE && S(h.L.AUTO_DISMISS);
        }, [S, E, T]),
        (t = O
            ? (0, r.jsx)(f.Z, {})
            : null != y
              ? (0, r.jsx)(_.GN, {
                    isTabSelected: E,
                    userDiscount: y,
                    includesAmountOff: !1,
                })
              : null == b || v
                ? null != n
                    ? n
                    : (0, r.jsx)(p.Z, { isSelected: E })
                : (0, r.jsx)(_.$H, {
                      isTabSelected: E,
                      trialOffer: b,
                  })),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: o()(g.premiumLabel, { [g.selected]: E && !O }),
                    children: [a, t],
                }),
                (0, r.jsx)("div", { className: o()(g.background, { [g.selectedBackground]: !O && E }) }),
            ],
        })
    );
}

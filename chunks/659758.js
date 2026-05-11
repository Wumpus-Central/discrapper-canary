n.d(t, { A: () => C, e: () => v }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(554146),
    a = n(661531),
    c = n(403581),
    d = n(404374),
    u = n(131607),
    h = n(960851),
    m = n(552736),
    p = n(422936),
    b = n(234419),
    f = n(603488),
    S = n(105390),
    x = n(49999),
    j = n(788868),
    g = n(938783);
function v() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, b.V)(),
        l = (0, p.O)(),
        r = (0, h.cg)(),
        a = null != (0, m.A)(),
        c = r || a,
        d = n?.trial_id === j.Dw,
        g = [];
    c && g.push(o.M.BOGO_2025_NITRO_TAB_BADGE);
    let [v, C] = (0, u.kn)(g, void 0, !0);
    return (
        s.useEffect(() => {
            !0 === t && v === o.M.BOGO_2025_NITRO_TAB_BADGE && C(x.i.AUTO_DISMISS);
        }, [C, t, v]),
        c
            ? (e = (0, i.jsx)(f.A, {}))
            : null != l
              ? (e = (0, i.jsx)(S.fY, { isTabSelected: t, userDiscount: l, includesAmountOff: !1 }))
              : null == n || d || (e = (0, i.jsx)(S.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function C(e) {
    let { decoration: t, label: n, isSelected: s } = e,
        l = (0, h.cg)(),
        o =
            v(s) ??
            t ??
            (0, i.jsx)(c.t, { size: "sm", color: s ? a.A.unsafe_rawColors.WHITE.css : d.k0.PREMIUM_TIER_2 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", { className: r()(g.gj, { [g.wH]: s && !l }), children: [n, o] }),
            (0, i.jsx)("div", { className: r()(g.Tp, { [g._I]: !l && s }) }),
        ],
    });
}

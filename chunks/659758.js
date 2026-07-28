i.d(s, { A: () => k, e: () => G }), i(321073);
var l = i(477900),
    n = i(582128),
    d = i(503698),
    r = i.n(d),
    o = i(877624),
    t = i(17928),
    u = i(554146),
    _ = i(661531),
    a = i(403581),
    c = i(404374),
    p = i(826673),
    A = i(367727),
    M = i(131607),
    T = i(960851),
    E = i(552736),
    I = i(422936),
    O = i(732280),
    m = i(549996),
    B = i(603488),
    g = i(964661),
    b = i(374403),
    f = i(105390),
    R = i(617617),
    D = i(49999),
    h = i(202541),
    j = i(193415);
function G() {
    let e,
        s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = (0, O.V)(),
        d = (0, I.O)(),
        r = (0, T.cg)(),
        _ = null != (0, E.A)(),
        a = r || _,
        c = i?.trial_id === h.Dw,
        j = (0, m.c)(o.C.PREMIUM_TAB),
        G = j?.properties.properties.oneofKind === "premiumTab" ? j.properties.properties.premiumTab : null,
        k = (0, b.Q)(),
        x = j?.promotionId ?? "",
        N = null != G && null != k,
        S = (0, t.bG)([R.A], () => (0, p.u$)(u.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, x).isDismissed),
        w =
            N && null != j && null != G
                ? (0, l.jsx)(g.A, {
                      componentId: j.id,
                      badgeCopy: G.badgeLabel,
                      acknowledgedBadgeCopy: G.acknowledgedBadgeLabel,
                      isDismissed: S,
                  })
                : null,
        C = [];
    a && C.push(u.M.BOGO_2025_NITRO_TAB_BADGE);
    let [U, v] = (0, M.kn)(C, void 0, !0);
    return (
        n.useEffect(() => {
            !0 === s &&
                (U === u.M.BOGO_2025_NITRO_TAB_BADGE && v(D.i.AUTO_DISMISS),
                N &&
                    !S &&
                    (0, A.qr)(u.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, x, { dismissAction: D.i.AUTO_DISMISS }));
        }, [v, s, U, N, S, x]),
        null != w
            ? (e = w)
            : a
              ? (e = (0, l.jsx)(B.A, {}))
              : null != d
                ? (e = (0, l.jsx)(f.fY, { isTabSelected: s, userDiscount: d, includesAmountOff: !1 }))
                : null == i || c || (e = (0, l.jsx)(f.Ag, { isTabSelected: s, trialOffer: i })),
        e
    );
}
function k(e) {
    let { decoration: s, label: i, isSelected: n } = e,
        d = (0, T.cg)(),
        o =
            G(n) ??
            s ??
            (0, l.jsx)(a.t, { size: "sm", color: n ? _.A.unsafe_rawColors.WHITE.css : c.k0.PREMIUM_TIER_2 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", { className: r()(j.gj, { [j.wH]: n && !d }), children: [i, o] }),
            (0, l.jsx)("div", { className: r()(j.Tp, { [j._I]: !d && n }) }),
        ],
    });
}

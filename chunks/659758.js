n.d(t, { A: () => M, e: () => T }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(877624),
    a = n(17928),
    c = n(554146),
    d = n(661531),
    u = n(403581),
    h = n(404374),
    m = n(826673),
    p = n(367727),
    b = n(131607),
    S = n(960851),
    f = n(552736),
    x = n(422936),
    j = n(234419),
    g = n(549996),
    C = n(603488),
    N = n(964661),
    _ = n(374403),
    v = n(105390),
    A = n(617617),
    E = n(49999),
    R = n(202541),
    I = n(938783);
function T() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, j.V)(),
        l = (0, x.O)(),
        r = (0, S.cg)(),
        d = null != (0, f.A)(),
        u = r || d,
        h = n?.trial_id === R.Dw,
        I = (0, g.c)(o.C.PREMIUM_TAB),
        T = I?.properties.properties.oneofKind === "premiumTab" ? I.properties.properties.premiumTab : null,
        M = (0, _.Q)(),
        O = I?.promotionId ?? "",
        y = null != T && null != M,
        P = (0, a.bG)([A.A], () => (0, m.u$)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, O).isDismissed),
        F =
            y && null != I && null != T
                ? (0, i.jsx)(N.A, {
                      componentId: I.id,
                      badgeCopy: T.badgeLabel,
                      acknowledgedBadgeCopy: T.acknowledgedBadgeLabel,
                      isDismissed: P,
                  })
                : null,
        D = [];
    u && D.push(c.M.BOGO_2025_NITRO_TAB_BADGE);
    let [U, w] = (0, b.kn)(D, void 0, !0);
    return (
        s.useEffect(() => {
            !0 === t &&
                (U === c.M.BOGO_2025_NITRO_TAB_BADGE && w(E.i.AUTO_DISMISS),
                y &&
                    !P &&
                    (0, p.qr)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, O, { dismissAction: E.i.AUTO_DISMISS }));
        }, [w, t, U, y, P, O]),
        null != F
            ? (e = F)
            : u
              ? (e = (0, i.jsx)(C.A, {}))
              : null != l
                ? (e = (0, i.jsx)(v.fY, { isTabSelected: t, userDiscount: l, includesAmountOff: !1 }))
                : null == n || h || (e = (0, i.jsx)(v.Ag, { isTabSelected: t, trialOffer: n })),
        e
    );
}
function M(e) {
    let { decoration: t, label: n, isSelected: s } = e,
        l = (0, S.cg)(),
        o =
            T(s) ??
            t ??
            (0, i.jsx)(u.t, { size: "sm", color: s ? d.A.unsafe_rawColors.WHITE.css : h.k0.PREMIUM_TIER_2 });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", { className: r()(I.gj, { [I.wH]: s && !l }), children: [n, o] }),
            (0, i.jsx)("div", { className: r()(I.Tp, { [I._I]: !l && s }) }),
        ],
    });
}

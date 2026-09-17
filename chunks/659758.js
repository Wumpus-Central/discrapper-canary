i.d(s, { A: () => O, e: () => j });
var l = i(477900),
    n = i(582128),
    o = i(503698),
    r = i.n(o),
    d = i(877624),
    t = i(17928),
    a = i(554146),
    u = i(661531),
    p = i(403581),
    c = i(404374),
    _ = i(826673),
    M = i(367727),
    m = i(724651),
    I = i(732280),
    A = i(549996),
    E = i(964661),
    T = i(374403),
    b = i(105390),
    f = i(617617),
    g = i(49999),
    R = i(202541),
    h = i(134986);
function j() {
    let e,
        s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = (0, I.V)(),
        o = (0, m.O)(),
        r = i?.trialId === R.Dw,
        u = (0, A.c)(d.C.PREMIUM_TAB),
        p = u?.properties.properties.oneofKind === "premiumTab" ? u.properties.properties.premiumTab : null,
        c = (0, T.Q)(),
        h = u?.promotionId ?? "",
        j = null != p && null != c,
        O = (0, t.bG)([f.A], () => (0, _.u$)(a.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, h).isDismissed),
        k =
            j && null != u && null != p
                ? (0, l.jsx)(E.A, {
                      componentId: u.id,
                      promotionId: u.promotionId,
                      badgeCopy: p.badgeLabel,
                      acknowledgedBadgeCopy: p.acknowledgedBadgeLabel,
                      isDismissed: O,
                  })
                : null;
    return (
        n.useEffect(() => {
            s &&
                j &&
                !O &&
                (0, M.qr)(a.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, h, { dismissAction: g.i.AUTO_DISMISS });
        }, [s, j, O, h]),
        null != k
            ? (e = k)
            : null != o
              ? (e = (0, l.jsx)(b.fY, { isTabSelected: s, userDiscount: o, includesAmountOff: !1 }))
              : null == i || r || (e = (0, l.jsx)(b.Ag, { isTabSelected: s, trialOffer: i })),
        e
    );
}
function O(e) {
    let { decoration: s, label: i, isSelected: n } = e,
        o =
            j(n) ??
            s ??
            (0, l.jsx)(p.t, { size: "sm", color: n ? u.A.unsafe_rawColors.WHITE.css : c.k0.PREMIUM_TIER_2 });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", { className: r()(h.gj, { [h.wH]: n }), children: [i, o] }),
            (0, l.jsx)("div", { className: r()(h.Tp, { [h._I]: n }) }),
        ],
    });
}

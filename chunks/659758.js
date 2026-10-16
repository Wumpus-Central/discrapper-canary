l.d(e, { A: () => b, e: () => O });
var n = l(477900),
    i = l(582128),
    d = l(503698),
    o = l.n(d),
    t = l(877624),
    u = l(17928),
    c = l(554146),
    a = l(661531),
    r = l(403581),
    _ = l(404374),
    M = l(826673),
    p = l(501419),
    I = l(724651),
    A = l(732280),
    E = l(549996),
    T = l(614791),
    m = l(964661),
    f = l(374403),
    g = l(105390),
    R = l(617617),
    h = l(49999),
    j = l(202541),
    C = l(134986);
function O() {
    let s,
        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        l = (0, A.V)(),
        d = (0, I.O)(),
        o = l?.trialId === j.Dw,
        a = (0, E.c)(t.C.PREMIUM_TAB),
        r = null != a ? (0, T.z)(a) : null,
        _ = (0, f.Q)(),
        C = a?.promotionId ?? "",
        O = null != r && null != _,
        b = (0, u.bG)([R.A], () => (0, M.u$)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, C).isDismissed),
        k =
            O && null != a && null != r
                ? (0, n.jsx)(m.A, {
                      componentId: a.id,
                      promotionId: a.promotionId,
                      badgeCopy: r.badgeCopy,
                      acknowledgedBadgeCopy: r.acknowledgedBadgeCopy,
                      isDismissed: b,
                  })
                : null;
    return (
        i.useEffect(() => {
            e &&
                O &&
                !b &&
                (0, p.qr)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, C, { dismissAction: h.i.AUTO_DISMISS });
        }, [e, O, b, C]),
        null != k
            ? (s = k)
            : null != d
              ? (s = (0, n.jsx)(g.fY, { isTabSelected: e, userDiscount: d, includesAmountOff: !1 }))
              : null == l || o || (s = (0, n.jsx)(g.Ag, { isTabSelected: e, trialOffer: l })),
        s
    );
}
function b(s) {
    let { decoration: e, label: l, isSelected: i } = s,
        d =
            O(i) ??
            e ??
            (0, n.jsx)(r.t, { size: "sm", color: i ? a.A.unsafe_rawColors.WHITE.css : _.k0.PREMIUM_TIER_2 });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", { className: o()(C.gj, { [C.wH]: i }), children: [l, d] }),
            (0, n.jsx)("div", { className: o()(C.Tp, { [C._I]: i }) }),
        ],
    });
}

var n = l(477900),
    i = l(582128),
    o = l(503698),
    d = l.n(o),
    t = l(877624),
    u = l(855986),
    c = l(554146),
    r = l(646514),
    a = l(403581),
    _ = l(404374),
    I = l(826673),
    M = l(543862),
    p = l(423814),
    A = l(77528),
    E = l(549996),
    T = l(614791),
    m = l(964661),
    f = l(374403),
    g = l(105390),
    h = l(617617),
    R = l(49999),
    j = l(682901),
    C = l(134986);
function O() {
    let s,
        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        l = (0, A.V)(),
        o = (0, p.O)(),
        d = l?.trialId === j.Dw,
        r = (0, E.c)(t.C.PREMIUM_TAB),
        a = null != r ? (0, T.z)(r) : null,
        _ = (0, f.Q)(),
        C = r?.promotionId ?? "",
        O = null != a && null != _,
        b = (0, u.bG)([h.A], () => (0, I.u$)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, C).isDismissed),
        k =
            O && null != r && null != a
                ? (0, n.jsx)(m.A, {
                      componentId: r.id,
                      promotionId: r.promotionId,
                      badgeCopy: a.badgeCopy,
                      acknowledgedBadgeCopy: a.acknowledgedBadgeCopy,
                      isDismissed: b,
                  })
                : null;
    return (
        i.useEffect(() => {
            e &&
                O &&
                !b &&
                (0, M.qr)(c.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, C, { dismissAction: R.i.AUTO_DISMISS });
        }, [e, O, b, C]),
        null != k
            ? (s = k)
            : null != o
              ? (s = (0, n.jsx)(g.fY, { isTabSelected: e, userDiscount: o, includesAmountOff: !1 }))
              : null == l || d || (s = (0, n.jsx)(g.Ag, { isTabSelected: e, trialOffer: l })),
        s
    );
}
l.d(
    e,
    {},
    {
        A: function (s) {
            let { decoration: e, label: l, isSelected: i } = s,
                o =
                    O(i) ??
                    e ??
                    (0, n.jsx)(a.NitroWheelIcon, {
                        size: "sm",
                        color: i ? r.A.unsafe_rawColors.WHITE.css : _.k0.PREMIUM_TIER_2,
                    });
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsxs)("div", { className: d()(C.gj, { [C.wH]: i }), children: [l, o] }),
                    (0, n.jsx)("div", { className: d()(C.Tp, { [C._I]: i }) }),
                ],
            });
        },
        e: O,
    },
);

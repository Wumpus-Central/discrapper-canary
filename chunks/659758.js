var o = n(477900),
    l = n(582128),
    i = n(503698),
    d = n.n(i),
    t = n(517352),
    c = n(855986),
    u = n(554146),
    r = n(646514),
    a = n(403581),
    p = n(404374),
    _ = n(826673),
    I = n(543862),
    M = n(423814),
    A = n(77528),
    E = n(641436),
    T = n(614791),
    m = n(964661),
    f = n(374403),
    g = n(105390),
    h = n(617617),
    R = n(49999),
    j = n(682901),
    O = n(134986);
function b() {
    let e,
        s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = (0, A.V)(),
        i = (0, M.O)(),
        d = n?.trialId === j.Dw,
        r = (0, E.u)(t.oW.PREMIUM_TAB),
        a = null != r ? (0, T.z)(r) : null,
        p = (0, f.Q)(),
        O = r?.promotionId ?? "",
        b = null != a && null != p,
        k = (0, c.bG)([h.A], () => (0, _.u$)(u.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, O).isDismissed),
        w =
            b && null != r && null != a && (0, T.n)(a, k)
                ? (0, o.jsx)(m.A, {
                      componentId: r.id,
                      componentType: r.componentType,
                      promotionId: r.promotionId,
                      badgeCopy: a.badgeCopy,
                      acknowledgedBadgeCopy: a.acknowledgedBadgeCopy,
                      isDismissed: k,
                  })
                : null;
    return (
        l.useEffect(() => {
            s &&
                b &&
                !k &&
                (0, I.qr)(u.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, O, { dismissAction: R.i.AUTO_DISMISS });
        }, [s, b, k, O]),
        b
            ? (e = w)
            : null != i
              ? (e = (0, o.jsx)(g.fY, { isTabSelected: s, userDiscount: i, includesAmountOff: !1 }))
              : null == n || d || (e = (0, o.jsx)(g.Ag, { isTabSelected: s, trialOffer: n })),
        e
    );
}
n.d(
    s,
    {},
    {
        A: function (e) {
            let { decoration: s, label: n, isSelected: l } = e,
                i =
                    b(l) ??
                    s ??
                    (0, o.jsx)(a.NitroWheelIcon, {
                        size: "sm",
                        color: l ? r.A.unsafe_rawColors.WHITE.css : p.k0.PREMIUM_TIER_2,
                    });
            return (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsxs)("div", { className: d()(O.gj, { [O.wH]: l }), children: [n, i] }),
                    (0, o.jsx)("div", { className: d()(O.Tp, { [O._I]: l }) }),
                ],
            });
        },
        e: b,
    },
);

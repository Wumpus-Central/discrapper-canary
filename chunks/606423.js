e(321073);
var i = e(477900),
    r = e(582128),
    l = e(284009),
    a = e.n(l),
    s = e(855986),
    o = e(189213),
    u = e(403581),
    c = e(917445),
    d = e(287809),
    m = e(448645),
    f = e(477421),
    p = e(736560),
    y = e(816252),
    P = e(473702),
    g = e(916974),
    h = e(394660);
e(88001);
var x = e(107198),
    C = e(792996),
    v = e(298501);
function E(t) {
    let { churnUserDiscountOffer: n, isPremiumGroupContinuation: e } = t;
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: v.i,
              children: e ? (0, i.jsx)(h.o, { userDiscountOffer: n }) : (0, i.jsx)(y._, { userDiscountOffer: n }),
          });
}
e.d(
    n,
    {},
    {
        Z: function () {
            let t,
                {
                    transitionState: n,
                    onClose: e,
                    premiumType: l,
                    setStep: y,
                    churnUserDiscountOffer: h,
                    isFetchingChurnDiscountOffer: v,
                    planId: b,
                    isPremiumGroupContinuation: D,
                    fullPrice: j,
                } = (0, g.X)(),
                N = (0, s.bG)([d.default], () => {
                    let t = d.default.getCurrentUser();
                    return (a()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
                });
            r.useEffect(() => {
                (0, c.A)(N.id, N.getAvatarURL(null, 80));
            }, [N]);
            let A = (0, f.A)(),
                S = "US" === A.ipCountryCode && "CA" === A.ipSubdivisionCode,
                T = (0, m.Zb)(b);
            if (v)
                return (0, i.jsx)(o.a, {
                    transitionState: n,
                    title: "",
                    actions: [],
                    onClose: async () => {
                        e();
                    },
                });
            let I = T ? C.intl.string(x.default.z2vO3h) : C.intl.string(C.t.PWq8TL);
            t = D
                ? void 0
                : T
                  ? C.intl.formatToPlainString(x.default.stVlc6, { cooldownMonths: 12 })
                  : C.intl.string(C.t.SOC4ML);
            let M = [],
                L = null != h && null != j;
            return (
                L
                    ? M.push({
                          text: C.intl.string(C.t.zrCzVB),
                          onClick: () => y(P.g.CONFIRM_DISCOUNT),
                          variant: "secondary",
                          icon: u.NitroWheelIcon,
                      })
                    : M.push({ text: C.intl.string(C.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
                M.push({
                    text: S ? C.intl.string(C.t.PfnxqD) : C.intl.string(C.t["3PatSz"]),
                    onClick: () => y(P.g.CONFIRM),
                    variant: "primary",
                }),
                (0, i.jsx)(o.a, {
                    transitionState: n,
                    title: I,
                    subtitle: t,
                    actions: M,
                    preview: L && (0, i.jsx)(E, { churnUserDiscountOffer: h, isPremiumGroupContinuation: D }),
                    onClose: async () => e(),
                    children: (0, i.jsx)(p.l, {
                        currentUser: N,
                        premiumType: l,
                        onClose: e,
                        isDowngrade: !1,
                        isPremiumRebrand: !0,
                    }),
                })
            );
        },
    },
);

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
    y = e(736560),
    p = e(816252),
    C = e(473702),
    g = e(916974);
e(88001);
var h = e(107198),
    P = e(792996),
    x = e(298501);
function v(t) {
    let { churnUserDiscountOffer: n } = t;
    return null == n
        ? null
        : (0, i.jsx)("div", { className: x.i, children: (0, i.jsx)(p._, { userDiscountOffer: n }) });
}
e.d(
    n,
    {},
    {
        Z: function () {
            let {
                    transitionState: t,
                    onClose: n,
                    premiumType: e,
                    setStep: l,
                    churnUserDiscountOffer: p,
                    isFetchingChurnDiscountOffer: x,
                    planId: E,
                    fullPrice: D,
                } = (0, g.X)(),
                b = (0, s.bG)([d.default], () => {
                    let t = d.default.getCurrentUser();
                    return (a()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
                });
            r.useEffect(() => {
                (0, c.A)(b.id, b.getAvatarURL(null, 80));
            }, [b]);
            let A = (0, f.A)(),
                N = "US" === A.ipCountryCode && "CA" === A.ipSubdivisionCode;
            if (x)
                return (0, i.jsx)(o.a, {
                    transitionState: t,
                    title: "",
                    actions: [],
                    onClose: async () => {
                        n();
                    },
                });
            let j = (0, m.Zb)(E),
                S = j ? P.intl.string(h.default.z2vO3h) : P.intl.string(P.t.PWq8TL),
                T = j
                    ? P.intl.formatToPlainString(h.default.stVlc6, { cooldownMonths: 12 })
                    : P.intl.string(P.t.SOC4ML),
                M = [],
                I = null != p && null != D;
            return (
                I
                    ? M.push({
                          text: P.intl.string(P.t.zrCzVB),
                          onClick: () => l(C.g.CONFIRM_DISCOUNT),
                          variant: "secondary",
                          icon: u.NitroWheelIcon,
                      })
                    : M.push({ text: P.intl.string(P.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
                M.push({
                    text: N ? P.intl.string(P.t.PfnxqD) : P.intl.string(P.t["3PatSz"]),
                    onClick: () => l(C.g.CONFIRM),
                    variant: "primary",
                }),
                (0, i.jsx)(o.a, {
                    transitionState: t,
                    title: S,
                    subtitle: T,
                    actions: M,
                    preview: I && (0, i.jsx)(v, { churnUserDiscountOffer: p }),
                    onClose: async () => n(),
                    children: (0, i.jsx)(y.l, {
                        currentUser: b,
                        premiumType: e,
                        onClose: n,
                        isDowngrade: !1,
                        isPremiumRebrand: !0,
                    }),
                })
            );
        },
    },
);

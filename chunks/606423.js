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
    C = e(816252),
    g = e(473702),
    y = e(916974);
e(88001);
var h = e(107198),
    P = e(792996),
    x = e(298501);
function v(t) {
    let { churnUserDiscountOffer: n } = t;
    return null == n
        ? null
        : (0, i.jsx)("div", { className: x.i, children: (0, i.jsx)(C._, { userDiscountOffer: n }) });
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
                    churnUserDiscountOffer: C,
                    isFetchingChurnDiscountOffer: x,
                    planId: E,
                    fullPrice: D,
                } = (0, y.X)(),
                j = (0, s.bG)([d.default], () => {
                    let t = d.default.getCurrentUser();
                    return (a()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
                });
            r.useEffect(() => {
                (0, c.A)(j.id, j.getAvatarURL(null, 80));
            }, [j]);
            let b = (0, f.A)(),
                N = "US" === b.ipCountryCode && "CA" === b.ipSubdivisionCode;
            if (x)
                return (0, i.jsx)(o.a, {
                    transitionState: t,
                    title: "",
                    actions: [],
                    onClose: async () => {
                        n();
                    },
                });
            let S = (0, m.Zb)(E),
                T = S ? P.intl.string(h.default.z2vO3h) : P.intl.string(P.t.PWq8TL),
                A = S
                    ? P.intl.formatToPlainString(h.default.stVlc6, { cooldownMonths: 12 })
                    : P.intl.string(P.t.SOC4ML),
                M = [],
                I = null != C && null != D;
            return (
                I
                    ? M.push({
                          text: P.intl.string(P.t.zrCzVB),
                          onClick: () => l(g.g.CONFIRM_DISCOUNT),
                          variant: "secondary",
                          icon: u.NitroWheelIcon,
                      })
                    : M.push({ text: P.intl.string(P.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
                M.push({
                    text: N ? P.intl.string(P.t.PfnxqD) : P.intl.string(P.t["3PatSz"]),
                    onClick: () => l(g.g.CONFIRM),
                    variant: "primary",
                }),
                (0, i.jsx)(o.a, {
                    transitionState: t,
                    title: T,
                    subtitle: A,
                    actions: M,
                    preview: I && (0, i.jsx)(v, { churnUserDiscountOffer: C }),
                    onClose: async () => n(),
                    children: (0, i.jsx)(p.l, {
                        currentUser: j,
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

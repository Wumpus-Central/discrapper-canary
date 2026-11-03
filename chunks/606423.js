(e.d(n, { Z: () => D }), e(321073));
var i = e(477900),
    r = e(582128),
    l = e(284009),
    a = e.n(l),
    s = e(17928),
    o = e(189213),
    u = e(403581),
    c = e(903209),
    d = e(287809),
    m = e(24482),
    f = e(477421),
    p = e(137728),
    C = e(816252),
    g = e(473702),
    y = e(916974),
    h = e(88001),
    P = e(899082),
    x = e(105292),
    v = e(298501);
function E(t) {
    let { churnUserDiscountOffer: n } = t;
    return null == n
        ? null
        : (0, i.jsx)("div", { className: v.i, children: (0, i.jsx)(C._, { userDiscountOffer: n }) });
}
function D() {
    let {
            transitionState: t,
            onClose: n,
            premiumType: e,
            setStep: l,
            churnUserDiscountOffer: C,
            isFetchingChurnDiscountOffer: v,
            planId: D,
            fullPrice: j,
        } = (0, y.X)(),
        b = (0, s.bG)([d.default], () => {
            let t = d.default.getCurrentUser();
            return (a()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
        });
    r.useEffect(() => {
        (0, c.A)(b.id, b.getAvatarURL(null, 80));
    }, [b]);
    let S = (0, f.A)(),
        T = "US" === S.ipCountryCode && "CA" === S.ipSubdivisionCode;
    if (v)
        return (0, i.jsx)(o.a, {
            transitionState: t,
            title: "",
            actions: [],
            onClose: async () => {
                n();
            },
        });
    let A = (0, m.Zb)(D),
        N = A ? x.intl.string(P.default.z2vO3h) : x.intl.string(x.t.PWq8TL),
        M = A ? x.intl.formatToPlainString(P.default.stVlc6, { cooldownMonths: h.wl }) : x.intl.string(x.t.SOC4ML),
        I = [],
        R = null != C && null != j;
    return (
        R
            ? I.push({
                  text: x.intl.string(x.t.zrCzVB),
                  onClick: () => l(g.g.CONFIRM_DISCOUNT),
                  variant: "secondary",
                  icon: u.t,
              })
            : I.push({ text: x.intl.string(x.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
        I.push({
            text: T ? x.intl.string(x.t.PfnxqD) : x.intl.string(x.t["3PatSz"]),
            onClick: () => l(g.g.CONFIRM),
            variant: "primary",
        }),
        (0, i.jsx)(o.a, {
            transitionState: t,
            title: N,
            subtitle: M,
            actions: I,
            preview: R && (0, i.jsx)(E, { churnUserDiscountOffer: C }),
            onClose: async () => n(),
            children: (0, i.jsx)(p.l, {
                currentUser: b,
                premiumType: e,
                onClose: n,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        })
    );
}

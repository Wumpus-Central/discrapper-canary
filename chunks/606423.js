e.d(n, { Z: () => D }), e(321073);
var i = e(477900),
    r = e(582128),
    l = e(284009),
    a = e.n(l),
    s = e(189213),
    o = e(17928),
    u = e(403581),
    c = e(903209),
    d = e(287809),
    m = e(158045),
    f = e(477421),
    p = e(137728),
    C = e(816252),
    g = e(473702),
    h = e(916974),
    x = e(88001),
    y = e(948202),
    P = e(375708),
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
        } = (0, h.X)(),
        S = (0, o.bG)([d.default], () => {
            let t = d.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        });
    r.useEffect(() => {
        (0, c.A)(S.id, S.getAvatarURL(null, 80));
    }, [S]);
    let T = (0, f.A)(),
        A = "US" === T.ipCountryCode && "CA" === T.ipSubdivisionCode;
    if (v)
        return (0, i.jsx)(s.Modal, {
            transitionState: t,
            title: "",
            actions: [],
            onClose: async () => {
                n();
            },
        });
    let N = (0, m.Zb)(D),
        b = N ? P.intl.string(y.default.z2vO3h) : P.intl.string(P.t.PWq8TL),
        M = N ? P.intl.formatToPlainString(y.default.stVlc6, { cooldownMonths: x.wl }) : P.intl.string(P.t.SOC4ML),
        I = [],
        R = null != C && null != j;
    return (
        R
            ? I.push({
                  text: P.intl.string(P.t.zrCzVB),
                  onClick: () => l(g.g.CONFIRM_DISCOUNT),
                  variant: "secondary",
                  icon: u.t,
              })
            : I.push({ text: P.intl.string(P.t.rzVN6j), onClick: () => n(), variant: "secondary" }),
        I.push({
            text: A ? P.intl.string(P.t.PfnxqD) : P.intl.string(P.t["3PatSz"]),
            onClick: () => l(g.g.CONFIRM),
            variant: "primary",
        }),
        (0, i.jsx)(s.Modal, {
            transitionState: t,
            title: b,
            subtitle: M,
            actions: I,
            preview: R && (0, i.jsx)(E, { churnUserDiscountOffer: C }),
            onClose: async () => n(),
            children: (0, i.jsx)(p.l, {
                currentUser: S,
                premiumType: e,
                onClose: n,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        })
    );
}

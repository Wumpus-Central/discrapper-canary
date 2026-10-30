(n.d(e, { Z: () => D }), n(321073));
var i = n(477900),
    r = n(582128),
    l = n(284009),
    a = n.n(l),
    s = n(17928),
    o = n(189213),
    u = n(403581),
    c = n(903209),
    d = n(287809),
    m = n(24482),
    f = n(477421),
    p = n(137728),
    C = n(816252),
    g = n(473702),
    x = n(916974),
    h = n(88001),
    y = n(899082),
    P = n(105292),
    v = n(298501);
function E(t) {
    let { churnUserDiscountOffer: e } = t;
    return null == e
        ? null
        : (0, i.jsx)("div", { className: v.i, children: (0, i.jsx)(C._, { userDiscountOffer: e }) });
}
function D() {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            setStep: l,
            churnUserDiscountOffer: C,
            isFetchingChurnDiscountOffer: v,
            planId: D,
            fullPrice: j,
        } = (0, x.X)(),
        S = (0, s.bG)([d.default], () => {
            let t = d.default.getCurrentUser();
            return (a()(null != t, "ProfileItem: currentUser cannot be undefined"), t);
        });
    r.useEffect(() => {
        (0, c.A)(S.id, S.getAvatarURL(null, 80));
    }, [S]);
    let T = (0, f.A)(),
        A = "US" === T.ipCountryCode && "CA" === T.ipSubdivisionCode;
    if (v)
        return (0, i.jsx)(o.a, {
            transitionState: t,
            title: "",
            actions: [],
            onClose: async () => {
                e();
            },
        });
    let N = (0, m.Zb)(D),
        b = N ? P.intl.string(y.default.z2vO3h) : P.intl.string(P.t.PWq8TL),
        M = N ? P.intl.formatToPlainString(y.default.stVlc6, { cooldownMonths: h.wl }) : P.intl.string(P.t.SOC4ML),
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
            : I.push({ text: P.intl.string(P.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
        I.push({
            text: A ? P.intl.string(P.t.PfnxqD) : P.intl.string(P.t["3PatSz"]),
            onClick: () => l(g.g.CONFIRM),
            variant: "primary",
        }),
        (0, i.jsx)(o.a, {
            transitionState: t,
            title: b,
            subtitle: M,
            actions: I,
            preview: R && (0, i.jsx)(E, { churnUserDiscountOffer: C }),
            onClose: async () => e(),
            children: (0, i.jsx)(p.l, {
                currentUser: S,
                premiumType: n,
                onClose: e,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        })
    );
}

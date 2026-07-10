n.d(e, { Z: () => D }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(189213),
    o = n(17928),
    u = n(403581),
    c = n(903209),
    d = n(287809),
    m = n(428262),
    f = n(477421),
    g = n(137728),
    p = n(816252),
    h = n(473702),
    x = n(916974),
    P = n(88001),
    C = n(466919),
    y = n(375708),
    E = n(842472);
function v(t) {
    let { churnUserDiscountOffer: e } = t;
    return null == e
        ? null
        : (0, i.jsx)("div", { className: E.i, children: (0, i.jsx)(p._, { userDiscountOffer: e }) });
}
function D() {
    let {
            transitionState: t,
            onClose: e,
            premiumType: n,
            setStep: l,
            churnUserDiscountOffer: p,
            isFetchingChurnDiscountOffer: E,
            planId: D,
        } = (0, x.X)(),
        j = (0, o.bG)([d.default], () => {
            let t = d.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
        });
    r.useEffect(() => {
        (0, c.A)(j.id, j.getAvatarURL(null, 80));
    }, [j]);
    let S = (0, f.A)(),
        A = "US" === S.ipCountryCode && "CA" === S.ipSubdivisionCode;
    if (E)
        return (0, i.jsx)(s.Modal, {
            transitionState: t,
            title: "",
            actions: [],
            onClose: async () => {
                e();
            },
        });
    let N = (0, m.Zb)(D),
        L = N ? y.intl.string(C.default.z2vO3h) : y.intl.string(y.t.PWq8TL),
        T = N ? y.intl.formatToPlainString(C.default.stVlc6, { cooldownMonths: P.wl }) : y.intl.string(y.t.SOC4ML),
        b = [];
    return (
        null != p
            ? b.push({
                  text: y.intl.string(y.t.zrCzVB),
                  onClick: () => l(h.g.CONFIRM_DISCOUNT),
                  variant: "secondary",
                  icon: u.t,
              })
            : b.push({ text: y.intl.string(y.t.rzVN6j), onClick: () => e(), variant: "secondary" }),
        b.push({
            text: A ? y.intl.string(y.t.PfnxqD) : y.intl.string(y.t["3PatSz"]),
            onClick: () => l(h.g.CONFIRM),
            variant: "primary",
        }),
        (0, i.jsx)(s.Modal, {
            transitionState: t,
            title: L,
            subtitle: T,
            actions: b,
            preview: null !== p && (0, i.jsx)(v, { churnUserDiscountOffer: p }),
            onClose: async () => e(),
            children: (0, i.jsx)(g.l, {
                currentUser: j,
                premiumType: n,
                onClose: e,
                isDowngrade: !1,
                isPremiumRebrand: !0,
            }),
        })
    );
}

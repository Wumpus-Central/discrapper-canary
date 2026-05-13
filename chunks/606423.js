i.d(e, { Z: () => D }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(189213),
    o = i(17928),
    u = i(403581),
    c = i(903209),
    d = i(287809),
    m = i(927578),
    f = i(477421),
    g = i(137728),
    p = i(816252),
    h = i(473702),
    x = i(916974),
    P = i(88001),
    C = i(466919),
    y = i(375708),
    E = i(842472);
let v = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, n.jsx)("div", { className: E.i, children: (0, n.jsx)(p._, { userDiscountOffer: e }) });
    },
    D = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
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
            return (0, n.jsx)(s.Modal, {
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
            (0, n.jsx)(s.Modal, {
                transitionState: t,
                title: L,
                subtitle: T,
                actions: b,
                preview: null !== p && (0, n.jsx)(v, { churnUserDiscountOffer: p }),
                onClose: async () => e(),
                children: (0, n.jsx)(g.l, {
                    currentUser: j,
                    premiumType: i,
                    onClose: e,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

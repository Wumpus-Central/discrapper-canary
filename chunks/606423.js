i.d(e, { Z: () => D }), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(158954),
    u = i(311907),
    o = i(397927),
    c = i(576622),
    d = i(287809),
    m = i(927578),
    f = i(477421),
    g = i(96304),
    p = i(816252),
    x = i(473702),
    h = i(916974),
    P = i(88001),
    y = i(519412),
    C = i(985018),
    v = i(426771);
let E = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, n.jsx)("div", { className: v.i, children: (0, n.jsx)(p._, { userDiscountOffer: e }) });
    },
    D = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: l,
                churnUserDiscountOffer: p,
                isFetchingChurnDiscountOffer: v,
                planId: D,
            } = (0, h.X)(),
            j = (0, u.bG)([d.default], () => {
                let t = d.default.getCurrentUser();
                return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
            });
        r.useEffect(() => {
            (0, c.A)(j.id, j.getAvatarURL(null, 80));
        }, [j]);
        let _ = (0, f.A)(),
            A = "US" === _.ipCountryCode && "CA" === _.ipSubdivisionCode;
        if (v)
            return (0, n.jsx)(s.Modal, {
                transitionState: t,
                title: "",
                actions: [],
                onClose: async () => {
                    e();
                },
            });
        let S = (0, m.Zb)(D),
            T = S ? C.intl.string(y.default.z2vO3h) : C.intl.string(C.t.PWq8TL),
            N = S ? C.intl.formatToPlainString(y.default.stVlc6, { cooldownMonths: P.wl }) : C.intl.string(C.t.SOC4ML),
            M = [];
        return (
            null != p
                ? M.push({
                      text: C.intl.string(C.t.zrCzVB),
                      onClick: () => l(x.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: o.tvc,
                  })
                : M.push({ text: C.intl.string(C.t.h9tkAK), onClick: () => e(), variant: "secondary" }),
            M.push({
                text: A ? C.intl.string(C.t.PfnxqD) : C.intl.string(C.t["3PatSz"]),
                onClick: () => l(x.g.CONFIRM),
                variant: "primary",
            }),
            (0, n.jsx)(s.Modal, {
                transitionState: t,
                title: T,
                subtitle: N,
                actions: M,
                preview: null !== p && (0, n.jsx)(E, { churnUserDiscountOffer: p }),
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

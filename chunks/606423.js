i.d(e, { Z: () => A }), i(30146), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(158954),
    u = i(311907),
    o = i(397927),
    c = i(793574),
    d = i(576622),
    m = i(909536),
    f = i(287809),
    p = i(927578),
    g = i(477421),
    x = i(96304),
    h = i(400669),
    C = i(816252),
    P = i(473702),
    y = i(916974),
    v = i(88001),
    j = i(518582),
    E = i(985018),
    _ = i(221177);
let D = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, n.jsx)("div", { className: _.i1, children: (0, n.jsx)(C._, { userDiscountOffer: e }) });
    },
    N = ["primary", "critical-primary", "expressive"],
    S = (t) => {
        let { actions: e } = t,
            i = e.findLastIndex((t) => null != t.variant && N.includes(t.variant));
        return (0, n.jsxs)("div", {
            className: _.NC,
            children: [
                (0, n.jsx)(h.l, { size: "sm", className: _.ij, location: c.A.PREMIUM_WISHLIST_CHURN_MODAL }),
                (0, n.jsx)(s.e2v, {
                    fullWidth: !0,
                    className: _.uL,
                    children: e.map((t, e) => (0, n.jsx)(s.$nd, { autoFocus: i === e, ...t }, e)),
                }),
            ],
        });
    },
    A = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: l,
                churnUserDiscountOffer: c,
                isFetchingChurnDiscountOffer: h,
                planId: C,
            } = (0, y.X)(),
            _ = (0, u.bG)([f.default], () => {
                let t = f.default.getCurrentUser();
                return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
            });
        r.useEffect(() => {
            (0, d.A)(_.id, _.getAvatarURL(null, 80));
        }, [_]);
        let N = (0, m.St)("churn-modal"),
            A = (0, g.A)(),
            M = "US" === A.ipCountryCode && "CA" === A.ipSubdivisionCode;
        if (h)
            return (0, n.jsx)(s.Modal, {
                transitionState: t,
                title: "",
                actions: [],
                onClose: async () => {
                    e();
                },
            });
        let T = (0, p.Zb)(C),
            b = T ? E.intl.string(j.default.z2vO3h) : E.intl.string(E.t.PWq8TL),
            I = T ? E.intl.formatToPlainString(j.default.stVlc6, { cooldownMonths: v.wl }) : E.intl.string(E.t.SOC4ML),
            L = [];
        return (
            null != c
                ? L.push({
                      text: E.intl.string(E.t.zrCzVB),
                      onClick: () => l(P.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: o.tvc,
                  })
                : L.push({
                      text: E.intl.string(N ? E.t["2+luBl"] : E.t.rzVN6j),
                      onClick: () => e(),
                      variant: "secondary",
                  }),
            L.push({
                text: M ? E.intl.string(E.t.PfnxqD) : E.intl.string(E.t["3PatSz"]),
                onClick: () => l(P.g.CONFIRM),
                variant: "primary",
            }),
            (0, n.jsx)(s.Modal, {
                transitionState: t,
                title: b,
                subtitle: I,
                actions: N ? [] : L,
                actionBarInput: N ? (0, n.jsx)(S, { actions: L }) : void 0,
                preview: null !== c && (0, n.jsx)(D, { churnUserDiscountOffer: c }),
                onClose: async () => e(),
                children: (0, n.jsx)(x.l, {
                    currentUser: _,
                    premiumType: i,
                    onClose: e,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

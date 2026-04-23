i.d(e, { Z: () => M }), i(30146), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    s = i.n(l),
    a = i(825484),
    c = i(821609),
    u = i(189213),
    o = i(17928),
    d = i(403581),
    m = i(793574),
    f = i(576622),
    g = i(909536),
    x = i(287809),
    p = i(927578),
    h = i(477421),
    C = i(380124),
    v = i(400669),
    P = i(816252),
    j = i(473702),
    y = i(916974),
    N = i(88001),
    E = i(466919),
    D = i(985018),
    _ = i(842472);
let S = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, n.jsx)("div", { className: _.i1, children: (0, n.jsx)(P._, { userDiscountOffer: e }) });
    },
    A = ["primary", "critical-primary", "expressive"],
    b = (t) => {
        let { actions: e } = t,
            i = e.findLastIndex((t) => null != t.variant && A.includes(t.variant));
        return (0, n.jsxs)("div", {
            className: _.NC,
            children: [
                (0, n.jsx)(v.l, { size: "sm", className: _.ij, location: m.A.PREMIUM_WISHLIST_CHURN_MODAL }),
                (0, n.jsx)(a.e, {
                    fullWidth: !0,
                    className: _.uL,
                    children: e.map((t, e) => (0, n.jsx)(c.$, { autoFocus: i === e, ...t }, e)),
                }),
            ],
        });
    },
    M = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: i,
                setStep: l,
                churnUserDiscountOffer: a,
                isFetchingChurnDiscountOffer: c,
                planId: m,
            } = (0, y.X)(),
            v = (0, o.bG)([x.default], () => {
                let t = x.default.getCurrentUser();
                return s()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
            });
        r.useEffect(() => {
            (0, f.A)(v.id, v.getAvatarURL(null, 80));
        }, [v]);
        let P = (0, g.St)("churn-modal"),
            _ = (0, h.A)(),
            A = "US" === _.ipCountryCode && "CA" === _.ipSubdivisionCode;
        if (c)
            return (0, n.jsx)(u.Modal, {
                transitionState: t,
                title: "",
                actions: [],
                onClose: async () => {
                    e();
                },
            });
        let M = (0, p.Zb)(m),
            T = M ? D.intl.string(E.default.z2vO3h) : D.intl.string(D.t.PWq8TL),
            I = M ? D.intl.formatToPlainString(E.default.stVlc6, { cooldownMonths: N.wl }) : D.intl.string(D.t.SOC4ML),
            L = [];
        return (
            null != a
                ? L.push({
                      text: D.intl.string(D.t.zrCzVB),
                      onClick: () => l(j.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: d.t,
                  })
                : L.push({
                      text: D.intl.string(P ? D.t["2+luBl"] : D.t.rzVN6j),
                      onClick: () => e(),
                      variant: "secondary",
                  }),
            L.push({
                text: A ? D.intl.string(D.t.PfnxqD) : D.intl.string(D.t["3PatSz"]),
                onClick: () => l(j.g.CONFIRM),
                variant: "primary",
            }),
            (0, n.jsx)(u.Modal, {
                transitionState: t,
                title: T,
                subtitle: I,
                actions: P ? [] : L,
                actionBarInput: P ? (0, n.jsx)(b, { actions: L }) : void 0,
                preview: null !== a && (0, n.jsx)(S, { churnUserDiscountOffer: a }),
                onClose: async () => e(),
                children: (0, n.jsx)(C.l, {
                    currentUser: v,
                    premiumType: i,
                    onClose: e,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

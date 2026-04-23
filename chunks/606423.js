i.d(e, { Z: () => M }), i(30146), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(825484),
    u = i(821609),
    o = i(189213),
    c = i(311907),
    d = i(403581),
    m = i(793574),
    f = i(576622),
    p = i(909536),
    g = i(287809),
    x = i(927578),
    h = i(477421),
    C = i(96304),
    P = i(400669),
    y = i(816252),
    v = i(473702),
    E = i(916974),
    j = i(88001),
    _ = i(466919),
    D = i(985018),
    N = i(842472);
let S = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, n.jsx)("div", { className: N.i1, children: (0, n.jsx)(y._, { userDiscountOffer: e }) });
    },
    A = ["primary", "critical-primary", "expressive"],
    b = (t) => {
        let { actions: e } = t,
            i = e.findLastIndex((t) => null != t.variant && A.includes(t.variant));
        return (0, n.jsxs)("div", {
            className: N.NC,
            children: [
                (0, n.jsx)(P.l, { size: "sm", className: N.ij, location: m.A.PREMIUM_WISHLIST_CHURN_MODAL }),
                (0, n.jsx)(s.e, {
                    fullWidth: !0,
                    className: N.uL,
                    children: e.map((t, e) => (0, n.jsx)(u.$, { autoFocus: i === e, ...t }, e)),
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
                churnUserDiscountOffer: s,
                isFetchingChurnDiscountOffer: u,
                planId: m,
            } = (0, E.X)(),
            P = (0, c.bG)([g.default], () => {
                let t = g.default.getCurrentUser();
                return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
            });
        r.useEffect(() => {
            (0, f.A)(P.id, P.getAvatarURL(null, 80));
        }, [P]);
        let y = (0, p.St)("churn-modal"),
            N = (0, h.A)(),
            A = "US" === N.ipCountryCode && "CA" === N.ipSubdivisionCode;
        if (u)
            return (0, n.jsx)(o.Modal, {
                transitionState: t,
                title: "",
                actions: [],
                onClose: async () => {
                    e();
                },
            });
        let M = (0, x.Zb)(m),
            T = M ? D.intl.string(_.default.z2vO3h) : D.intl.string(D.t.PWq8TL),
            I = M ? D.intl.formatToPlainString(_.default.stVlc6, { cooldownMonths: j.wl }) : D.intl.string(D.t.SOC4ML),
            L = [];
        return (
            null != s
                ? L.push({
                      text: D.intl.string(D.t.zrCzVB),
                      onClick: () => l(v.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: d.t,
                  })
                : L.push({
                      text: D.intl.string(y ? D.t["2+luBl"] : D.t.rzVN6j),
                      onClick: () => e(),
                      variant: "secondary",
                  }),
            L.push({
                text: A ? D.intl.string(D.t.PfnxqD) : D.intl.string(D.t["3PatSz"]),
                onClick: () => l(v.g.CONFIRM),
                variant: "primary",
            }),
            (0, n.jsx)(o.Modal, {
                transitionState: t,
                title: T,
                subtitle: I,
                actions: y ? [] : L,
                actionBarInput: y ? (0, n.jsx)(b, { actions: L }) : void 0,
                preview: null !== s && (0, n.jsx)(S, { churnUserDiscountOffer: s }),
                onClose: async () => e(),
                children: (0, n.jsx)(C.l, {
                    currentUser: P,
                    premiumType: i,
                    onClose: e,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

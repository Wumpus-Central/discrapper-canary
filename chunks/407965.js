n.d(t, { n: () => y }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(484459),
    d = n(594174),
    f = n(847903),
    p = n(807163),
    _ = n(10508),
    m = n(45474),
    h = n(594135),
    g = n(388032),
    E = n(181679);
let b = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: E.previewContainer,
                  children: (0, r.jsx)(_.o, { userDiscountOffer: t }),
              });
    },
    y = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: _,
                isFetchingChurnDiscountOffer: E,
            } = (0, h.a)(),
            y = (0, l.e7)([d.default], () => {
                let e = d.default.getCurrentUser();
                return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
            });
        i.useEffect(() => {
            (0, u.Z)(y.id, y.getAvatarURL(null, 80));
        }, [y]);
        let O = (0, f.Z)(),
            v = "US" === O.ipCountryCode && "CA" === O.ipSubdivisionCode;
        if (E)
            return (0, r.jsx)(s.Modal, {
                transitionState: e,
                title: "",
                actions: [],
                onClose: async () => {
                    t();
                },
            });
        let S = [];
        return (
            null != _
                ? S.push({
                      text: g.intl.string(g.t.zrCzVB),
                      onClick: () => a(m.R.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.SrA,
                  })
                : S.push({
                      text: g.intl.string(g.t.h9tkAK),
                      onClick: () => t(),
                      variant: "secondary",
                  }),
            S.push({
                text: v ? g.intl.string(g.t.PfnxqD) : g.intl.string(g.t["3PatSz"]),
                onClick: () => a(m.R.CONFIRM),
                variant: "primary",
            }),
            (0, r.jsx)(s.Modal, {
                transitionState: e,
                title: g.intl.string(g.t.PWq8TL),
                subtitle: g.intl.formatToPlainString(g.t.nsGVzg, {}),
                actions: S,
                preview: null !== _ && (0, r.jsx)(b, { churnUserDiscountOffer: _ }),
                onClose: async () => t(),
                children: (0, r.jsx)(p.g, {
                    currentUser: y,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

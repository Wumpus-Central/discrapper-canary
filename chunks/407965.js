n.d(t, { n: () => y }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(484459),
    d = n(594174),
    f = n(847903),
    _ = n(807163),
    p = n(10508),
    h = n(45474),
    m = n(594135),
    g = n(388032),
    E = n(181679);
let b = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: E.previewContainer,
                  children: (0, r.jsx)(p.o, { userDiscountOffer: t }),
              });
    },
    y = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: p,
                isFetchingChurnDiscountOffer: E,
            } = (0, m.a)(),
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
        let I = [];
        return (
            null != p
                ? I.push({
                      text: g.intl.string(g.t.zrCzVB),
                      onClick: () => a(h.R.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.SrA,
                  })
                : I.push({
                      text: g.intl.string(g.t.h9tkAK),
                      onClick: () => t(),
                      variant: "secondary",
                  }),
            I.push({
                text: v ? g.intl.string(g.t.PfnxqD) : g.intl.string(g.t["3PatSz"]),
                onClick: () => a(h.R.CONFIRM),
                variant: "primary",
            }),
            (0, r.jsx)(s.Modal, {
                transitionState: e,
                title: g.intl.string(g.t.PWq8TL),
                subtitle: g.intl.formatToPlainString(g.t.nsGVzg, {}),
                actions: I,
                preview: null !== p && (0, r.jsx)(b, { churnUserDiscountOffer: p }),
                onClose: async () => t(),
                children: (0, r.jsx)(_.g, {
                    currentUser: y,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

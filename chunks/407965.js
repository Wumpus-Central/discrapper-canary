n.d(e, { n: () => v }), n(539854);
var i = n(951288),
    r = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(793030),
    o = n(442837),
    c = n(481060),
    u = n(484459),
    d = n(594174),
    m = n(847903),
    f = n(807163),
    p = n(10508),
    g = n(45474),
    h = n(594135),
    x = n(388032),
    P = n(181679);
let C = (t) => {
        let { churnUserDiscountOffer: e } = t;
        return null == e
            ? null
            : (0, i.jsx)("div", {
                  className: P.previewContainer,
                  children: (0, i.jsx)(p.o, { userDiscountOffer: e }),
              });
    },
    v = () => {
        let {
                transitionState: t,
                onClose: e,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: p,
                isFetchingChurnDiscountOffer: P,
            } = (0, h.a)(),
            v = (0, o.e7)([d.default], () => {
                let t = d.default.getCurrentUser();
                return l()(null != t, "ProfileItem: currentUser cannot be undefined"), t;
            });
        r.useEffect(() => {
            (0, u.Z)(v.id, v.getAvatarURL(null, 80));
        }, [v]);
        let y = (0, m.Z)(),
            T = "US" === y.ipCountryCode && "CA" === y.ipSubdivisionCode;
        if (P)
            return (0, i.jsx)(s.Modal, {
                transitionState: t,
                title: "",
                actions: [],
                onClose: async () => {
                    e();
                },
            });
        let E = [];
        return (
            null != p
                ? E.push({
                      text: x.intl.string(x.t.zrCzVF),
                      onClick: () => a(g.R.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.SrA,
                  })
                : E.push({
                      text: x.intl.string(x.t.h9tkAA),
                      onClick: () => e(),
                      variant: "secondary",
                  }),
            E.push({
                text: T ? x.intl.string(x.t.PfnxqK) : x.intl.string(x.t["3PatS0"]),
                onClick: () => a(g.R.CONFIRM),
                variant: "primary",
            }),
            (0, i.jsx)(s.Modal, {
                transitionState: t,
                title: x.intl.string(x.t.PWq8TE),
                subtitle: x.intl.formatToPlainString(x.t.nsGVzs, {}),
                actions: E,
                preview: null !== p && (0, i.jsx)(C, { churnUserDiscountOffer: p }),
                onClose: async () => e(),
                children: (0, i.jsx)(f.g, {
                    currentUser: v,
                    premiumType: n,
                    onClose: e,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

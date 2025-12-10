n.d(t, { n: () => S }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(484459),
    d = n(594174),
    f = n(74538),
    p = n(847903),
    _ = n(807163),
    m = n(10508),
    h = n(45474),
    g = n(594135),
    E = n(282793),
    b = n(441677),
    y = n(388032),
    O = n(181679);
let v = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: O.previewContainer,
                  children: (0, r.jsx)(m.o, { userDiscountOffer: t }),
              });
    },
    S = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: m,
                isFetchingChurnDiscountOffer: O,
                planId: S,
            } = (0, g.a)(),
            I = (0, l.e7)([d.default], () => {
                let e = d.default.getCurrentUser();
                return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
            });
        i.useEffect(() => {
            (0, u.Z)(I.id, I.getAvatarURL(null, 80));
        }, [I]);
        let T = (0, p.Z)(),
            C = "US" === T.ipCountryCode && "CA" === T.ipSubdivisionCode;
        if (O)
            return (0, r.jsx)(s.Modal, {
                transitionState: e,
                title: "",
                actions: [],
                onClose: async () => {
                    t();
                },
            });
        let A = (0, f.Ju)(S),
            N = A ? y.intl.string(b.default.z2vO3h) : y.intl.string(y.t.PWq8TL),
            P = A ? y.intl.formatToPlainString(b.default.stVlc6, { cooldownMonths: E.T9 }) : y.intl.string(y.t.SOC4ML),
            R = [];
        return (
            null != m
                ? R.push({
                      text: y.intl.string(y.t.zrCzVB),
                      onClick: () => a(h.R.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.SrA,
                  })
                : R.push({
                      text: y.intl.string(y.t.h9tkAK),
                      onClick: () => t(),
                      variant: "secondary",
                  }),
            R.push({
                text: C ? y.intl.string(y.t.PfnxqD) : y.intl.string(y.t["3PatSz"]),
                onClick: () => a(h.R.CONFIRM),
                variant: "primary",
            }),
            (0, r.jsx)(s.Modal, {
                transitionState: e,
                title: N,
                subtitle: P,
                actions: R,
                preview: null !== m && (0, r.jsx)(v, { churnUserDiscountOffer: m }),
                onClose: async () => t(),
                children: (0, r.jsx)(_.g, {
                    currentUser: I,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

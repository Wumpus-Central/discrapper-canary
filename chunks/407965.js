n.d(t, { n: () => j }), n(539854);
var i = n(951288),
    r = n(647438),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(82659),
    c = n(481060),
    d = n(484459),
    u = n(594174),
    m = n(847903),
    p = n(807163),
    g = n(10508),
    h = n(45474),
    f = n(594135),
    b = n(388032),
    x = n(181679);
let _ = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: x.previewContainer,
                  children: (0, i.jsx)(g.o, { userDiscountOffer: t }),
              });
    },
    j = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: s,
                churnUserDiscountOffer: g,
                isFetchingChurnDiscountOffer: x,
            } = (0, f.a)(),
            j = (0, l.e7)([u.default], () => {
                let e = u.default.getCurrentUser();
                return a()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
            });
        r.useEffect(() => {
            (0, d.Z)(j.id, j.getAvatarURL(null, 80));
        }, [j]);
        let E = (0, m.Z)(),
            C = "US" === E.ipCountryCode && "CA" === E.ipSubdivisionCode;
        if (x)
            return (0, i.jsx)(o.Modal, {
                transitionState: e,
                title: "",
                actions: [],
                onClose: async () => {
                    t();
                },
            });
        let O = [];
        return (
            null != g
                ? O.push({
                      text: b.intl.string(b.t.zrCzVF),
                      onClick: () => s(h.R.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.SrA,
                  })
                : O.push({
                      text: b.intl.string(b.t.h9tkAA),
                      onClick: () => t(),
                      variant: "secondary",
                  }),
            O.push({
                text: C ? b.intl.string(b.t.PfnxqK) : b.intl.string(b.t["3PatS0"]),
                onClick: () => s(h.R.CONFIRM),
                variant: "primary",
            }),
            (0, i.jsx)(o.Modal, {
                transitionState: e,
                title: b.intl.string(b.t.PWq8TE),
                subtitle: b.intl.formatToPlainString(b.t.nsGVzs, {}),
                actions: O,
                preview: null !== g && (0, i.jsx)(_, { churnUserDiscountOffer: g }),
                onClose: async () => t(),
                children: (0, i.jsx)(p.g, {
                    currentUser: j,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

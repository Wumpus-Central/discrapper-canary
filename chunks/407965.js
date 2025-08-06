(n.d(t, { n: () => j }), n(539854), n(583741));
var i = n(255367),
    r = n(73800),
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
    x = n(515622);
let _ = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, i.jsx)('div', {
                  className: x.previewContainer,
                  children: (0, i.jsx)(g.o, { userDiscountOffer: t })
              });
    },
    j = () => {
        let { transitionState: e, onClose: t, premiumType: n, setStep: s, discountPrimary: g, churnUserDiscountOffer: x, isFetchingChurnDiscountOffer: j } = (0, f.a)(),
            E = (0, l.e7)([u.default], () => {
                let e = u.default.getCurrentUser();
                return (a()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
            });
        r.useEffect(() => {
            (0, d.Z)(E.id, E.getAvatarURL(null, 80));
        }, [E]);
        let C = (0, m.Z)(),
            O = 'US' === C.ipCountryCode && 'CA' === C.ipSubdivisionCode;
        if (j)
            return (0, i.jsx)(o.Modal, {
                transitionState: e,
                title: '',
                actions: [],
                onClose: async () => {
                    t();
                }
            });
        let v = [];
        return (
            null != x
                ? v.push({
                      text: b.intl.string(b.t.zrCzVF),
                      onClick: () => s(h.R.CONFIRM_DISCOUNT),
                      variant: g ? 'primary' : 'secondary',
                      icon: c.SrA
                  })
                : v.push({
                      text: b.intl.string(b.t.h9tkAA),
                      onClick: () => t(),
                      variant: 'secondary'
                  }),
            v.push({
                text: O ? b.intl.string(b.t.PfnxqK) : b.intl.string(b.t['3PatS0']),
                onClick: () => s(h.R.CONFIRM),
                variant: null !== x && g ? 'secondary' : 'primary'
            }),
            g && null !== x && v.reverse(),
            (0, i.jsx)(o.Modal, {
                transitionState: e,
                title: b.intl.string(b.t.PWq8TE),
                subtitle: b.intl.formatToPlainString(b.t.nsGVzs, {}),
                actions: v,
                preview: null !== x && (0, i.jsx)(_, { churnUserDiscountOffer: x }),
                onClose: async () => t(),
                children: (0, i.jsx)(p.g, {
                    currentUser: E,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0
                })
            })
        );
    };

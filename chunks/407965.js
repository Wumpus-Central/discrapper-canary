(n.d(t, { n: () => b }), n(539854), n(583741));
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(82659),
    c = n(481060),
    u = n(484459),
    d = n(594174),
    m = n(847903),
    _ = n(807163),
    p = n(10508),
    f = n(45474),
    C = n(594135),
    h = n(388032),
    x = n(515622);
let y = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: x.previewContainer,
                  children: (0, r.jsx)(p.o, { userDiscountOffer: t })
              });
    },
    b = () => {
        let { transitionState: e, onClose: t, premiumType: n, setStep: o, discountPrimary: p, churnUserDiscountOffer: x, isFetchingChurnDiscountOffer: b } = (0, C.a)(),
            g = (0, s.e7)([d.default], () => {
                let e = d.default.getCurrentUser();
                return (a()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
            });
        i.useEffect(() => {
            (0, u.Z)(g.id, g.getAvatarURL(null, 80));
        }, [g]);
        let j = (0, m.Z)(),
            I = 'US' === j.ipCountryCode && 'CA' === j.ipSubdivisionCode;
        if (b)
            return (0, r.jsx)(l.Modal, {
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
                      text: h.intl.string(h.t.zrCzVF),
                      onClick: () => o(f.R.CONFIRM_DISCOUNT),
                      variant: p ? 'primary' : 'secondary',
                      icon: c.SrA
                  })
                : v.push({
                      text: h.intl.string(h.t.h9tkAA),
                      onClick: () => t(),
                      variant: 'secondary'
                  }),
            v.push({
                text: I ? h.intl.string(h.t.PfnxqK) : h.intl.string(h.t['3PatS0']),
                onClick: () => o(f.R.CONFIRM),
                variant: null !== x && p ? 'secondary' : 'primary'
            }),
            p && null !== x && v.reverse(),
            (0, r.jsx)(l.Modal, {
                transitionState: e,
                title: h.intl.string(h.t.PWq8TE),
                subtitle: h.intl.format(h.t.nsGVzs, {}),
                actions: v,
                preview: null !== x && (0, r.jsx)(y, { churnUserDiscountOffer: x }),
                onClose: async () => t(),
                children: (0, r.jsx)(_.g, {
                    currentUser: g,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0
                })
            })
        );
    };

(n.d(t, { n: () => I }), n(539854));
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(667202),
    c = n(82659),
    u = n(481060),
    d = n(484459),
    m = n(594174),
    p = n(847903),
    _ = n(807163),
    f = n(10508),
    C = n(45474),
    h = n(594135),
    x = n(474936),
    y = n(388032),
    b = n(515622),
    g = n(997892),
    v = n(234286);
let j = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)('div', {
                  className: b.previewContainer,
                  children: (0, r.jsx)(f.o, { userDiscountOffer: t })
              });
    },
    I = () => {
        let { transitionState: e, onClose: t, premiumType: n, setStep: o, expressive: f, churnUserDiscountOffer: b, isFetchingChurnDiscountOffer: I } = (0, h.a)(),
            T = (0, s.e7)([m.default], () => {
                let e = m.default.getCurrentUser();
                return (a()(null != e, 'ProfileItem: currentUser cannot be undefined'), e);
            });
        i.useEffect(() => {
            (0, d.Z)(T.id, T.getAvatarURL(null, 80));
        }, [T]);
        let E = (0, p.Z)(),
            P = 'US' === E.ipCountryCode && 'CA' === E.ipSubdivisionCode;
        if (I)
            return (0, r.jsx)(c.u, {
                transitionState: e,
                title: '',
                actions: [],
                onClose: async () => {
                    t();
                }
            });
        let O = [];
        if (
            (null != b
                ? O.push({
                      text: y.intl.string(y.t.zrCzVF),
                      onClick: () => o(C.R.CONFIRM_DISCOUNT),
                      variant: 'secondary',
                      icon: u.SrA
                  })
                : O.push({
                      text: y.intl.string(y.t.h9tkAA),
                      onClick: () => t(),
                      variant: 'secondary'
                  }),
            O.push({
                text: P ? y.intl.string(y.t.PfnxqK) : y.intl.string(y.t['3PatS0']),
                onClick: () => o(C.R.CONFIRM),
                variant: 'primary'
            }),
            f && null === b)
        ) {
            let i = n === x.p9.TIER_2;
            return (0, r.jsx)(l.I, {
                gradientColor: i ? 'nitro-pink' : 'nitro-green',
                graphic: i ? v : g,
                title: y.intl.string(y.t.PWq8TE),
                subtitle: y.intl.format(y.t.nsGVzs, {}),
                actions: O,
                transitionState: e,
                onClose: async () => t(),
                children: (0, r.jsx)(_.g, {
                    currentUser: T,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1
                })
            });
        }
        return (0, r.jsx)(c.u, {
            transitionState: e,
            title: y.intl.string(y.t.PWq8TE),
            subtitle: y.intl.format(y.t.nsGVzs, {}),
            actions: O,
            preview: (0, r.jsx)(j, { churnUserDiscountOffer: b }),
            onClose: async () => t(),
            children: (0, r.jsx)(_.g, {
                currentUser: T,
                premiumType: n,
                onClose: t,
                isDowngrade: !1
            })
        });
    };

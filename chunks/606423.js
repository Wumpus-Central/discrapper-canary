n.d(t, { Z: () => v }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(576622),
    d = n(287809),
    f = n(927578),
    p = n(477421),
    _ = n(96304),
    h = n(816252),
    m = n(473702),
    g = n(916974),
    E = n(88001),
    b = n(519412),
    y = n(985018),
    O = n(426771);
let A = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: O.i,
                  children: (0, r.jsx)(h._, { userDiscountOffer: t }),
              });
    },
    v = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: h,
                isFetchingChurnDiscountOffer: O,
                planId: v,
            } = (0, g.X)(),
            S = (0, l.bG)([d.default], () => {
                let e = d.default.getCurrentUser();
                return s()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
            });
        i.useEffect(() => {
            (0, u.A)(S.id, S.getAvatarURL(null, 80));
        }, [S]);
        let I = (0, p.A)(),
            T = "US" === I.ipCountryCode && "CA" === I.ipSubdivisionCode;
        if (O)
            return (0, r.jsx)(o.Modal, {
                transitionState: e,
                title: "",
                actions: [],
                onClose: async () => {
                    t();
                },
            });
        let C = (0, f.Zb)(v),
            N = C ? y.intl.string(b.default.z2vO3h) : y.intl.string(y.t.PWq8TL),
            R = C ? y.intl.formatToPlainString(b.default.stVlc6, { cooldownMonths: E.wl }) : y.intl.string(y.t.SOC4ML),
            w = [];
        return (
            null != h
                ? w.push({
                      text: y.intl.string(y.t.zrCzVB),
                      onClick: () => a(m.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: c.tvc,
                  })
                : w.push({
                      text: y.intl.string(y.t.h9tkAK),
                      onClick: () => t(),
                      variant: "secondary",
                  }),
            w.push({
                text: T ? y.intl.string(y.t.PfnxqD) : y.intl.string(y.t["3PatSz"]),
                onClick: () => a(m.g.CONFIRM),
                variant: "primary",
            }),
            (0, r.jsx)(o.Modal, {
                transitionState: e,
                title: N,
                subtitle: R,
                actions: w,
                preview: null !== h && (0, r.jsx)(A, { churnUserDiscountOffer: h }),
                onClose: async () => t(),
                children: (0, r.jsx)(_.l, {
                    currentUser: S,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

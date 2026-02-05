"use strict";
n.d(t, { Z: () => S }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    u = n(397927),
    c = n(576622),
    d = n(287809),
    _ = n(927578),
    f = n(477421),
    p = n(96304),
    h = n(816252),
    m = n(473702),
    g = n(916974),
    E = n(88001),
    A = n(519412),
    I = n(985018),
    T = n(426771);
let y = (e) => {
        let { churnUserDiscountOffer: t } = e;
        return null == t
            ? null
            : (0, r.jsx)("div", { className: T.i, children: (0, r.jsx)(h._, { userDiscountOffer: t }) });
    },
    S = () => {
        let {
                transitionState: e,
                onClose: t,
                premiumType: n,
                setStep: a,
                churnUserDiscountOffer: h,
                isFetchingChurnDiscountOffer: T,
                planId: S,
            } = (0, g.X)(),
            v = (0, l.bG)([d.default], () => {
                let e = d.default.getCurrentUser();
                return s()(null != e, "ProfileItem: currentUser cannot be undefined"), e;
            });
        i.useEffect(() => {
            (0, c.A)(v.id, v.getAvatarURL(null, 80));
        }, [v]);
        let C = (0, f.A)(),
            b = "US" === C.ipCountryCode && "CA" === C.ipSubdivisionCode;
        if (T)
            return (0, r.jsx)(o.Modal, {
                transitionState: e,
                title: "",
                actions: [],
                onClose: async () => {
                    t();
                },
            });
        let N = (0, _.Zb)(S),
            R = N ? I.intl.string(A.default.z2vO3h) : I.intl.string(I.t.PWq8TL),
            O = N ? I.intl.formatToPlainString(A.default.stVlc6, { cooldownMonths: E.wl }) : I.intl.string(I.t.SOC4ML),
            D = [];
        return (
            null != h
                ? D.push({
                      text: I.intl.string(I.t.zrCzVB),
                      onClick: () => a(m.g.CONFIRM_DISCOUNT),
                      variant: "secondary",
                      icon: u.tvc,
                  })
                : D.push({ text: I.intl.string(I.t.h9tkAK), onClick: () => t(), variant: "secondary" }),
            D.push({
                text: b ? I.intl.string(I.t.PfnxqD) : I.intl.string(I.t["3PatSz"]),
                onClick: () => a(m.g.CONFIRM),
                variant: "primary",
            }),
            (0, r.jsx)(o.Modal, {
                transitionState: e,
                title: R,
                subtitle: O,
                actions: D,
                preview: null !== h && (0, r.jsx)(y, { churnUserDiscountOffer: h }),
                onClose: async () => t(),
                children: (0, r.jsx)(p.l, {
                    currentUser: v,
                    premiumType: n,
                    onClose: t,
                    isDowngrade: !1,
                    isPremiumRebrand: !0,
                }),
            })
        );
    };

var l = n(604913),
    i = n(306396),
    r = n(518865);
n.d(
    t,
    {},
    {
        L0: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (null != n) return n;
            switch (t?.tenantMetadata?.collectibles?.type) {
                case l.hE.COLLECT_AND_CLAIM:
                    return (0, i.av)(e, t);
                case l.hE.TARGETED_OFFER:
                    return (0, r.PY)(e, t);
                default:
                    return null;
            }
        },
        fP: function (e) {
            return e?.rewardConfig?.discount?.fiatEnabled === !0;
        },
        g5: function (e, t) {
            let n = t?.rewardConfig?.discount?.id;
            return null != n && e?.getDiscountIdIfExists() === String(n);
        },
    },
);

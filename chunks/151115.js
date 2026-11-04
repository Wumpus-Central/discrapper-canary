var l = n(604913),
    i = n(306396),
    r = n(518865);
n.d(
    t,
    {},
    {
        L: function (e, t) {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case l.hE.COLLECT_AND_CLAIM:
                    return (0, i.av)(e, t);
                case l.hE.TARGETED_OFFER:
                    return (0, r.PY)(e, t);
                default:
                    return null;
            }
        },
    },
);

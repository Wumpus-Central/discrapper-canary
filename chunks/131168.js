var i = n(855986),
    r = n(166403),
    s = n(19191),
    l = n(739053),
    a = n(432779),
    o = n(682901);
n.d(
    t,
    {},
    {
        p: function () {
            let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
                t = s.A.isFetchingOffer(),
                n = s.A.hasFetchedOffer(),
                c = (0, a.A)(o.q),
                d = (0, a.A)(o.W7),
                u = (0, a.A)(o.Qo),
                h = (0, a.A)(o.EG),
                C = (0, a.A)(o.Ki),
                E = c ?? d ?? u ?? h ?? C ?? null;
            return e?.canceledAt == null ? null : null != E ? E : (t || n || (0, l.Vn)(), null);
        },
    },
);

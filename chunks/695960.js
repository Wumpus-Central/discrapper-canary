var l = n(855986),
    r = n(436912),
    s = n(198329),
    a = n(654512);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, l.bG)([r.A], () => (null != e ? r.A.getSequencedOffersForCollection(e) : null)),
                n = (0, a.A)(e);
            return null == t || 0 === t.promotions.length || (0, s.YB)(t, null != n, new Date().getTime()) ? null : t;
        },
    },
);

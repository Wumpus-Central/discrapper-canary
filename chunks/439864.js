var i = n(649852),
    r = n.n(i),
    a = n(243264),
    s = n(929396),
    l = n(649079),
    o = n(518805);
let d = r()(
    (e, t) => {
        o.Y.fetchMany([e, t]);
    },
    200,
    { leading: !0, maxWait: 500 },
);
n.d(
    t,
    {},
    {
        q: function (e, t, n) {
            let i = null != n ? (0, l.$g)(n, t) : null;
            i?.onQuery(e);
            let r = (0, s.C7)(e);
            if (null == r) return null;
            d(r, t);
            let o = a.A.getClosestResults(r, t),
                c = (o?.results ?? []).filter(s.qS);
            return (null != o && i?.onResults(o.query, c), c);
        },
    },
);

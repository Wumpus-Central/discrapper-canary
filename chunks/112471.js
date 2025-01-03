n.d(t, {
    q: function () {
        return c;
    }
}),
    n(47120),
    n(653041),
    n(733860);
var i = n(192379),
    r = n(442837),
    l = n(537883),
    a = n(356164),
    s = n(164991),
    o = n(128449);
function c() {
    let e = s.Z.useField('fetchedQuery'),
        t = s.Z.useField('resultsInitialCategoryId'),
        n = s.Z.useField('languageCode'),
        c = (0, r.e7)([a.Z], () => {
            if (null == t) return 0;
            let i = a.Z.getTotal({
                categoryId: t,
                query: e,
                languageCode: n
            });
            return null != i ? i : 0;
        }),
        d = (0, r.e7)([a.Z], () => {
            let t = a.Z.getTotal({
                categoryId: o.Hk,
                query: e,
                languageCode: n
            });
            return null != t ? t : 0;
        }),
        u = (0, r.e7)([l.Z], () => l.Z.getVisibleTabs());
    return i.useMemo(() => {
        if (null == u) return null;
        if (null == t) return u;
        let e = [],
            n = new Set();
        for (let [t, i] of u) n.add(t), e.push([t, i]);
        let i = !1;
        return !n.has(o.Hk) && (n.add(o.Hk), e.unshift([o.Hk, d]), (i = !0)), !n.has(t) && (n.add(t), e.push([t, c]), (i = !0)), i ? e : u;
    }, [u, t, d, c]);
}

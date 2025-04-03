n.d(t, { q: () => c }), n(47120), n(653041), n(733860);
var r = n(192379),
    i = n(442837),
    l = n(537883),
    a = n(356164),
    o = n(164991),
    s = n(128449);
function c() {
    let e = o.Z.useField('fetchedQuery'),
        t = o.Z.useField('resultsInitialCategoryId'),
        n = o.Z.useField('languageCode'),
        c = (0, i.e7)([a.Z], () => {
            if (null == t) return 0;
            let r = a.Z.getTotal({
                categoryId: t,
                query: e,
                languageCode: n
            });
            return null != r ? r : 0;
        }),
        u = (0, i.e7)([a.Z], () => {
            let t = a.Z.getTotal({
                categoryId: s.Hk,
                query: e,
                languageCode: n
            });
            return null != t ? t : 0;
        }),
        d = (0, i.e7)([l.Z], () => l.Z.getVisibleTabs());
    return r.useMemo(() => {
        if (null == d) return null;
        if (null == t) return d;
        let e = [],
            n = new Set();
        for (let [t, r] of d) n.add(t), e.push([t, r]);
        let r = !1;
        return n.has(s.Hk) || (n.add(s.Hk), e.unshift([s.Hk, u]), (r = !0)), n.has(t) || (n.add(t), e.push([t, c]), (r = !0)), r ? e : d;
    }, [d, t, u, c]);
}

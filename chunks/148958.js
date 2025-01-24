t.d(n, {
    h: function () {
        return d;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    l = t(442837),
    o = t(581364),
    a = t(675478),
    r = t(709054),
    s = t(822245),
    c = t(526761);
function d(e, n) {
    i.useEffect(() => {
        a.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, l.e7)([s.Z], () => s.Z.getApplicationFrecencyWithoutLoadingLatest()),
        d = i.useMemo(
            () =>
                null == n || 0 === n.length
                    ? e
                    : e.map((e) => {
                          var t;
                          return {
                              ...e,
                              isUserApp: null !== (t = null == n ? void 0 : n.some((n) => n.application.id === e.id)) && void 0 !== t && t
                          };
                      }),
            [e, n]
        ),
        u = i.useMemo(() => (null == n ? void 0 : n.filter((n) => !e.some((e) => e.id === n.application.id))), [e, n]),
        m = i.useMemo(() => {
            var e;
            null == u ||
                u.forEach((e) => {
                    let n = r.default.extractTimestamp(e.id);
                    null == t.getEntry(e.application.id) && t.track(e.application.id, n);
                }),
                t.compute();
            let n = null !== (e = null == u ? void 0 : u.map((e) => (0, o.X0)(e.application, !0))) && void 0 !== e ? e : [],
                i = [...d];
            return (
                i.push(...n),
                i.sort((e, n) => {
                    var i, l;
                    let o = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (l = t.getScore(e.id)) && void 0 !== l ? l : 0);
                    return 0 !== o ? o : e.name.localeCompare(n.name);
                }),
                i
            );
        }, [d, t, u]);
    return i.useMemo(() => {
        var e, i;
        let l, o;
        null == n ||
            n.forEach((e) => {
                let n = r.default.extractTimestamp(e.id);
                (null == o || n > o) && ((l = e), (o = n));
            }),
            d.forEach((e) => {
                var n, i;
                let a = Math.max(...(null !== (i = null === (n = t.getEntry(e.id)) || void 0 === n ? void 0 : n.recentUses) && void 0 !== i ? i : []));
                (null == o || a > o) && ((l = e), (o = a));
            });
        let a = null !== (i = null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : '',
            s = m.filter((e) => e.id === a);
        return [...s, ...m.filter((e) => e.id !== a)];
    }, [m, d, t, n]);
}

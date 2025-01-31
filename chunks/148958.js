n.d(t, { h: () => d }), n(47120), n(653041);
var i = n(192379),
    l = n(442837),
    a = n(581364),
    o = n(675478),
    s = n(709054),
    r = n(822245),
    c = n(526761);
function d(e, t) {
    i.useEffect(() => {
        o.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let n = (0, l.e7)([r.Z], () => r.Z.getApplicationFrecencyWithoutLoadingLatest()),
        d = i.useMemo(
            () =>
                null == t || 0 === t.length
                    ? e
                    : e.map((e) => {
                          var n;
                          return {
                              ...e,
                              isUserApp: null !== (n = null == t ? void 0 : t.some((t) => t.application.id === e.id)) && void 0 !== n && n
                          };
                      }),
            [e, t]
        ),
        u = i.useMemo(() => (null == t ? void 0 : t.filter((t) => !e.some((e) => e.id === t.application.id))), [e, t]),
        m = i.useMemo(() => {
            var e;
            null == u ||
                u.forEach((e) => {
                    let t = s.default.extractTimestamp(e.id);
                    null == n.getEntry(e.application.id) && n.track(e.application.id, t);
                }),
                n.compute();
            let t = null !== (e = null == u ? void 0 : u.map((e) => (0, a.X0)(e.application, !0))) && void 0 !== e ? e : [],
                i = [...d];
            return (
                i.push(...t),
                i.sort((e, t) => {
                    var i, l;
                    let a = (null !== (i = n.getScore(t.id)) && void 0 !== i ? i : 0) - (null !== (l = n.getScore(e.id)) && void 0 !== l ? l : 0);
                    return 0 !== a ? a : e.name.localeCompare(t.name);
                }),
                i
            );
        }, [d, n, u]);
    return i.useMemo(() => {
        var e, i;
        let l, a;
        null == t ||
            t.forEach((e) => {
                let t = s.default.extractTimestamp(e.id);
                (null == a || t > a) && ((l = e), (a = t));
            }),
            d.forEach((e) => {
                var t, i;
                let o = Math.max(...(null !== (i = null === (t = n.getEntry(e.id)) || void 0 === t ? void 0 : t.recentUses) && void 0 !== i ? i : []));
                (null == a || o > a) && ((l = e), (a = o));
            });
        let o = null !== (i = null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : '';
        return [...m.filter((e) => e.id === o), ...m.filter((e) => e.id !== o)];
    }, [m, d, n, t]);
}

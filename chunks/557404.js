n.d(t, { $: () => r });
var l = n(64700),
    i = n(576420);
function r(e) {
    let {
            scrollerRef: t,
            favoriteTargetIds: n,
            getScrollTargetForTargetId: r,
            getFallbackScrollTarget: s,
            padding: a = 8,
            animate: u = !1,
        } = e,
        o = i.Ay.useState((e) => e.recentlyAddedFavoriteTimestampMsByKey),
        d = l.useMemo(
            () =>
                (function (e) {
                    let { targetIds: t, timestampsByKey: n } = e,
                        l = Date.now(),
                        r = null;
                    for (let e of t) {
                        let t = n[e];
                        null == t ||
                            t > l ||
                            (!(l - t > i.WS) &&
                                (null == r || t > r.addedTimestampMs) &&
                                (r = { targetId: e, addedTimestampMs: t }));
                    }
                    return r;
                })({ targetIds: n, timestampsByKey: o }),
            [n, o],
        ),
        c = l.useRef(null);
    l.useEffect(() => {
        if (null == d) return;
        let e = c.current;
        if (e?.targetId === d.targetId && e.addedTimestampMs === d.addedTimestampMs) return;
        let n = t.current;
        if (null == n) return;
        let l = r(d.targetId) ?? s?.() ?? null;
        null != l && ((c.current = d), n.scrollToIndex({ section: l.section, row: l.row, padding: a, animate: u }));
    }, [u, d, s, r, a, t]);
}

n.d(t, { Z: () => s }), n(388685), n(539854);
var r = n(876215),
    i = n(389147),
    l = n(60902),
    a = n(935302);
function s(e) {
    let { entries: t } = e,
        { enabled: n } = a.C.useConfig({ location: "useDedupeFortnite" }),
        { data: s } = (0, l.K)(i.B);
    if (null == t || !n || 0 === t.length || null == s) return t;
    let o = [],
        c = !1,
        d = !1;
    for (let e of t) {
        if (
            e.content_type === r.s.TOP_GAME ||
            e.content_type === r.s.PLAYED_GAME ||
            e.content_type === r.s.LAUNCHED_ACTIVITY
        ) {
            if (e.extra.application_id === s.fortniteId) {
                if (c) continue;
                c = !0;
            }
            if (s.isFortniteTrial(e.extra.application_id)) {
                if (d) continue;
                d = !0;
            }
        }
        o.push(e);
    }
    return c || d ? o : t;
}

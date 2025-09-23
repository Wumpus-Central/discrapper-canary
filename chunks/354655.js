n.d(t, { Z: () => l }), n(388685), n(539854);
var r = n(876215),
    i = n(935302);
function l(e) {
    let { entries: t } = e,
        { enabled: n } = i.C.useConfig({ location: "useDedupeFortnite" });
    if (null == t || !n || 0 === t.length) return t;
    let l = [],
        a = !1,
        s = !1;
    for (let e of t) {
        if (
            e.content_type === r.s.TOP_GAME ||
            e.content_type === r.s.PLAYED_GAME ||
            e.content_type === r.s.LAUNCHED_ACTIVITY
        ) {
            if ("1402418703554842694" === e.extra.application_id) {
                if (a) continue;
                a = !0;
            }
            if ("1389986893399199907" === e.extra.application_id) {
                if (s) continue;
                s = !0;
            }
        }
        l.push(e);
    }
    return a || s ? l : t;
}

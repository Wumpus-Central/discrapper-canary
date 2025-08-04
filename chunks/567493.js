(n.d(t, {
    KF: () => m,
    hQ: () => g,
    im: () => p
}),
    n(388685),
    n(361932),
    n(187205),
    n(539854));
var r = n(73800),
    i = n(661869),
    a = n(876215),
    o = n(884439),
    s = n(442837),
    l = n(271383),
    c = n(158776),
    u = n(709054),
    d = n(107866),
    f = n(206583);
let _ = (e, t) => {
    let n = e.filter((e) => null != e.activity.application_id && f.yh.includes(e.activity.application_id)),
        r = t.filter((e) => null != e.activity.application_id && f.yh.includes(e.activity.application_id));
    if (n.length !== r.length) return !1;
    let i = new Set(n.map((e) => ''.concat(e.userId, '-').concat(e.activity.session_id, '-').concat(e.activity.application_id))),
        a = new Set(r.map((e) => ''.concat(e.userId, '-').concat(e.activity.session_id, '-').concat(e.activity.application_id)));
    if (i.size !== a.size) return !1;
    for (let e of i) if (!a.has(e)) return !1;
    return !0;
};
function p(e) {
    let t = (0, s.e7)([c.Z], () => (null != e && f.Hw.includes(e) ? f.yh.flatMap((e) => c.Z.getAllApplicationActivities(e)) : []), [e], _);
    return r.useMemo(() => (null == e || 0 === t.length ? [] : h(e, t)), [e, t]);
}
function h(e, t) {
    if (!f.Hw.includes(e)) return [];
    let n = [];
    return (
        t.forEach((t) => {
            var r, s, c;
            let d = t.userId;
            if (null == d || !l.ZP.isMember(e, d) || null == t.activity.application_id || '' === t.activity.name) return;
            let f = null != (c = null != (s = null == (r = t.activity.timestamps) ? void 0 : r.start) ? s : t.activity.created_at) ? c : Date.now(),
                _ = {
                    id: u.default.fromTimestamp(f),
                    author_id: d,
                    author_type: i.i.USER,
                    content_type: a.s.PLAYED_GAME,
                    participants: [d],
                    expires_at: new Date(Date.now() + 300000).toISOString(),
                    traits: [
                        {
                            type: o.N.IS_LIVE,
                            is_live: !0
                        },
                        {
                            type: o.N.DURATION_SECONDS,
                            duration_seconds: Math.floor((Date.now() - f) / 1000)
                        }
                    ],
                    extra: {
                        type: 'gamescom_demo_content_extra',
                        game_name: t.activity.name,
                        application_id: t.activity.application_id,
                        is_gamescom_demo_content: !0
                    }
                };
            n.push(_);
        }),
        n
    );
}
function m(e) {
    return 'gamescom_demo_content_extra' === e.extra.type;
}
function g(e, t) {
    return (0, d.C)(e, t);
}

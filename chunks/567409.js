n.d(t, { Ns: () => h }), n(388685);
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    l = n(876215),
    o = n(442837),
    s = n(146282),
    c = n(26033),
    u = n(897674),
    d = n(709054),
    p = n(206583);
let m = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
    f = (e) => m.has(e.content_type);
function h(e) {
    let { entries: t } = (function () {
        let e = (0, u.Z)(p.YN.GAME_PROFILE_FEED),
            t = (0, u.Z)(p.YN.GLOBAL_FEED),
            n = r.useMemo(
                () =>
                    a()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(f)
                        .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, o.e7)([s.Z], () => s.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return r.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

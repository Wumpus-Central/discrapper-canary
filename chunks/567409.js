n.d(t, { Ns: () => m }), n(388685);
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(876215),
    l = n(442837),
    c = n(146282),
    u = n(26033),
    s = n(897674),
    d = n(709054),
    _ = n(206583);
let f = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
    p = (e) => f.has(e.content_type);
function m(e) {
    let { entries: t } = (function () {
        let e = (0, s.Z)(_.YN.GAME_PROFILE_FEED),
            t = (0, s.Z)(_.YN.GLOBAL_FEED),
            n = r.useMemo(
                () =>
                    o()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(p)
                        .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, l.e7)([c.Z], () => c.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return r.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, u.dX)(t) || (0, u.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

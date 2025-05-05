n.d(t, { Ns: () => p }), n(388685);
var r = n(73800),
    a = n(392711),
    i = n.n(a),
    o = n(876215),
    l = n(442837),
    c = n(146282),
    s = n(26033),
    u = n(897674),
    _ = n(709054),
    d = n(206583);
let f = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
    m = (e) => f.has(e.content_type);
function p(e) {
    let { entries: t } = (function () {
        let e = (0, u.Z)(d.YN.GAME_PROFILE_FEED),
            t = (0, u.Z)(d.YN.GLOBAL_FEED),
            n = r.useMemo(
                () =>
                    i()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(m)
                        .orderBy((e) => _.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, l.e7)([c.Z], () => c.Z.getFeedRequestId(d.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return r.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, s.dX)(t) || (0, s.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

n.d(t, { Ns: () => h }), n(47120);
var i = n(192379),
    o = n(392711),
    r = n.n(o),
    a = n(876215),
    c = n(442837),
    s = n(146282),
    l = n(26033),
    d = n(897674),
    u = n(709054),
    _ = n(206583);
let f = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
    p = (e) => f.has(e.content_type);
function h(e) {
    let { entries: t } = (function () {
        let e = (0, d.Z)(_.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(_.YN.GLOBAL_FEED),
            n = i.useMemo(
                () =>
                    r()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(p)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, c.e7)([s.Z], () => s.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return i.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, l.dX)(t) || (0, l.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

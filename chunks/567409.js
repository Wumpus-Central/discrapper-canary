n.d(t, { Ns: () => h }), n(47120);
var i = n(192379),
    r = n(392711),
    o = n.n(r),
    a = n(876215),
    s = n(442837),
    c = n(146282),
    d = n(26033),
    l = n(897674),
    u = n(709054),
    _ = n(206583);
let f = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
    p = (e) => f.has(e.content_type);
function h(e) {
    let { entries: t } = (function () {
        let e = (0, l.Z)(_.YN.GAME_PROFILE_FEED),
            t = (0, l.Z)(_.YN.GLOBAL_FEED),
            n = i.useMemo(
                () =>
                    o()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(p)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, s.e7)([c.Z], () => c.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return i.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, d.dX)(t) || (0, d.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

n.d(t, { Ns: () => h }), n(47120);
var i = n(192379),
    r = n(392711),
    a = n.n(r),
    o = n(876215),
    s = n(442837),
    d = n(146282),
    c = n(26033),
    l = n(897674),
    u = n(709054),
    _ = n(206583);
let f = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
    p = (e) => f.has(e.content_type);
function h(e) {
    let { entries: t } = (function () {
        let e = (0, l.Z)(_.YN.GAME_PROFILE_FEED),
            t = (0, l.Z)(_.YN.GLOBAL_FEED),
            n = i.useMemo(
                () =>
                    a()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(p)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, s.e7)([d.Z], () => d.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return i.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

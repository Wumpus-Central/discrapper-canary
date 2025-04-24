r.d(t, { Ns: () => p }), r(388685);
var n = r(192379),
    i = r(392711),
    a = r.n(i),
    l = r(876215),
    s = r(442837),
    o = r(146282),
    c = r(26033),
    u = r(897674),
    d = r(709054),
    m = r(206583);
let g = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
    f = (e) => g.has(e.content_type);
function p(e) {
    let { entries: t } = (function () {
        let e = (0, u.Z)(m.YN.GAME_PROFILE_FEED),
            t = (0, u.Z)(m.YN.GLOBAL_FEED),
            r = n.useMemo(
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
            requestId: (0, s.e7)([o.Z], () => o.Z.getFeedRequestId(m.YN.GAME_PROFILE_FEED)),
            entries: r
        };
    })();
    return n.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

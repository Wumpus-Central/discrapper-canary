r.d(t, { Ns: () => g }), r(47120);
var n = r(192379),
    a = r(392711),
    o = r.n(a),
    i = r(876215),
    l = r(442837),
    s = r(146282),
    c = r(26033),
    u = r(897674),
    d = r(709054),
    p = r(206583);
let f = new Set([i.s.PLAYED_GAME, i.s.LAUNCHED_ACTIVITY]),
    m = (e) => f.has(e.content_type);
function g(e) {
    let { entries: t } = (function () {
        let e = (0, u.Z)(p.YN.GAME_PROFILE_FEED),
            t = (0, u.Z)(p.YN.GLOBAL_FEED),
            r = n.useMemo(
                () =>
                    o()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(m)
                        .orderBy((e) => d.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(p.YN.GAME_PROFILE_FEED)),
            entries: r
        };
    })();
    return n.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

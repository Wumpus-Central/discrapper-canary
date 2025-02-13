n.d(t, { Ns: () => p }), n(47120);
var r = n(192379),
    a = n(392711),
    i = n.n(a),
    o = n(876215),
    l = n(442837),
    s = n(146282),
    c = n(26033),
    d = n(897674),
    u = n(709054),
    m = n(206583);
let _ = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
    g = (e) => _.has(e.content_type);
function p(e) {
    let { entries: t } = (function () {
        let e = (0, d.Z)(m.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(m.YN.GLOBAL_FEED),
            n = r.useMemo(
                () =>
                    i()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(g)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, l.e7)([s.Z], () => s.Z.getFeedRequestId(m.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return r.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, c.dX)(t) || (0, c.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

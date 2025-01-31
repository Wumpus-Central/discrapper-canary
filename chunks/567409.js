n.d(t, { Ns: () => p }), n(47120);
var i = n(192379),
    a = n(392711),
    o = n.n(a),
    r = n(876215),
    s = n(442837),
    l = n(146282),
    d = n(26033),
    c = n(897674),
    _ = n(709054),
    u = n(206583);
let h = new Set([r.s.PLAYED_GAME, r.s.LAUNCHED_ACTIVITY]),
    f = (e) => h.has(e.content_type);
function p(e) {
    let { entries: t } = (function () {
        let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED),
            t = (0, c.Z)(u.YN.GLOBAL_FEED),
            n = i.useMemo(
                () =>
                    o()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(f)
                        .orderBy((e) => _.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, s.e7)([l.Z], () => l.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return i.useMemo(() => (null == t ? void 0 : t.filter((t) => ((0, d.dX)(t) || (0, d.Mq)(t)) && t.extra.application_id === e)), [t, e]);
}

n.d(t, { A: () => C, t: () => y });
var l = n(582128),
    i = n(17928),
    r = n(554146),
    s = n(826673),
    a = n(617617),
    o = n(71393),
    u = n(287809),
    c = n(935208),
    d = n(209932),
    h = n(49999);
let m = Date.parse("2026-10-28T00:00:00Z"),
    f = c.default.fromTimestamp(m);
function p(e) {
    let t = a.A.getGuildDismissedContentState(e)?.[r.M.SOUNDBOARD_NEW_SOUNDS_BADGE]?.lastDismissedObjectId;
    return null == t || "0" === t ? null : t;
}
function g(e, t) {
    return null != t && 1 === c.default.compare(t, e) ? t : e;
}
function x(e) {
    let t = o.A.getGuild(e)?.joinedAt;
    return null == t ? null : g(g(f, c.default.fromTimestamp(t.getTime())), p(e));
}
function E() {
    return new Map(o.A.getGuildIds().map((e) => [e, x(e)]));
}
function S(e, t, n) {
    return null != t && !!e.available && e.userId !== n && 1 === c.default.compare(e.soundId, t);
}
function y(e) {
    return (0, i.bG)([u.default, d.A], () => {
        if (null == e) return !1;
        let t = u.default.getCurrentUser()?.id,
            n = x(e);
        return (d.A.getSoundsForGuild(e) ?? []).some((e) => S(e, n, t));
    });
}
function C() {
    let e = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.id),
        [t] = l.useState(E),
        n = l.useRef(new Set());
    return {
        isNewSound: l.useCallback((n) => S(n, t.get(n.guildId) ?? null, e), [e, t]),
        markGuildSeen: l.useCallback((e) => {
            if (n.current.has(e)) return;
            let t = (function (e) {
                    let t = null;
                    for (let n of e) (null == t || 1 === c.default.compare(n.soundId, t)) && (t = n.soundId);
                    return t;
                })(d.A.getSoundsForGuild(e) ?? []),
                l = p(e);
            null != t &&
                (null == l || 1 === c.default.compare(t, l)) &&
                (n.current.add(e),
                (0, s.in)(r.M.SOUNDBOARD_NEW_SOUNDS_BADGE, t, e, { dismissAction: h.i.INDIRECT_ACTION, guildId: e }));
        }, []),
    };
}

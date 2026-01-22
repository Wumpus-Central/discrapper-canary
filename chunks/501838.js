n.d(t, {
    K6: () => c,
    gT: () => d,
    hJ: () => p,
    l1: () => u,
    ok: () => f,
}),
    n(896048);
var r = n(311907),
    i = n(517164),
    a = n(20805),
    s = n(15285),
    o = n(622543),
    l = n(290863);
function c(e) {
    let { userIds: t, gameIds: n } = e;
    return (0, r.bG)(
        [i.A],
        () =>
            t.some((e) => {
                var t;
                return null == (t = i.A.getUserOutbox(e))
                    ? void 0
                    : t.entries.some((e) => null != e && (0, a.zD)(e) && n.has(e.extra.application_id));
            }),
        [n, t],
    );
}
function u(e) {
    let { userIds: t, guildIdsWithGameStores: n } = e;
    return (0, r.bG)([o.A], () => {
        for (let e of t) {
            let t = o.A.getMutualGuilds(e);
            if (null != t) {
                for (let e of t) if (n.has(e.guild.id)) return !0;
            }
        }
        return !1;
    }, [n, t]);
}
function d(e) {
    let { userIds: t, gameIds: n } = e;
    return (0, r.bG)([l.A], () => {
        for (let e of t)
            for (let t of l.A.getActivities(e)) if (null != t.application_id && n.has(t.application_id)) return !0;
        return !1;
    }, [n, t]);
}
function f(e) {
    let { gameIds: t } = e;
    return (0, r.bG)([s.Ay], () => s.Ay.getGamesSeen(!1, !1).some((e) => null != e.id && t.has(e.id)), [t]);
}
function p(e) {
    let { gameIds: t } = e;
    return (0, r.bG)(
        [s.Ay],
        () => s.Ay.getRunningGames().some((e) => null != e.id && t.has(e.id) && s.Ay.isDetectionEnabled(e)),
        [t],
    );
}

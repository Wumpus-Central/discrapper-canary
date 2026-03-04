"use strict";
n.d(t, { K6: () => d, gT: () => f, hJ: () => h, l1: () => _, ok: () => p });
var r = n(311907),
    i = n(517164),
    s = n(20805),
    a = n(15285),
    o = n(622543),
    l = n(290863),
    u = n(533562),
    c = n(652215);
function d(e) {
    let { userIds: t, gameIds: n } = e;
    return (0, r.bG)(
        [i.A],
        () =>
            t.some((e) =>
                i.A.getUserOutbox(e)?.entries.some((e) => null != e && (0, s.zD)(e) && n.has(e.extra.application_id)),
            ),
        [n, t],
    );
}
function _(e) {
    return (0, r.bG)([o.A], () => {
        for (let t of e) {
            let e = o.A.getMutualGuilds(t);
            if (null != e) {
                for (let t of e) if (t.guild.features.has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)) return !0;
            }
        }
        return !1;
    }, [e]);
}
function f(e) {
    let { userIds: t, gameIds: n } = e,
        i = (0, r.bG)([l.A], () => {
            for (let e of t)
                for (let t of l.A.getActivities(e)) if (null != t.application_id && n.has(t.application_id)) return !0;
            return !1;
        }, [n, t]),
        s = (0, u.W)();
    return i || null != s;
}
function p(e) {
    let { gameIds: t } = e;
    return (0, r.bG)([a.Ay], () => a.Ay.getGamesSeen(!1, !1).some((e) => null != e.id && t.has(e.id)), [t]);
}
function h(e) {
    let { gameIds: t } = e;
    return (0, r.bG)(
        [a.Ay],
        () => a.Ay.getRunningGames().some((e) => null != e.id && t.has(e.id) && a.Ay.isDetectionEnabled(e)),
        [t],
    );
}

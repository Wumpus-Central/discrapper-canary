"use strict";
n.d(t, { mn: () => _, px: () => m, qx: () => p, rY: () => E, tR: () => f, w: () => h }), n(321073);
var i = n(17928),
    r = n(517164),
    s = n(20805),
    a = n(328153),
    o = n(841595),
    l = n(71393),
    u = n(290863),
    c = n(832163),
    d = n(533562);
function _(e) {
    let { userIds: t } = e;
    return (0, i.yK)([r.A, c.A], () => {
        let e = [];
        for (let n of t)
            for (let t of r.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, s.zD)(t)) {
                    let n = c.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function f(e) {
    return (0, i.yK)([o.A, c.A], () => {
        let t = [];
        for (let n of e) {
            let e = o.A.getMutualGuilds(n);
            if (null != e) {
                for (let n of e)
                    if (c.A.getStorefrontGuildIds().has(n.guild.id)) {
                        let e = c.A.getApplicationIdFromGuildId(n.guild.id);
                        null != e && t.push(e);
                    }
            }
        }
        return t;
    }, [e]);
}
function h(e) {
    let { userIds: t } = e,
        n = (0, i.yK)([u.A, c.A], () => {
            let e = [];
            for (let n of t)
                for (let t of u.A.getActivities(n))
                    if (null != t.application_id) {
                        let n = c.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [t]),
        r = (0, d.W)();
    return null != r ? [...n, r] : n;
}
function p() {
    return (0, i.yK)([a.Ay, c.A], () => {
        let e = [];
        for (let t of a.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function E() {
    return (0, i.yK)([a.Ay, c.A], () => {
        let e = [];
        for (let t of a.Ay.getRunningGames())
            if (null != t.id && a.Ay.isDetectionEnabled(t)) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function m() {
    let e = (0, i.bG)([l.A], () => l.A.getGuildIds());
    return (0, i.yK)([c.A], () => {
        let t = [];
        for (let n of e) {
            let e = c.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

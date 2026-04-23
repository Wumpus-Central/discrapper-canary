"use strict";
n.d(t, { mn: () => _, px: () => m, qx: () => h, rY: () => E, tR: () => f, w: () => p }), n(321073);
var r = n(311907),
    i = n(517164),
    s = n(20805),
    a = n(15285),
    o = n(622543),
    l = n(71393),
    u = n(290863),
    c = n(832163),
    d = n(533562);
function _(e) {
    let { userIds: t } = e;
    return (0, r.yK)([i.A, c.A], () => {
        let e = [];
        for (let n of t)
            for (let t of i.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, s.zD)(t)) {
                    let n = c.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function f(e) {
    return (0, r.yK)([o.A, c.A], () => {
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
function p(e) {
    let { userIds: t } = e,
        n = (0, r.yK)([u.A, c.A], () => {
            let e = [];
            for (let n of t)
                for (let t of u.A.getActivities(n))
                    if (null != t.application_id) {
                        let n = c.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [t]),
        i = (0, d.W)();
    return null != i ? [...n, i] : n;
}
function h() {
    return (0, r.yK)([a.Ay, c.A], () => {
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
    return (0, r.yK)([a.Ay, c.A], () => {
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
    let e = (0, r.bG)([l.A], () => l.A.getGuildIds());
    return (0, r.yK)([c.A], () => {
        let t = [];
        for (let n of e) {
            let e = c.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

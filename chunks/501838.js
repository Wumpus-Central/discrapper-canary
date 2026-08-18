"use strict";
n.d(t, { mn: () => h, px: () => x, qx: () => p, rY: () => g, tR: () => m, w: () => f }), n(321073);
var l = n(17928),
    i = n(517164),
    s = n(20805),
    r = n(952818),
    a = n(321191),
    o = n(71393),
    u = n(290863),
    c = n(832163),
    d = n(533562);
function h(e) {
    let { userIds: t } = e;
    return (0, l.yK)([i.A, c.A], () => {
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
function m(e) {
    return (0, l.yK)([a.A, c.A], () => {
        let t = [];
        for (let n of e) {
            let e = a.A.getMutualGuilds(n);
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
function f(e) {
    let { userIds: t } = e,
        n = (0, l.yK)([u.A, c.A], () => {
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
function p() {
    return (0, l.yK)([r.Ay, c.A], () => {
        let e = [];
        for (let t of r.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function g() {
    return (0, l.yK)([r.Ay, c.A], () => {
        let e = [];
        for (let t of r.Ay.getRunningGames())
            if (null != t.id && r.Ay.isDetectionEnabled(t)) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function x() {
    let e = (0, l.bG)([o.A], () => o.A.getGuildIds());
    return (0, l.yK)([c.A], () => {
        let t = [];
        for (let n of e) {
            let e = c.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

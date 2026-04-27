"use strict";
l.d(e, { mn: () => f, px: () => g, qx: () => h, rY: () => I, tR: () => p, w: () => A }), l(321073);
var i = l(17928),
    n = l(517164),
    r = l(20805),
    u = l(328153),
    s = l(841595),
    a = l(71393),
    o = l(290863),
    d = l(832163),
    c = l(533562);
function f(t) {
    let { userIds: e } = t;
    return (0, i.yK)([n.A, d.A], () => {
        let t = [];
        for (let l of e)
            for (let e of n.A.getUserOutbox(l)?.entries ?? [])
                if (null != e && (0, r.zD)(e)) {
                    let l = d.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != l && t.push(l);
                }
        return t;
    }, [e]);
}
function p(t) {
    return (0, i.yK)([s.A, d.A], () => {
        let e = [];
        for (let l of t) {
            let t = s.A.getMutualGuilds(l);
            if (null != t) {
                for (let l of t)
                    if (d.A.getStorefrontGuildIds().has(l.guild.id)) {
                        let t = d.A.getApplicationIdFromGuildId(l.guild.id);
                        null != t && e.push(t);
                    }
            }
        }
        return e;
    }, [t]);
}
function A(t) {
    let { userIds: e } = t,
        l = (0, i.yK)([o.A, d.A], () => {
            let t = [];
            for (let l of e)
                for (let e of o.A.getActivities(l))
                    if (null != e.application_id) {
                        let l = d.A.getApplicationIdFromDetectableId(e.application_id);
                        null != l && t.push(l);
                    }
            return t;
        }, [e]),
        n = (0, c.W)();
    return null != n ? [...l, n] : l;
}
function h() {
    return (0, i.yK)([u.Ay, d.A], () => {
        let t = [];
        for (let e of u.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let l = d.A.getApplicationIdFromDetectableId(e.id);
                null != l && t.push(l);
            }
        return t;
    });
}
function I() {
    return (0, i.yK)([u.Ay, d.A], () => {
        let t = [];
        for (let e of u.Ay.getRunningGames())
            if (null != e.id && u.Ay.isDetectionEnabled(e)) {
                let l = d.A.getApplicationIdFromDetectableId(e.id);
                null != l && t.push(l);
            }
        return t;
    }, []);
}
function g() {
    let t = (0, i.bG)([a.A], () => a.A.getGuildIds());
    return (0, i.yK)([d.A], () => {
        let e = [];
        for (let l of t) {
            let t = d.A.getApplicationIdFromGuildId(l);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

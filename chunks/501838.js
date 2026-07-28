"use strict";
n.d(t, { mn: () => _, px: () => f, qx: () => h, rY: () => I, tR: () => E, w: () => A }), n(321073);
var i = n(17928),
    r = n(517164),
    a = n(20805),
    s = n(952818),
    l = n(321191),
    o = n(71393),
    d = n(290863),
    c = n(832163),
    u = n(533562);
function _(e) {
    let { userIds: t } = e;
    return (0, i.yK)([r.A, c.A], () => {
        let e = [];
        for (let n of t)
            for (let t of r.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, a.zD)(t)) {
                    let n = c.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function E(e) {
    return (0, i.yK)([l.A, c.A], () => {
        let t = [];
        for (let n of e) {
            let e = l.A.getMutualGuilds(n);
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
function A(e) {
    let { userIds: t } = e,
        n = (0, i.yK)([d.A, c.A], () => {
            let e = [];
            for (let n of t)
                for (let t of d.A.getActivities(n))
                    if (null != t.application_id) {
                        let n = c.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [t]),
        r = (0, u.W)();
    return null != r ? [...n, r] : n;
}
function h() {
    return (0, i.yK)([s.Ay, c.A], () => {
        let e = [];
        for (let t of s.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function I() {
    return (0, i.yK)([s.Ay, c.A], () => {
        let e = [];
        for (let t of s.Ay.getRunningGames())
            if (null != t.id && s.Ay.isDetectionEnabled(t)) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function f() {
    let e = (0, i.bG)([o.A], () => o.A.getGuildIds());
    return (0, i.yK)([c.A], () => {
        let t = [];
        for (let n of e) {
            let e = c.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

"use strict";
n.d(t, {
    K6: () => f,
    gT: () => m,
    hJ: () => I,
    mn: () => _,
    ok: () => g,
    px: () => T,
    qx: () => E,
    rY: () => A,
    tR: () => p,
    w: () => h,
}),
    n(321073);
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
    let { userIds: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.yK)([i.A, c.A], () => {
        let e = [];
        for (let r of t)
            for (let t of i.A.getUserOutbox(r)?.entries ?? [])
                if (null != t && (0, s.zD)(t) && n.has(t.extra.application_id)) {
                    let n = c.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [n, t]);
}
function f(e) {
    let { userIds: t } = e;
    return _({ userIds: t }).length > 0;
}
function p(e) {
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
function h(e) {
    let { userIds: t } = e,
        n = (0, r.bG)([c.A], () => c.A.getStorefrontDetectableGameAndApplicationIds()),
        i = (0, r.yK)([u.A, c.A], () => {
            let e = [];
            for (let r of t)
                for (let t of u.A.getActivities(r))
                    if (null != t.application_id && n.has(t.application_id)) {
                        let n = c.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [n, t]),
        s = (0, d.W)();
    return null != s ? [...i, s] : i;
}
function m(e) {
    let { userIds: t } = e;
    return h({ userIds: t }).length > 0;
}
function E() {
    let e = (0, r.bG)([c.A], () => c.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.yK)([a.Ay, c.A], () => {
        let t = [];
        for (let n of a.Ay.getGamesSeen(!1, !1))
            if (null != n.id && e.has(n.id)) {
                let e = c.A.getApplicationIdFromDetectableId(n.id);
                null != e && t.push(e);
            }
        return t;
    }, [e]);
}
function g() {
    return E().length > 0;
}
function A() {
    let e = (0, r.bG)([c.A], () => c.A.getStorefrontDetectableGameAndApplicationIds());
    return (0, r.yK)([a.Ay, c.A], () => {
        let t = [];
        for (let n of a.Ay.getRunningGames())
            if (null != n.id && e.has(n.id) && a.Ay.isDetectionEnabled(n)) {
                let e = c.A.getApplicationIdFromDetectableId(n.id);
                null != e && t.push(e);
            }
        return t;
    }, [e]);
}
function I() {
    return A().length > 0;
}
function T() {
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

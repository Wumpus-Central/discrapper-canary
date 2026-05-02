i.d(e, { mn: () => p, px: () => A, qx: () => I, rY: () => f, tR: () => h, w: () => S }), i(321073);
var r = i(17928),
    s = i(517164),
    l = i(20805),
    n = i(328153),
    a = i(841595),
    u = i(71393),
    o = i(290863),
    d = i(832163),
    c = i(533562);
function p(t) {
    let { userIds: e } = t;
    return (0, r.yK)([s.A, d.A], () => {
        let t = [];
        for (let i of e)
            for (let e of s.A.getUserOutbox(i)?.entries ?? [])
                if (null != e && (0, l.zD)(e)) {
                    let i = d.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != i && t.push(i);
                }
        return t;
    }, [e]);
}
function h(t) {
    return (0, r.yK)([a.A, d.A], () => {
        let e = [];
        for (let i of t) {
            let t = a.A.getMutualGuilds(i);
            if (null != t) {
                for (let i of t)
                    if (d.A.getStorefrontGuildIds().has(i.guild.id)) {
                        let t = d.A.getApplicationIdFromGuildId(i.guild.id);
                        null != t && e.push(t);
                    }
            }
        }
        return e;
    }, [t]);
}
function S(t) {
    let { userIds: e } = t,
        i = (0, r.yK)([o.A, d.A], () => {
            let t = [];
            for (let i of e)
                for (let e of o.A.getActivities(i))
                    if (null != e.application_id) {
                        let i = d.A.getApplicationIdFromDetectableId(e.application_id);
                        null != i && t.push(i);
                    }
            return t;
        }, [e]),
        s = (0, c.W)();
    return null != s ? [...i, s] : i;
}
function I() {
    return (0, r.yK)([n.Ay, d.A], () => {
        let t = [];
        for (let e of n.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let i = d.A.getApplicationIdFromDetectableId(e.id);
                null != i && t.push(i);
            }
        return t;
    });
}
function f() {
    return (0, r.yK)([n.Ay, d.A], () => {
        let t = [];
        for (let e of n.Ay.getRunningGames())
            if (null != e.id && n.Ay.isDetectionEnabled(e)) {
                let i = d.A.getApplicationIdFromDetectableId(e.id);
                null != i && t.push(i);
            }
        return t;
    }, []);
}
function A() {
    let t = (0, r.bG)([u.A], () => u.A.getGuildIds());
    return (0, r.yK)([d.A], () => {
        let e = [];
        for (let i of t) {
            let t = d.A.getApplicationIdFromGuildId(i);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

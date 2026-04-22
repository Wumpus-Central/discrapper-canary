i.d(e, { mn: () => p, px: () => f, qx: () => I, rY: () => _, tR: () => S, w: () => h }), i(321073);
var r = i(311907),
    s = i(517164),
    n = i(20805),
    l = i(15285),
    a = i(622543),
    o = i(71393),
    u = i(290863),
    d = i(832163),
    c = i(533562);
function p(t) {
    let { userIds: e } = t;
    return (0, r.yK)([s.A, d.A], () => {
        let t = [];
        for (let i of e)
            for (let e of s.A.getUserOutbox(i)?.entries ?? [])
                if (null != e && (0, n.zD)(e)) {
                    let i = d.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != i && t.push(i);
                }
        return t;
    }, [e]);
}
function S(t) {
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
function h(t) {
    let { userIds: e } = t,
        i = (0, r.yK)([u.A, d.A], () => {
            let t = [];
            for (let i of e)
                for (let e of u.A.getActivities(i))
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
    return (0, r.yK)([l.Ay, d.A], () => {
        let t = [];
        for (let e of l.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let i = d.A.getApplicationIdFromDetectableId(e.id);
                null != i && t.push(i);
            }
        return t;
    });
}
function _() {
    return (0, r.yK)([l.Ay, d.A], () => {
        let t = [];
        for (let e of l.Ay.getRunningGames())
            if (null != e.id && l.Ay.isDetectionEnabled(e)) {
                let i = d.A.getApplicationIdFromDetectableId(e.id);
                null != i && t.push(i);
            }
        return t;
    }, []);
}
function f() {
    let t = (0, r.bG)([o.A], () => o.A.getGuildIds());
    return (0, r.yK)([d.A], () => {
        let e = [];
        for (let i of t) {
            let t = d.A.getApplicationIdFromGuildId(i);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

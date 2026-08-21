r.d(e, { mn: () => S, px: () => A, qx: () => h, rY: () => _, tR: () => I, w: () => p }), r(321073);
var i = r(17928),
    n = r(517164),
    s = r(20805),
    l = r(952818),
    u = r(321191),
    a = r(71393),
    o = r(290863),
    d = r(832163),
    c = r(533562);
function S(t) {
    let { userIds: e } = t;
    return (0, i.yK)([n.A, d.A], () => {
        let t = [];
        for (let r of e)
            for (let e of n.A.getUserOutbox(r)?.entries ?? [])
                if (null != e && (0, s.zD)(e)) {
                    let r = d.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != r && t.push(r);
                }
        return t;
    }, [e]);
}
function I(t) {
    return (0, i.yK)([u.A, d.A], () => {
        let e = [];
        for (let r of t) {
            let t = u.A.getMutualGuilds(r);
            if (null != t) {
                for (let r of t)
                    if (d.A.getStorefrontGuildIds().has(r.guild.id)) {
                        let t = d.A.getApplicationIdFromGuildId(r.guild.id);
                        null != t && e.push(t);
                    }
            }
        }
        return e;
    }, [t]);
}
function p(t) {
    let { userIds: e } = t,
        r = (0, i.yK)([o.A, d.A], () => {
            let t = [];
            for (let r of e)
                for (let e of o.A.getActivities(r))
                    if (null != e.application_id) {
                        let r = d.A.getApplicationIdFromDetectableId(e.application_id);
                        null != r && t.push(r);
                    }
            return t;
        }, [e]),
        n = (0, c.W)();
    return null != n ? [...r, n] : r;
}
function h() {
    return (0, i.yK)([l.Ay, d.A], () => {
        let t = [];
        for (let e of l.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = d.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function _() {
    return (0, i.yK)([l.Ay, d.A], () => {
        let t = [];
        for (let e of l.Ay.getRunningGames())
            if (null != e.id && l.Ay.isDetectionEnabled(e)) {
                let r = d.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    }, []);
}
function A() {
    let t = (0, i.bG)([a.A], () => a.A.getGuildIds());
    return (0, i.yK)([d.A], () => {
        let e = [];
        for (let r of t) {
            let t = d.A.getApplicationIdFromGuildId(r);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

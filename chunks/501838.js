r.d(e, { mn: () => S, px: () => A, qx: () => _, rY: () => h, tR: () => I, w: () => p }), r(321073);
var i = r(17928),
    n = r(517164),
    s = r(20805),
    l = r(952818),
    u = r(321191),
    a = r(71393),
    o = r(290863),
    c = r(832163),
    d = r(533562);
function S(t) {
    let { userIds: e } = t;
    return (0, i.yK)([n.A, c.A], () => {
        let t = [];
        for (let r of e)
            for (let e of n.A.getUserOutbox(r)?.entries ?? [])
                if (null != e && (0, s.zD)(e)) {
                    let r = c.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != r && t.push(r);
                }
        return t;
    }, [e]);
}
function I(t) {
    return (0, i.yK)([u.A, c.A], () => {
        let e = [];
        for (let r of t) {
            let t = u.A.getMutualGuilds(r);
            if (null != t) {
                for (let r of t)
                    if (c.A.getStorefrontGuildIds().has(r.guild.id)) {
                        let t = c.A.getApplicationIdFromGuildId(r.guild.id);
                        null != t && e.push(t);
                    }
            }
        }
        return e;
    }, [t]);
}
function p(t) {
    let { userIds: e } = t,
        r = (0, i.yK)([o.A, c.A], () => {
            let t = [];
            for (let r of e)
                for (let e of o.A.getActivities(r))
                    if (null != e.application_id) {
                        let r = c.A.getApplicationIdFromDetectableId(e.application_id);
                        null != r && t.push(r);
                    }
            return t;
        }, [e]),
        n = (0, d.W)();
    return null != n ? [...r, n] : r;
}
function _() {
    return (0, i.yK)([l.Ay, c.A], () => {
        let t = [];
        for (let e of l.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = c.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function h() {
    return (0, i.yK)([l.Ay, c.A], () => {
        let t = [];
        for (let e of l.Ay.getRunningGames())
            if (null != e.id && l.Ay.isDetectionEnabled(e)) {
                let r = c.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    }, []);
}
function A() {
    let t = (0, i.bG)([a.A], () => a.A.getGuildIds());
    return (0, i.yK)([c.A], () => {
        let e = [];
        for (let r of t) {
            let t = c.A.getApplicationIdFromGuildId(r);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

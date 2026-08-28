r.d(e, { mn: () => I, px: () => f, qx: () => h, rY: () => A, tR: () => p, w: () => _ }), r(321073);
var i = r(582128),
    n = r(17928),
    s = r(517164),
    l = r(20805),
    u = r(952818),
    a = r(321191),
    o = r(71393),
    c = r(290863),
    d = r(832163),
    S = r(533562);
function I(t) {
    let { userIds: e } = t;
    return (0, n.yK)([s.A, d.A], () => {
        let t = [];
        for (let r of e)
            for (let e of s.A.getUserOutbox(r)?.entries ?? [])
                if (null != e && (0, l.zD)(e)) {
                    let r = d.A.getApplicationIdFromDetectableId(e.extra.application_id);
                    null != r && t.push(r);
                }
        return t;
    }, [e]);
}
function p(t) {
    return (0, n.yK)([a.A, d.A], () => {
        let e = [];
        for (let r of t) {
            let t = a.A.getMutualGuilds(r);
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
function _(t) {
    let { userIds: e } = t,
        r = (0, n.yK)([c.A, d.A], () => {
            let t = [];
            for (let r of e)
                for (let e of c.A.getActivities(r))
                    if (null != e.application_id) {
                        let r = d.A.getApplicationIdFromDetectableId(e.application_id);
                        null != r && t.push(r);
                    }
            return t;
        }, [e]),
        s = (0, S.W)();
    return i.useMemo(() => (null != s ? [...r, s] : r), [r, s]);
}
function h() {
    return (0, n.yK)([u.Ay, d.A], () => {
        let t = [];
        for (let e of u.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = d.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function A() {
    return (0, n.yK)([u.Ay, d.A], () => {
        let t = [];
        for (let e of u.Ay.getRunningGames())
            if (null != e.id && u.Ay.isDetectionEnabled(e)) {
                let r = d.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    }, []);
}
function f() {
    let t = (0, n.bG)([o.A], () => o.A.getGuildIds());
    return (0, n.yK)([d.A], () => {
        let e = [];
        for (let r of t) {
            let t = d.A.getApplicationIdFromGuildId(r);
            null != t && e.push(t);
        }
        return e;
    }, [t]);
}

n.d(t, { mn: () => p, px: () => C, qx: () => A, rY: () => _, tR: () => I, w: () => u }), n(321073);
var i = n(17928),
    a = n(517164),
    r = n(20805),
    l = n(328153),
    s = n(841595),
    o = n(71393),
    c = n(290863),
    d = n(832163),
    E = n(533562);
function p(e) {
    let { userIds: t } = e;
    return (0, i.yK)([a.A, d.A], () => {
        let e = [];
        for (let n of t)
            for (let t of a.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, r.zD)(t)) {
                    let n = d.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function I(e) {
    return (0, i.yK)([s.A, d.A], () => {
        let t = [];
        for (let n of e) {
            let e = s.A.getMutualGuilds(n);
            if (null != e) {
                for (let n of e)
                    if (d.A.getStorefrontGuildIds().has(n.guild.id)) {
                        let e = d.A.getApplicationIdFromGuildId(n.guild.id);
                        null != e && t.push(e);
                    }
            }
        }
        return t;
    }, [e]);
}
function u(e) {
    let { userIds: t } = e,
        n = (0, i.yK)([c.A, d.A], () => {
            let e = [];
            for (let n of t)
                for (let t of c.A.getActivities(n))
                    if (null != t.application_id) {
                        let n = d.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [t]),
        a = (0, E.W)();
    return null != a ? [...n, a] : n;
}
function A() {
    return (0, i.yK)([l.Ay, d.A], () => {
        let e = [];
        for (let t of l.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = d.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function _() {
    return (0, i.yK)([l.Ay, d.A], () => {
        let e = [];
        for (let t of l.Ay.getRunningGames())
            if (null != t.id && l.Ay.isDetectionEnabled(t)) {
                let n = d.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function C() {
    let e = (0, i.bG)([o.A], () => o.A.getGuildIds());
    return (0, i.yK)([d.A], () => {
        let t = [];
        for (let n of e) {
            let e = d.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

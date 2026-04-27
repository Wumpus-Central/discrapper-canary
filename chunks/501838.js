n.d(t, { mn: () => u, px: () => h, qx: () => A, rY: () => I, tR: () => _, w: () => E }), n(321073);
var i = n(17928),
    a = n(517164),
    r = n(20805),
    l = n(328153),
    o = n(841595),
    s = n(71393),
    d = n(290863),
    c = n(832163),
    p = n(533562);
function u(e) {
    let { userIds: t } = e;
    return (0, i.yK)([a.A, c.A], () => {
        let e = [];
        for (let n of t)
            for (let t of a.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, r.zD)(t)) {
                    let n = c.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function _(e) {
    return (0, i.yK)([o.A, c.A], () => {
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
function E(e) {
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
        a = (0, p.W)();
    return null != a ? [...n, a] : n;
}
function A() {
    return (0, i.yK)([l.Ay, c.A], () => {
        let e = [];
        for (let t of l.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function I() {
    return (0, i.yK)([l.Ay, c.A], () => {
        let e = [];
        for (let t of l.Ay.getRunningGames())
            if (null != t.id && l.Ay.isDetectionEnabled(t)) {
                let n = c.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function h() {
    let e = (0, i.bG)([s.A], () => s.A.getGuildIds());
    return (0, i.yK)([c.A], () => {
        let t = [];
        for (let n of e) {
            let e = c.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

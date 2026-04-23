n.d(t, { mn: () => _, px: () => m, qx: () => h, rY: () => E, tR: () => p, w: () => C }), n(321073);
var r = n(17928),
    a = n(517164),
    i = n(20805),
    o = n(328153),
    l = n(841595),
    s = n(71393),
    d = n(290863),
    u = n(832163),
    c = n(533562);
function _(e) {
    let { userIds: t } = e;
    return (0, r.yK)([a.A, u.A], () => {
        let e = [];
        for (let n of t)
            for (let t of a.A.getUserOutbox(n)?.entries ?? [])
                if (null != t && (0, i.zD)(t)) {
                    let n = u.A.getApplicationIdFromDetectableId(t.extra.application_id);
                    null != n && e.push(n);
                }
        return e;
    }, [t]);
}
function p(e) {
    return (0, r.yK)([l.A, u.A], () => {
        let t = [];
        for (let n of e) {
            let e = l.A.getMutualGuilds(n);
            if (null != e) {
                for (let n of e)
                    if (u.A.getStorefrontGuildIds().has(n.guild.id)) {
                        let e = u.A.getApplicationIdFromGuildId(n.guild.id);
                        null != e && t.push(e);
                    }
            }
        }
        return t;
    }, [e]);
}
function C(e) {
    let { userIds: t } = e,
        n = (0, r.yK)([d.A, u.A], () => {
            let e = [];
            for (let n of t)
                for (let t of d.A.getActivities(n))
                    if (null != t.application_id) {
                        let n = u.A.getApplicationIdFromDetectableId(t.application_id);
                        null != n && e.push(n);
                    }
            return e;
        }, [t]),
        a = (0, c.W)();
    return null != a ? [...n, a] : n;
}
function h() {
    return (0, r.yK)([o.Ay, u.A], () => {
        let e = [];
        for (let t of o.Ay.getGamesSeen(!1, !1))
            if (null != t.id) {
                let n = u.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    });
}
function E() {
    return (0, r.yK)([o.Ay, u.A], () => {
        let e = [];
        for (let t of o.Ay.getRunningGames())
            if (null != t.id && o.Ay.isDetectionEnabled(t)) {
                let n = u.A.getApplicationIdFromDetectableId(t.id);
                null != n && e.push(n);
            }
        return e;
    }, []);
}
function m() {
    let e = (0, r.bG)([s.A], () => s.A.getGuildIds());
    return (0, r.yK)([u.A], () => {
        let t = [];
        for (let n of e) {
            let e = u.A.getApplicationIdFromGuildId(n);
            null != e && t.push(e);
        }
        return t;
    }, [e]);
}

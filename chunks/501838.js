(r.d(e, { mn: () => I, px: () => f, qx: () => h, rY: () => p, tR: () => A, w: () => _ }), r(321073));
var i = r(582128),
    l = r(17928),
    s = r(517164),
    n = r(20805),
    u = r(952818),
    o = r(321191),
    a = r(71393),
    d = r(290863),
    c = r(832163),
    S = r(533562);
function I(t) {
    let { userIds: e } = t;
    return (0, l.yK)(
        [s.A, c.A],
        () => {
            let t = [];
            for (let r of e)
                for (let e of s.A.getUserOutbox(r)?.entries ?? [])
                    if (null != e && (0, n.zD)(e)) {
                        let r = c.A.getApplicationIdFromDetectableId(e.extra.application_id);
                        null != r && t.push(r);
                    }
            return t;
        },
        [e],
    );
}
function A(t) {
    return (0, l.yK)(
        [o.A, c.A],
        () => {
            let e = [];
            for (let r of t) {
                let t = o.A.getMutualGuilds(r);
                if (null != t) {
                    for (let r of t)
                        if (c.A.getStorefrontGuildIds().has(r.guild.id)) {
                            let t = c.A.getApplicationIdFromGuildId(r.guild.id);
                            null != t && e.push(t);
                        }
                }
            }
            return e;
        },
        [t],
    );
}
function _(t) {
    let { userIds: e } = t,
        r = (0, l.yK)(
            [d.A, c.A],
            () => {
                let t = [];
                for (let r of e)
                    for (let e of d.A.getActivities(r))
                        if (null != e.application_id) {
                            let r = c.A.getApplicationIdFromDetectableId(e.application_id);
                            null != r && t.push(r);
                        }
                return t;
            },
            [e],
        ),
        s = (0, S.W)();
    return i.useMemo(() => (null != s ? [...r, s] : r), [r, s]);
}
function h() {
    return (0, l.yK)([u.Ay, c.A], () => {
        let t = [];
        for (let e of u.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = c.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function p() {
    return (0, l.yK)(
        [u.Ay, c.A],
        () => {
            let t = [];
            for (let e of u.Ay.getRunningGames())
                if (null != e.id && u.Ay.isDetectionEnabled(e)) {
                    let r = c.A.getApplicationIdFromDetectableId(e.id);
                    null != r && t.push(r);
                }
            return t;
        },
        [],
    );
}
function f() {
    let t = (0, l.bG)([a.A], () => a.A.getGuildIds());
    return (0, l.yK)(
        [c.A],
        () => {
            let e = [];
            for (let r of t) {
                let t = c.A.getApplicationIdFromGuildId(r);
                null != t && e.push(t);
            }
            return e;
        },
        [t],
    );
}

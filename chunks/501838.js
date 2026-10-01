(r.d(e, { mn: () => I, px: () => E, qx: () => h, rY: () => A, tR: () => _, w: () => p }), r(321073));
var i = r(582128),
    s = r(17928),
    n = r(517164),
    l = r(20805),
    u = r(952818),
    o = r(321191),
    a = r(71393),
    d = r(290863),
    c = r(832163),
    S = r(533562);
function I(t) {
    let { userIds: e } = t;
    return (0, s.yK)(
        [n.A, c.A],
        () => {
            let t = [];
            for (let r of e)
                for (let e of n.A.getUserOutbox(r)?.entries ?? [])
                    if (null != e && (0, l.zD)(e)) {
                        let r = c.A.getApplicationIdFromDetectableId(e.extra.application_id);
                        null != r && t.push(r);
                    }
            return t;
        },
        [e],
    );
}
function _(t) {
    return (0, s.yK)(
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
function p(t) {
    let { userIds: e } = t,
        r = (0, s.yK)(
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
        n = (0, S.W)();
    return i.useMemo(() => (null != n ? [...r, n] : r), [r, n]);
}
function h() {
    return (0, s.yK)([u.Ay, c.A], () => {
        let t = [];
        for (let e of u.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = c.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function A() {
    return (0, s.yK)(
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
function E() {
    let t = (0, s.bG)([a.A], () => a.A.getGuildIds());
    return (0, s.yK)(
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

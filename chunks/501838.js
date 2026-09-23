(r.d(e, { mn: () => I, px: () => A, qx: () => _, rY: () => f, tR: () => h, w: () => p }), r(321073));
var i = r(582128),
    n = r(17928),
    s = r(517164),
    l = r(20805),
    a = r(952818),
    u = r(321191),
    o = r(71393),
    d = r(290863),
    c = r(832163),
    S = r(533562);
function I(t) {
    let { userIds: e } = t;
    return (0, n.yK)(
        [s.A, c.A],
        () => {
            let t = [];
            for (let r of e)
                for (let e of s.A.getUserOutbox(r)?.entries ?? [])
                    if (null != e && (0, l.zD)(e)) {
                        let r = c.A.getApplicationIdFromDetectableId(e.extra.application_id);
                        null != r && t.push(r);
                    }
            return t;
        },
        [e],
    );
}
function h(t) {
    return (0, n.yK)(
        [u.A, c.A],
        () => {
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
        },
        [t],
    );
}
function p(t) {
    let { userIds: e } = t,
        r = (0, n.yK)(
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
function _() {
    return (0, n.yK)([a.Ay, c.A], () => {
        let t = [];
        for (let e of a.Ay.getGamesSeen(!1, !1))
            if (null != e.id) {
                let r = c.A.getApplicationIdFromDetectableId(e.id);
                null != r && t.push(r);
            }
        return t;
    });
}
function f() {
    return (0, n.yK)(
        [a.Ay, c.A],
        () => {
            let t = [];
            for (let e of a.Ay.getRunningGames())
                if (null != e.id && a.Ay.isDetectionEnabled(e)) {
                    let r = c.A.getApplicationIdFromDetectableId(e.id);
                    null != r && t.push(r);
                }
            return t;
        },
        [],
    );
}
function A() {
    let t = (0, n.bG)([o.A], () => o.A.getGuildIds());
    return (0, n.yK)(
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

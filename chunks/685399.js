n.d(t, { Ay: () => c, IQ: () => p, Rz: () => m, a1: () => h }), n(321073);
var i = n(64700),
    l = n(17928),
    r = n(429913),
    s = n(290863),
    a = n(287809),
    o = n(403362),
    u = n(933958),
    d = n(969151);
function c(e, t) {
    return p(
        (0, l.yK)([u.Ay], () =>
            null != e && null != e.id && "" !== e.id ? u.Ay.getEmbeddedActivitiesForChannel(e.id) : u.Am,
        ),
        t,
    );
}
function h(e) {
    let t = p((0, l.bG)([u.Ay], () => (null != e ? u.Ay.getEmbeddedActivitiesForGuild(e) : u.Am)));
    return i.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = (0, d.H)(t.embeddedActivity.location);
                if (null == n) return;
                let i = e.get(n) ?? [];
                i.push(t), e.set(n, i);
            }),
            e
        );
    }, [t]);
}
function p(e, t) {
    let n = e.map((e) => e.applicationId),
        s = (0, r.A)(n),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let d = (0, l.yK)([a.default], () => {
        let e = [];
        for (let t of u) e.push(a.default.getUser(t));
        return e;
    }, [u]);
    return i.useMemo(() => {
        let n = new Map();
        return (
            d.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, i) => {
                    let l = s[i],
                        r = [];
                    if (null != r)
                        for (let i of e.userIds) {
                            let e = n.get(i);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && r.push(n);
                            }
                        }
                    return null == l ? null : { embeddedActivity: e, application: l, userParticipantAvatarUrls: r };
                })
                .filter(o.Vq)
        );
    }, [e, s, d, t]);
}
function m(e) {
    return (0, l.bG)(
        [s.A],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    let n = s.A.findActivity(
                        e?.embeddedActivity.userIds.values().next().value,
                        (t) => t.application_id === e?.application?.id,
                    );
                    t.set(e?.application?.id, { ...e, presenceActivity: n });
                }),
                t
            );
        },
        [e],
        l.My,
    );
}

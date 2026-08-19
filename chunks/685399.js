"use strict";
n.d(t, { Ay: () => d, IQ: () => m, Rz: () => f, a1: () => h }), n(321073);
var l = n(582128),
    i = n(17928),
    s = n(429913),
    r = n(290863),
    a = n(287809),
    o = n(403362),
    u = n(933958),
    c = n(969151);
function d(e, t) {
    return m(
        (0, i.yK)([u.Ay], () =>
            null != e && null != e.id && "" !== e.id ? u.Ay.getEmbeddedActivitiesForChannel(e.id) : u.Am,
        ),
        t,
    );
}
function h(e) {
    let t = m((0, i.bG)([u.Ay], () => (null != e ? u.Ay.getEmbeddedActivitiesForGuild(e) : u.Am)));
    return l.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = (0, c.H)(t.embeddedActivity.location);
                if (null == n) return;
                let l = e.get(n) ?? [];
                l.push(t), e.set(n, l);
            }),
            e
        );
    }, [t]);
}
function m(e, t) {
    let n = e.map((e) => e.applicationId),
        r = (0, s.A)(n),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let c = (0, i.yK)([a.default], () => {
        let e = [];
        for (let t of u) e.push(a.default.getUser(t));
        return e;
    }, [u]);
    return l.useMemo(() => {
        let n = new Map();
        return (
            c.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, l) => {
                    let i = r[l],
                        s = [];
                    if (null != s)
                        for (let l of e.userIds) {
                            let e = n.get(l);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && s.push(n);
                            }
                        }
                    return null == i ? null : { embeddedActivity: e, application: i, userParticipantAvatarUrls: s };
                })
                .filter(o.Vq)
        );
    }, [e, r, c, t]);
}
function f(e) {
    return (0, i.bG)(
        [r.A],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    let n = r.A.findActivity(
                        e?.embeddedActivity.userIds.values().next().value,
                        (t) => t.application_id === e?.application?.id,
                    );
                    t.set(e?.application?.id, { ...e, presenceActivity: n });
                }),
                t
            );
        },
        [e],
        i.My,
    );
}

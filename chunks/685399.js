"use strict";
n.d(t, { Ay: () => d, IQ: () => f, Rz: () => h, a1: () => _ }), n(321073);
var i = n(64700),
    r = n(17928),
    s = n(429913),
    a = n(290863),
    o = n(287809),
    l = n(403362),
    u = n(933958),
    c = n(969151);
function d(e, t) {
    return f(
        (0, r.yK)([u.Ay], () =>
            null != e && null != e.id && "" !== e.id ? u.Ay.getEmbeddedActivitiesForChannel(e.id) : u.Am,
        ),
        t,
    );
}
function _(e) {
    let t = f((0, r.bG)([u.Ay], () => (null != e ? u.Ay.getEmbeddedActivitiesForGuild(e) : u.Am)));
    return i.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = (0, c.H)(t.embeddedActivity.location);
                if (null == n) return;
                let i = e.get(n) ?? [];
                i.push(t), e.set(n, i);
            }),
            e
        );
    }, [t]);
}
function f(e, t) {
    let n = e.map((e) => e.applicationId),
        a = (0, s.A)(n),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let c = (0, r.yK)([o.default], () => {
        let e = [];
        for (let t of u) e.push(o.default.getUser(t));
        return e;
    }, [u]);
    return i.useMemo(() => {
        let n = new Map();
        return (
            c.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, i) => {
                    let r = a[i],
                        s = [];
                    if (null != s)
                        for (let i of e.userIds) {
                            let e = n.get(i);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && s.push(n);
                            }
                        }
                    return null == r ? null : { embeddedActivity: e, application: r, userParticipantAvatarUrls: s };
                })
                .filter(l.Vq)
        );
    }, [e, a, c, t]);
}
function h(e) {
    return (0, r.bG)(
        [a.A],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    let n = a.A.findActivity(
                        e?.embeddedActivity.userIds.values().next().value,
                        (t) => t.application_id === e?.application?.id,
                    );
                    t.set(e?.application?.id, { ...e, presenceActivity: n });
                }),
                t
            );
        },
        [e],
        r.My,
    );
}

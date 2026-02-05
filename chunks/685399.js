"use strict";
n.d(t, { Ay: () => d, IQ: () => f, Rz: () => p, a1: () => _ }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(290863),
    o = n(287809),
    l = n(403362),
    u = n(933958),
    c = n(969151);
function d(e, t) {
    return f(
        (0, i.yK)([u.Ay], () =>
            null != e && null != e.id && "" !== e.id ? u.Ay.getEmbeddedActivitiesForChannel(e.id) : u.Am,
        ),
        t,
    );
}
function _(e) {
    let t = f((0, i.bG)([u.Ay], () => (null != e ? u.Ay.getEmbeddedActivitiesForGuild(e) : u.Am)));
    return r.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = (0, c.H)(t.embeddedActivity.location);
                if (null == n) return;
                let r = e.get(n) ?? [];
                r.push(t), e.set(n, r);
            }),
            e
        );
    }, [t]);
}
function f(e, t) {
    let n = e.map((e) => e.applicationId),
        s = (0, a.A)(n),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let c = (0, i.yK)([o.default], () => {
        let e = [];
        for (let t of u) e.push(o.default.getUser(t));
        return e;
    }, [u]);
    return r.useMemo(() => {
        let n = new Map();
        return (
            c.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, r) => {
                    let i = s[r],
                        a = [];
                    if (null != a)
                        for (let r of e.userIds) {
                            let e = n.get(r);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && a.push(n);
                            }
                        }
                    return null == i ? null : { embeddedActivity: e, application: i, userParticipantAvatarUrls: a };
                })
                .filter(l.Vq)
        );
    }, [e, s, c, t]);
}
function p(e) {
    return (0, i.bG)(
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
        i.My,
    );
}

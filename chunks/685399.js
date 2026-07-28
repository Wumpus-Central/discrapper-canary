"use strict";
n.d(t, { Ay: () => u, IQ: () => E, Rz: () => A, a1: () => _ }), n(321073);
var i = n(582128),
    r = n(17928),
    a = n(429913),
    s = n(290863),
    l = n(287809),
    o = n(403362),
    d = n(933958),
    c = n(969151);
function u(e, t) {
    return E(
        (0, r.yK)([d.Ay], () =>
            null != e && null != e.id && "" !== e.id ? d.Ay.getEmbeddedActivitiesForChannel(e.id) : d.Am,
        ),
        t,
    );
}
function _(e) {
    let t = E((0, r.bG)([d.Ay], () => (null != e ? d.Ay.getEmbeddedActivitiesForGuild(e) : d.Am)));
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
function E(e, t) {
    let n = e.map((e) => e.applicationId),
        s = (0, a.A)(n),
        d = new Set([]);
    for (let t of e) for (let e of t.userIds) d.add(e);
    let c = (0, r.yK)([l.default], () => {
        let e = [];
        for (let t of d) e.push(l.default.getUser(t));
        return e;
    }, [d]);
    return i.useMemo(() => {
        let n = new Map();
        return (
            c.forEach((e) => {
                null != e && n.set(e.id, e);
            }),
            e
                .map((e, i) => {
                    let r = s[i],
                        a = [];
                    if (null != a)
                        for (let i of e.userIds) {
                            let e = n.get(i);
                            if (null != e && null != t) {
                                let n = t(e);
                                null != n && a.push(n);
                            }
                        }
                    return null == r ? null : { embeddedActivity: e, application: r, userParticipantAvatarUrls: a };
                })
                .filter(o.Vq)
        );
    }, [e, s, c, t]);
}
function A(e) {
    return (0, r.bG)(
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
        r.My,
    );
}

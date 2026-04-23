n.d(t, { Ay: () => d, IQ: () => u, Rz: () => I, a1: () => c }), n(321073);
var i = n(64700),
    r = n(17928),
    a = n(429913),
    s = n(290863),
    _ = n(287809),
    l = n(403362),
    o = n(933958),
    E = n(969151);
function d(e, t) {
    return u(
        (0, r.yK)([o.Ay], () =>
            null != e && null != e.id && "" !== e.id ? o.Ay.getEmbeddedActivitiesForChannel(e.id) : o.Am,
        ),
        t,
    );
}
function c(e) {
    let t = u((0, r.bG)([o.Ay], () => (null != e ? o.Ay.getEmbeddedActivitiesForGuild(e) : o.Am)));
    return i.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let n = (0, E.H)(t.embeddedActivity.location);
                if (null == n) return;
                let i = e.get(n) ?? [];
                i.push(t), e.set(n, i);
            }),
            e
        );
    }, [t]);
}
function u(e, t) {
    let n = e.map((e) => e.applicationId),
        s = (0, a.A)(n),
        o = new Set([]);
    for (let t of e) for (let e of t.userIds) o.add(e);
    let E = (0, r.yK)([_.default], () => {
        let e = [];
        for (let t of o) e.push(_.default.getUser(t));
        return e;
    }, [o]);
    return i.useMemo(() => {
        let n = new Map();
        return (
            E.forEach((e) => {
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
                .filter(l.Vq)
        );
    }, [e, s, E, t]);
}
function I(e) {
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

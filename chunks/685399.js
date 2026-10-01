(l.d(t, { Ay: () => p, IQ: () => f, Rz: () => A, a1: () => c }), l(321073));
var n = l(582128),
    i = l(17928),
    u = l(429913),
    r = l(290863),
    d = l(287809),
    a = l(403362),
    o = l(933958),
    s = l(969151);
function p(e, t) {
    return f(
        (0, i.yK)([o.Ay], () =>
            null != e && null != e.id && "" !== e.id ? o.Ay.getEmbeddedActivitiesForChannel(e.id) : o.Am,
        ),
        t,
    );
}
function c(e) {
    let t = f((0, i.bG)([o.Ay], () => (null != e ? o.Ay.getEmbeddedActivitiesForGuild(e) : o.Am)));
    return n.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                let l = (0, s.H)(t.embeddedActivity.location);
                if (null == l) return;
                let n = e.get(l) ?? [];
                (n.push(t), e.set(l, n));
            }),
            e
        );
    }, [t]);
}
function f(e, t) {
    let l = e.map((e) => e.applicationId),
        r = (0, u.A)(l),
        o = new Set([]);
    for (let t of e) for (let e of t.userIds) o.add(e);
    let s = (0, i.yK)(
        [d.default],
        () => {
            let e = [];
            for (let t of o) e.push(d.default.getUser(t));
            return e;
        },
        [o],
    );
    return n.useMemo(() => {
        let l = new Map();
        return (
            s.forEach((e) => {
                null != e && l.set(e.id, e);
            }),
            e
                .map((e, n) => {
                    let i = r[n],
                        u = [];
                    if (null != u)
                        for (let n of e.userIds) {
                            let e = l.get(n);
                            if (null != e && null != t) {
                                let l = t(e);
                                null != l && u.push(l);
                            }
                        }
                    return null == i ? null : { embeddedActivity: e, application: i, userParticipantAvatarUrls: u };
                })
                .filter(a.Vq)
        );
    }, [e, r, s, t]);
}
function A(e) {
    return (0, i.bG)(
        [r.A],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    let l = r.A.findActivity(
                        e?.embeddedActivity.userIds.values().next().value,
                        (t) => t.application_id === e?.application?.id,
                    );
                    t.set(e?.application?.id, { ...e, presenceActivity: l });
                }),
                t
            );
        },
        [e],
        i.My,
    );
}

i.d(t, {
    QN: () => p,
    ZP: () => s,
    gb: () => f,
    uF: () => v
}),
    i(47120),
    i(653041);
var l = i(192379),
    n = i(442837),
    a = i(835473),
    r = i(158776),
    d = i(594174),
    o = i(823379),
    u = i(317381),
    c = i(16609);
function s(e, t) {
    return f(
        (0, n.Wu)([u.ZP], () => (null != e && null != e.id && '' !== e.id ? u.ZP.getEmbeddedActivitiesForChannel(e.id) : u.i6)),
        t
    );
}
function p(e) {
    let t = f((0, n.e7)([u.ZP], () => (null != e ? u.ZP.getEmbeddedActivitiesForGuild(e) : u.i6)));
    return l.useMemo(() => {
        let e = new Map();
        return (
            t.forEach((t) => {
                var i;
                let l = (0, c.p)(t.embeddedActivity.location);
                if (null == l) return;
                let n = null !== (i = e.get(l)) && void 0 !== i ? i : [];
                n.push(t), e.set(l, n);
            }),
            e
        );
    }, [t]);
}
function f(e, t) {
    let i = e.map((e) => e.applicationId),
        r = (0, a.Z)(i),
        u = new Set([]);
    for (let t of e) for (let e of t.userIds) u.add(e);
    let c = (0, n.Wu)(
        [d.default],
        () => {
            let e = [];
            for (let t of u) e.push(d.default.getUser(t));
            return e;
        },
        [u]
    );
    return l.useMemo(() => {
        let i = new Map();
        return (
            c.forEach((e) => {
                null != e && i.set(e.id, e);
            }),
            e
                .map((e, l) => {
                    let n = r[l],
                        a = [];
                    if (null != a)
                        for (let l of e.userIds) {
                            let e = i.get(l);
                            if (null != e && null != t) {
                                let i = t(e);
                                null != i && a.push(i);
                            }
                        }
                    return null == n
                        ? null
                        : {
                              embeddedActivity: e,
                              application: n,
                              userParticipantAvatarUrls: a
                          };
                })
                .filter(o.lm)
        );
    }, [e, r, c, t]);
}
function v(e) {
    return (0, n.e7)(
        [r.Z],
        () => {
            let t = new Map();
            return (
                e.forEach((e) => {
                    var i;
                    let l = r.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, (t) => {
                        var i;
                        return t.application_id === (null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id);
                    });
                    t.set(null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id, {
                        ...e,
                        presenceActivity: l
                    });
                }),
                t
            );
        },
        [e],
        n.pF
    );
}

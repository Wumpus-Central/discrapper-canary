n.d(t, { Z: () => c });
var i = n(192379),
    r = n(442837),
    a = n(199902),
    s = n(699516),
    o = n(626135),
    l = n(750881),
    u = n(981631);
function c(e, t) {
    let { blockeeExperimentEnabled: n, blockerExperimentEnabled: c, analyticsEligible: d } = (0, l.NR)(t),
        f = (0, r.e7)([s.Z], () => (null != e ? s.Z.getRelationshipType(e) : u.OGo.NONE)),
        { stream: _, analyticsStream: p } = (0, r.cj)(
            [a.Z],
            () => {
                if (null == e)
                    return {
                        stream: null,
                        analyticsStream: null
                    };
                let t = a.Z.getAnyStreamForUser(e);
                return {
                    stream: n ? a.Z.getAnyDiscoverableStreamForUser(e) : t,
                    analyticsStream: t
                };
            },
            [n, e]
        );
    return (
        (0, i.useEffect)(() => {
            var i;
            d &&
                null != p &&
                o.default.track(u.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    surface: t,
                    activity_user_id: e,
                    discoverable: null === (i = p.discoverable) || void 0 === i || i,
                    relationship_type: f,
                    treatment: (n && !1 === p.discoverable) || (c && f === u.OGo.BLOCKED) ? l.h9.HIDE : l.h9.SHOW
                });
        }, [d, n, c, p, f, t, e]),
        c && f === u.OGo.BLOCKED ? null : _
    );
}

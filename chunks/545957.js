n.d(t, { Z: () => u });
var r = n(192379),
    i = n(442837),
    o = n(199902),
    a = n(699516),
    s = n(626135),
    l = n(750881),
    c = n(981631);
function u(e, t) {
    let { blockeeExperimentEnabled: n, blockerExperimentEnabled: u, analyticsEligible: d } = (0, l.NR)(t),
        f = (0, i.e7)([a.Z], () => (null != e ? a.Z.getRelationshipType(e) : c.OGo.NONE)),
        { stream: p, analyticsStream: _ } = (0, i.cj)(
            [o.Z],
            () => {
                if (null == e)
                    return {
                        stream: null,
                        analyticsStream: null
                    };
                let t = o.Z.getAnyStreamForUser(e);
                return {
                    stream: n ? o.Z.getAnyDiscoverableStreamForUser(e) : t,
                    analyticsStream: t
                };
            },
            [n, e]
        );
    return (
        (0, r.useEffect)(() => {
            var r;
            d &&
                null != _ &&
                s.default.track(c.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    surface: t,
                    activity_user_id: e,
                    discoverable: null === (r = _.discoverable) || void 0 === r || r,
                    relationship_type: f,
                    treatment: (n && !1 === _.discoverable) || (u && f === c.OGo.BLOCKED) ? l.h9.HIDE : l.h9.SHOW
                });
        }, [d, n, u, _, f, t, e]),
        u && f === c.OGo.BLOCKED ? null : p
    );
}

r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(192379),
    a = r(442837),
    o = r(199902),
    s = r(699516),
    l = r(626135),
    u = r(750881),
    c = r(981631);
function d(e, n) {
    let { enabled: r, analyticsEligible: d } = (0, u.R4)(n),
        f = (0, a.e7)([s.Z], () => s.Z.getRelationshipType(e)),
        { stream: p, nonExperimentStream: h } = (0, a.cj)(
            [o.Z],
            () => {
                let n = o.Z.getAnyStreamForUser(e);
                return {
                    stream: r ? o.Z.getAnyDiscoverableStreamForUser(e) : n,
                    nonExperimentStream: n
                };
            },
            [r, e]
        );
    return (
        (0, i.useEffect)(() => {
            var i;
            if (!!d && null != h)
                l.default.track(c.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                    surface: n,
                    activity_user_id: e,
                    discoverable: null === (i = null == h ? void 0 : h.discoverable) || void 0 === i || i,
                    relationship_type: f,
                    treatment: r && (null == h ? void 0 : h.discoverable) === !1 ? u.h9.HIDE : u.h9.SHOW
                });
        }, [d, r, h, f, n, e]),
        p
    );
}

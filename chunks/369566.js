r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(392711);
var s = r(442837),
    l = r(750881),
    u = r(353647),
    c = r(26033),
    d = r(180335),
    f = r(561308),
    p = r(199902),
    h = r(314897),
    _ = r(158776),
    m = r(699516),
    g = r(626135),
    E = r(9161),
    v = r(456644),
    y = r(981631);
let b = [],
    I = [];
function T(e) {
    let { recentActivityTabEnabled: n } = (0, E.O)({ location: 'useUserProfileActivity' }),
        { recentActivityEnabled: r } = (0, v.i)({ location: 'useUserProfileActivity' }),
        i = (0, s.e7)([h.default], () => h.default.getId() === e),
        T = (0, s.e7)([_.Z], () => _.Z.getActivities(e)),
        S = (0, s.e7)([u.Z], () => (i || n || r ? u.Z.getUserOutbox(e) : void 0)),
        { enabled: A, analyticsEligible: C } = (0, l.R4)('use-user-profile-activity'),
        { stream: N, nonExperimentStream: R } = (0, s.cj)(
            [p.Z],
            () => {
                let n = p.Z.getAnyStreamForUser(e);
                return A
                    ? {
                          stream: p.Z.getAnyDiscoverableStreamForUser(e),
                          nonExperimentStream: n
                      }
                    : {
                          stream: n,
                          nonExperimentStream: n
                      };
            },
            [A, e]
        ),
        O = (0, s.e7)([m.Z], () => m.Z.getRelationshipType(e));
    (0, a.useEffect)(() => {
        if (C && null != R) {
            var n;
            g.default.track(y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: e,
                discoverable: null === (n = null == R ? void 0 : R.discoverable) || void 0 === n || n,
                surface: 'user-profile-activity',
                relationship_type: O,
                treatment: A && (null == R ? void 0 : R.discoverable) === !1 ? l.h9.HIDE : l.h9.SHOW
            });
        }
    }, [R, A, C, e, O]);
    let { live: D, recent: x } = (0, a.useMemo)(() => {
        let e = (0, o.uniqWith)(
                T.filter((e) => {
                    let { type: n } = e;
                    return n !== y.IIU.CUSTOM_STATUS;
                }),
                (e, n) => (null != e.application_id && null != n.application_id && e.application_id === n.application_id) || (null != e.name && null != n.name && e.name === n.name)
            ),
            n = null == S ? void 0 : S.entries.filter((n) => !(0, f.Jg)(n) && ((0, c.dU)(n) ? n.extra.entries.length > 0 && !e.some((e) => null != e && (0, d.pB)(n, e)) : (0, c.y0)(n) ? !e.some((e) => null != e && (0, d.RL)(n, e)) : (0, c.Rh)(n)));
        return {
            live: 0 === e.length ? b : e,
            recent: null == n || 0 === n.length ? I : n
        };
    }, [T, null == S ? void 0 : S.entries]);
    return {
        live: D,
        recent: x,
        stream: N,
        outbox: S
    };
}

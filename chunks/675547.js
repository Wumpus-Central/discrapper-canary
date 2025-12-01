n.d(t, { Z: () => d }), n(388685);
var i = n(442837),
    r = n(413523),
    l = n(358221),
    a = n(594190),
    o = n(158776),
    s = n(699955),
    c = n(582113),
    u = n(354459);
function d(e) {
    let { location: t, channel: n } = e,
        d = (0, s.cZ)({ location: t }),
        [p] = (0, i.e7)([l.Z], () => [l.Z.getParticipants(n.id), l.Z.getParticipantsVersion(n.id)], [n.id], r.Lc),
        h = (0, i.e7)([o.Z], () => {
            for (let e of p)
                if ((0, u.Io)(e) || (0, u._5)(e)) {
                    for (let t of o.Z.getActivities(e.user.id))
                        if (null != t.application_id && c.RI.has(t.application_id)) return !0;
                }
            return !1;
        }, [p]),
        f = (0, i.e7)([a.ZP], () =>
            a.ZP.getRunningGames().some((e) => null != e.id && c.RI.has(e.id) && a.ZP.isDetectionEnabled(e)),
        );
    return d && (f || h);
}

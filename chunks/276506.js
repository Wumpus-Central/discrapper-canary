n.d(t, { n: () => c }), n(388685);
var r = n(442837),
    i = n(699516),
    a = n(136015),
    o = n(91896),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { userId: t } = e,
        [n] = (0, r.e7)(
            [o.Z, i.Z],
            () => {
                let e = i.Z.getRelationshipType(t),
                    n = o.Z.getGameRelationshipsForUser(t),
                    r = o.Z.getGameRelationshipsVersion();
                return e === s.OGo.PENDING_INCOMING ? [l.NW.string(l.t['wPI56+']), r] : [n.length > 0 ? l.NW.string(l.t.LAcY7u) : l.NW.string(l.t.w5uwoK), r];
            },
            [t],
            a.Q
        );
    return n;
}

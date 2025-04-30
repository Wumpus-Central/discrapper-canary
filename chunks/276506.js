n.d(t, { n: () => c }), n(388685);
var r = n(442837),
    i = n(699516),
    o = n(136015),
    a = n(91896),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { userId: t } = e,
        [n] = (0, r.e7)(
            [a.Z, i.Z],
            () => {
                let e = i.Z.getRelationshipType(t),
                    n = a.Z.getGameRelationshipsForUser(t),
                    r = a.Z.getGameRelationshipsVersion();
                return e === s.OGo.PENDING_INCOMING ? [l.intl.string(l.t['wPI56+']), r] : [n.length > 0 ? l.intl.string(l.t.LAcY7u) : l.intl.string(l.t.w5uwoK), r];
            },
            [t],
            o.Q
        );
    return n;
}

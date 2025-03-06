n.d(t, { n: () => s }), n(47120);
var r = n(442837),
    i = n(136015),
    o = n(91896),
    a = n(388032);
function s(e) {
    let { userId: t } = e,
        [n] = (0, r.e7)(
            [o.Z],
            () => {
                let e = o.Z.getGameRelationshipsForUser(t),
                    n = o.Z.getGameRelationshipsVersion();
                return [e.length > 0 ? a.NW.string(a.t.LAcY7u) : a.NW.string(a.t.w5uwoK), n];
            },
            [t],
            i.Q
        );
    return n;
}

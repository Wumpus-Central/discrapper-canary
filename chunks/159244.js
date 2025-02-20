n.d(t, { Z: () => o });
var r = n(442837),
    l = n(699516),
    i = n(594174),
    a = n(981631);
let o = (e) => {
    let t = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        n = (0, r.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
        o = e.isNonUserBot();
    return e.id !== (null == t ? void 0 : t.id) && n !== a.OGo.BLOCKED && !o;
};

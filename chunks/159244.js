n.d(t, { Z: () => s });
var l = n(442837),
    i = n(699516),
    r = n(594174),
    a = n(981631);
let s = (e) => {
    let t = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
        n = (0, l.e7)([i.Z], () => i.Z.getRelationshipType(e.id)),
        s = e.isNonUserBot();
    return e.id !== (null == t ? void 0 : t.id) && n !== a.OGo.BLOCKED && !s;
};

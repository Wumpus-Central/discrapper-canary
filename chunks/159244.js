var i = n(442837),
    l = n(699516),
    r = n(594174),
    a = n(981631);
t.Z = (e) => {
    let t = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        n = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
        s = e.isNonUserBot();
    return e.id !== (null == t ? void 0 : t.id) && n !== a.OGo.BLOCKED && !s;
};

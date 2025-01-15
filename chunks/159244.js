var i = n(442837),
    l = n(699516),
    a = n(594174),
    r = n(981631);
t.Z = (e) => {
    let t = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, i.e7)([l.Z], () => l.Z.getRelationshipType(e.id)),
        s = e.isNonUserBot();
    return e.id !== (null == t ? void 0 : t.id) && n !== r.OGo.BLOCKED && !s;
};

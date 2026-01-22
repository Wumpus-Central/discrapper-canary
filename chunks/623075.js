n.d(t, {
    V: () => a,
});
var r = n(311907),
    l = n(994500),
    i = n(652215);

function a(e) {
    let t = (0, r.bG)([l.A], () => l.A.getRelationshipType(e), [e]);
    return t === i.eA$.NONE || t === i.eA$.BLOCKED || t === i.eA$.PENDING_INCOMING;
}

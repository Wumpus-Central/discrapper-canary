n.d(t, { A: () => a });
var r = n(311907),
    l = n(429913),
    i = n(800828);
function a(e) {
    let t = (0, r.bG)([i.A], () => {
        let t = i.A.getGameRelationshipsForUser(e);
        if (0 !== t.length) return t[0].applicationId;
    });
    return (0, l.h)(t);
}

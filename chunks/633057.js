n.d(t, { A: () => s });
var r = n(311907),
    i = n(429913),
    a = n(800828);
function s(e) {
    let t = (0, r.bG)([a.A], () => {
        let t = a.A.getGameRelationshipsForUser(e);
        if (0 !== t.length) return t[0].applicationId;
    });
    return (0, i.h)(t);
}

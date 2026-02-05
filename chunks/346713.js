n.d(t, { A: () => r });
var i = n(64700),
    s = n(311907),
    l = n(622543);
let a = [];
function r(e) {
    let t = (0, s.bG)([l.A], () => l.A.getUserProfile(e));
    return (0, i.useMemo)(
        () => (t?.applicationRoleConnections == null ? a : t.applicationRoleConnections),
        [t?.applicationRoleConnections],
    );
}

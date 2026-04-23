t.d(n, { A: () => s });
var l = t(64700),
    i = t(311907),
    r = t(622543);
let a = [];
function s(e) {
    let n = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, l.useMemo)(
        () => (n?.applicationRoleConnections == null ? a : n.applicationRoleConnections),
        [n?.applicationRoleConnections],
    );
}

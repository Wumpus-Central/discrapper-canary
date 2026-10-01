t.d(n, { A: () => a });
var l = t(582128),
    i = t(17928),
    r = t(321191);
let s = [];
function a(e) {
    let n = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, l.useMemo)(
        () => (n?.applicationRoleConnections == null ? s : n.applicationRoleConnections),
        [n?.applicationRoleConnections],
    );
}

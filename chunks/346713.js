n.d(l, { A: () => s });
var t = n(64700),
    i = n(17928),
    r = n(841595);
let a = [];
function s(e) {
    let l = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, t.useMemo)(
        () => (l?.applicationRoleConnections == null ? a : l.applicationRoleConnections),
        [l?.applicationRoleConnections],
    );
}

n.d(t, { A: () => a });
var i = n(582128),
    l = n(17928),
    r = n(321191);
let s = [];
function a(e) {
    let t = (0, l.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, i.useMemo)(
        () => (t?.applicationRoleConnections == null ? s : t.applicationRoleConnections),
        [t?.applicationRoleConnections],
    );
}

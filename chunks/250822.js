t.d(n, { Z: () => s });
var l = t(647438),
    i = t(442837),
    r = t(621853);
let o = [];
function s(e) {
    let n = (0, i.e7)([r.Z], () => r.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () => ((null == n ? void 0 : n.applicationRoleConnections) == null ? o : n.applicationRoleConnections),
        [null == n ? void 0 : n.applicationRoleConnections],
    );
}

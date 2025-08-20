t.d(n, { Z: () => c });
var r = t(647438),
    o = t(442837),
    l = t(621853);
let i = [];
function c(e) {
    let n = (0, o.e7)([l.Z], () => l.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () => ((null == n ? void 0 : n.applicationRoleConnections) == null ? i : n.applicationRoleConnections),
        [null == n ? void 0 : n.applicationRoleConnections],
    );
}

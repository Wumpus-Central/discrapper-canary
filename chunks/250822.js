t.d(n, { Z: () => c });
var r = t(647438),
    l = t(442837),
    o = t(621853);
let i = [];
function c(e) {
    let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () => ((null == n ? void 0 : n.applicationRoleConnections) == null ? i : n.applicationRoleConnections),
        [null == n ? void 0 : n.applicationRoleConnections],
    );
}

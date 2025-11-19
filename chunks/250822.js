t.d(n, { Z: () => s });
var l = t(473749),
    i = t(442837),
    o = t(621853);
let r = [];
function s(e) {
    let n = (0, i.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, l.useMemo)(
        () => ((null == n ? void 0 : n.applicationRoleConnections) == null ? r : n.applicationRoleConnections),
        [null == n ? void 0 : n.applicationRoleConnections],
    );
}

t.d(n, { Z: () => s });
var r = t(192379),
    o = t(442837),
    i = t(621853);
let l = [];
function s(e) {
    let n = (0, o.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, r.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}

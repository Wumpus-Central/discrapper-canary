t.d(n, { Z: () => s });
var o = t(192379),
    r = t(442837),
    i = t(621853);
let l = [];
function s(e) {
    let n = (0, r.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, o.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? l : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}

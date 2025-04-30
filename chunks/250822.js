t.d(n, { Z: () => o });
var l = t(192379),
    r = t(442837),
    i = t(621853);
let s = [];
function o(e) {
    let n = (0, r.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, l.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? s : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}

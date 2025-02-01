i.d(n, { Z: () => r });
var t = i(192379),
    l = i(442837),
    o = i(621853);
let s = [];
function r(e) {
    let n = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, t.useMemo)(() => ((null == n ? void 0 : n.applicationRoleConnections) == null ? s : n.applicationRoleConnections), [null == n ? void 0 : n.applicationRoleConnections]);
}

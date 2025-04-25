n.d(t, { Z: () => u });
var r = n(192379),
    o = n(442837),
    l = n(621853);
let i = [];
function u(e) {
    let t = (0, o.e7)([l.Z], () => l.Z.getUserProfile(e));
    return (0, r.useMemo)(() => ((null == t ? void 0 : t.applicationRoleConnections) == null ? i : t.applicationRoleConnections), [null == t ? void 0 : t.applicationRoleConnections]);
}

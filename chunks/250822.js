n.d(t, { Z: () => u });
var r = n(192379),
    l = n(442837),
    o = n(621853);
let i = [];
function u(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.getUserProfile(e));
    return (0, r.useMemo)(() => ((null == t ? void 0 : t.applicationRoleConnections) == null ? i : t.applicationRoleConnections), [null == t ? void 0 : t.applicationRoleConnections]);
}

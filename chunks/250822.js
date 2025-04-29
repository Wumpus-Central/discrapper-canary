n.d(t, { Z: () => o });
var l = n(73800),
    r = n(442837),
    i = n(621853);
let s = [];
function o(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, l.useMemo)(() => ((null == t ? void 0 : t.applicationRoleConnections) == null ? s : t.applicationRoleConnections), [null == t ? void 0 : t.applicationRoleConnections]);
}

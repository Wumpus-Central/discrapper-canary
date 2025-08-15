n.d(t, { Z: () => a });
var r = n(73800),
    i = n(442837),
    l = n(621853);
let o = [];
function a(e) {
    let t = (0, i.e7)([l.Z], () => l.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () => ((null == t ? void 0 : t.applicationRoleConnections) == null ? o : t.applicationRoleConnections),
        [null == t ? void 0 : t.applicationRoleConnections],
    );
}

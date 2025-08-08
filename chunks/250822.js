n.d(t, { Z: () => a });
var r = n(73800),
    l = n(442837),
    i = n(621853);
let o = [];
function a(e) {
    let t = (0, l.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () => ((null == t ? void 0 : t.applicationRoleConnections) == null ? o : t.applicationRoleConnections),
        [null == t ? void 0 : t.applicationRoleConnections],
    );
}

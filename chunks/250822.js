n.d(t, { Z: () => a });
var r = n(647438),
    o = n(442837),
    i = n(621853);
let l = [];
function a(e) {
    let t = (0, o.e7)([i.Z], () => i.Z.getUserProfile(e));
    return (0, r.useMemo)(
        () => ((null == t ? void 0 : t.applicationRoleConnections) == null ? l : t.applicationRoleConnections),
        [null == t ? void 0 : t.applicationRoleConnections],
    );
}

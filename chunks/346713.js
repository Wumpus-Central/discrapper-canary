t.d(l, {
    A: () => a,
});
var n = t(64700),
    i = t(311907),
    r = t(622543);
let s = [];

function a(e) {
    let l = (0, i.bG)([r.A], () => r.A.getUserProfile(e));
    return (0, n.useMemo)(
        () => ((null == l ? void 0 : l.applicationRoleConnections) == null ? s : l.applicationRoleConnections),
        [null == l ? void 0 : l.applicationRoleConnections],
    );
}

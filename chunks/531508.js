t.d(n, { Z: () => a }), t(388685);
var r = t(660815);
let i = new Set([r.V.SLEEPING, r.V.OFFLINE, r.V.ONLINE]);
function a(e) {
    return null == e || (null != e.status && i.has(e.status));
}

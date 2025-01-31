n.d(t, { Z: () => _ });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = null,
    l = !1;
function u(e) {
    let { progress: t, total: n, name: i } = e;
    o = {
        progress: t,
        total: n,
        name: i
    };
}
function c() {
    (o = null), (l = !1);
}
function d() {
    l = !0;
}
class f extends (i = r.ZP.Store) {
    getLastProgress() {
        return o;
    }
    isRunning() {
        return l;
    }
}
s(f, 'displayName', 'DispatchApplicationLaunchSetupStore');
let _ = new f(a.Z, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: u,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: c
});

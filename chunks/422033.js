n.d(t, {
    A: () => p,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = null,
    l = !1;

function c(e) {
    let { progress: t, total: n, name: r } = e;
    o = {
        progress: t,
        total: n,
        name: r,
    };
}

function u() {
    (o = null), (l = !1);
}

function d() {
    l = !0;
}
class f extends (r = i.Ay.Store) {
    getLastProgress() {
        return o;
    }
    isRunning() {
        return l;
    }
}
s(f, "displayName", "DispatchApplicationLaunchSetupStore");
let p = new f(a.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: c,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: u,
});

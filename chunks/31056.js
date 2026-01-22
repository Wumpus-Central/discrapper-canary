n.d(t, {
    A: () => l,
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
class o extends (r = i.Ay.Store) {
    getState() {
        return {
            enabled: !1,
            optedOut: !1,
        };
    }
    get optedOut() {
        return !1;
    }
    get enabled() {
        return !1;
    }
    get visible() {
        return !1;
    }
    get active() {
        return !1;
    }
}
s(o, "displayName", "LowPerformanceModeStore");
let l = new o(a.h, {});

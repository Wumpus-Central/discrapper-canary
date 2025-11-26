n.d(t, { Z: () => l });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
class s extends (r = i.ZP.Store) {
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
o(s, "displayName", "LowPerformanceModeStore");
let l = new s(a.Z, {});

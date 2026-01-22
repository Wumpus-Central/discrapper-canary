n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(439372),
    i = n(837921);

function a(e, t, n) {
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
class s extends r.A {
    constructor(...e) {
        super(...e),
            a(this, "ownedLocks", new Set()),
            a(this, "acquireLock", (e) => {
                if (this.ownedLocks.has(e)) return !0;
                let t = "discord-overlay-global-owner-lock-".concat(e);
                return !1 !== i.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
            });
    }
}
let o = new s();

"use strict";
n.d(t, { A: () => a });
var r = n(439372),
    i = n(837921);
class s extends r.A {
    ownedLocks = new Set();
    acquireLock = (e) => {
        if (this.ownedLocks.has(e)) return !0;
        let t = `discord-overlay-global-owner-lock-${e}`;
        return !1 !== i.Ay.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
    };
}
let a = new s();

"use strict";
n.d(t, { A: () => r }), n(321073);
var i = n(459838);
function r(e) {
    let t = !1;
    async function n() {
        if (t) return;
        let r = [];
        e.eachConnection((e) => r.push({ connection: e, stats: e.emitStats() }));
        let a = [];
        for (let e of r) {
            let t = await e.stats;
            null != t && a.push({ connection: e.connection, stats: t });
        }
        e.emit(i.bg.ConnectionStats, a), setTimeout(n, 1e3);
    }
    e.on(i.bg.Destroy, () => (t = !0)), setTimeout(n, 1e3);
}
n(618792);

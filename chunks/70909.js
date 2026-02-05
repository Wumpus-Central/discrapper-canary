"use strict";
n.d(t, { A: () => i }), n(321073);
var r = n(205693);
function i(e) {
    let t = !1;
    e.on(r.bg.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let i = [];
        e.eachConnection((e) => i.push({ connection: e, stats: e.emitStats() }));
        let a = [];
        for (let e of i) {
            let t = await e.stats;
            null != t && a.push({ connection: e.connection, stats: t });
        }
        e.emit(r.bg.ConnectionStats, a), setTimeout(n, 1e3);
    };
    setTimeout(n, 1e3);
}
n(618792);

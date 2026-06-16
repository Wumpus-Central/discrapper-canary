"use strict";
n.d(t, { A: () => r }), n(321073);
var i = n(459838);
function r(e) {
    let t = !1;
    e.on(i.bg.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let r = [];
        e.eachConnection((e) => r.push({ connection: e, stats: e.emitStats() }));
        let s = [];
        for (let e of r) {
            let t = await e.stats;
            null != t && s.push({ connection: e.connection, stats: t });
        }
        e.emit(i.bg.ConnectionStats, s), setTimeout(n, 1e3);
    };
    setTimeout(n, 1e3);
}
n(618792);

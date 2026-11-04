n(321073);
var i = n(651139);
(n(618792),
    n.d(
        t,
        {},
        {
            A: function (e) {
                let t = !1;
                (e.on(i.b.Destroy, () => (t = !0)),
                    setTimeout(async function n() {
                        if (t) return;
                        let r = [];
                        e.eachConnection((e) => r.push({ connection: e, stats: e.emitStats() }));
                        let a = [];
                        for (let e of r) {
                            let t = await e.stats;
                            null != t && a.push({ connection: e.connection, stats: t });
                        }
                        (e.emit(i.b.ConnectionStats, a), setTimeout(n, 1e3));
                    }, 1e3));
            },
        },
    ));

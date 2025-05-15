n.d(t, { Z: () => a }), n(539854), n(388685);
var r = n(46973),
    i = n(198274);
function a(e) {
    let t = !1;
    e.on(r.aB.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let a = [];
        e.eachConnection((e) =>
            a.push({
                connection: e,
                stats: e.emitStats()
            })
        );
        let o = [];
        for (let e of a) {
            let t = await e.stats;
            null != t &&
                o.push({
                    connection: e.connection,
                    stats: t
                });
        }
        e.emit(r.aB.ConnectionStats, o), setTimeout(n, i.T);
    };
    setTimeout(n, i.T);
}

n.d(t, { Z: () => o }), n(653041), n(47120);
var r = n(46973),
    i = n(198274);
function o(e) {
    let t = !1;
    e.on(r.aB.Destroy, () => (t = !0));
    let n = async () => {
        if (t) return;
        let o = [];
        e.eachConnection((e) =>
            o.push({
                connection: e,
                stats: e.emitStats()
            })
        );
        let a = [];
        for (let e of o) {
            let t = await e.stats;
            null != t &&
                a.push({
                    connection: e.connection,
                    stats: t
                });
        }
        e.emit(r.aB.ConnectionStats, a), setTimeout(n, i.T);
    };
    setTimeout(n, i.T);
}

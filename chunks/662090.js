n.d(t, {
    AT: () => r.AT,
    rD: () => r.rD,
    vB: () => r.vB,
    jF: () => a,
    Ay: () => l,
    Vv: () =>
        function e(t, n, i, a) {
            let { length: s } = i,
                l = a,
                o = n;
            if (0 === s) return 0;
            if (null == l) l = o;
            else if (l === o) return o;
            return (o += t === r.vB.UP ? -1 : 1) < 0 || o >= s
                ? e(t, o < 0 ? s : -1, i, l)
                : i[o].type === r.rD.HEADER
                  ? e(t, o, i, l)
                  : o;
        },
    vH: () => s.A,
});
var i = n(290676),
    r = n(926140);
function a(e) {
    return { type: r.rD.HEADER, record: new r.X9(e), score: 0 };
}
var s = n(989133);
let l = i.A;

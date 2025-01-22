r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(47120);
var a = r(518263);
var o = r(970173);
var s = r(520712);
var l = r(268111);
var u = r(941497);
var c = r(32026);
var d = r(480839);
var f = r(744285);
var p = r(492257);
var h = r(873817);
var _ = r(512722),
    m = r.n(_),
    g = r(735630);
async function E(e) {
    let n;
    let r = g.createFile(!1),
        i = new Promise((e) => {
            r.onReady = e;
        }),
        a = await e.arrayBuffer();
    for (let e of ((a.fileStart = 0), r.appendBuffer(a), r.flush(), await i, m()(null != r.boxes, 'mp4boxInputFile.boxes should not be null after parsing'), r.boxes)) 'uuid' === e.type && (n = e.start);
    let o = e.slice(0, n, e.type),
        s = e.slice(n + 4, n + 8 + 16, e.type);
    return new Blob([o, new Uint8Array([0, 0, 0, 24]), s], { type: e.type });
}

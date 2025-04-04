n.d(t, { Z: () => o }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r = n(512722),
    i = n.n(r);
async function o(e) {
    let t,
        { default: r } = await n.e('32990').then(n.t.bind(n, 735630, 19)),
        o = r.createFile(!1),
        a = new Promise((e) => {
            o.onReady = e;
        }),
        s = await e.arrayBuffer();
    for (let e of ((s.fileStart = 0), o.appendBuffer(s), o.flush(), await a, i()(null != o.boxes, 'mp4boxInputFile.boxes should not be null after parsing'), o.boxes)) 'uuid' === e.type && (t = e.start);
    let l = e.slice(0, t, e.type),
        c = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([l, new Uint8Array([0, 0, 0, 24]), c], { type: e.type });
}

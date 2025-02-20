n.d(t, { Z: () => a }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r = n(512722),
    i = n.n(r),
    o = n(735630);
async function a(e) {
    let t;
    let n = o.createFile(!1),
        r = new Promise((e) => {
            n.onReady = e;
        }),
        a = await e.arrayBuffer();
    for (let e of ((a.fileStart = 0), n.appendBuffer(a), n.flush(), await r, i()(null != n.boxes, 'mp4boxInputFile.boxes should not be null after parsing'), n.boxes)) 'uuid' === e.type && (t = e.start);
    let s = e.slice(0, t, e.type),
        l = e.slice(t + 4, t + 8 + 16, e.type);
    return new Blob([s, new Uint8Array([0, 0, 0, 24]), l], { type: e.type });
}

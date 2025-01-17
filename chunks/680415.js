e(312677);
var r = e(511004);
e(149182);
var u = e(486324);
async function o(n, t, e, o, i) {
    try {
        let c = await (0, r.t)(n, t, e, o, i);
        self.postMessage({
            type: u.u.CROP_GIF_COMPLETE,
            result: c
        });
    } catch (n) {
        self.postMessage({ type: u.u.CROP_GIF_ERROR });
    }
}
self.addEventListener('message', (n) => {
    let { data: t } = n;
    if (t.type === u.u.CROP_GIF_START) {
        let { gif: n, x: e, y: r, width: u, height: i } = t;
        o(n, e, r, u, i);
    }
});

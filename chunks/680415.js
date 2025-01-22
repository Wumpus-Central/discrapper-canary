e(312677);
var r = e(511004);
e(149182);
var u = e(486324);
async function o(n) {
    let { gif: t, x: e, y: o, width: i, height: c, rotationDegrees: f = 0 } = n;
    try {
        let n = await (0, r.Q)({
            gif: t,
            x: e,
            y: o,
            width: i,
            height: c,
            rotationDegrees: f
        });
        self.postMessage({
            type: u.u.CROP_GIF_COMPLETE,
            result: n
        });
    } catch (n) {
        self.postMessage({ type: u.u.CROP_GIF_ERROR });
    }
}
self.addEventListener('message', (n) => {
    let { data: t } = n;
    if (t.type === u.u.CROP_GIF_START) {
        let { gif: n, x: e, y: r, width: u, height: i, rotationDegrees: c } = t;
        o({
            gif: n,
            x: e,
            y: r,
            width: u,
            height: i,
            rotationDegrees: c
        });
    }
});

r(312677);
var n = r(511004);
r(149182);
var o = r(486324);
async function i(e) {
    let { gif: t, x: r, y: i, width: a, height: u, imageRotation: s = 0 } = e;
    try {
        let e = await (0, n.Q)({
            gif: t,
            x: r,
            y: i,
            width: a,
            height: u,
            imageRotation: s
        });
        self.postMessage({
            type: o.u.CROP_GIF_COMPLETE,
            result: e
        });
    } catch (e) {
        self.postMessage({ type: o.u.CROP_GIF_ERROR });
    }
}
self.addEventListener('message', (e) => {
    let { data: t } = e;
    if (t.type === o.u.CROP_GIF_START) {
        let { gif: e, x: r, y: n, width: o, height: a, imageRotation: u } = t;
        i({
            gif: e,
            x: r,
            y: n,
            width: o,
            height: a,
            imageRotation: u
        });
    }
});

n.d(i, { Q: () => a }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(411104);
var o = n(981631);
let t = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function a(e) {
    let i = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
    if (null == i.pathname.match(t)) throw Error('Unexpected Tenor GIF path.');
    let a = ''.concat(o.ANM.TENOR_ASSET_PATH).concat(i.pathname);
    return ''.concat(location.protocol).concat(n).concat(a);
}

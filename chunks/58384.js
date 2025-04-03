n.d(i, { Q: () => r }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563), n(411104);
var t = n(981631);
let o = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function r(e) {
    let i = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
    if (null == i.pathname.match(o)) throw Error('Unexpected Tenor GIF path.');
    let r = ''.concat(t.ANM.TENOR_ASSET_PATH).concat(i.pathname);
    return ''.concat(location.protocol).concat(n).concat(r);
}

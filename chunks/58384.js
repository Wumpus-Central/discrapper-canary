i.d(n, { Q: () => r }), i(315314), i(309749), i(610138), i(216116), i(78328), i(815648), i(47120), i(301563), i(411104);
var t = i(981631);
let o = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function r(e) {
    let n = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: i } = window.GLOBAL_ENV;
    if (null == n.pathname.match(o)) throw Error('Unexpected Tenor GIF path.');
    let r = ''.concat(t.ANM.TENOR_ASSET_PATH).concat(n.pathname);
    return ''.concat(location.protocol).concat(i).concat(r);
}

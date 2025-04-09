n.d(t, { Q: () => o }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(415506);
var i = n(981631);
let a = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function o(e) {
    let t = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
    if (null == t.pathname.match(a)) throw Error('Unexpected Tenor GIF path.');
    let o = ''.concat(i.ANM.TENOR_ASSET_PATH).concat(t.pathname);
    return ''.concat(location.protocol).concat(n).concat(o);
}

n.d(i, { Q: () => r }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282), n(415506);
var t = n(981631);
let o = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function r(e) {
    let i = new URL(''.concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: n } = window.GLOBAL_ENV;
    if (null == i.pathname.match(o)) throw Error('Unexpected Tenor GIF path.');
    let r = ''.concat(t.ANM.TENOR_ASSET_PATH).concat(i.pathname);
    return ''.concat(location.protocol).concat(n).concat(r);
}

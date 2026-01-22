a.d(t, { g: () => i }), a(896048), a(693327), a(554719), a(680155), a(323874), a(14289), a(35956), a(747238), a(65821);
var n = a(652215);
let s = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/;
function i(e) {
    let t = new URL("".concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
    if (null == t.pathname.match(s)) throw Error("Unexpected Tenor GIF path.");
    let i = "".concat(n.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
    return "".concat(location.protocol).concat(a).concat(i);
}

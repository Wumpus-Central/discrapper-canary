n.d(t, {
    s: () => l,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(747238),
    n(65821);
var a = n(652215);
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    s = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    r = new Set(["static.klipy.com"]);

function l(e) {
    let t = new URL("".concat(window.location.protocol).concat(e));
    if (s.has(t.hostname)) {
        let { ASSET_ENDPOINT: e } = window.GLOBAL_ENV;
        if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
        let n = "".concat(a.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(e).concat(n);
    }
    return (
        (function (e) {
            let { hostname: t } = e;
            return "giphy.com" === t || t.endsWith(".giphy.com");
        })(t) || r.has(t.hostname),
        "https://".concat(t.hostname).concat(t.pathname).concat(t.search)
    );
}

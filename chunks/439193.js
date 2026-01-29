a.d(t, {
    s: () => l,
}),
    a(896048),
    a(693327),
    a(554719),
    a(680155),
    a(323874),
    a(14289),
    a(35956),
    a(747238),
    a(65821);
var n = a(652215);
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    c = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    o = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    r = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    s = new Set(["static.klipy.com"]);

function l(e) {
    let t = new URL("".concat(window.location.protocol).concat(e)),
        { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
    if (r.has(t.hostname)) {
        if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
        let e = "".concat(n.Rsh.TENOR_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(a).concat(e);
    }
    if (
        (function (e) {
            let { hostname: t } = e;
            return "giphy.com" === t || t.endsWith(".giphy.com");
        })(t)
    ) {
        if (null == t.pathname.match(c)) throw Error("Unexpected Giphy GIF path.");
        let e = "".concat(n.Rsh.GIPHY_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(a).concat(e);
    }
    if (s.has(t.hostname)) {
        if (null == t.pathname.match(o)) throw Error("Unexpected Klipy GIF path.");
        let e = "".concat(n.Rsh.KLIPY_ASSET_PATH).concat(t.pathname);
        return "".concat(location.protocol).concat(a).concat(e);
    }
    return "https://".concat(t.hostname).concat(t.pathname).concat(t.search);
}

i.d(t, { s: () => c }), i(323874), i(14289), i(35956);
var a = i(652215);
let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    l = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    s = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    r = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    o = new Set(["static.klipy.com"]);
function c(e) {
    let t = new URL(`${window.location.protocol}${e}`),
        { ASSET_ENDPOINT: i } = window.GLOBAL_ENV;
    if (r.has(t.hostname)) {
        if (null == t.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
        let e = `${a.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${i}${e}`;
    }
    if (
        (function (e) {
            let { hostname: t } = e;
            return "giphy.com" === t || t.endsWith(".giphy.com");
        })(t)
    ) {
        if (null == t.pathname.match(l)) throw Error("Unexpected Giphy GIF path.");
        let e = `${a.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${i}${e}`;
    }
    if (o.has(t.hostname)) {
        if (null == t.pathname.match(s)) throw Error("Unexpected Klipy GIF path.");
        let e = `${a.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${i}${e}`;
    }
    return `https://${t.hostname}${t.pathname}${t.search}`;
}

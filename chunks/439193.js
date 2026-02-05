a.d(t, { s: () => c }), a(323874), a(14289), a(35956);
var n = a(652215);
let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-%]+\.gif)$/,
    s = /^\/(media\/(?:v1\.[a-zA-Z0-9=&_-]+\/)?[a-zA-Z0-9]+\/[a-zA-Z0-9_-]+\.(gif|webp|mp4))$/,
    l = /^\/([a-zA-Z0-9/_-]+\.(gif|webp|webm|mp4|png))$/,
    r = new Set(["media.tenor.com", "media.tenor.co", "c.tenor.com"]),
    o = new Set(["static.klipy.com"]);
function c(e) {
    let t = new URL(`${window.location.protocol}${e}`),
        { ASSET_ENDPOINT: a } = window.GLOBAL_ENV;
    if (r.has(t.hostname)) {
        if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
        let e = `${n.Rsh.TENOR_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${a}${e}`;
    }
    if (
        (function (e) {
            let { hostname: t } = e;
            return "giphy.com" === t || t.endsWith(".giphy.com");
        })(t)
    ) {
        if (null == t.pathname.match(s)) throw Error("Unexpected Giphy GIF path.");
        let e = `${n.Rsh.GIPHY_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${a}${e}`;
    }
    if (o.has(t.hostname)) {
        if (null == t.pathname.match(l)) throw Error("Unexpected Klipy GIF path.");
        let e = `${n.Rsh.KLIPY_ASSET_PATH}${t.pathname}`;
        return `${location.protocol}${a}${e}`;
    }
    return `https://${t.hostname}${t.pathname}${t.search}`;
}

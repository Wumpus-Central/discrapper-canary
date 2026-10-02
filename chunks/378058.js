n.d(t, {
    FD: () => D,
    Id: () => m,
    NO: () => O,
    Qn: () => L,
    T5: () => R,
    Xw: () => y,
    Y4: () => b,
    l3: () => S,
    o1: () => P,
    o6: () => v,
    sL: () => N,
    zg: () => C,
});
var i = n(776231),
    r = n(617617),
    a = n(71393),
    s = n(486020),
    l = n(723702),
    o = n(194004),
    d = n(823894),
    c = n(652215);
let { API_ENDPOINT: u, MEDIA_PROXY_ENDPOINT: _, PROJECT_ENV: E, ASSET_ENDPOINT: A, CDN_HOST: h } = window.GLOBAL_ENV,
    I = Object.values(o.y3),
    f = decodeURIComponent(c.Rsh.STICKER_ASSET("[\\d]+", `(${I.join("|")})`)),
    p = RegExp(`(${location.protocol}${A}|${location.protocol}${_})(${f})`, "ig"),
    T = RegExp(`${location.protocol}${u}(${f})`, "ig");
function m(e) {
    if (null != e.cover_sticker_id) {
        let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
        if (null != t) return t;
    }
    return e.stickers[0];
}
function g(e) {
    switch (e) {
        case o.TG.PNG:
            return s.QB ? o.y3.WEBP : o.y3.PNG;
        case o.TG.APNG:
            return o.y3.APNG;
        case o.TG.LOTTIE:
            return o.y3.LOTTIE;
        case o.TG.GIF:
            return o.y3.GIF;
        default:
            throw Error(`Unexpected format type: ${e}`);
    }
}
function S(e) {
    switch (e) {
        case "application/json":
            return o.TG.LOTTIE;
        case "image/apng":
            return o.TG.APNG;
        case "image/png":
        case "image/webp":
            return o.TG.PNG;
        case "image/gif":
            return o.TG.GIF;
        default:
            throw Error(`Unexpected file type: ${e}`);
    }
}
function N(e) {
    return null == e ? null : `${e.name}.${g(e.format_type)}`;
}
let C = function (e) {
    let { isPreview: t = !1, size: r = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e.format_type) return null;
    let a = e.format_type;
    e.format_type === o.TG.GIF && t && (a = o.TG.PNG);
    let s = g(a),
        d = c.Rsh.STICKER_ASSET(e.id, s),
        u = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        u = e({ location: "sticker_url" }).enabled;
    } catch {}
    let h = u ? "&force_sdr=true" : "",
        I = s === o.y3.WEBP ? "&quality=lossless" : "";
    if ("development" !== E) {
        if (e.format_type === o.TG.LOTTIE) return `${location.protocol}${A}${d}`;
        let n = e.format_type === o.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
            a = Math.min(2, (0, i.mZ)());
        return `${location.protocol}${_}${d}?size=${(0, i.kr)(r * a)}${n}${I}${h}`;
    }
    if (e.format_type === o.TG.LOTTIE && (0, l.isWeb)()) return d;
    let f = `${location.protocol}${_}${d}`;
    return u ? `${f}?force_sdr=true` : f;
};
function O(e) {
    return null != e.match("development" !== E ? p : T);
}
function R(e) {
    return { type: o.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: m(e) };
}
function L(e, t) {
    return e === d.BJ.ANIMATE_ON_INTERACTION ? t : e !== d.BJ.NEVER_ANIMATE;
}
function y(e) {
    return e.type === o.NL.GUILD;
}
function D(e) {
    return e.type === o.NL.STANDARD;
}
function v(e) {
    return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [];
}
function b(e) {
    if (null === e) return !1;
    let t = e.guild_id;
    return void 0 !== a.A.getGuild(t);
}
let M = [];
function P(e) {
    let t;
    return ((t = r.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? M).includes(e);
}

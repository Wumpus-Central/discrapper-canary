"use strict";
n.d(t, {
    Xw: () => M,
    sL: () => R,
    Qn: () => L,
    YS: () => w,
    l3: () => v,
    Id: () => C,
    T5: () => D,
    Y4: () => k,
    NO: () => b,
    o6: () => x,
    o1: () => G,
    FD: () => P,
    zg: () => O,
});
var i = n(776231),
    r = n(617617),
    s = n(71393),
    a = n(522602),
    o = n(486020),
    l = n(723702),
    u = n(931664);
let c = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    d = /(\n|\t|\s)/g;
var _ = n(194004),
    h = n(823894),
    f = n(652215);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: E, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: A } = window.GLOBAL_ENV,
    I = Object.values(_.y3),
    T = decodeURIComponent(f.Rsh.STICKER_ASSET("[\\d]+", `(${I.join("|")})`)),
    S = RegExp(`(${location.protocol}${g}|${location.protocol}${E})(${T})`, "ig"),
    y = RegExp(`${location.protocol}${p}(${T})`, "ig");
function C(e) {
    if (null != e.cover_sticker_id) {
        let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
        if (null != t) return t;
    }
    return e.stickers[0];
}
function N(e) {
    switch (e) {
        case _.TG.PNG:
            return o.QB ? _.y3.WEBP : _.y3.PNG;
        case _.TG.APNG:
            return _.y3.APNG;
        case _.TG.LOTTIE:
            return _.y3.LOTTIE;
        case _.TG.GIF:
            return _.y3.GIF;
        default:
            throw Error(`Unexpected format type: ${e}`);
    }
}
function v(e) {
    switch (e) {
        case "application/json":
            return _.TG.LOTTIE;
        case "image/apng":
            return _.TG.APNG;
        case "image/png":
        case "image/webp":
            return _.TG.PNG;
        case "image/gif":
            return _.TG.GIF;
        default:
            throw Error(`Unexpected file type: ${e}`);
    }
}
function R(e) {
    return null == e ? null : `${e.name}.${N(e.format_type)}`;
}
let O = function (e) {
    let { isPreview: t = !1, size: r = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e.format_type) return null;
    let s = e.format_type;
    e.format_type === _.TG.GIF && t && (s = _.TG.PNG);
    let a = N(s),
        o = f.Rsh.STICKER_ASSET(e.id, a),
        u = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        u = e({ location: "sticker_url" }).enabled;
    } catch {}
    let c = u ? "&force_sdr=true" : "",
        d = a === _.y3.WEBP ? "&quality=lossless" : "";
    if ("development" !== m) {
        if (e.format_type === _.TG.LOTTIE) return `${location.protocol}${g}${o}`;
        let n = e.format_type === _.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
            s = Math.min(2, (0, i.mZ)());
        return `${location.protocol}${E}${o}?size=${(0, i.kr)(r * s)}${n}${d}${c}`;
    }
    if (e.format_type === _.TG.LOTTIE && (0, l.isWeb)()) return o;
    let h = `${location.protocol}${E}${o}`;
    return u ? `${h}?force_sdr=true` : h;
};
function b(e) {
    return null != e.match("development" !== m ? S : y);
}
function D(e) {
    return { type: _.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: C(e) };
}
function L(e, t) {
    return e === h.BJ.ANIMATE_ON_INTERACTION ? t : e !== h.BJ.NEVER_ANIMATE;
}
function w(e, t, n, i) {
    if (a.A.getUploadCount(n, i) > 0) return !0;
    let r = u.A.getStickerPreview(n, i);
    if (null != r && r.length > 0) return !0;
    switch (e) {
        case _.D6.STICKER_PICKER:
            return "" !== t.trim();
        case _.D6.AUTOCOMPLETE:
            var s;
            return (null == (s = t) ? [] : s.replace(c, "").replace(d, " ").trim().split(" ")).length > 1;
        case _.D6.BUILT_IN_INTEGRATION:
        default:
            return !1;
    }
}
function M(e) {
    return e.type === _.NL.GUILD;
}
function P(e) {
    return e.type === _.NL.STANDARD;
}
function x(e) {
    return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [];
}
function k(e) {
    if (null === e) return !1;
    let t = e.guild_id;
    return void 0 !== s.A.getGuild(t);
}
let U = [];
function G(e) {
    let t;
    return ((t = r.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? U).includes(e);
}

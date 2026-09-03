n.d(t, {
    Xw: () => P,
    sL: () => L,
    Qn: () => b,
    YS: () => M,
    l3: () => R,
    Id: () => C,
    T5: () => v,
    Y4: () => G,
    NO: () => D,
    o6: () => w,
    o1: () => k,
    FD: () => U,
    zg: () => y,
});
var i = n(776231),
    r = n(617617),
    a = n(71393),
    s = n(522602),
    l = n(486020),
    o = n(723702),
    d = n(931664);
let c = /(!|\.|;|,|-|\u2014|\u2013|\?|"|')/g,
    u = /(\n|\t|\s)/g;
var _ = n(194004),
    E = n(823894),
    A = n(652215);
let { API_ENDPOINT: h, MEDIA_PROXY_ENDPOINT: I, PROJECT_ENV: f, ASSET_ENDPOINT: p, CDN_HOST: T } = window.GLOBAL_ENV,
    m = Object.values(_.y3),
    g = decodeURIComponent(A.Rsh.STICKER_ASSET("[\\d]+", `(${m.join("|")})`)),
    S = RegExp(`(${location.protocol}${p}|${location.protocol}${I})(${g})`, "ig"),
    N = RegExp(`${location.protocol}${h}(${g})`, "ig");
function C(e) {
    if (null != e.cover_sticker_id) {
        let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
        if (null != t) return t;
    }
    return e.stickers[0];
}
function O(e) {
    switch (e) {
        case _.TG.PNG:
            return l.QB ? _.y3.WEBP : _.y3.PNG;
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
function R(e) {
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
function L(e) {
    return null == e ? null : `${e.name}.${O(e.format_type)}`;
}
let y = function (e) {
    let { isPreview: t = !1, size: r = 160 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e.format_type) return null;
    let a = e.format_type;
    e.format_type === _.TG.GIF && t && (a = _.TG.PNG);
    let s = O(a),
        l = A.Rsh.STICKER_ASSET(e.id, s),
        d = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        d = e({ location: "sticker_url" }).enabled;
    } catch {}
    let c = d ? "&force_sdr=true" : "",
        u = s === _.y3.WEBP ? "&quality=lossless" : "";
    if ("development" !== f) {
        if (e.format_type === _.TG.LOTTIE) return `${location.protocol}${p}${l}`;
        let n = e.format_type === _.TG.APNG && t && !(0, o.isAndroid)() ? "&passthrough=false" : "",
            a = Math.min(2, (0, i.mZ)());
        return `${location.protocol}${I}${l}?size=${(0, i.kr)(r * a)}${n}${u}${c}`;
    }
    if (e.format_type === _.TG.LOTTIE && (0, o.isWeb)()) return l;
    let E = `${location.protocol}${I}${l}`;
    return d ? `${E}?force_sdr=true` : E;
};
function D(e) {
    return null != e.match("development" !== f ? S : N);
}
function v(e) {
    return { type: _.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: C(e) };
}
function b(e, t) {
    return e === E.BJ.ANIMATE_ON_INTERACTION ? t : e !== E.BJ.NEVER_ANIMATE;
}
function M(e, t, n, i) {
    if (s.A.getUploadCount(n, i) > 0) return !0;
    let r = d.A.getStickerPreview(n, i);
    if (null != r && r.length > 0) return !0;
    switch (e) {
        case _.D6.STICKER_PICKER:
            return "" !== t.trim();
        case _.D6.AUTOCOMPLETE:
            var a;
            return (null == (a = t) ? [] : a.replace(c, "").replace(u, " ").trim().split(" ")).length > 1;
        case _.D6.BUILT_IN_INTEGRATION:
        default:
            return !1;
    }
}
function P(e) {
    return e.type === _.NL.GUILD;
}
function U(e) {
    return e.type === _.NL.STANDARD;
}
function w(e) {
    return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [];
}
function G(e) {
    if (null === e) return !1;
    let t = e.guild_id;
    return void 0 !== a.A.getGuild(t);
}
let x = [];
function k(e) {
    let t;
    return ((t = r.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? x).includes(e);
}

var i = n(776231),
    r = n(617617),
    a = n(71393),
    s = n(486020),
    l = n(723702),
    o = n(832628),
    d = n(823894),
    c = n(652215);
let { API_ENDPOINT: u, MEDIA_PROXY_ENDPOINT: _, PROJECT_ENV: E, ASSET_ENDPOINT: A, CDN_HOST: f } = window.GLOBAL_ENV,
    h = Object.values(o.y3),
    I = decodeURIComponent(c.Rsh.STICKER_ASSET("[\\d]+", `(${h.join("|")})`)),
    p = RegExp(`(${location.protocol}${A}|${location.protocol}${_})(${I})`, "ig"),
    m = RegExp(`${location.protocol}${u}(${I})`, "ig");
function g(e) {
    if (null != e.cover_sticker_id) {
        let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
        if (null != t) return t;
    }
    return e.stickers[0];
}
function T(e) {
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
let S = [];
n.d(
    t,
    {},
    {
        FD: function (e) {
            return e.type === o.NL.STANDARD;
        },
        Id: g,
        NO: function (e) {
            return null != e.match("development" !== E ? p : m);
        },
        Qn: function (e, t) {
            return e === d.BJ.ANIMATE_ON_INTERACTION ? t : e !== d.BJ.NEVER_ANIMATE;
        },
        T5: function (e) {
            return { type: o.Z2.PACK, id: e.id, name: e.name, stickers: e.stickers, previewSticker: g(e) };
        },
        Xw: function (e) {
            return e.type === o.NL.GUILD;
        },
        Y4: function (e) {
            if (null === e) return !1;
            let t = e.guild_id;
            return void 0 !== a.A.getGuild(t);
        },
        l3: function (e) {
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
        },
        o1: function (e) {
            let t;
            return ((t = r.A.frecencyWithoutFetchingLatest), t.favoriteStickers?.stickerIds ?? S).includes(e);
        },
        o6: function (e) {
            return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [];
        },
        sL: function (e) {
            return null == e ? null : `${e.name}.${T(e.format_type)}`;
        },
        zg: function (e) {
            let { isPreview: t = !1, size: r = 160 } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == e.format_type) return null;
            let a = e.format_type;
            e.format_type === o.TG.GIF && t && (a = o.TG.PNG);
            let s = T(a),
                d = c.Rsh.STICKER_ASSET(e.id, s),
                u = !1;
            try {
                let { getForceSdrEmojisStickersConfig: e } = n(796272);
                u = e({ location: "sticker_url" }).enabled;
            } catch {}
            let f = u ? "&force_sdr=true" : "",
                h = s === o.y3.WEBP ? "&quality=lossless" : "";
            if ("development" !== E) {
                if (e.format_type === o.TG.LOTTIE) return `${location.protocol}${A}${d}`;
                let n = e.format_type === o.TG.APNG && t && !(0, l.m0)() ? "&passthrough=false" : "",
                    a = Math.min(2, (0, i.mZ)());
                return `${location.protocol}${_}${d}?size=${(0, i.kr)(r * a)}${n}${h}${f}`;
            }
            if (e.format_type === o.TG.LOTTIE && (0, l.HZ)()) return d;
            let I = `${location.protocol}${_}${d}`;
            return u ? `${I}?force_sdr=true` : I;
        },
    },
);

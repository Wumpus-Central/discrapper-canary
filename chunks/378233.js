(n.d(t, {
    B0: () => C,
    Hc: () => w,
    J8: () => D,
    Q6: () => N,
    V9: () => k,
    WD: () => P,
    Zt: () => I,
    Zv: () => S,
    _V: () => A,
    cv: () => x,
    gM: () => U,
    jl: () => L,
    z: () => R
}),
    n(413496),
    n(433524),
    n(35282),
    n(415506),
    n(781311));
var r = n(134432),
    i = n(581883),
    a = n(430824),
    o = n(117530),
    s = n(768581),
    l = n(358085),
    c = n(913663),
    u = n(11513),
    d = n(373228),
    f = n(611480),
    _ = n(981631);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    b = Object.values(d.og),
    y = decodeURIComponent(_.ANM.STICKER_ASSET('[\\d]+', '('.concat(b.join('|'), ')'))),
    O = RegExp('('.concat(location.protocol).concat(g, '|').concat(location.protocol).concat(h, ')(').concat(y, ')'), 'ig'),
    v = RegExp(''.concat(location.protocol).concat(p, '(').concat(y, ')'), 'ig'),
    I = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    T = (e) => {
        switch (e) {
            case d.u3.PNG:
                return s.$k ? d.og.WEBP : d.og.PNG;
            case d.u3.APNG:
                return d.og.APNG;
            case d.u3.LOTTIE:
                return d.og.LOTTIE;
            case d.u3.GIF:
                return d.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    S = (e) => {
        switch (e) {
            case 'application/json':
                return d.u3.LOTTIE;
            case 'image/apng':
                return d.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return d.u3.PNG;
            case 'image/gif':
                return d.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    A = (e) => (null == e ? null : ''.concat(e.name, '.').concat(T(e.format_type))),
    N = function (e) {
        let { isPreview: t = !1, size: n = f.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let i = e.format_type;
        e.format_type === d.u3.GIF && t && (i = d.u3.PNG);
        let a = T(i),
            o = _.ANM.STICKER_ASSET(e.id, a),
            s = a === d.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== m) {
            if (e.format_type === d.u3.LOTTIE) return ''.concat(location.protocol).concat(g).concat(o);
            let i = e.format_type === d.u3.APNG && t && !(0, l.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, r.x_)());
            return ''
                .concat(location.protocol)
                .concat(h)
                .concat(o, '?size=')
                .concat((0, r.oO)(n * a))
                .concat(i)
                .concat(s);
        }
        return ''.concat(location.protocol).concat(p).concat(o);
    },
    C = (e) => null != e.match('development' !== m ? O : v),
    R = (e) => ({
        type: d.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: I(e)
    }),
    P = (e, t) => (e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE),
    w = (e, t, n, r) => {
        if (o.Z.getUploadCount(n, r) > 0) return !0;
        let i = c.Z.getStickerPreview(n, r);
        if (null != i && i.length > 0) return !0;
        switch (e) {
            case d.V0.STICKER_PICKER:
                return '' !== t.trim();
            case d.V0.AUTOCOMPLETE:
                return (0, u.w)(t).length > 1;
            case d.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    D = (e) => e.type === d.n0.GUILD,
    L = (e) => e.type === d.n0.STANDARD,
    x = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    k = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== a.Z.getGuild(t);
    },
    M = [];
function j() {
    var e, t;
    return null != (t = null == (e = i.Z.frecencyWithoutFetchingLatest.favoriteStickers) ? void 0 : e.stickerIds) ? t : M;
}
function U(e) {
    return j().includes(e);
}

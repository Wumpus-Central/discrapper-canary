n.d(t, {
    B0: () => O,
    Hc: () => P,
    J8: () => w,
    Q6: () => C,
    V9: () => U,
    WD: () => x,
    X_: () => D,
    Zt: () => b,
    Zv: () => A,
    _V: () => N,
    cv: () => k,
    gM: () => Z,
    jl: () => M,
    sM: () => R,
    z: () => L
}),
    n(411104);
var i = n(606301),
    r = n(134432),
    a = n(581883),
    s = n(430824),
    o = n(117530),
    l = n(768581),
    u = n(358085),
    c = n(913663),
    d = n(373228),
    f = n(611480),
    _ = n(981631);
let { API_ENDPOINT: p, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    v = Object.values(d.og),
    y = decodeURIComponent(_.ANM.STICKER_ASSET('[\\d]+', '('.concat(v.join('|'), ')'))),
    I = RegExp('('.concat(location.protocol).concat(g, '|').concat(location.protocol).concat(h, ')(').concat(y, ')'), 'ig'),
    T = RegExp(''.concat(location.protocol).concat(p, '(').concat(y, ')'), 'ig'),
    b = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    S = (e) => {
        switch (e) {
            case d.u3.PNG:
                return l.$k ? d.og.WEBP : d.og.PNG;
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
    A = (e) => {
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
    N = (e) => (null == e ? null : ''.concat(e.name, '.').concat(S(e.format_type))),
    C = function (e) {
        let { isPreview: t = !1, size: n = f.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let i = e.format_type;
        e.format_type === d.u3.GIF && t && (i = d.u3.PNG);
        let a = S(i),
            s = _.ANM.STICKER_ASSET(e.id, a),
            o = a === d.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== m) {
            if (e.format_type === d.u3.LOTTIE) return ''.concat(location.protocol).concat(g).concat(s);
            let i = e.format_type === d.u3.APNG && t && !(0, u.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, r.x_)());
            return ''
                .concat(location.protocol)
                .concat(h)
                .concat(s, '?size=')
                .concat((0, r.oO)(n * a))
                .concat(i)
                .concat(o);
        }
        return ''.concat(location.protocol).concat(p).concat(s);
    },
    R = (e, t) => {
        let n;
        let i = e.banner_asset_id;
        if (null == i) return null;
        let a = l.$k ? 'webp' : 'png';
        return (
            (n =
                null != E
                    ? ''.concat(location.protocol, '//').concat(E, '/app-assets/').concat(f.Ks, '/store/').concat(i, '.').concat(a)
                    : ''
                          .concat(location.protocol)
                          .concat(p)
                          .concat(_.ANM.STORE_ASSET(f.Ks, i, a))),
            null != t && (n += '?size='.concat((0, r.oO)(t))),
            n
        );
    },
    O = (e) => null != e.match('development' !== m ? I : T),
    D = (e) =>
        e.stickers.some((e) => {
            let { format_type: t } = e;
            return t === d.u3.APNG || t === d.u3.LOTTIE || t === d.u3.GIF;
        }),
    L = (e) => ({
        type: d.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: b(e)
    }),
    x = (e, t) => (e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE),
    P = (e, t, n, r) => {
        if (o.Z.getUploadCount(n, r) > 0) return !0;
        let a = c.Z.getStickerPreview(n, r);
        if (null != a && a.length > 0) return !0;
        switch (e) {
            case d.V0.STICKER_PICKER:
                return '' !== t.trim();
            case d.V0.AUTOCOMPLETE:
            case d.V0.EXPRESSION_SUGGESTIONS:
                return (0, i.wN)(t).length > 1;
            case d.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    w = (e) => e.type === d.n0.GUILD,
    M = (e) => e.type === d.n0.STANDARD,
    k = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    U = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.Z.getGuild(t);
    },
    G = [];
function B() {
    var e, t;
    return null !== (t = null === (e = a.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : G;
}
function Z(e) {
    return B().includes(e);
}

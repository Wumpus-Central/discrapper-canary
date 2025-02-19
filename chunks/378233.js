n.d(t, {
    B0: () => R,
    Hc: () => x,
    J8: () => L,
    Q6: () => A,
    V9: () => j,
    WD: () => D,
    X_: () => P,
    Zt: () => S,
    Zv: () => T,
    _V: () => N,
    cv: () => k,
    gM: () => B,
    jl: () => M,
    sM: () => C,
    z: () => w
}),
    n(474991),
    n(398202),
    n(301563),
    n(411104),
    n(566702);
var r = n(606301),
    i = n(134432),
    o = n(581883),
    a = n(430824),
    s = n(117530),
    l = n(768581),
    c = n(358085),
    u = n(913663),
    d = n(373228),
    f = n(611480),
    p = n(981631);
let { API_ENDPOINT: _, MEDIA_PROXY_ENDPOINT: h, PROJECT_ENV: m, ASSET_ENDPOINT: g, CDN_HOST: E } = window.GLOBAL_ENV,
    v = Object.values(d.og),
    b = decodeURIComponent(p.ANM.STICKER_ASSET('[\\d]+', '('.concat(v.join('|'), ')'))),
    y = RegExp('('.concat(location.protocol).concat(g, '|').concat(location.protocol).concat(h, ')(').concat(b, ')'), 'ig'),
    O = RegExp(''.concat(location.protocol).concat(_, '(').concat(b, ')'), 'ig'),
    S = (e) => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find((t) => t.id === e.cover_sticker_id);
            if (null != t) return t;
        }
        return e.stickers[0];
    },
    I = (e) => {
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
    T = (e) => {
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
    N = (e) => (null == e ? null : ''.concat(e.name, '.').concat(I(e.format_type))),
    A = function (e) {
        let { isPreview: t = !1, size: n = f.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let r = e.format_type;
        e.format_type === d.u3.GIF && t && (r = d.u3.PNG);
        let o = I(r),
            a = p.ANM.STICKER_ASSET(e.id, o),
            s = o === d.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== m) {
            if (e.format_type === d.u3.LOTTIE) return ''.concat(location.protocol).concat(g).concat(a);
            let r = e.format_type === d.u3.APNG && t && !(0, c.isAndroid)() ? '&passthrough=false' : '',
                o = Math.min(2, (0, i.x_)());
            return ''
                .concat(location.protocol)
                .concat(h)
                .concat(a, '?size=')
                .concat((0, i.oO)(n * o))
                .concat(r)
                .concat(s);
        }
        return ''.concat(location.protocol).concat(_).concat(a);
    },
    C = (e, t) => {
        let n;
        let r = e.banner_asset_id;
        if (null == r) return null;
        let o = l.$k ? 'webp' : 'png';
        return (
            (n =
                null != E
                    ? ''.concat(location.protocol, '//').concat(E, '/app-assets/').concat(f.Ks, '/store/').concat(r, '.').concat(o)
                    : ''
                          .concat(location.protocol)
                          .concat(_)
                          .concat(p.ANM.STORE_ASSET(f.Ks, r, o))),
            null != t && (n += '?size='.concat((0, i.oO)(t))),
            n
        );
    },
    R = (e) => null != e.match('development' !== m ? y : O),
    P = (e) =>
        e.stickers.some((e) => {
            let { format_type: t } = e;
            return t === d.u3.APNG || t === d.u3.LOTTIE || t === d.u3.GIF;
        }),
    w = (e) => ({
        type: d.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: S(e)
    }),
    D = (e, t) => (e === f.yr.ANIMATE_ON_INTERACTION ? t : e !== f.yr.NEVER_ANIMATE),
    x = (e, t, n, i) => {
        if (s.Z.getUploadCount(n, i) > 0) return !0;
        let o = u.Z.getStickerPreview(n, i);
        if (null != o && o.length > 0) return !0;
        switch (e) {
            case d.V0.STICKER_PICKER:
                return '' !== t.trim();
            case d.V0.AUTOCOMPLETE:
            case d.V0.EXPRESSION_SUGGESTIONS:
                return (0, r.wN)(t).length > 1;
            case d.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    L = (e) => e.type === d.n0.GUILD,
    M = (e) => e.type === d.n0.STANDARD,
    k = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    j = (e) => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== a.Z.getGuild(t);
    },
    U = [];
function G() {
    var e, t;
    return null !== (t = null === (e = o.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : U;
}
function B(e) {
    return G().includes(e);
}

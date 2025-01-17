r.d(n, {
    B0: function () {
        return L;
    },
    Hc: function () {
        return M;
    },
    J8: function () {
        return k;
    },
    Q6: function () {
        return O;
    },
    V9: function () {
        return G;
    },
    WD: function () {
        return P;
    },
    X_: function () {
        return x;
    },
    Zt: function () {
        return A;
    },
    Zv: function () {
        return C;
    },
    _V: function () {
        return R;
    },
    cv: function () {
        return B;
    },
    gM: function () {
        return V;
    },
    jl: function () {
        return U;
    },
    sM: function () {
        return D;
    },
    z: function () {
        return w;
    }
});
var i = r(411104);
var a = r(606301),
    s = r(134432),
    o = r(581883),
    l = r(430824),
    u = r(117530),
    c = r(768581),
    d = r(358085),
    f = r(913663),
    _ = r(373228),
    h = r(611480),
    p = r(981631);
let { API_ENDPOINT: m, MEDIA_PROXY_ENDPOINT: g, PROJECT_ENV: E, ASSET_ENDPOINT: v, CDN_HOST: I } = window.GLOBAL_ENV,
    T = Object.values(_.og),
    b = decodeURIComponent(p.ANM.STICKER_ASSET('[\\d]+', '('.concat(T.join('|'), ')'))),
    y = RegExp('('.concat(location.protocol).concat(v, '|').concat(location.protocol).concat(g, ')(').concat(b, ')'), 'ig'),
    S = RegExp(''.concat(location.protocol).concat(m, '(').concat(b, ')'), 'ig'),
    A = (e) => {
        if (null != e.cover_sticker_id) {
            let n = e.stickers.find((n) => n.id === e.cover_sticker_id);
            if (null != n) return n;
        }
        return e.stickers[0];
    },
    N = (e) => {
        switch (e) {
            case _.u3.PNG:
                return c.$k ? _.og.WEBP : _.og.PNG;
            case _.u3.APNG:
                return _.og.APNG;
            case _.u3.LOTTIE:
                return _.og.LOTTIE;
            case _.u3.GIF:
                return _.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    C = (e) => {
        switch (e) {
            case 'application/json':
                return _.u3.LOTTIE;
            case 'image/apng':
                return _.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return _.u3.PNG;
            case 'image/gif':
                return _.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    R = (e) => (null == e ? null : ''.concat(e.name, '.').concat(N(e.format_type))),
    O = function (e) {
        let { isPreview: n = !1, size: r = h.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let i = e.format_type;
        e.format_type === _.u3.GIF && n && (i = _.u3.PNG);
        let a = N(i),
            o = p.ANM.STICKER_ASSET(e.id, a),
            l = a === _.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== E) {
            if (e.format_type === _.u3.LOTTIE) return ''.concat(location.protocol).concat(v).concat(o);
            let i = e.format_type === _.u3.APNG && n && !(0, d.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, s.x_)());
            return ''
                .concat(location.protocol)
                .concat(g)
                .concat(o, '?size=')
                .concat((0, s.oO)(r * a))
                .concat(i)
                .concat(l);
        }
        return ''.concat(location.protocol).concat(m).concat(o);
    },
    D = (e, n) => {
        let r;
        let i = e.banner_asset_id;
        if (null == i) return null;
        let a = c.$k ? 'webp' : 'png';
        return (
            (r =
                null != I
                    ? ''.concat(location.protocol, '//').concat(I, '/app-assets/').concat(h.Ks, '/store/').concat(i, '.').concat(a)
                    : ''
                          .concat(location.protocol)
                          .concat(m)
                          .concat(p.ANM.STORE_ASSET(h.Ks, i, a))),
            null != n && (r += '?size='.concat((0, s.oO)(n))),
            r
        );
    },
    L = (e) => null != e.match('development' !== E ? y : S),
    x = (e) =>
        e.stickers.some((e) => {
            let { format_type: n } = e;
            return n === _.u3.APNG || n === _.u3.LOTTIE || n === _.u3.GIF;
        }),
    w = (e) => ({
        type: _.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: A(e)
    }),
    P = (e, n) => (e === h.yr.ANIMATE_ON_INTERACTION ? n : e !== h.yr.NEVER_ANIMATE),
    M = (e, n, r, i) => {
        if (u.Z.getUploadCount(r, i) > 0) return !0;
        let s = f.Z.getStickerPreview(r, i);
        if (null != s && s.length > 0) return !0;
        switch (e) {
            case _.V0.STICKER_PICKER:
                return '' !== n.trim();
            case _.V0.AUTOCOMPLETE:
            case _.V0.EXPRESSION_SUGGESTIONS:
                return (0, a.wN)(n).length > 1;
            case _.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    k = (e) => e.type === _.n0.GUILD,
    U = (e) => e.type === _.n0.STANDARD,
    B = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    G = (e) => {
        if (null === e) return !1;
        let n = e.guild_id;
        return void 0 !== l.Z.getGuild(n);
    },
    Z = [];
function F() {
    var e, n;
    return null !== (n = null === (e = o.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== n ? n : Z;
}
function V(e) {
    return F().includes(e);
}

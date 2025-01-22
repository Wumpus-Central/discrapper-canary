r.d(n, {
    B0: function () {
        return x;
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
        return L;
    },
    Zt: function () {
        return A;
    },
    Zv: function () {
        return N;
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
    o = r(134432),
    s = r(581883),
    l = r(430824),
    u = r(117530),
    c = r(768581),
    d = r(358085),
    f = r(913663),
    p = r(373228),
    h = r(611480),
    _ = r(981631);
let { API_ENDPOINT: m, MEDIA_PROXY_ENDPOINT: g, PROJECT_ENV: E, ASSET_ENDPOINT: v, CDN_HOST: y } = window.GLOBAL_ENV,
    b = Object.values(p.og),
    I = decodeURIComponent(_.ANM.STICKER_ASSET('[\\d]+', '('.concat(b.join('|'), ')'))),
    T = RegExp('('.concat(location.protocol).concat(v, '|').concat(location.protocol).concat(g, ')(').concat(I, ')'), 'ig'),
    S = RegExp(''.concat(location.protocol).concat(m, '(').concat(I, ')'), 'ig'),
    A = (e) => {
        if (null != e.cover_sticker_id) {
            let n = e.stickers.find((n) => n.id === e.cover_sticker_id);
            if (null != n) return n;
        }
        return e.stickers[0];
    },
    C = (e) => {
        switch (e) {
            case p.u3.PNG:
                return c.$k ? p.og.WEBP : p.og.PNG;
            case p.u3.APNG:
                return p.og.APNG;
            case p.u3.LOTTIE:
                return p.og.LOTTIE;
            case p.u3.GIF:
                return p.og.GIF;
            default:
                throw Error('Unexpected format type: '.concat(e));
        }
    },
    N = (e) => {
        switch (e) {
            case 'application/json':
                return p.u3.LOTTIE;
            case 'image/apng':
                return p.u3.APNG;
            case 'image/png':
            case 'image/webp':
                return p.u3.PNG;
            case 'image/gif':
                return p.u3.GIF;
            default:
                throw Error('Unexpected file type: '.concat(e));
        }
    },
    R = (e) => (null == e ? null : ''.concat(e.name, '.').concat(C(e.format_type))),
    O = function (e) {
        let { isPreview: n = !1, size: r = h.lE } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let i = e.format_type;
        e.format_type === p.u3.GIF && n && (i = p.u3.PNG);
        let a = C(i),
            s = _.ANM.STICKER_ASSET(e.id, a),
            l = a === p.og.WEBP ? '&quality=lossless' : '';
        if ('development' !== E) {
            if (e.format_type === p.u3.LOTTIE) return ''.concat(location.protocol).concat(v).concat(s);
            let i = e.format_type === p.u3.APNG && n && !(0, d.isAndroid)() ? '&passthrough=false' : '',
                a = Math.min(2, (0, o.x_)());
            return ''
                .concat(location.protocol)
                .concat(g)
                .concat(s, '?size=')
                .concat((0, o.oO)(r * a))
                .concat(i)
                .concat(l);
        }
        return ''.concat(location.protocol).concat(m).concat(s);
    },
    D = (e, n) => {
        let r;
        let i = e.banner_asset_id;
        if (null == i) return null;
        let a = c.$k ? 'webp' : 'png';
        return (
            (r =
                null != y
                    ? ''.concat(location.protocol, '//').concat(y, '/app-assets/').concat(h.Ks, '/store/').concat(i, '.').concat(a)
                    : ''
                          .concat(location.protocol)
                          .concat(m)
                          .concat(_.ANM.STORE_ASSET(h.Ks, i, a))),
            null != n && (r += '?size='.concat((0, o.oO)(n))),
            r
        );
    },
    x = (e) => null != e.match('development' !== E ? T : S),
    L = (e) =>
        e.stickers.some((e) => {
            let { format_type: n } = e;
            return n === p.u3.APNG || n === p.u3.LOTTIE || n === p.u3.GIF;
        }),
    w = (e) => ({
        type: p.Ih.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: A(e)
    }),
    P = (e, n) => (e === h.yr.ANIMATE_ON_INTERACTION ? n : e !== h.yr.NEVER_ANIMATE),
    M = (e, n, r, i) => {
        if (u.Z.getUploadCount(r, i) > 0) return !0;
        let o = f.Z.getStickerPreview(r, i);
        if (null != o && o.length > 0) return !0;
        switch (e) {
            case p.V0.STICKER_PICKER:
                return '' !== n.trim();
            case p.V0.AUTOCOMPLETE:
            case p.V0.EXPRESSION_SUGGESTIONS:
                return (0, a.wN)(n).length > 1;
            case p.V0.BUILT_IN_INTEGRATION:
            default:
                return !1;
        }
    },
    k = (e) => e.type === p.n0.GUILD,
    U = (e) => e.type === p.n0.STANDARD,
    B = (e) => (e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []),
    G = (e) => {
        if (null === e) return !1;
        let n = e.guild_id;
        return void 0 !== l.Z.getGuild(n);
    },
    Z = [];
function F() {
    var e, n;
    return null !== (n = null === (e = s.Z.frecencyWithoutFetchingLatest.favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== n ? n : Z;
}
function V(e) {
    return F().includes(e);
}

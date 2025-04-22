let r;
n.d(t, {
    $k: () => O,
    CA: () => L,
    F8: () => ee,
    JM: () => D,
    NZ: () => k,
    ZP: () => en,
    aN: () => M,
    ay: () => J,
    ff: () => b,
    gT: () => C,
    ov: () => w,
    pK: () => y,
    pU: () => er,
    rI: () => z,
    tp: () => j,
    xR: () => X
}),
    n(35282),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var i = n(654861),
    a = n.n(i),
    o = n(664751),
    s = n(864106),
    l = n(134432),
    c = n(930153),
    u = n(358085),
    d = n(709054),
    f = n(981631),
    _ = n(377668),
    p = n(970952);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = /^data:/,
    y = (r = n(426563).Z).DEFAULT_AVATARS,
    v = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let O = r.canUseWebp(),
    I = 5,
    S = 240,
    T = 1096,
    A = (0, u.isAndroid)();
function N(e) {
    let t,
        { endpoint: n, path: r, id: i, hash: a, size: s, lossless: c = !1, canAnimate: u = !1, keepAspectRatio: d, format: f = null, canWebP: _ = O } = e;
    if (null == i || null == a) return;
    let p = null != f ? f : u && X(a) ? 'gif' : 'jpg';
    u && J(a) && (p = 'mp4');
    let h = window.GLOBAL_ENV.CDN_HOST;
    if ((null != h ? ('jpg' === p && (p = _ ? 'webp' : 'png'), (t = ''.concat(location.protocol, '//').concat(h, '/').concat(r, '/').concat(i, '/').concat(a, '.').concat(p))) : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, p)), 'mp4' === p)) return t;
    let m = {};
    return null != s && (m.size = (0, l.oO)(s * (0, l.x_)())), null != d && (m.keep_aspect_ratio = d), c && (m.quality = 'lossless'), t + '?'.concat(o.stringify(m));
}
function C(e) {
    let { id: t, animated: n, size: r, forcePNG: i = !1 } = e,
        a = O ? 'webp' : 'png',
        o = O ? 'webp' : 'gif',
        s = i ? 'png' : n ? o : a,
        c = O && n ? '&animated=true' : '',
        u = 'size='.concat((0, l.oO)(r * (0, l.x_)(), A));
    return null != window.GLOBAL_ENV.CDN_HOST ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/').concat(t, '.').concat(s) + '?'.concat(u).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.EMOJI(t, s);
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? v : y;
    if (null == e && null == t) return r[0];
    let i = (0, c.Lk)(t, 0);
    return i > 0 ? r[i % I] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function P(e) {
    let { id: t, avatar: n, discriminator: i, bot: a } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    if (a && t !== _.fL) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && '0000' === i) return y[0];
    }
    return N({
        endpoint: f.ANM.AVATAR,
        path: 'avatars',
        id: t,
        hash: n,
        size: s,
        canAnimate: o,
        format: l,
        canWebP: c
    });
}
function w(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    return null != (t = P(e, n, r, i, a)) ? t : R(e.id, e.discriminator, e.isProvisional);
}
function D(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: a = !1, size: s = f.IXf, canWebP: c = O } = e,
        u = a && X(i) ? 'gif' : 'jpg',
        { CDN_HOST: d } = window.GLOBAL_ENV;
    return (
        null != d
            ? ('jpg' === u && (u = c ? 'webp' : 'png'),
              (t = ''
                  .concat(location.protocol, '//')
                  .concat(d)
                  .concat(f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u))))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u)),
        t + '?'.concat(o.stringify({ size: (0, l.oO)(s * (0, l.x_)()) }))
    );
}
function L(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n
        ? null
        : D({
              userId: t,
              avatar: n,
              guildId: r,
              canAnimate: i
          });
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = L(e, n);
    return null != r ? et(r) : t.getAvatarSource(e.guildId, n);
}
function M(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: a } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        s = i && X(r) ? 'gif' : 'png';
    return (null != o ? ''.concat(location.protocol, '//').concat(o, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.USER_BANNER(n, r, s)) + '?size='.concat((0, l.oO)(a * (0, l.x_)()));
}
function k(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, s.fO)(t)) return;
    let i = t.asset;
    if (null == i) return;
    if (/^data:/.test(i)) return i;
    let { CDN_HOST: a, API_ENDPOINT: o } = window.GLOBAL_ENV,
        c = f.ANM.AVATAR_DECORATION_PRESETS(i);
    if (/^blob:https?:\/\/[^\/]+\//i.test(i)) return i;
    let u = new URL(null != a ? ''.concat(location.protocol, '//').concat(a).concat(c) : ''.concat(location.protocol).concat(o).concat(c));
    return u.searchParams.set('size', ''.concat((0, l.oO)(n * (0, l.x_)()))), u.searchParams.set('passthrough', ''.concat(r && (0, s.ae)(i))), u.toString();
}
function j(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: a, size: o } = e;
    if (null == i || null == r) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        c = a && X(i) ? 'gif' : 'png',
        u = f.ANM.GUILD_MEMBER_BANNER(r, n, i, c);
    return (null != s ? ''.concat(location.protocol, '//').concat(s).concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u) + '?size='.concat((0, l.oO)(o * (0, l.x_)()));
}
function U(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_SPLASH(n, r)) + '?size='.concat(i);
}
function G(e) {
    return et(U(e));
}
function B(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, l.oO)(S * (0, l.x_)()),
        o = O ? 'webp' : 'jpg',
        s = i && X(r) ? 'gif' : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != c ? ''.concat(location.protocol, '//').concat(c, '/banners/').concat(n, '/').concat(r, '.').concat(s) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_BANNER(n, r, s)) + '?size='.concat(a)), 'jpg' === s && (t += '&quality=lossless'), t;
}
function V(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.oO)(T * (0, l.x_)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/home-headers/').concat(n, '/').concat(r, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_HOME_HEADER(n, r)) + '?size='.concat(i);
}
function F(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/discovery-splashes/').concat(n, '/').concat(r, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_DISCOVERY_SPLASH(n, r)) + '?size='.concat(i);
}
function Z(e) {
    return et(F(e));
}
function H(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: a = !1 } = e;
    return N({
        endpoint: f.ANM.GUILD_ICON,
        path: 'icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: a
    });
}
function Y(e) {
    let { id: t, icon: n, size: r = f.IXf, canAnimate: i = !1 } = e;
    return N({
        endpoint: f.ANM.GUILD_TEMPLATE_ICON,
        path: 'guild-templates',
        id: t,
        hash: n,
        size: r,
        canAnimate: i
    });
}
function W(e) {
    let { id: t, icon: n, size: r = f.IXf, bot: i, botIconFirst: a, fallbackAvatar: o = !0 } = e;
    if (null != i && a) {
        let e = P(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return N({
            endpoint: f.ANM.APPLICATION_ICON,
            path: 'app-icons',
            id: t,
            hash: n,
            size: r,
            canAnimate: !1
        });
    if (null != i) {
        let e = P(i, !1, r);
        if (null != e) return e;
    }
    if (o) return p;
}
function K(e) {
    let { id: t, hash: n, size: r = f.IXf, keepAspectRatio: i = !1, format: a } = e;
    return N({
        endpoint: f.ANM.APPLICATION_ICON,
        path: 'app-icons',
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: a
    });
}
function z(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: a = !0 } = e;
    return N({
        endpoint: (e, i, a) => f.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: 'video-filter-assets/'.concat(t),
        id: n,
        hash: r,
        size: i,
        canAnimate: a
    });
}
function q(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function Q(e) {
    var t, n;
    let { id: i, icon: a, applicationId: o, size: s } = e;
    return null != o
        ? null !=
          (t = W({
              id: o,
              icon: a,
              size: s
          }))
            ? t
            : r.DEFAULT_CHANNEL_ICON
        : null !=
            (n = N({
                endpoint: f.ANM.CHANNEL_ICON,
                path: 'channel-icons',
                id: i,
                hash: a,
                canAnimate: !1,
                size: s
            }))
          ? n
          : q(i);
}
function X(e) {
    return null != e && e.startsWith('a_');
}
function J(e) {
    return null != e && e.startsWith('v_');
}
function $(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split('/').pop();
    } catch (e) {
        return null;
    }
}
function ee(e) {
    return null != e && X($(e));
}
function et(e) {
    return 'number' == typeof e ? e : { uri: null != e ? e : void 0 };
}
let en = {
    getUserAvatarURL: w,
    getDefaultAvatarURL: R,
    getGuildMemberAvatarURL: L,
    getGuildMemberAvatarURLSimple: D,
    getGuildMemberAvatarSource: x,
    getGuildMemberBannerURL: j,
    getUserBannerURL: M,
    getAvatarDecorationURL: k,
    hasAnimatedGuildIcon: function e(e) {
        return X(null == e ? void 0 : e.icon);
    },
    isAnimatedIconHash: X,
    getUserAvatarSource: (e, t, n) => et(w(e, t, n)),
    getGuildIconURL: H,
    getGuildSplashURL: U,
    getGuildSplashSource: G,
    getGuildDiscoverySplashURL: F,
    getGuildDiscoverySplashSource: Z,
    getGuildBannerURL: B,
    getGuildHomeHeaderURL: V,
    getResourceChannelIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : N({
                  endpoint: f.ANM.GUILD_RESOURCE_CHANNELS_ICON,
                  path: 'resource-channels',
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0
              });
    },
    getNewMemberActionIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : N({
                  endpoint: f.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: 'new-member-actions',
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0
              });
    },
    getGuildTemplateIconURL: Y,
    getChannelIconURL: Q,
    getEmojiURL: C,
    getApplicationIconURL: W,
    getGameAssetURL: K,
    getVideoFilterAssetURL: z,
    getGameAssetSource: (e) => et(K(e)),
    getGuildIconSource: (e) => et(H(e)),
    getGuildTemplateIconSource: (e) => et(Y(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return et(B(e, t));
    },
    getGuildHomeHeaderSource: (e) => et(V(e)),
    getChannelIconSource: (e) => et(Q(e)),
    getApplicationIconSource: (e) => et(W(e)),
    makeSource: et,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, u.isAndroid)() || !e || 'number' == typeof n) return n;
        {
            let e = t(!1);
            return 'number' != typeof e && e.uri === n.uri ? e : [n, E(m({}, e), { isForceCached: !0 })];
        }
    }
};
function er(e) {
    return null != e && b.test(e);
}

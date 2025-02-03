let i;
n.d(t, {
    $k: () => E,
    CA: () => O,
    F8: () => Q,
    JM: () => R,
    NZ: () => L,
    ZP: () => J,
    aN: () => x,
    ay: () => z,
    gT: () => S,
    ov: () => C,
    pK: () => m,
    pU: () => $,
    rI: () => H,
    tp: () => P,
    xR: () => K
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r = n(654861),
    a = n.n(r),
    s = n(664751),
    o = n(864106),
    l = n(134432),
    u = n(930153),
    c = n(358085),
    d = n(709054),
    f = n(981631),
    _ = n(377668),
    p = n(970952);
let h = /^data:/,
    m = (i = n(426563).Z).DEFAULT_AVATARS,
    g = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let E = i.canUseWebp(),
    v = 5,
    y = 240,
    I = 1096,
    b = (0, c.isAndroid)();
function T(e) {
    let t,
        { endpoint: n, path: i, id: r, hash: a, size: o, lossless: u = !1, canAnimate: c = !1, keepAspectRatio: d, format: f = null } = e;
    if (null == r || null == a) return;
    let _ = null != f ? f : c && K(a) ? 'gif' : 'jpg';
    c && z(a) && (_ = 'mp4');
    let p = window.GLOBAL_ENV.CDN_HOST;
    if ((null != p ? ('jpg' === _ && (_ = E ? 'webp' : 'png'), (t = ''.concat(location.protocol, '//').concat(p, '/').concat(i, '/').concat(r, '/').concat(a, '.').concat(_))) : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, a, _)), 'mp4' === _)) return t;
    let h = {};
    return null != o && (h.size = (0, l.oO)(o * (0, l.x_)())), null != d && (h.keep_aspect_ratio = d), u && (h.quality = 'lossless'), t + '?'.concat(s.stringify(h));
}
function S(e) {
    let { id: t, animated: n, size: i, forcePNG: r = !1 } = e,
        a = E ? 'webp' : 'png',
        s = E ? 'webp' : 'gif',
        o = r ? 'png' : n ? s : a,
        u = E && n ? '&animated=true' : '',
        c = 'size='.concat((0, l.oO)(i * (0, l.x_)(), b));
    return null != window.GLOBAL_ENV.CDN_HOST ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/').concat(t, '.').concat(o) + '?'.concat(c).concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.EMOJI(t, o);
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = n ? g : m;
    if (null == e && null == t) return i[0];
    let r = (0, u.Lk)(t, 0);
    return r > 0 ? i[r % v] : null != e ? i[a()(e).shiftRight(22).mod(i.length).toJSNumber()] : i[0];
}
function N(e) {
    let { id: t, avatar: n, discriminator: r, bot: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (a && t !== _.fL) {
        let e = i.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && '0000' === r) return m[0];
    }
    return T({
        endpoint: f.ANM.AVATAR,
        path: 'avatars',
        id: t,
        hash: n,
        size: o,
        canAnimate: s,
        format: l
    });
}
function C(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return null !== (t = N(e, n, i, r)) && void 0 !== t ? t : A(e.id, e.discriminator, e.isProvisional);
}
function R(e) {
    let t,
        { guildId: n, userId: i, avatar: r, canAnimate: a = !1, size: o = f.IXf } = e,
        u = a && K(r) ? 'gif' : 'jpg',
        { CDN_HOST: c } = window.GLOBAL_ENV;
    return (
        null != c
            ? ('jpg' === u && (u = E ? 'webp' : 'png'),
              (t = ''
                  .concat(location.protocol, '//')
                  .concat(c)
                  .concat(f.ANM.GUILD_MEMBER_AVATAR(n, i, r, u))))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_MEMBER_AVATAR(n, i, r, u)),
        t + '?'.concat(s.stringify({ size: (0, l.oO)(o * (0, l.x_)()) }))
    );
}
function O(e) {
    let { userId: t, avatar: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n
        ? null
        : R({
              userId: t,
              avatar: n,
              guildId: i,
              canAnimate: r
          });
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = O(e, n);
    return null != i ? X(i) : t.getAvatarSource(e.guildId, n);
}
function x(e) {
    let t,
        { id: n, banner: i, canAnimate: r, size: a } = e;
    if (null == i) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        o = r && K(i) ? 'gif' : 'png';
    return (null != s ? ''.concat(location.protocol, '//').concat(s, '/banners/').concat(n, '/').concat(i, '.').concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.USER_BANNER(n, i, o)) + '?size='.concat((0, l.oO)(a * (0, l.x_)()));
}
function L(e) {
    let { avatarDecoration: t, size: n, canAnimate: i = !1 } = e;
    if (null == t || (0, o.fO)(t)) return;
    if (/^data:/.test(t.asset)) return t.asset;
    let { CDN_HOST: r, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = f.ANM.AVATAR_DECORATION_PRESETS(t.asset),
        u = new URL(null != r ? ''.concat(location.protocol, '//').concat(r).concat(s) : ''.concat(location.protocol).concat(a).concat(s));
    return u.searchParams.set('size', ''.concat((0, l.oO)(n * (0, l.x_)()))), u.searchParams.set('passthrough', ''.concat(i && (0, o.ae)(t.asset))), u.toString();
}
function P(e) {
    let t,
        { id: n, guildId: i, banner: r, canAnimate: a, size: s } = e;
    if (null == r || null == i) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = a && K(r) ? 'gif' : 'png',
        c = f.ANM.GUILD_MEMBER_BANNER(i, n, r, u);
    return (null != o ? ''.concat(location.protocol, '//').concat(o).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + '?size='.concat((0, l.oO)(s * (0, l.x_)()));
}
function w(e) {
    let t,
        { id: n, splash: i, size: r } = e;
    if (null == i) return null;
    null == r && (r = window.screen.width * (0, l.x_)()), (r = (0, l.oO)(r));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/splashes/').concat(n, '/').concat(i, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_SPLASH(n, i)) + '?size='.concat(r);
}
function M(e) {
    return X(w(e));
}
function k(e) {
    let t,
        { id: n, banner: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == i) return null;
    let a = (0, l.oO)(y * (0, l.x_)()),
        s = E ? 'webp' : 'jpg',
        o = r && K(i) ? 'gif' : s,
        u = window.GLOBAL_ENV.CDN_HOST;
    return (t = (null != u ? ''.concat(location.protocol, '//').concat(u, '/banners/').concat(n, '/').concat(i, '.').concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_BANNER(n, i, o)) + '?size='.concat(a)), 'jpg' === o && (t += '&quality=lossless'), t;
}
function U(e) {
    let t,
        { id: n, homeHeader: i } = e;
    if (null == i) return null;
    let r = (0, l.oO)(I * (0, l.x_)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/home-headers/').concat(n, '/').concat(i, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_HOME_HEADER(n, i)) + '?size='.concat(r);
}
function G(e) {
    let t,
        { id: n, splash: i, size: r } = e;
    if (null == i) return null;
    null == r && (r = window.screen.width * (0, l.x_)()), (r = (0, l.oO)(r));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? ''.concat(location.protocol, '//').concat(a, '/discovery-splashes/').concat(n, '/').concat(i, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_DISCOVERY_SPLASH(n, i)) + '?size='.concat(r);
}
function B(e) {
    return X(G(e));
}
function Z(e) {
    let { id: t, icon: n, size: i, canAnimate: r = !1, lossless: a = !1 } = e;
    return T({
        endpoint: f.ANM.GUILD_ICON,
        path: 'icons',
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        lossless: a
    });
}
function F(e) {
    let { id: t, icon: n, size: i = f.IXf, canAnimate: r = !1 } = e;
    return T({
        endpoint: f.ANM.GUILD_TEMPLATE_ICON,
        path: 'guild-templates',
        id: t,
        hash: n,
        size: i,
        canAnimate: r
    });
}
function V(e) {
    let { id: t, icon: n, size: i = f.IXf, bot: r, botIconFirst: a, fallbackAvatar: s = !0 } = e;
    if (null != r && a) {
        let e = N(r, !1, i);
        if (null != e) return e;
    }
    if (null != n)
        return T({
            endpoint: f.ANM.APPLICATION_ICON,
            path: 'app-icons',
            id: t,
            hash: n,
            size: i,
            canAnimate: !1
        });
    if (null != r) {
        let e = N(r, !1, i);
        if (null != e) return e;
    }
    if (s) return p;
}
function j(e) {
    let { id: t, hash: n, size: i = f.IXf, keepAspectRatio: r = !1, format: a } = e;
    return T({
        endpoint: f.ANM.APPLICATION_ICON,
        path: 'app-icons',
        id: t,
        hash: n,
        size: i,
        canAnimate: !1,
        keepAspectRatio: r,
        format: a
    });
}
function H(e) {
    let { userId: t, assetId: n, assetHash: i, size: r, canAnimate: a = !0 } = e;
    return T({
        endpoint: (e, r, a) => f.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, i, a),
        path: 'video-filter-assets/'.concat(t),
        id: n,
        hash: i,
        size: r,
        canAnimate: a
    });
}
function Y(e) {
    return i.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % i.DEFAULT_GROUP_DM_AVATARS.length];
}
function W(e) {
    var t, n;
    let { id: r, icon: a, applicationId: s, size: o } = e;
    return null != s
        ? null !==
              (t = V({
                  id: s,
                  icon: a,
                  size: o
              })) && void 0 !== t
            ? t
            : i.DEFAULT_CHANNEL_ICON
        : null !==
                (n = T({
                    endpoint: f.ANM.CHANNEL_ICON,
                    path: 'channel-icons',
                    id: r,
                    hash: a,
                    canAnimate: !1,
                    size: o
                })) && void 0 !== n
          ? n
          : Y(r);
}
function K(e) {
    return null != e && e.startsWith('a_');
}
function z(e) {
    return null != e && e.startsWith('v_');
}
function q(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split('/').pop();
    } catch (e) {
        return null;
    }
}
function Q(e) {
    return null != e && K(q(e));
}
function X(e) {
    return 'number' == typeof e ? e : { uri: null != e ? e : void 0 };
}
let J = {
    getUserAvatarURL: C,
    getDefaultAvatarURL: A,
    getGuildMemberAvatarURL: O,
    getGuildMemberAvatarURLSimple: R,
    getGuildMemberAvatarSource: D,
    getGuildMemberBannerURL: P,
    getUserBannerURL: x,
    getAvatarDecorationURL: L,
    hasAnimatedGuildIcon: function e(e) {
        return K(null == e ? void 0 : e.icon);
    },
    isAnimatedIconHash: K,
    getUserAvatarSource: (e, t, n) => X(C(e, t, n)),
    getGuildIconURL: Z,
    getGuildSplashURL: w,
    getGuildSplashSource: M,
    getGuildDiscoverySplashURL: G,
    getGuildDiscoverySplashSource: B,
    getGuildBannerURL: k,
    getGuildHomeHeaderURL: U,
    getResourceChannelIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : T({
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
            : T({
                  endpoint: f.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: 'new-member-actions',
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0
              });
    },
    getGuildTemplateIconURL: F,
    getChannelIconURL: W,
    getEmojiURL: S,
    getApplicationIconURL: V,
    getGameAssetURL: j,
    getVideoFilterAssetURL: H,
    getGameAssetSource: (e) => X(j(e)),
    getGuildIconSource: (e) => X(Z(e)),
    getGuildTemplateIconSource: (e) => X(F(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return X(k(e, t));
    },
    getGuildHomeHeaderSource: (e) => X(U(e)),
    getChannelIconSource: (e) => X(W(e)),
    getApplicationIconSource: (e) => X(V(e)),
    makeSource: X,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || 'number' == typeof n) return n;
        {
            let e = t(!1);
            return 'number' != typeof e && e.uri === n.uri
                ? e
                : [
                      n,
                      {
                          ...e,
                          isForceCached: !0
                      }
                  ];
        }
    }
};
function $(e) {
    return null != e && h.test(e);
}

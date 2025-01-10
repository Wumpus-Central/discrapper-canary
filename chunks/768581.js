let i;
r.d(n, {
    $k: function () {
        return S;
    },
    CA: function () {
        return M;
    },
    F8: function () {
        return ea;
    },
    JM: function () {
        return P;
    },
    NZ: function () {
        return B;
    },
    aN: function () {
        return U;
    },
    ay: function () {
        return er;
    },
    gT: function () {
        return D;
    },
    ov: function () {
        return w;
    },
    pK: function () {
        return b;
    },
    rI: function () {
        return J;
    },
    tp: function () {
        return G;
    },
    xR: function () {
        return en;
    }
});
var a = r(315314);
var s = r(610138);
var o = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(654861),
    f = r.n(d),
    _ = r(664751),
    h = r(864106),
    p = r(134432),
    m = r(930153),
    g = r(358085),
    E = r(709054),
    v = r(981631),
    I = r(377668),
    T = r(970952);
let b = (i = r(426563).Z).DEFAULT_AVATARS,
    y = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let S = i.canUseWebp(),
    A = 5,
    N = 240,
    C = 1096,
    R = (0, g.isAndroid)();
function O(e) {
    let n,
        { endpoint: r, path: i, id: a, hash: s, size: o, canAnimate: l = !1, keepAspectRatio: u, format: c = null } = e;
    if (null == a || null == s) return;
    let d = null != c ? c : l && en(s) ? 'gif' : 'jpg';
    l && er(s) && (d = 'mp4');
    let f = window.GLOBAL_ENV.CDN_HOST;
    if ((null != f ? ('jpg' === d && (d = S ? 'webp' : 'png'), (n = ''.concat(location.protocol, '//').concat(f, '/').concat(i, '/').concat(a, '/').concat(s, '.').concat(d))) : (n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r(a, s, d)), 'mp4' === d)) return n;
    let h = {};
    return null != o && (h.size = (0, p.oO)(o * (0, p.x_)())), null != u && (h.keep_aspect_ratio = u), n + '?'.concat(_.stringify(h));
}
function D(e) {
    let { id: n, animated: r, size: i, forcePNG: a = !1 } = e,
        s = S ? 'webp' : 'png',
        o = S ? 'webp' : 'gif',
        l = a ? 'png' : r ? o : s,
        u = S && r ? '&animated=true' : '',
        c = 'size='.concat((0, p.oO)(i * (0, p.x_)(), R));
    return null != window.GLOBAL_ENV.CDN_HOST ? ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/emojis/').concat(n, '.').concat(l) + '?'.concat(c).concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.EMOJI(n, l);
}
function L(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = r ? y : b;
    if (null == e && null == n) return i[0];
    let a = (0, m.Lk)(n, 0);
    return a > 0 ? i[a % A] : null != e ? i[f()(e).shiftRight(22).mod(i.length).toJSNumber()] : i[0];
}
function x(e) {
    let { id: n, avatar: r, discriminator: a, bot: s } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.IXf,
        u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (s && n !== I.fL) {
        let e = i.BOT_AVATARS[r];
        if (e) return e;
        if (null == r && '0000' === a) return b[0];
    }
    return O({
        endpoint: v.ANM.AVATAR,
        path: 'avatars',
        id: n,
        hash: r,
        size: l,
        canAnimate: o,
        format: u
    });
}
function w(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.IXf,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return null !== (n = x(e, r, i, a)) && void 0 !== n ? n : L(e.id, e.discriminator, e.isProvisional);
}
function P(e) {
    let n,
        { guildId: r, userId: i, avatar: a, canAnimate: s = !1, size: o = v.IXf } = e,
        l = s && en(a) ? 'gif' : 'jpg',
        { CDN_HOST: u } = window.GLOBAL_ENV;
    return (
        null != u
            ? ('jpg' === l && (l = S ? 'webp' : 'png'),
              (n = ''
                  .concat(location.protocol, '//')
                  .concat(u)
                  .concat(v.ANM.GUILD_MEMBER_AVATAR(r, i, a, l))))
            : (n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.GUILD_MEMBER_AVATAR(r, i, a, l)),
        n + '?'.concat(_.stringify({ size: (0, p.oO)(o * (0, p.x_)()) }))
    );
}
function M(e) {
    let { userId: n, avatar: r, guildId: i } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == r
        ? null
        : P({
              userId: n,
              avatar: r,
              guildId: i,
              canAnimate: a
          });
}
function k(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = M(e, r);
    return null != i ? es(i) : n.getAvatarSource(e.guildId, r);
}
function U(e) {
    let n,
        { id: r, banner: i, canAnimate: a, size: s } = e;
    if (null == i) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        l = a && en(i) ? 'gif' : 'png';
    return (n = (null != o ? ''.concat(location.protocol, '//').concat(o, '/banners/').concat(r, '/').concat(i, '.').concat(l) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.USER_BANNER(r, i, l)) + '?size='.concat((0, p.oO)(s * (0, p.x_)())));
}
function B(e) {
    let { avatarDecoration: n, size: r, canAnimate: i = !1 } = e;
    if (null == n || (0, h.fO)(n)) return;
    if (/^data:/.test(n.asset)) return n.asset;
    let { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        o = v.ANM.AVATAR_DECORATION_PRESETS(n.asset),
        l = new URL(null != a ? ''.concat(location.protocol, '//').concat(a).concat(o) : ''.concat(location.protocol).concat(s).concat(o));
    return l.searchParams.set('size', ''.concat((0, p.oO)(r * (0, p.x_)()))), l.searchParams.set('passthrough', ''.concat(i && (0, h.ae)(n.asset))), l.toString();
}
function G(e) {
    let n,
        { id: r, guildId: i, banner: a, canAnimate: s, size: o } = e;
    if (null == a || null == i) return;
    let l = window.GLOBAL_ENV.CDN_HOST,
        u = s && en(a) ? 'gif' : 'png',
        c = v.ANM.GUILD_MEMBER_BANNER(i, r, a, u);
    return (n = (null != l ? ''.concat(location.protocol, '//').concat(l).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + '?size='.concat((0, p.oO)(o * (0, p.x_)())));
}
function F(e) {
    let n,
        { id: r, splash: i, size: a } = e;
    if (null == i) return null;
    null == a && (a = window.screen.width * (0, p.x_)()), (a = (0, p.oO)(a));
    let s = window.GLOBAL_ENV.CDN_HOST;
    return (n = (null != s ? ''.concat(location.protocol, '//').concat(s, '/splashes/').concat(r, '/').concat(i, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.GUILD_SPLASH(r, i)) + '?size='.concat(a));
}
function Z(e) {
    return es(F(e));
}
function V(e) {
    let n,
        { id: r, banner: i } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == i) return null;
    let s = (0, p.oO)(N * (0, p.x_)()),
        o = S ? 'webp' : 'jpg',
        l = a && en(i) ? 'gif' : o,
        u = window.GLOBAL_ENV.CDN_HOST;
    return (n = (null != u ? ''.concat(location.protocol, '//').concat(u, '/banners/').concat(r, '/').concat(i, '.').concat(l) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.GUILD_BANNER(r, i, l)) + '?size='.concat(s)), 'jpg' === l && (n += '&quality=lossless'), n;
}
function j(e) {
    let n,
        { id: r, homeHeader: i } = e;
    if (null == i) return null;
    let a = (0, p.oO)(C * (0, p.x_)()),
        s = window.GLOBAL_ENV.CDN_HOST;
    return (n = (null != s ? ''.concat(location.protocol, '//').concat(s, '/home-headers/').concat(r, '/').concat(i, '.png') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.GUILD_HOME_HEADER(r, i)) + '?size='.concat(a));
}
function H(e) {
    let { channelId: n, icon: r } = e;
    return null == r
        ? null
        : O({
              endpoint: v.ANM.GUILD_RESOURCE_CHANNELS_ICON,
              path: 'resource-channels',
              id: n,
              hash: r,
              size: v.IXf,
              canAnimate: !0
          });
}
function Y(e) {
    let { channelId: n, icon: r } = e;
    return null == r
        ? null
        : O({
              endpoint: v.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
              path: 'new-member-actions',
              id: n,
              hash: r,
              size: v.IXf,
              canAnimate: !0
          });
}
function W(e) {
    let n,
        { id: r, splash: i, size: a } = e;
    if (null == i) return null;
    null == a && (a = window.screen.width * (0, p.x_)()), (a = (0, p.oO)(a));
    let s = window.GLOBAL_ENV.CDN_HOST;
    return (n = (null != s ? ''.concat(location.protocol, '//').concat(s, '/discovery-splashes/').concat(r, '/').concat(i, '.jpg') : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + v.ANM.GUILD_DISCOVERY_SPLASH(r, i)) + '?size='.concat(a));
}
function K(e) {
    return es(W(e));
}
function z(e) {
    let { id: n, icon: r, size: i, canAnimate: a = !1 } = e;
    return O({
        endpoint: v.ANM.GUILD_ICON,
        path: 'icons',
        id: n,
        hash: r,
        size: i,
        canAnimate: a
    });
}
function q(e) {
    let { id: n, icon: r, size: i = v.IXf, canAnimate: a = !1 } = e;
    return O({
        endpoint: v.ANM.GUILD_TEMPLATE_ICON,
        path: 'guild-templates',
        id: n,
        hash: r,
        size: i,
        canAnimate: a
    });
}
function Q(e) {
    let { id: n, icon: r, size: i = v.IXf, bot: a, botIconFirst: s, fallbackAvatar: o = !0 } = e;
    if (null != a && s) {
        let e = x(a, !1, i);
        if (null != e) return e;
    }
    if (null != r)
        return O({
            endpoint: v.ANM.APPLICATION_ICON,
            path: 'app-icons',
            id: n,
            hash: r,
            size: i,
            canAnimate: !1
        });
    if (null != a) {
        let e = x(a, !1, i);
        if (null != e) return e;
    }
    if (o) return T;
}
function X(e) {
    let { id: n, hash: r, size: i = v.IXf, keepAspectRatio: a = !1, format: s } = e;
    return O({
        endpoint: v.ANM.APPLICATION_ICON,
        path: 'app-icons',
        id: n,
        hash: r,
        size: i,
        canAnimate: !1,
        keepAspectRatio: a,
        format: s
    });
}
function J(e) {
    let { userId: n, assetId: r, assetHash: i, size: a, canAnimate: s = !0 } = e;
    return O({
        endpoint: (e, a, s) => v.ANM.VIDEO_FILTER_ASSET_STORAGE(n, r, i, s),
        path: 'video-filter-assets/'.concat(n),
        id: r,
        hash: i,
        size: a,
        canAnimate: s
    });
}
function $(e) {
    return i.DEFAULT_GROUP_DM_AVATARS[E.default.extractTimestamp(e) % i.DEFAULT_GROUP_DM_AVATARS.length];
}
function ee(e) {
    var n, r;
    let { id: a, icon: s, applicationId: o, size: l } = e;
    return null != o
        ? null !==
              (n = Q({
                  id: o,
                  icon: s,
                  size: l
              })) && void 0 !== n
            ? n
            : i.DEFAULT_CHANNEL_ICON
        : null !==
                (r = O({
                    endpoint: v.ANM.CHANNEL_ICON,
                    path: 'channel-icons',
                    id: a,
                    hash: s,
                    canAnimate: !1,
                    size: l
                })) && void 0 !== r
          ? r
          : $(a);
}
function et(e) {
    return en(null == e ? void 0 : e.icon);
}
function en(e) {
    return null != e && e.startsWith('a_');
}
function er(e) {
    return null != e && e.startsWith('v_');
}
function ei(e) {
    let n;
    try {
        return (n = new URL(e).pathname).split('/').pop();
    } catch (e) {
        return null;
    }
}
function ea(e) {
    return null != e && en(ei(e));
}
function es(e) {
    return 'number' == typeof e ? e : { uri: null != e ? e : void 0 };
}
n.ZP = {
    getUserAvatarURL: w,
    getDefaultAvatarURL: L,
    getGuildMemberAvatarURL: M,
    getGuildMemberAvatarURLSimple: P,
    getGuildMemberAvatarSource: k,
    getGuildMemberBannerURL: G,
    getUserBannerURL: U,
    getAvatarDecorationURL: B,
    hasAnimatedGuildIcon: et,
    isAnimatedIconHash: en,
    getUserAvatarSource: (e, n, r) => es(w(e, n, r)),
    getGuildIconURL: z,
    getGuildSplashURL: F,
    getGuildSplashSource: Z,
    getGuildDiscoverySplashURL: W,
    getGuildDiscoverySplashSource: K,
    getGuildBannerURL: V,
    getGuildHomeHeaderURL: j,
    getResourceChannelIconURL: H,
    getNewMemberActionIconURL: Y,
    getGuildTemplateIconURL: q,
    getChannelIconURL: ee,
    getEmojiURL: D,
    getApplicationIconURL: Q,
    getGameAssetURL: X,
    getVideoFilterAssetURL: J,
    getGameAssetSource: (e) => es(X(e)),
    getGuildIconSource: (e) => es(z(e)),
    getGuildTemplateIconSource: (e) => es(q(e)),
    getGuildBannerSource(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return es(V(e, n));
    },
    getGuildHomeHeaderSource: (e) => es(j(e)),
    getChannelIconSource: (e) => es(ee(e)),
    getApplicationIconSource: (e) => es(Q(e)),
    makeSource: es,
    getAnimatableSourceWithFallback(e, n) {
        let r = n(e);
        if (!(0, g.isAndroid)() || !e || 'number' == typeof r) return r;
        {
            let e = n(!1);
            return 'number' != typeof e && e.uri === r.uri
                ? e
                : [
                      r,
                      {
                          ...e,
                          isForceCached: !0
                      }
                  ];
        }
    }
};

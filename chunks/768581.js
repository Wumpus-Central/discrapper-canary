let r;
n.d(t, {
    $k: () => O,
    CA: () => D,
    F8: () => $,
    JM: () => w,
    NZ: () => M,
    ZP: () => et,
    aN: () => L,
    ay: () => Q,
    ff: () => E,
    gT: () => C,
    ov: () => P,
    pK: () => b,
    pU: () => en,
    rI: () => K,
    tp: () => j,
    xR: () => X,
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
    _ = n(970952);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = /^data:/,
    b = (r = n(426563).Z).DEFAULT_AVATARS,
    y = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let O = r.canUseWebp(),
    v = 5,
    I = 360,
    T = 1096,
    S = (0, u.isAndroid)();
function A(e) {
    let t,
        {
            endpoint: n,
            path: r,
            id: i,
            hash: a,
            size: s,
            lossless: c = !1,
            canAnimate: u = !1,
            keepAspectRatio: d,
            format: f = null,
            canWebP: _ = O,
        } = e;
    if (null == i || null == a) return;
    let p = null != f ? f : u && X(a) ? er(_) : "jpg";
    u && Q(a) && (p = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != h
            ? ("jpg" === p && (p = _ ? "webp" : "png"),
              (t = "https://".concat(h, "/").concat(r, "/").concat(i, "/").concat(a, ".").concat(p)))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, p)),
        "mp4" === p)
    )
        return t;
    let m = {};
    return (
        null != s && (m.size = (0, l.oO)(s * (0, l.x_)())),
        null != d && (m.keep_aspect_ratio = d),
        c && (m.quality = "lossless"),
        "webp" === p && u && X(a) && (m.animated = !0),
        t + "?".concat(o.stringify(m))
    );
}
function C(e) {
    let { id: t, animated: n, size: r, forcePNG: i = !1 } = e,
        a = O ? "webp" : "png",
        o = O ? "webp" : "gif",
        s = i ? "png" : n ? o : a,
        c = O && n ? "&animated=true" : "",
        u = "size=".concat((0, l.oO)(r * (0, l.x_)(), S));
    return null != window.GLOBAL_ENV.CDN_HOST
        ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(s) +
              "?".concat(u).concat(c)
        : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.EMOJI(t, s);
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? y : b;
    if (null == e && null == t) return r[0];
    let i = (0, c.Lk)(t, 0);
    return i > 0 ? r[i % v] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function R(e) {
    let { id: t, avatar: n, discriminator: i, bot: a } = e,
        o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    if (a) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return b[0];
    }
    return A({
        endpoint: f.ANM.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: s,
        canAnimate: o,
        format: l,
        canWebP: c,
    });
}
function P(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.IXf,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    return null != (t = R(e, n, r, i, a)) ? t : N(e.id, e.discriminator, e.isProvisional);
}
function w(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: a = !1, size: s = f.IXf, canWebP: c = O } = e,
        u = a && X(i) ? er(c) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === u && (u = c ? "webp" : "png"),
          (t = "https://".concat(d).concat(f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u))))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_MEMBER_AVATAR(n, r, i, u));
    let _ = { size: (0, l.oO)(s * (0, l.x_)()) };
    return "webp" === u && a && X(i) && (_.animated = !0), (t += "?".concat(o.stringify(_)));
}
function D(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n
        ? null
        : w({
              userId: t,
              avatar: n,
              guildId: r,
              canAnimate: i,
          });
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = D(e, n);
    return null != r ? ee(r) : t.getAvatarSource(e.guildId, n);
}
function L(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: a } = e;
    if (null == r) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        c = i && X(r) ? er(O) : "png";
    t =
        null != s
            ? "https://".concat(s, "/banners/").concat(n, "/").concat(r, ".").concat(c)
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.USER_BANNER(n, r, c);
    let u = { size: (0, l.oO)(a * (0, l.x_)()) };
    return "webp" === c && i && X(r) && (u.animated = !0), (t += "?".concat(o.stringify(u)));
}
function M(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, s.fO)(t)) return;
    let i = t.asset;
    if (null == i) return;
    if (/^data:/.test(i)) return i;
    let { CDN_HOST: a, API_ENDPOINT: o } = window.GLOBAL_ENV,
        c = f.ANM.AVATAR_DECORATION_PRESETS(i);
    if (/^blob:https?:\/\/[^\/]+\//i.test(i)) return i;
    let u = new URL(null != a ? "https://".concat(a).concat(c) : "".concat(location.protocol).concat(o).concat(c));
    return (
        u.searchParams.set("size", "".concat((0, l.oO)(n * (0, l.x_)()))),
        u.searchParams.set("passthrough", "".concat(r)),
        u.toString()
    );
}
function j(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: a, size: s } = e;
    if (null == i || null == r) return;
    let c = window.GLOBAL_ENV.CDN_HOST,
        u = a && X(i) ? er(O) : "png",
        d = f.ANM.GUILD_MEMBER_BANNER(r, n, i, u);
    t = null != c ? "https://".concat(c).concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let _ = { size: (0, l.oO)(s * (0, l.x_)()) };
    return "webp" === u && a && X(i) && (_.animated = !0), (t += "?".concat(o.stringify(_)));
}
function k(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? "https://".concat(a, "/splashes/").concat(n, "/").concat(r, ".jpg")
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_SPLASH(n, r)) + "?size=".concat(i)
    );
}
function U(e) {
    return ee(k(e));
}
function G(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, l.oO)(I * (0, l.x_)()),
        s = O ? "webp" : "jpg",
        c = i && X(r) ? er(O) : s,
        u = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != u
            ? "https://".concat(u, "/banners/").concat(n, "/").concat(r, ".").concat(c)
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_BANNER(n, r, c);
    let d = { size: a };
    return (
        "jpg" === c && (d.quality = "lossless"),
        "webp" === c && i && X(r) && (d.animated = !0),
        (t += "?".concat(o.stringify(d)))
    );
}
function B(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.oO)(T * (0, l.x_)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? "https://".concat(a, "/home-headers/").concat(n, "/").concat(r, ".png")
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_HOME_HEADER(n, r)) + "?size=".concat(i)
    );
}
function Z(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.x_)()), (i = (0, l.oO)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? "https://".concat(a, "/discovery-splashes/").concat(n, "/").concat(r, ".jpg")
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.ANM.GUILD_DISCOVERY_SPLASH(n, r)) +
        "?size=".concat(i)
    );
}
function F(e) {
    return ee(Z(e));
}
function V(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: a = !1 } = e;
    return A({
        endpoint: f.ANM.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: a,
        canWebP: !1,
    });
}
function H(e) {
    let { id: t, icon: n, size: r = f.IXf, canAnimate: i = !1 } = e;
    return A({
        endpoint: f.ANM.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        canWebP: !1,
    });
}
function Y(e) {
    let { id: t, icon: n, size: r = f.IXf, bot: i, botIconFirst: a, fallbackAvatar: o = !0, keepAspectRatio: s } = e;
    if (null != i && a) {
        let e = R(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return A({
            endpoint: f.ANM.APPLICATION_ICON,
            path: "app-icons",
            id: t,
            hash: n,
            size: r,
            canAnimate: !1,
            canWebP: !1,
            keepAspectRatio: s,
        });
    if (null != i) {
        let e = R(i, !1, r);
        if (null != e) return e;
    }
    if (o) return _;
}
function W(e) {
    let { id: t, hash: n, size: r = f.IXf, keepAspectRatio: i = !1, format: a } = e;
    return A({
        endpoint: f.ANM.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: a,
        canWebP: !1,
    });
}
function K(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: a = !0 } = e;
    return A({
        endpoint: (e, i, a) => f.ANM.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: "video-filter-assets/".concat(t),
        id: n,
        hash: r,
        size: i,
        canAnimate: a,
        canWebP: !1,
    });
}
function z(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function q(e) {
    var t, n;
    let { id: i, icon: a, applicationId: o, size: s } = e;
    return null != o
        ? null !=
          (t = Y({
              id: o,
              icon: a,
              size: s,
          }))
            ? t
            : r.DEFAULT_CHANNEL_ICON
        : null !=
            (n = A({
                endpoint: f.ANM.CHANNEL_ICON,
                path: "channel-icons",
                id: i,
                hash: a,
                canAnimate: !1,
                size: s,
                canWebP: !1,
            }))
          ? n
          : z(i);
}
function X(e) {
    return null != e && e.startsWith("a_");
}
function Q(e) {
    return null != e && e.startsWith("v_");
}
function J(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split("/").pop();
    } catch (e) {
        return null;
    }
}
function $(e) {
    return null != e && X(J(e));
}
function ee(e) {
    return "number" == typeof e ? e : { uri: null != e ? e : void 0 };
}
let et = {
    getUserAvatarURL: P,
    getDefaultAvatarURL: N,
    getGuildMemberAvatarURL: D,
    getGuildMemberAvatarURLSimple: w,
    getGuildMemberAvatarSource: x,
    getGuildMemberBannerURL: j,
    getUserBannerURL: L,
    getAvatarDecorationURL: M,
    hasAnimatedGuildIcon: function e(e) {
        return X(null == e ? void 0 : e.icon);
    },
    isAnimatedIconHash: X,
    getUserAvatarSource: (e, t, n) => ee(P(e, t, n)),
    getGuildIconURL: V,
    getGuildSplashURL: k,
    getGuildSplashSource: U,
    getGuildDiscoverySplashURL: Z,
    getGuildDiscoverySplashSource: F,
    getGuildBannerURL: G,
    getGuildHomeHeaderURL: B,
    getResourceChannelIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : A({
                  endpoint: f.ANM.GUILD_RESOURCE_CHANNELS_ICON,
                  path: "resource-channels",
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getNewMemberActionIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : A({
                  endpoint: f.ANM.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: "new-member-actions",
                  id: t,
                  hash: n,
                  size: f.IXf,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getGuildTemplateIconURL: H,
    getChannelIconURL: q,
    getEmojiURL: C,
    getApplicationIconURL: Y,
    getGameAssetURL: W,
    getVideoFilterAssetURL: K,
    getGameAssetSource: (e) => ee(W(e)),
    getGuildIconSource: (e) => ee(V(e)),
    getGuildTemplateIconSource: (e) => ee(H(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ee(G(e, t));
    },
    getGuildHomeHeaderSource: (e) => ee(B(e)),
    getChannelIconSource: (e) => ee(q(e)),
    getApplicationIconSource: (e) => ee(Y(e)),
    makeSource: ee,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, u.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, g(h({}, e), { isForceCached: !0 })];
        }
    },
};
function en(e) {
    return null != e && E.test(e);
}
function er(e) {
    return e ? "webp" : "gif";
}

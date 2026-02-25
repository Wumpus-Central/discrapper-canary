"use strict";
let r;
n.d(t, {
    Ay: () => Q,
    Bo: () => Y,
    F_: () => w,
    QB: () => g,
    V0: () => J,
    VI: () => z,
    _O: () => v,
    aq: () => h,
    ku: () => b,
    ns: () => x,
    o4: () => Z,
    q6: () => $,
    s7: () => R,
    vI: () => m,
    xT: () => O,
    z: () => L,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(824120),
    s = n.n(i),
    a = n(488428),
    o = n(507698),
    l = n(776231),
    u = n(252424),
    c = n(723702),
    d = n(661191),
    _ = n(652215),
    f = n(398094),
    p = n(532406);
let h = /^data:/,
    m = (r = n(820883).A).DEFAULT_AVATARS,
    E = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let g = r.canUseWebp(),
    A = 5,
    I = 360,
    T = 1096,
    S = (0, c.isAndroid)();
function y(e) {
    let t,
        {
            endpoint: n,
            path: r,
            id: i,
            hash: s,
            size: o,
            lossless: u = !1,
            canAnimate: c = !1,
            keepAspectRatio: d,
            format: _ = null,
            canWebP: f = g,
        } = e;
    if (null == i || null == s) return;
    let p = _ ?? (c && z(s) ? ee(f) : "jpg");
    c && $(s) && (p = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != h
            ? ("jpg" === p && (p = f ? "webp" : "png"), (t = `https://${h}/${r}/${i}/${s}.${p}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, s, p)),
        "mp4" === p)
    )
        return t;
    let m = {};
    return (
        null != o && (m.size = (0, l.kr)(o * (0, l.mZ)())),
        null != d && (m.keep_aspect_ratio = d),
        u && (m.quality = "lossless"),
        "webp" === p && c && z(s) && (m.animated = !0),
        t + `?${a.stringify(m)}`
    );
}
function v(e) {
    let { id: t, animated: r, size: i, forcePNG: s = !1 } = e,
        a = g ? "webp" : "png",
        o = g ? "webp" : "gif",
        u = s ? "png" : r ? o : a,
        c = g && r ? "&animated=true" : "",
        d = `size=${(0, l.kr)(i * (0, l.mZ)(), S)}`,
        f = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        f = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let p = f ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${u}?${d}${c}${p}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, u);
        return f ? `${e}?force_sdr=true` : e;
    }
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? E : m;
    if (null == e && null == t) return r[0];
    let i = (0, u.cG)(t, 0);
    return i > 0 ? r[i % A] : null != e ? r[s()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function C(e) {
    let { id: t, avatar: n, discriminator: i, bot: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g;
    if (s) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return m[0];
    }
    return y({
        endpoint: _.Rsh.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: o,
        canAnimate: a,
        format: l,
        canWebP: u,
    });
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g;
    return C(e, t, n, r, i) ?? N(e.id, e.discriminator, e.isProvisional);
}
function R(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: s = !1, size: o = _.eQT, canWebP: u = g } = e,
        c = s && z(i) ? ee(u) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === c && (c = u ? "webp" : "png"), (t = `https://${d}${_.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c));
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && z(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function O(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : R({ userId: t, avatar: n, guildId: r, canAnimate: i });
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = O(e, n);
    return null != r ? X(r) : t.getAvatarSource(e.guildId, n);
}
function L(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: s } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = i && z(r) ? ee(g) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, r, u);
    let c = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === u && i && z(r) && (c.animated = !0), (t += `?${a.stringify(c)}`);
}
function w(e) {
    let { avatarDecoration: t, size: r = f.DX, canAnimate: i = !1 } = e;
    if (null == t || (0, o.bS)(t)) return null;
    try {
        let { CollectiblesItemAssetFormat: e, getCollectiblesItemAssetUrl: r } = n(746002),
            s = i ? e.ANIMATED : e.STATIC,
            a = r(t.skuId, s);
        if (null != a) return a;
    } catch {
        return null;
    }
    let s = t.asset;
    if (null == s) return null;
    let { CDN_HOST: a, API_ENDPOINT: u } = window.GLOBAL_ENV,
        c = _.Rsh.AVATAR_DECORATION_PRESETS(s);
    if (/^blob:https?:\/\/[^\/]+\//i.test(s)) return s;
    let d = new URL(null != a ? `https://${a}${c}` : `${location.protocol}${u}${c}`);
    return (
        d.searchParams.set("size", `${(0, l.kr)(r * (0, l.mZ)(), S)}`),
        d.searchParams.set("passthrough", `${i}`),
        d.toString()
    );
}
function x(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: s, size: o } = e;
    if (null == i || null == r) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        c = s && z(i) ? ee(g) : "png",
        d = _.Rsh.GUILD_MEMBER_BANNER(r, n, i, c);
    t = null != u ? `https://${u}${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && z(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function M(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let s = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != s
            ? `https://${s}/splashes/${n}/${r}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_SPLASH(n, r)) + `?size=${i}`
    );
}
function P(e) {
    return X(M(e));
}
function k(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let s = (0, l.kr)(I * (0, l.mZ)()),
        o = g ? "webp" : "jpg",
        u = i && z(r) ? ee(g) : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, r, u);
    let d = { size: s };
    return (
        "jpg" === u && (d.quality = "lossless"),
        "webp" === u && i && z(r) && (d.animated = !0),
        (t += `?${a.stringify(d)}`)
    );
}
function U(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.kr)(T * (0, l.mZ)()),
        s = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != s
            ? `https://${s}/home-headers/${n}/${r}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(n, r)) + `?size=${i}`
    );
}
function G(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let s = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != s
            ? `https://${s}/discovery-splashes/${n}/${r}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(n, r)) + `?size=${i}`
    );
}
function F(e) {
    return X(G(e));
}
function V(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: s = !1 } = e;
    return y({
        endpoint: _.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: s,
        canWebP: g,
    });
}
function B(e) {
    let { id: t, icon: n, size: r = _.eQT, canAnimate: i = !1 } = e;
    return y({
        endpoint: _.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        canWebP: !1,
    });
}
function H(e) {
    let {
        id: t,
        icon: n,
        size: r = _.eQT,
        bot: i,
        botIconFirst: s,
        fallbackAvatar: a = !0,
        keepAspectRatio: o,
        guildMember: l,
    } = e;
    if (i?.id != null && null != l && null != l.avatar) {
        let e = R({ userId: i.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: r });
        if (null != e) return e;
    }
    if (null != i && s) {
        let e = C(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return J(n)
            ? n
            : y({
                  endpoint: _.Rsh.APPLICATION_ICON,
                  path: "app-icons",
                  id: t,
                  hash: n,
                  size: r,
                  canAnimate: !1,
                  canWebP: !1,
                  keepAspectRatio: o,
              });
    if (null != i) {
        let e = C(i, !1, r);
        if (null != e) return e;
    }
    if (a) return p;
}
function j(e) {
    let { id: t, hash: n, size: r = _.eQT, keepAspectRatio: i = !1, format: s } = e;
    return y({
        endpoint: _.Rsh.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: s,
        canWebP: !1,
    });
}
function Y(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: s = !0 } = e;
    return y({
        endpoint: (e, i, s) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, r, s),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: r,
        size: i,
        canAnimate: s,
        canWebP: !1,
    });
}
function W(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function K(e) {
    let { id: t, icon: n, applicationId: i, size: s } = e;
    return null != i
        ? (H({ id: i, icon: n, size: s }) ?? r.DEFAULT_CHANNEL_ICON)
        : (y({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: s,
              canWebP: !1,
          }) ?? W(t));
}
function z(e) {
    return null != e && e.startsWith("a_");
}
function $(e) {
    return null != e && e.startsWith("v_");
}
function q(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split("/").pop();
    } catch (e) {
        return null;
    }
}
function Z(e) {
    return null != e && z(q(e));
}
function X(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let Q = {
    getUserAvatarURL: b,
    getDefaultAvatarURL: N,
    getGuildMemberAvatarURL: O,
    getGuildMemberAvatarURLSimple: R,
    getGuildMemberAvatarSource: D,
    getGuildMemberBannerURL: x,
    getUserBannerURL: L,
    getAvatarDecorationURL: w,
    hasAnimatedGuildIcon: function e(e) {
        return z(e?.icon);
    },
    isAnimatedIconHash: z,
    getUserAvatarSource: (e, t, n) => X(b(e, t, n)),
    getGuildIconURL: V,
    getGuildSplashURL: M,
    getGuildSplashSource: P,
    getGuildDiscoverySplashURL: G,
    getGuildDiscoverySplashSource: F,
    getGuildBannerURL: k,
    getGuildHomeHeaderURL: U,
    getResourceChannelIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : y({
                  endpoint: _.Rsh.GUILD_RESOURCE_CHANNELS_ICON,
                  path: "resource-channels",
                  id: t,
                  hash: n,
                  size: _.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getNewMemberActionIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : y({
                  endpoint: _.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: "new-member-actions",
                  id: t,
                  hash: n,
                  size: _.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getGuildTemplateIconURL: B,
    getChannelIconURL: K,
    getEmojiURL: v,
    getApplicationIconURL: H,
    getGameAssetURL: j,
    getVideoFilterAssetURL: Y,
    getGameAssetSource: (e) => X(j(e)),
    getGuildIconSource: (e) => X(V(e)),
    getGuildTemplateIconSource: (e) => X(B(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return X(k(e, t));
    },
    getGuildHomeHeaderSource: (e) => X(U(e)),
    getChannelIconSource: (e) => X(K(e)),
    getApplicationIconSource: (e) => X(H(e)),
    makeSource: X,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function J(e) {
    return null != e && h.test(e);
}
function ee(e) {
    return e ? "webp" : "gif";
}

"use strict";
let r;
n.d(t, {
    Ay: () => X,
    Bo: () => j,
    F_: () => L,
    QB: () => E,
    V0: () => Q,
    VI: () => K,
    _O: () => y,
    aq: () => p,
    ku: () => C,
    ns: () => w,
    o4: () => q,
    q6: () => z,
    s7: () => b,
    vI: () => h,
    xT: () => R,
    z: () => D,
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
    f = n(532406);
let p = /^data:/,
    h = (r = n(820883).A).DEFAULT_AVATARS,
    m = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let E = r.canUseWebp(),
    g = 5,
    A = 360,
    I = 1096,
    T = (0, c.isAndroid)();
function S(e) {
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
            canWebP: f = E,
        } = e;
    if (null == i || null == s) return;
    let p = _ ?? (c && K(s) ? J(f) : "jpg");
    c && z(s) && (p = "mp4");
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
        "webp" === p && c && K(s) && (m.animated = !0),
        t + `?${a.stringify(m)}`
    );
}
function y(e) {
    let { id: t, animated: r, size: i, forcePNG: s = !1 } = e,
        a = E ? "webp" : "png",
        o = E ? "webp" : "gif",
        u = s ? "png" : r ? o : a,
        c = E && r ? "&animated=true" : "",
        d = `size=${(0, l.kr)(i * (0, l.mZ)(), T)}`,
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
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? m : h;
    if (null == e && null == t) return r[0];
    let i = (0, u.cG)(t, 0);
    return i > 0 ? r[i % g] : null != e ? r[s()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function N(e) {
    let { id: t, avatar: n, discriminator: i, bot: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E;
    if (s) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return h[0];
    }
    return S({
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
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E;
    return N(e, t, n, r, i) ?? v(e.id, e.discriminator, e.isProvisional);
}
function b(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: s = !1, size: o = _.eQT, canWebP: u = E } = e,
        c = s && K(i) ? J(u) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === c && (c = u ? "webp" : "png"), (t = `https://${d}${_.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c));
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && K(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function R(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : b({ userId: t, avatar: n, guildId: r, canAnimate: i });
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = R(e, n);
    return null != r ? Z(r) : t.getAvatarSource(e.guildId, n);
}
function D(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: s } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = i && K(r) ? J(E) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, r, u);
    let c = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === u && i && K(r) && (c.animated = !0), (t += `?${a.stringify(c)}`);
}
function L(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, o.bS)(t)) return;
    let i = t.asset;
    if (null == i) return;
    if (/^data:/.test(i)) return i;
    let { CDN_HOST: s, API_ENDPOINT: a } = window.GLOBAL_ENV,
        u = _.Rsh.AVATAR_DECORATION_PRESETS(i);
    if (/^blob:https?:\/\/[^\/]+\//i.test(i)) return i;
    let c = new URL(null != s ? `https://${s}${u}` : `${location.protocol}${a}${u}`);
    return (
        c.searchParams.set("size", `${(0, l.kr)(n * (0, l.mZ)(), T)}`),
        c.searchParams.set("passthrough", `${r}`),
        c.toString()
    );
}
function w(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: s, size: o } = e;
    if (null == i || null == r) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        c = s && K(i) ? J(E) : "png",
        d = _.Rsh.GUILD_MEMBER_BANNER(r, n, i, c);
    t = null != u ? `https://${u}${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && K(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function x(e) {
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
function M(e) {
    return Z(x(e));
}
function P(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let s = (0, l.kr)(A * (0, l.mZ)()),
        o = E ? "webp" : "jpg",
        u = i && K(r) ? J(E) : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, r, u);
    let d = { size: s };
    return (
        "jpg" === u && (d.quality = "lossless"),
        "webp" === u && i && K(r) && (d.animated = !0),
        (t += `?${a.stringify(d)}`)
    );
}
function k(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.kr)(I * (0, l.mZ)()),
        s = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != s
            ? `https://${s}/home-headers/${n}/${r}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(n, r)) + `?size=${i}`
    );
}
function U(e) {
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
function G(e) {
    return Z(U(e));
}
function F(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: s = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: s,
        canWebP: E,
    });
}
function V(e) {
    let { id: t, icon: n, size: r = _.eQT, canAnimate: i = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        canWebP: !1,
    });
}
function B(e) {
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
        let e = b({ userId: i.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: r });
        if (null != e) return e;
    }
    if (null != i && s) {
        let e = N(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return Q(n)
            ? n
            : S({
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
        let e = N(i, !1, r);
        if (null != e) return e;
    }
    if (a) return f;
}
function H(e) {
    let { id: t, hash: n, size: r = _.eQT, keepAspectRatio: i = !1, format: s } = e;
    return S({
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
function j(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: s = !0 } = e;
    return S({
        endpoint: (e, i, s) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, r, s),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: r,
        size: i,
        canAnimate: s,
        canWebP: !1,
    });
}
function Y(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function W(e) {
    let { id: t, icon: n, applicationId: i, size: s } = e;
    return null != i
        ? (B({ id: i, icon: n, size: s }) ?? r.DEFAULT_CHANNEL_ICON)
        : (S({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: s,
              canWebP: !1,
          }) ?? Y(t));
}
function K(e) {
    return null != e && e.startsWith("a_");
}
function z(e) {
    return null != e && e.startsWith("v_");
}
function $(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split("/").pop();
    } catch (e) {
        return null;
    }
}
function q(e) {
    return null != e && K($(e));
}
function Z(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let X = {
    getUserAvatarURL: C,
    getDefaultAvatarURL: v,
    getGuildMemberAvatarURL: R,
    getGuildMemberAvatarURLSimple: b,
    getGuildMemberAvatarSource: O,
    getGuildMemberBannerURL: w,
    getUserBannerURL: D,
    getAvatarDecorationURL: L,
    hasAnimatedGuildIcon: function e(e) {
        return K(e?.icon);
    },
    isAnimatedIconHash: K,
    getUserAvatarSource: (e, t, n) => Z(C(e, t, n)),
    getGuildIconURL: F,
    getGuildSplashURL: x,
    getGuildSplashSource: M,
    getGuildDiscoverySplashURL: U,
    getGuildDiscoverySplashSource: G,
    getGuildBannerURL: P,
    getGuildHomeHeaderURL: k,
    getResourceChannelIconURL: function e(e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : S({
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
            : S({
                  endpoint: _.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: "new-member-actions",
                  id: t,
                  hash: n,
                  size: _.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getGuildTemplateIconURL: V,
    getChannelIconURL: W,
    getEmojiURL: y,
    getApplicationIconURL: B,
    getGameAssetURL: H,
    getVideoFilterAssetURL: j,
    getGameAssetSource: (e) => Z(H(e)),
    getGuildIconSource: (e) => Z(F(e)),
    getGuildTemplateIconSource: (e) => Z(V(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Z(P(e, t));
    },
    getGuildHomeHeaderSource: (e) => Z(k(e)),
    getChannelIconSource: (e) => Z(W(e)),
    getApplicationIconSource: (e) => Z(B(e)),
    makeSource: Z,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function Q(e) {
    return null != e && p.test(e);
}
function J(e) {
    return e ? "webp" : "gif";
}

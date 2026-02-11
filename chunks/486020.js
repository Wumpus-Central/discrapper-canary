"use strict";
let r;
n.d(t, {
    Ay: () => Q,
    Bo: () => Y,
    F_: () => w,
    QB: () => E,
    V0: () => J,
    VI: () => $,
    _O: () => v,
    aq: () => h,
    ku: () => N,
    ns: () => x,
    o4: () => X,
    q6: () => z,
    s7: () => R,
    vI: () => p,
    xT: () => O,
    z: () => L,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(824120),
    a = n.n(i),
    s = n(488428),
    o = n(507698),
    l = n(776231),
    u = n(252424),
    c = n(723702),
    d = n(661191),
    _ = n(652215),
    f = n(532406);
let h = /^data:/,
    p = (r = n(820883).A).DEFAULT_AVATARS,
    g = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let E = r.canUseWebp(),
    A = 5,
    I = 360,
    T = 1096,
    y = (0, c.isAndroid)();
function S(e) {
    let t,
        {
            endpoint: n,
            path: r,
            id: i,
            hash: a,
            size: o,
            lossless: u = !1,
            canAnimate: c = !1,
            keepAspectRatio: d,
            format: _ = null,
            canWebP: f = E,
        } = e;
    if (null == i || null == a) return;
    let h = _ ?? (c && $(a) ? ee(f) : "jpg");
    c && z(a) && (h = "mp4");
    let p = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != p
            ? ("jpg" === h && (h = f ? "webp" : "png"), (t = `https://${p}/${r}/${i}/${a}.${h}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, h)),
        "mp4" === h)
    )
        return t;
    let g = {};
    return (
        null != o && (g.size = (0, l.kr)(o * (0, l.mZ)())),
        null != d && (g.keep_aspect_ratio = d),
        u && (g.quality = "lossless"),
        "webp" === h && c && $(a) && (g.animated = !0),
        t + `?${s.stringify(g)}`
    );
}
function v(e) {
    let { id: t, animated: r, size: i, forcePNG: a = !1 } = e,
        s = E ? "webp" : "png",
        o = E ? "webp" : "gif",
        u = a ? "png" : r ? o : s,
        c = E && r ? "&animated=true" : "",
        d = `size=${(0, l.kr)(i * (0, l.mZ)(), y)}`,
        f = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        f = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let h = f ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${u}?${d}${c}${h}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, u);
        return f ? `${e}?force_sdr=true` : e;
    }
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? g : p;
    if (null == e && null == t) return r[0];
    let i = (0, u.cG)(t, 0);
    return i > 0 ? r[i % A] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function b(e) {
    let { id: t, avatar: n, discriminator: i, bot: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E;
    if (a) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return p[0];
    }
    return S({
        endpoint: _.Rsh.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: o,
        canAnimate: s,
        format: l,
        canWebP: u,
    });
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : E;
    return b(e, t, n, r, i) ?? C(e.id, e.discriminator, e.isProvisional);
}
function R(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: a = !1, size: o = _.eQT, canWebP: u = E } = e,
        c = a && $(i) ? ee(u) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === c && (c = u ? "webp" : "png"), (t = `https://${d}${_.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c));
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && a && $(i) && (f.animated = !0), (t += `?${s.stringify(f)}`);
}
function O(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : R({ userId: t, avatar: n, guildId: r, canAnimate: i });
}
function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = O(e, n);
    return null != r ? Z(r) : t.getAvatarSource(e.guildId, n);
}
function L(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: a } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = i && $(r) ? ee(E) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, r, u);
    let c = { size: (0, l.kr)(a * (0, l.mZ)()) };
    return "webp" === u && i && $(r) && (c.animated = !0), (t += `?${s.stringify(c)}`);
}
function w(e) {
    let { avatarDecoration: t, size: n, canAnimate: r = !1 } = e;
    if (null == t || (0, o.bS)(t)) return;
    let i = t.asset;
    if (null == i) return;
    if (/^data:/.test(i)) return i;
    let { CDN_HOST: a, API_ENDPOINT: s } = window.GLOBAL_ENV,
        u = _.Rsh.AVATAR_DECORATION_PRESETS(i);
    if (/^blob:https?:\/\/[^\/]+\//i.test(i)) return i;
    let c = new URL(null != a ? `https://${a}${u}` : `${location.protocol}${s}${u}`);
    return (
        c.searchParams.set("size", `${(0, l.kr)(n * (0, l.mZ)())}`),
        c.searchParams.set("passthrough", `${r}`),
        c.toString()
    );
}
function x(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: a, size: o } = e;
    if (null == i || null == r) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        c = a && $(i) ? ee(E) : "png",
        d = _.Rsh.GUILD_MEMBER_BANNER(r, n, i, c);
    t = null != u ? `https://${u}${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && a && $(i) && (f.animated = !0), (t += `?${s.stringify(f)}`);
}
function P(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? `https://${a}/splashes/${n}/${r}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_SPLASH(n, r)) + `?size=${i}`
    );
}
function M(e) {
    return Z(P(e));
}
function k(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, l.kr)(I * (0, l.mZ)()),
        o = E ? "webp" : "jpg",
        u = i && $(r) ? ee(E) : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, r, u);
    let d = { size: a };
    return (
        "jpg" === u && (d.quality = "lossless"),
        "webp" === u && i && $(r) && (d.animated = !0),
        (t += `?${s.stringify(d)}`)
    );
}
function U(e) {
    let t,
        { id: n, homeHeader: r } = e;
    if (null == r) return null;
    let i = (0, l.kr)(T * (0, l.mZ)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? `https://${a}/home-headers/${n}/${r}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(n, r)) + `?size=${i}`
    );
}
function G(e) {
    let t,
        { id: n, splash: r, size: i } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != a
            ? `https://${a}/discovery-splashes/${n}/${r}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(n, r)) + `?size=${i}`
    );
}
function F(e) {
    return Z(G(e));
}
function V(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: a = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: a,
        canWebP: E,
    });
}
function B(e) {
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
function j(e) {
    let {
        id: t,
        icon: n,
        size: r = _.eQT,
        bot: i,
        botIconFirst: a,
        fallbackAvatar: s = !0,
        keepAspectRatio: o,
        guildMember: l,
    } = e;
    if (i?.id != null && null != l && null != l.avatar) {
        let e = R({ userId: i.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: r });
        if (null != e) return e;
    }
    if (null != i && a) {
        let e = b(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return J(n)
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
        let e = b(i, !1, r);
        if (null != e) return e;
    }
    if (s) return f;
}
function H(e) {
    let { id: t, hash: n, size: r = _.eQT, keepAspectRatio: i = !1, format: a } = e;
    return S({
        endpoint: _.Rsh.APPLICATION_ICON,
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
function Y(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: a = !0 } = e;
    return S({
        endpoint: (e, i, a) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: r,
        size: i,
        canAnimate: a,
        canWebP: !1,
    });
}
function W(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length];
}
function K(e) {
    let { id: t, icon: n, applicationId: i, size: a } = e;
    return null != i
        ? (j({ id: i, icon: n, size: a }) ?? r.DEFAULT_CHANNEL_ICON)
        : (S({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: a,
              canWebP: !1,
          }) ?? W(t));
}
function $(e) {
    return null != e && e.startsWith("a_");
}
function z(e) {
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
function X(e) {
    return null != e && $(q(e));
}
function Z(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let Q = {
    getUserAvatarURL: N,
    getDefaultAvatarURL: C,
    getGuildMemberAvatarURL: O,
    getGuildMemberAvatarURLSimple: R,
    getGuildMemberAvatarSource: D,
    getGuildMemberBannerURL: x,
    getUserBannerURL: L,
    getAvatarDecorationURL: w,
    hasAnimatedGuildIcon: function e(e) {
        return $(e?.icon);
    },
    isAnimatedIconHash: $,
    getUserAvatarSource: (e, t, n) => Z(N(e, t, n)),
    getGuildIconURL: V,
    getGuildSplashURL: P,
    getGuildSplashSource: M,
    getGuildDiscoverySplashURL: G,
    getGuildDiscoverySplashSource: F,
    getGuildBannerURL: k,
    getGuildHomeHeaderURL: U,
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
    getGuildTemplateIconURL: B,
    getChannelIconURL: K,
    getEmojiURL: v,
    getApplicationIconURL: j,
    getGameAssetURL: H,
    getVideoFilterAssetURL: Y,
    getGameAssetSource: (e) => Z(H(e)),
    getGuildIconSource: (e) => Z(V(e)),
    getGuildTemplateIconSource: (e) => Z(B(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Z(k(e, t));
    },
    getGuildHomeHeaderSource: (e) => Z(U(e)),
    getChannelIconSource: (e) => Z(K(e)),
    getApplicationIconSource: (e) => Z(j(e)),
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
function J(e) {
    return null != e && h.test(e);
}
function ee(e) {
    return e ? "webp" : "gif";
}

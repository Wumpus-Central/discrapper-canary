"use strict";
let r;
n.d(t, {
    Ay: () => W,
    Bo: () => G,
    F_: () => C,
    QB: () => g,
    V0: () => j,
    VI: () => F,
    _O: () => T,
    aq: () => h,
    ku: () => N,
    ns: () => b,
    o4: () => H,
    q6: () => B,
    s7: () => O,
    vI: () => p,
    xT: () => R,
    z: () => v,
}),
    n(323874),
    n(14289),
    n(35956);
var i = n(824120),
    s = n.n(i),
    a = n(488428),
    o = n(821956),
    l = n(776231),
    u = n(252424),
    d = n(723702),
    c = n(661191),
    _ = n(652215),
    f = n(190460),
    E = n(532406);
let h = /^data:/,
    p = (r = n(820883).A).DEFAULT_AVATARS,
    m = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let g = r.canUseWebp(),
    A = (0, d.isAndroid)();
function I(e) {
    let t,
        {
            endpoint: n,
            path: r,
            id: i,
            hash: s,
            size: o,
            lossless: u = !1,
            canAnimate: d = !1,
            keepAspectRatio: c,
            format: _ = null,
            canWebP: f = g,
        } = e;
    if (null == i || null == s) return;
    let E = _ ?? (d && F(s) ? K(f) : "jpg");
    d && B(s) && (E = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != h
            ? ("jpg" === E && (E = f ? "webp" : "png"), (t = `https://${h}/${r}/${i}/${s}.${E}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, s, E)),
        "mp4" === E)
    )
        return t;
    let p = {};
    return (
        null != o && (p.size = (0, l.kr)(o * (0, l.mZ)())),
        null != c && (p.keep_aspect_ratio = c),
        u && (p.quality = "lossless"),
        "webp" === E && d && F(s) && (p.animated = !0),
        t + `?${a.stringify(p)}`
    );
}
function T(e) {
    let { id: t, animated: r, size: i, forcePNG: s = !1 } = e,
        a = g ? "webp" : "png",
        o = g ? "webp" : "gif",
        u = s ? "png" : r ? o : a,
        d = g && r ? "&animated=true" : "",
        c = `size=${(0, l.kr)(i * (0, l.mZ)(), A)}`,
        f = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        f = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let E = f ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${u}?${c}${d}${E}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, u);
        return f ? `${e}?force_sdr=true` : e;
    }
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? m : p;
    if (null == e && null == t) return r[0];
    let i = (0, u.cG)(t, 0);
    return i > 0 ? r[i % 5] : null != e ? r[s()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function y(e) {
    let { id: t, avatar: n, discriminator: i, bot: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g;
    if (s) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return p[0];
    }
    return I({
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
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : g;
    return y(e, t, n, r, i) ?? S(e.id, e.discriminator, e.isProvisional);
}
function O(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: s = !1, size: o = _.eQT, canWebP: u = g } = e,
        d = s && F(i) ? K(u) : "jpg",
        { CDN_HOST: c } = window.GLOBAL_ENV;
    null != c
        ? ("jpg" === d && (d = u ? "webp" : "png"), (t = `https://${c}${_.Rsh.GUILD_MEMBER_AVATAR(n, r, i, d)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, r, i, d));
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === d && s && F(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function R(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : O({ userId: t, avatar: n, guildId: r, canAnimate: i });
}
function v(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: s } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = i && F(r) ? K(g) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, r, u);
    let d = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === u && i && F(r) && (d.animated = !0), (t += `?${a.stringify(d)}`);
}
function C(e) {
    let { avatarDecoration: t, size: r = f.DX, canAnimate: i = !1 } = e;
    if (null == t || (0, o.bS)(t)) return null;
    try {
        let { CollectiblesItemAssetFormat: e, getCollectiblesItemAssetUrl: r } = n(746002),
            s = i ? e.ANIMATED : e.STATIC,
            a = r({ skuId: t.skuId, assetFormat: s });
        if (null != a) return a;
    } catch {
        return null;
    }
    let s = t.asset;
    if (null == s) return null;
    let { CDN_HOST: a, API_ENDPOINT: u } = window.GLOBAL_ENV,
        d = _.Rsh.AVATAR_DECORATION_PRESETS(s),
        c = new URL(null != a ? `https://${a}${d}` : `${location.protocol}${u}${d}`);
    return (
        c.searchParams.set("size", `${(0, l.kr)(r * (0, l.mZ)(), A)}`),
        c.searchParams.set("passthrough", `${i}`),
        c.toString()
    );
}
function b(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: s, size: o } = e;
    if (null == i || null == r) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        d = s && F(i) ? K(g) : "png",
        c = _.Rsh.GUILD_MEMBER_BANNER(r, n, i, d);
    t = null != u ? `https://${u}${c}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c;
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === d && s && F(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function D(e) {
    let { id: t, splash: n, size: r } = e;
    if (null == n) return null;
    null == r && (r = window.screen.width * (0, l.mZ)()), (r = (0, l.kr)(r));
    let i = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != i
            ? `https://${i}/splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_SPLASH(t, n)) + `?size=${r}`
    );
}
function L(e) {
    let t,
        { id: n, banner: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let s = (0, l.kr)(360 * (0, l.mZ)()),
        o = g ? "webp" : "jpg",
        u = i && F(r) ? K(g) : o,
        d = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != d
            ? `https://${d}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, r, u);
    let c = { size: s };
    return (
        "jpg" === u && (c.quality = "lossless"),
        "webp" === u && i && F(r) && (c.animated = !0),
        (t += `?${a.stringify(c)}`)
    );
}
function w(e) {
    let { id: t, homeHeader: n } = e;
    if (null == n) return null;
    let r = (0, l.kr)(1096 * (0, l.mZ)()),
        i = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != i
            ? `https://${i}/home-headers/${t}/${n}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(t, n)) + `?size=${r}`
    );
}
function M(e) {
    let { id: t, splash: n, size: r } = e;
    if (null == n) return null;
    null == r && (r = window.screen.width * (0, l.mZ)()), (r = (0, l.kr)(r));
    let i = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != i
            ? `https://${i}/discovery-splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(t, n)) + `?size=${r}`
    );
}
function P(e) {
    let { id: t, icon: n, size: r, canAnimate: i = !1, lossless: s = !1 } = e;
    return I({
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
function U(e) {
    let { id: t, icon: n, size: r = _.eQT, canAnimate: i = !1 } = e;
    return I({
        endpoint: _.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        canWebP: !1,
    });
}
function k(e) {
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
        let e = O({ userId: i.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: r });
        if (null != e) return e;
    }
    if (null != i && s) {
        let e = y(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return j(n)
            ? n
            : I({
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
        let e = y(i, !1, r);
        if (null != e) return e;
    }
    if (a) return E;
}
function x(e) {
    let { id: t, hash: n, size: r = _.eQT, keepAspectRatio: i = !1, format: s } = e;
    return I({
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
function G(e) {
    let { userId: t, assetId: n, assetHash: r, size: i, canAnimate: s = !0 } = e;
    return I({
        endpoint: (e, i, s) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, r, s),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: r,
        size: i,
        canAnimate: s,
        canWebP: !1,
    });
}
function V(e) {
    let { id: t, icon: n, applicationId: i, size: s } = e;
    return null != i
        ? (k({ id: i, icon: n, size: s }) ?? r.DEFAULT_CHANNEL_ICON)
        : (I({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: s,
              canWebP: !1,
          }) ?? r.DEFAULT_GROUP_DM_AVATARS[c.default.extractTimestamp(t) % r.DEFAULT_GROUP_DM_AVATARS.length]);
}
function F(e) {
    return null != e && e.startsWith("a_");
}
function B(e) {
    return null != e && e.startsWith("v_");
}
function H(e) {
    return (
        null != e &&
        F(
            (function (e) {
                try {
                    return new URL(e).pathname.split("/").pop();
                } catch (e) {
                    return null;
                }
            })(e),
        )
    );
}
function Y(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let W = {
    getUserAvatarURL: N,
    getDefaultAvatarURL: S,
    getGuildMemberAvatarURL: R,
    getGuildMemberAvatarURLSimple: O,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = R(e, n);
        return null != r ? Y(r) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: b,
    getUserBannerURL: v,
    getAvatarDecorationURL: C,
    hasAnimatedGuildIcon: function (e) {
        return F(e?.icon);
    },
    isAnimatedIconHash: F,
    getUserAvatarSource: (e, t, n) => Y(N(e, t, n)),
    getGuildIconURL: P,
    getGuildSplashURL: D,
    getGuildSplashSource: function (e) {
        return Y(D(e));
    },
    getGuildDiscoverySplashURL: M,
    getGuildDiscoverySplashSource: function (e) {
        return Y(M(e));
    },
    getGuildBannerURL: L,
    getGuildHomeHeaderURL: w,
    getResourceChannelIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : I({
                  endpoint: _.Rsh.GUILD_RESOURCE_CHANNELS_ICON,
                  path: "resource-channels",
                  id: t,
                  hash: n,
                  size: _.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getNewMemberActionIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : I({
                  endpoint: _.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: "new-member-actions",
                  id: t,
                  hash: n,
                  size: _.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getGuildTemplateIconURL: U,
    getChannelIconURL: V,
    getEmojiURL: T,
    getApplicationIconURL: k,
    getGameAssetURL: x,
    getVideoFilterAssetURL: G,
    getGameAssetSource: (e) => Y(x(e)),
    getGuildIconSource: (e) => Y(P(e)),
    getGuildTemplateIconSource: (e) => Y(U(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Y(L(e, t));
    },
    getGuildHomeHeaderSource: (e) => Y(w(e)),
    getChannelIconSource: (e) => Y(V(e)),
    getApplicationIconSource: (e) => Y(k(e)),
    makeSource: Y,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, d.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function j(e) {
    return null != e && h.test(e);
}
function K(e) {
    return e ? "webp" : "gif";
}

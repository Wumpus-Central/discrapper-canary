"use strict";
let r;
n.d(t, {
    Ay: () => Y,
    Bo: () => G,
    F_: () => R,
    QB: () => g,
    V0: () => W,
    VI: () => V,
    _O: () => T,
    aq: () => h,
    ku: () => N,
    ns: () => b,
    o4: () => H,
    q6: () => B,
    s7: () => v,
    vI: () => E,
    xT: () => C,
    z: () => O,
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
    c = n(723702),
    d = n(661191),
    _ = n(652215),
    f = n(190460),
    p = n(532406);
let h = /^data:/,
    E = (r = n(820883).A).DEFAULT_AVATARS,
    m = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let g = r.canUseWebp(),
    A = (0, c.isAndroid)();
function I(e) {
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
    let p = _ ?? (c && V(s) ? K(f) : "jpg");
    c && B(s) && (p = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != h
            ? ("jpg" === p && (p = f ? "webp" : "png"), (t = `https://${h}/${r}/${i}/${s}.${p}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, s, p)),
        "mp4" === p)
    )
        return t;
    let E = {};
    return (
        null != o && (E.size = (0, l.kr)(o * (0, l.mZ)())),
        null != d && (E.keep_aspect_ratio = d),
        u && (E.quality = "lossless"),
        "webp" === p && c && V(s) && (E.animated = !0),
        t + `?${a.stringify(E)}`
    );
}
function T(e) {
    let { id: t, animated: r, size: i, forcePNG: s = !1 } = e,
        a = g ? "webp" : "png",
        o = g ? "webp" : "gif",
        u = s ? "png" : r ? o : a,
        c = g && r ? "&animated=true" : "",
        d = `size=${(0, l.kr)(i * (0, l.mZ)(), A)}`,
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
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? m : E;
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
        if (null == n && "0000" === i) return E[0];
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
function v(e) {
    let t,
        { guildId: n, userId: r, avatar: i, canAnimate: s = !1, size: o = _.eQT, canWebP: u = g } = e,
        c = s && V(i) ? K(u) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === c && (c = u ? "webp" : "png"), (t = `https://${d}${_.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, r, i, c));
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && V(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
}
function C(e) {
    let { userId: t, avatar: n, guildId: r } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : v({ userId: t, avatar: n, guildId: r, canAnimate: i });
}
function O(e) {
    let t,
        { id: n, banner: r, canAnimate: i, size: s } = e;
    if (null == r) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = i && V(r) ? K(g) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, r, u);
    let c = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === u && i && V(r) && (c.animated = !0), (t += `?${a.stringify(c)}`);
}
function R(e) {
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
        c = _.Rsh.AVATAR_DECORATION_PRESETS(s),
        d = new URL(null != a ? `https://${a}${c}` : `${location.protocol}${u}${c}`);
    return (
        d.searchParams.set("size", `${(0, l.kr)(r * (0, l.mZ)(), A)}`),
        d.searchParams.set("passthrough", `${i}`),
        d.toString()
    );
}
function b(e) {
    let t,
        { id: n, guildId: r, banner: i, canAnimate: s, size: o } = e;
    if (null == i || null == r) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        c = s && V(i) ? K(g) : "png",
        d = _.Rsh.GUILD_MEMBER_BANNER(r, n, i, c);
    t = null != u ? `https://${u}${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let f = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && V(i) && (f.animated = !0), (t += `?${a.stringify(f)}`);
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
        u = i && V(r) ? K(g) : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${r}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, r, u);
    let d = { size: s };
    return (
        "jpg" === u && (d.quality = "lossless"),
        "webp" === u && i && V(r) && (d.animated = !0),
        (t += `?${a.stringify(d)}`)
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
function x(e) {
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
        let e = v({ userId: i.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: r });
        if (null != e) return e;
    }
    if (null != i && s) {
        let e = y(i, !1, r);
        if (null != e) return e;
    }
    if (null != n)
        return W(n)
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
    if (a) return p;
}
function U(e) {
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
function F(e) {
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
          }) ?? r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(t) % r.DEFAULT_GROUP_DM_AVATARS.length]);
}
function V(e) {
    return null != e && e.startsWith("a_");
}
function B(e) {
    return null != e && e.startsWith("v_");
}
function H(e) {
    return (
        null != e &&
        V(
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
function j(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let Y = {
    getUserAvatarURL: N,
    getDefaultAvatarURL: S,
    getGuildMemberAvatarURL: C,
    getGuildMemberAvatarURLSimple: v,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = C(e, n);
        return null != r ? j(r) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: b,
    getUserBannerURL: O,
    getAvatarDecorationURL: R,
    hasAnimatedGuildIcon: function (e) {
        return V(e?.icon);
    },
    isAnimatedIconHash: V,
    getUserAvatarSource: (e, t, n) => j(N(e, t, n)),
    getGuildIconURL: P,
    getGuildSplashURL: D,
    getGuildSplashSource: function (e) {
        return j(D(e));
    },
    getGuildDiscoverySplashURL: M,
    getGuildDiscoverySplashSource: function (e) {
        return j(M(e));
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
    getGuildTemplateIconURL: x,
    getChannelIconURL: F,
    getEmojiURL: T,
    getApplicationIconURL: k,
    getGameAssetURL: U,
    getVideoFilterAssetURL: G,
    getGameAssetSource: (e) => j(U(e)),
    getGuildIconSource: (e) => j(P(e)),
    getGuildTemplateIconSource: (e) => j(x(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return j(L(e, t));
    },
    getGuildHomeHeaderSource: (e) => j(w(e)),
    getChannelIconSource: (e) => j(F(e)),
    getApplicationIconSource: (e) => j(k(e)),
    makeSource: j,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function W(e) {
    return null != e && h.test(e);
}
function K(e) {
    return e ? "webp" : "gif";
}

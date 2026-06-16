"use strict";
let i;
n.d(t, {
    Ay: () => K,
    Bo: () => V,
    F_: () => D,
    QB: () => I,
    V0: () => $,
    VI: () => j,
    _O: () => y,
    aq: () => p,
    ku: () => v,
    ns: () => L,
    o4: () => Y,
    q6: () => H,
    s7: () => R,
    vI: () => E,
    xT: () => O,
    z: () => b,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(824120),
    s = n.n(r),
    a = n(488428),
    o = n(821956),
    l = n(776231),
    u = n(252424),
    c = n(723702),
    d = n(935208),
    _ = n(652215),
    h = n(190460),
    f = n(532406);
let p = /^data:/,
    E = (i = n(3451).A).DEFAULT_AVATARS,
    m = i.DEFAULT_AVATARS_SMALL ?? E,
    g = i.DEFAULT_AVATARS_SMALL_MAX_SIZE ?? 0,
    A = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let I = i.canUseWebp(),
    T = (0, c.isAndroid)();
function S(e) {
    let t,
        {
            endpoint: n,
            path: i,
            id: r,
            hash: s,
            size: o,
            lossless: u = !1,
            canAnimate: c = !1,
            keepAspectRatio: d,
            format: _ = null,
            canWebP: h = I,
        } = e;
    if (null == r || null == s) return;
    let f = _ ?? (c && j(s) ? z(h) : "jpg");
    c && H(s) && (f = "mp4");
    let p = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != p
            ? ("jpg" === f && (f = h ? "webp" : "png"), (t = `https://${p}/${i}/${r}/${s}.${f}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, s, f)),
        "mp4" === f)
    )
        return t;
    let E = {};
    return (
        null != o && (E.size = (0, l.kr)(o * (0, l.mZ)())),
        null != d && (E.keep_aspect_ratio = d),
        u && (E.quality = "lossless"),
        "webp" === f && c && j(s) && (E.animated = !0),
        t + `?${a.stringify(E)}`
    );
}
function y(e) {
    let { id: t, animated: i, size: r, forcePNG: s = !1 } = e,
        a = I ? "webp" : "png",
        o = I ? "webp" : "gif",
        u = s ? "png" : i ? o : a,
        c = I && i ? "&animated=true" : "",
        d = `size=${(0, l.kr)(r * (0, l.mZ)(), T)}`,
        h = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        h = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let f = h ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${u}?${d}${c}${f}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, u);
        return h ? `${e}?force_sdr=true` : e;
    }
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = n ? A : !n && null != i && i <= g ? m : E;
    if (null == e && null == t) return r[0];
    let a = (0, u.cG)(t, 0);
    return a > 0 ? r[a % 5] : null != e ? r[s()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function N(e) {
    let { id: t, avatar: n, discriminator: r, bot: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : I;
    if (s) {
        let e = i.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === r) return E[0];
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
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : I;
    return N(e, t, n, i, r) ?? C(e.id, e.discriminator, e.isProvisional, n);
}
function R(e) {
    let t,
        { guildId: n, userId: i, avatar: r, canAnimate: s = !1, size: o = _.eQT, canWebP: u = I } = e,
        c = s && j(r) ? z(u) : "jpg",
        { CDN_HOST: d } = window.GLOBAL_ENV;
    null != d
        ? ("jpg" === c && (c = u ? "webp" : "png"), (t = `https://${d}${_.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c));
    let h = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && j(r) && (h.animated = !0), (t += `?${a.stringify(h)}`);
}
function O(e) {
    let { userId: t, avatar: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : R({ userId: t, avatar: n, guildId: i, canAnimate: r });
}
function b(e) {
    let t,
        { id: n, banner: i, canAnimate: r, size: s } = e;
    if (null == i) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        u = r && j(i) ? z(I) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${i}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, i, u);
    let c = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === u && r && j(i) && (c.animated = !0), (t += `?${a.stringify(c)}`);
}
function D(e) {
    let { avatarDecoration: t, size: i = h.DX, canAnimate: r = !1 } = e;
    if (null == t || (0, o.bS)(t)) return null;
    try {
        let { CollectiblesItemAssetFormat: e, getCollectiblesItemAssetUrl: i } = n(746002),
            s = r ? e.ANIMATED : e.STATIC,
            a = i({ skuId: t.skuId, assetFormat: s });
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
        d.searchParams.set("size", `${(0, l.kr)(i * (0, l.mZ)(), T)}`),
        d.searchParams.set("passthrough", `${r}`),
        d.toString()
    );
}
function L(e) {
    let t,
        { id: n, guildId: i, banner: r, canAnimate: s, size: o } = e;
    if (null == r || null == i) return;
    let u = window.GLOBAL_ENV.CDN_HOST,
        c = s && j(r) ? z(I) : "png",
        d = _.Rsh.GUILD_MEMBER_BANNER(i, n, r, c);
    t = null != u ? `https://${u}${d}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let h = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === c && s && j(r) && (h.animated = !0), (t += `?${a.stringify(h)}`);
}
function w(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_SPLASH(t, n)) + `?size=${i}`
    );
}
function M(e) {
    let t,
        { id: n, banner: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == i) return null;
    let s = (0, l.kr)(360 * (0, l.mZ)()),
        o = I ? "webp" : "jpg",
        u = r && j(i) ? z(I) : o,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${i}.${u}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, i, u);
    let d = { size: s };
    return (
        "jpg" === u && (d.quality = "lossless"),
        "webp" === u && r && j(i) && (d.animated = !0),
        (t += `?${a.stringify(d)}`)
    );
}
function P(e) {
    let { id: t, homeHeader: n } = e;
    if (null == n) return null;
    let i = (0, l.kr)(1096 * (0, l.mZ)()),
        r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/home-headers/${t}/${n}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(t, n)) + `?size=${i}`
    );
}
function x(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/discovery-splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(t, n)) + `?size=${i}`
    );
}
function k(e) {
    let { id: t, icon: n, size: i, canAnimate: r = !1, lossless: s = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        lossless: s,
        canWebP: I,
    });
}
function U(e) {
    let { id: t, icon: n, size: i = _.eQT, canAnimate: r = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        canWebP: !1,
    });
}
function G(e) {
    let {
        id: t,
        icon: n,
        size: i = _.eQT,
        bot: r,
        botIconFirst: s,
        fallbackAvatar: a = !0,
        keepAspectRatio: o,
        guildMember: l,
    } = e;
    if (r?.id != null && null != l && null != l.avatar) {
        let e = R({ userId: r.id, guildId: l.guildId, avatar: l.avatar, canAnimate: !1, size: i });
        if (null != e) return e;
    }
    if (null != r && s) {
        let e = N(r, !1, i);
        if (null != e) return e;
    }
    if (null != n)
        return $(n)
            ? n
            : S({
                  endpoint: _.Rsh.APPLICATION_ICON,
                  path: "app-icons",
                  id: t,
                  hash: n,
                  size: i,
                  canAnimate: !1,
                  canWebP: !1,
                  keepAspectRatio: o,
              });
    if (null != r) {
        let e = N(r, !1, i);
        if (null != e) return e;
    }
    if (a) return f;
}
function F(e) {
    let { id: t, hash: n, size: i = _.eQT, keepAspectRatio: r = !1, format: s } = e;
    return S({
        endpoint: _.Rsh.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: i,
        canAnimate: !1,
        keepAspectRatio: r,
        format: s,
        canWebP: !1,
    });
}
function V(e) {
    let { userId: t, assetId: n, assetHash: i, size: r, canAnimate: s = !0 } = e;
    return S({
        endpoint: (e, r, s) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, i, s),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: i,
        size: r,
        canAnimate: s,
        canWebP: !1,
    });
}
function B(e) {
    let { id: t, icon: n, applicationId: r, size: s } = e;
    return null != r
        ? (G({ id: r, icon: n, size: s }) ?? i.DEFAULT_CHANNEL_ICON)
        : (S({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: s,
              canWebP: !1,
          }) ?? i.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(t) % i.DEFAULT_GROUP_DM_AVATARS.length]);
}
function j(e) {
    return null != e && e.startsWith("a_");
}
function H(e) {
    return null != e && e.startsWith("v_");
}
function Y(e) {
    return (
        null != e &&
        j(
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
function W(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let K = {
    getUserAvatarURL: v,
    getDefaultAvatarURL: C,
    getGuildMemberAvatarURL: O,
    getGuildMemberAvatarURLSimple: R,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = O(e, n);
        return null != i ? W(i) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: L,
    getUserBannerURL: b,
    getAvatarDecorationURL: D,
    hasAnimatedGuildIcon: function (e) {
        return j(e?.icon);
    },
    isAnimatedIconHash: j,
    getUserAvatarSource: (e, t, n) => W(v(e, t, n)),
    getGuildIconURL: k,
    getGuildSplashURL: w,
    getGuildSplashSource: function (e) {
        return W(w(e));
    },
    getGuildDiscoverySplashURL: x,
    getGuildDiscoverySplashSource: function (e) {
        return W(x(e));
    },
    getGuildBannerURL: M,
    getGuildHomeHeaderURL: P,
    getResourceChannelIconURL: function (e) {
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
    getNewMemberActionIconURL: function (e) {
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
    getGuildTemplateIconURL: U,
    getChannelIconURL: B,
    getEmojiURL: y,
    getApplicationIconURL: G,
    getGameAssetURL: F,
    getVideoFilterAssetURL: V,
    getGameAssetSource: (e) => W(F(e)),
    getGuildIconSource: (e) => W(k(e)),
    getGuildTemplateIconSource: (e) => W(U(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return W(M(e, t));
    },
    getGuildHomeHeaderSource: (e) => W(P(e)),
    getChannelIconSource: (e) => W(B(e)),
    getApplicationIconSource: (e) => W(G(e)),
    makeSource: W,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, c.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function $(e) {
    return null != e && p.test(e);
}
function z(e) {
    return e ? "webp" : "gif";
}

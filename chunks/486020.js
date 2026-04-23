"use strict";
let i;
n.d(t, {
    Ay: () => W,
    Bo: () => G,
    F_: () => v,
    QB: () => p,
    V0: () => Y,
    VI: () => F,
    _O: () => T,
    aq: () => m,
    ku: () => C,
    ns: () => D,
    o4: () => H,
    q6: () => B,
    s7: () => R,
    vI: () => f,
    xT: () => O,
    z: () => y,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(824120),
    s = n.n(r),
    a = n(488428),
    o = n(821956),
    l = n(776231),
    d = n(252424),
    _ = n(723702),
    u = n(935208),
    c = n(652215),
    E = n(190460),
    h = n(532406);
let m = /^data:/,
    f = (i = n(3451).A).DEFAULT_AVATARS,
    g = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let p = i.canUseWebp(),
    A = (0, _.isAndroid)();
function I(e) {
    let t,
        {
            endpoint: n,
            path: i,
            id: r,
            hash: s,
            size: o,
            lossless: d = !1,
            canAnimate: _ = !1,
            keepAspectRatio: u,
            format: c = null,
            canWebP: E = p,
        } = e;
    if (null == r || null == s) return;
    let h = c ?? (_ && F(s) ? K(E) : "jpg");
    _ && B(s) && (h = "mp4");
    let m = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != m
            ? ("jpg" === h && (h = E ? "webp" : "png"), (t = `https://${m}/${i}/${r}/${s}.${h}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, s, h)),
        "mp4" === h)
    )
        return t;
    let f = {};
    return (
        null != o && (f.size = (0, l.kr)(o * (0, l.mZ)())),
        null != u && (f.keep_aspect_ratio = u),
        d && (f.quality = "lossless"),
        "webp" === h && _ && F(s) && (f.animated = !0),
        t + `?${a.stringify(f)}`
    );
}
function T(e) {
    let { id: t, animated: i, size: r, forcePNG: s = !1 } = e,
        a = p ? "webp" : "png",
        o = p ? "webp" : "gif",
        d = s ? "png" : i ? o : a,
        _ = p && i ? "&animated=true" : "",
        u = `size=${(0, l.kr)(r * (0, l.mZ)(), A)}`,
        E = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        E = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let h = E ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${d}?${u}${_}${h}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.EMOJI(t, d);
        return E ? `${e}?force_sdr=true` : e;
    }
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = n ? g : f;
    if (null == e && null == t) return i[0];
    let r = (0, d.cG)(t, 0);
    return r > 0 ? i[r % 5] : null != e ? i[s()(e).shiftRight(22).mod(i.length).toJSNumber()] : i[0];
}
function N(e) {
    let { id: t, avatar: n, discriminator: r, bot: s } = e,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.eQT,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p;
    if (s) {
        let e = i.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === r) return f[0];
    }
    return I({
        endpoint: c.Rsh.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: o,
        canAnimate: a,
        format: l,
        canWebP: d,
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.eQT,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : p;
    return N(e, t, n, i, r) ?? S(e.id, e.discriminator, e.isProvisional);
}
function R(e) {
    let t,
        { guildId: n, userId: i, avatar: r, canAnimate: s = !1, size: o = c.eQT, canWebP: d = p } = e,
        _ = s && F(r) ? K(d) : "jpg",
        { CDN_HOST: u } = window.GLOBAL_ENV;
    null != u
        ? ("jpg" === _ && (_ = d ? "webp" : "png"), (t = `https://${u}${c.Rsh.GUILD_MEMBER_AVATAR(n, i, r, _)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.GUILD_MEMBER_AVATAR(n, i, r, _));
    let E = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === _ && s && F(r) && (E.animated = !0), (t += `?${a.stringify(E)}`);
}
function O(e) {
    let { userId: t, avatar: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : R({ userId: t, avatar: n, guildId: i, canAnimate: r });
}
function y(e) {
    let t,
        { id: n, banner: i, canAnimate: r, size: s } = e;
    if (null == i) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        d = r && F(i) ? K(p) : "png";
    t =
        null != o
            ? `https://${o}/banners/${n}/${i}.${d}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.USER_BANNER(n, i, d);
    let _ = { size: (0, l.kr)(s * (0, l.mZ)()) };
    return "webp" === d && r && F(i) && (_.animated = !0), (t += `?${a.stringify(_)}`);
}
function v(e) {
    let { avatarDecoration: t, size: i = E.DX, canAnimate: r = !1 } = e;
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
    let { CDN_HOST: a, API_ENDPOINT: d } = window.GLOBAL_ENV,
        _ = c.Rsh.AVATAR_DECORATION_PRESETS(s),
        u = new URL(null != a ? `https://${a}${_}` : `${location.protocol}${d}${_}`);
    return (
        u.searchParams.set("size", `${(0, l.kr)(i * (0, l.mZ)(), A)}`),
        u.searchParams.set("passthrough", `${r}`),
        u.toString()
    );
}
function D(e) {
    let t,
        { id: n, guildId: i, banner: r, canAnimate: s, size: o } = e;
    if (null == r || null == i) return;
    let d = window.GLOBAL_ENV.CDN_HOST,
        _ = s && F(r) ? K(p) : "png",
        u = c.Rsh.GUILD_MEMBER_BANNER(i, n, r, _);
    t = null != d ? `https://${d}${u}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u;
    let E = { size: (0, l.kr)(o * (0, l.mZ)()) };
    return "webp" === _ && s && F(r) && (E.animated = !0), (t += `?${a.stringify(E)}`);
}
function L(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.GUILD_SPLASH(t, n)) + `?size=${i}`
    );
}
function b(e) {
    let t,
        { id: n, banner: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == i) return null;
    let s = (0, l.kr)(360 * (0, l.mZ)()),
        o = p ? "webp" : "jpg",
        d = r && F(i) ? K(p) : o,
        _ = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != _
            ? `https://${_}/banners/${n}/${i}.${d}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.GUILD_BANNER(n, i, d);
    let u = { size: s };
    return (
        "jpg" === d && (u.quality = "lossless"),
        "webp" === d && r && F(i) && (u.animated = !0),
        (t += `?${a.stringify(u)}`)
    );
}
function w(e) {
    let { id: t, homeHeader: n } = e;
    if (null == n) return null;
    let i = (0, l.kr)(1096 * (0, l.mZ)()),
        r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/home-headers/${t}/${n}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.GUILD_HOME_HEADER(t, n)) + `?size=${i}`
    );
}
function P(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), (i = (0, l.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/discovery-splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Rsh.GUILD_DISCOVERY_SPLASH(t, n)) + `?size=${i}`
    );
}
function k(e) {
    let { id: t, icon: n, size: i, canAnimate: r = !1, lossless: s = !1 } = e;
    return I({
        endpoint: c.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        lossless: s,
        canWebP: p,
    });
}
function M(e) {
    let { id: t, icon: n, size: i = c.eQT, canAnimate: r = !1 } = e;
    return I({
        endpoint: c.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        canWebP: !1,
    });
}
function U(e) {
    let {
        id: t,
        icon: n,
        size: i = c.eQT,
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
        return Y(n)
            ? n
            : I({
                  endpoint: c.Rsh.APPLICATION_ICON,
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
    if (a) return h;
}
function x(e) {
    let { id: t, hash: n, size: i = c.eQT, keepAspectRatio: r = !1, format: s } = e;
    return I({
        endpoint: c.Rsh.APPLICATION_ICON,
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
function G(e) {
    let { userId: t, assetId: n, assetHash: i, size: r, canAnimate: s = !0 } = e;
    return I({
        endpoint: (e, r, s) => c.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, i, s),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: i,
        size: r,
        canAnimate: s,
        canWebP: !1,
    });
}
function V(e) {
    let { id: t, icon: n, applicationId: r, size: s } = e;
    return null != r
        ? (U({ id: r, icon: n, size: s }) ?? i.DEFAULT_CHANNEL_ICON)
        : (I({
              endpoint: c.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: s,
              canWebP: !1,
          }) ?? i.DEFAULT_GROUP_DM_AVATARS[u.default.extractTimestamp(t) % i.DEFAULT_GROUP_DM_AVATARS.length]);
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
function j(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
let W = {
    getUserAvatarURL: C,
    getDefaultAvatarURL: S,
    getGuildMemberAvatarURL: O,
    getGuildMemberAvatarURLSimple: R,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = O(e, n);
        return null != i ? j(i) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: D,
    getUserBannerURL: y,
    getAvatarDecorationURL: v,
    hasAnimatedGuildIcon: function (e) {
        return F(e?.icon);
    },
    isAnimatedIconHash: F,
    getUserAvatarSource: (e, t, n) => j(C(e, t, n)),
    getGuildIconURL: k,
    getGuildSplashURL: L,
    getGuildSplashSource: function (e) {
        return j(L(e));
    },
    getGuildDiscoverySplashURL: P,
    getGuildDiscoverySplashSource: function (e) {
        return j(P(e));
    },
    getGuildBannerURL: b,
    getGuildHomeHeaderURL: w,
    getResourceChannelIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : I({
                  endpoint: c.Rsh.GUILD_RESOURCE_CHANNELS_ICON,
                  path: "resource-channels",
                  id: t,
                  hash: n,
                  size: c.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getNewMemberActionIconURL: function (e) {
        let { channelId: t, icon: n } = e;
        return null == n
            ? null
            : I({
                  endpoint: c.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
                  path: "new-member-actions",
                  id: t,
                  hash: n,
                  size: c.eQT,
                  canAnimate: !0,
                  canWebP: !1,
              });
    },
    getGuildTemplateIconURL: M,
    getChannelIconURL: V,
    getEmojiURL: T,
    getApplicationIconURL: U,
    getGameAssetURL: x,
    getVideoFilterAssetURL: G,
    getGameAssetSource: (e) => j(x(e)),
    getGuildIconSource: (e) => j(k(e)),
    getGuildTemplateIconSource: (e) => j(M(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return j(b(e, t));
    },
    getGuildHomeHeaderSource: (e) => j(w(e)),
    getChannelIconSource: (e) => j(V(e)),
    getApplicationIconSource: (e) => j(U(e)),
    makeSource: j,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, _.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
        }
    },
};
function Y(e) {
    return null != e && m.test(e);
}
function K(e) {
    return e ? "webp" : "gif";
}

"use strict";
let i;
n.d(t, {
    Ay: () => K,
    Bo: () => V,
    F_: () => v,
    QB: () => m,
    V0: () => $,
    VI: () => H,
    _O: () => N,
    aq: () => h,
    ku: () => R,
    ns: () => b,
    o4: () => W,
    q6: () => j,
    s7: () => L,
    vI: () => I,
    xT: () => y,
    z: () => D,
}),
    n(323874),
    n(14289),
    n(35956);
var r = n(824120),
    a = n.n(r),
    s = n(488428),
    l = n(821956),
    o = n(776231),
    d = n(252424),
    c = n(723702),
    u = n(935208),
    _ = n(652215),
    E = n(190460),
    A = n(532406);
let h = /^data:/,
    I = (i = n(3451).A).DEFAULT_AVATARS,
    f = i.DEFAULT_AVATARS_SMALL ?? I,
    p = i.DEFAULT_AVATARS_SMALL_MAX_SIZE ?? 0,
    T = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let m = i.canUseWebp(),
    g = (0, c.isAndroid)();
function S(e) {
    let t,
        {
            endpoint: n,
            path: i,
            id: r,
            hash: a,
            size: l,
            lossless: d = !1,
            canAnimate: c = !1,
            keepAspectRatio: u,
            format: _ = null,
            canWebP: E = m,
        } = e;
    if (null == r || null == a) return;
    let A = _ ?? (c && H(a) ? z(E) : "jpg");
    c && j(a) && (A = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != h
            ? ("jpg" === A && (A = E ? "webp" : "png"), (t = `https://${h}/${i}/${r}/${a}.${A}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, a, A)),
        "mp4" === A)
    )
        return t;
    let I = {};
    return (
        null != l && (I.size = (0, o.kr)(l * (0, o.mZ)())),
        null != u && (I.keep_aspect_ratio = u),
        d && (I.quality = "lossless"),
        "webp" === A && c && H(a) && (I.animated = !0),
        t + `?${s.stringify(I)}`
    );
}
function N(e) {
    let { id: t, animated: i, size: r, forcePNG: a = !1 } = e,
        s = m ? "webp" : "png",
        l = m ? "webp" : "gif",
        d = a ? "png" : i ? l : s,
        c = m && i ? "&animated=true" : "",
        u = `size=${(0, o.kr)(r * (0, o.mZ)(), g)}`,
        E = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        E = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let A = E ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${d}?${u}${c}${A}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, d);
        return E ? `${e}?force_sdr=true` : e;
    }
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = n ? T : !n && null != i && i <= p ? f : I;
    if (null == e && null == t) return r[0];
    let s = (0, d.cG)(t, 0);
    return s > 0 ? r[s % 5] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function O(e) {
    let { id: t, avatar: n, discriminator: r, bot: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m;
    if (a) {
        let e = i.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === r) return I[0];
    }
    return S({
        endpoint: _.Rsh.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: l,
        canAnimate: s,
        format: o,
        canWebP: d,
    });
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.eQT,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m;
    return O(e, t, n, i, r) ?? C(e.id, e.discriminator, e.isProvisional, n);
}
function L(e) {
    let t,
        { guildId: n, userId: i, avatar: r, canAnimate: a = !1, size: l = _.eQT, canWebP: d = m } = e,
        c = a && H(r) ? z(d) : "jpg",
        { CDN_HOST: u } = window.GLOBAL_ENV;
    null != u
        ? ("jpg" === c && (c = d ? "webp" : "png"), (t = `https://${u}${_.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c));
    let E = { size: (0, o.kr)(l * (0, o.mZ)()) };
    return "webp" === c && a && H(r) && (E.animated = !0), (t += `?${s.stringify(E)}`);
}
function y(e) {
    let { userId: t, avatar: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : L({ userId: t, avatar: n, guildId: i, canAnimate: r });
}
function D(e) {
    let t,
        { id: n, banner: i, canAnimate: r, size: a } = e;
    if (null == i) return;
    let l = window.GLOBAL_ENV.CDN_HOST,
        d = r && H(i) ? z(m) : "png";
    t =
        null != l
            ? `https://${l}/banners/${n}/${i}.${d}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, i, d);
    let c = { size: (0, o.kr)(a * (0, o.mZ)()) };
    return "webp" === d && r && H(i) && (c.animated = !0), (t += `?${s.stringify(c)}`);
}
function v(e) {
    let { avatarDecoration: t, size: i = E.DX, canAnimate: r = !1 } = e;
    if (null == t || (0, l.bS)(t)) return null;
    try {
        let { CollectiblesItemAssetFormat: e, getCollectiblesItemAssetUrl: i } = n(746002),
            a = r ? e.ANIMATED : e.STATIC,
            s = i({ skuId: t.skuId, assetFormat: a });
        if (null != s) return s;
    } catch {
        return null;
    }
    let a = t.asset;
    if (null == a) return null;
    let { CDN_HOST: s, API_ENDPOINT: d } = window.GLOBAL_ENV,
        c = _.Rsh.AVATAR_DECORATION_PRESETS(a),
        u = new URL(null != s ? `https://${s}${c}` : `${location.protocol}${d}${c}`);
    return (
        u.searchParams.set("size", `${(0, o.kr)(i * (0, o.mZ)(), g)}`),
        u.searchParams.set("passthrough", `${r}`),
        u.toString()
    );
}
function b(e) {
    let t,
        { id: n, guildId: i, banner: r, canAnimate: a, size: l } = e;
    if (null == r || null == i) return;
    let d = window.GLOBAL_ENV.CDN_HOST,
        c = a && H(r) ? z(m) : "png",
        u = _.Rsh.GUILD_MEMBER_BANNER(i, n, r, c);
    t = null != d ? `https://${d}${u}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u;
    let E = { size: (0, o.kr)(l * (0, o.mZ)()) };
    return "webp" === c && a && H(r) && (E.animated = !0), (t += `?${s.stringify(E)}`);
}
function M(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, o.mZ)()), (i = (0, o.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_SPLASH(t, n)) + `?size=${i}`
    );
}
function P(e) {
    let t,
        { id: n, banner: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == i) return null;
    let a = (0, o.kr)(360 * (0, o.mZ)()),
        l = m ? "webp" : "jpg",
        d = r && H(i) ? z(m) : l,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${i}.${d}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, i, d);
    let u = { size: a };
    return (
        "jpg" === d && (u.quality = "lossless"),
        "webp" === d && r && H(i) && (u.animated = !0),
        (t += `?${s.stringify(u)}`)
    );
}
function U(e) {
    let { id: t, homeHeader: n } = e;
    if (null == n) return null;
    let i = (0, o.kr)(1096 * (0, o.mZ)()),
        r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/home-headers/${t}/${n}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(t, n)) + `?size=${i}`
    );
}
function w(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    null == i && (i = window.screen.width * (0, o.mZ)()), (i = (0, o.kr)(i));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/discovery-splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(t, n)) + `?size=${i}`
    );
}
function G(e) {
    let { id: t, icon: n, size: i, canAnimate: r = !1, lossless: a = !1 } = e;
    return S({
        endpoint: _.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        lossless: a,
        canWebP: m,
    });
}
function x(e) {
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
function k(e) {
    let {
        id: t,
        icon: n,
        size: i = _.eQT,
        bot: r,
        botIconFirst: a,
        fallbackAvatar: s = !0,
        keepAspectRatio: l,
        guildMember: o,
    } = e;
    if (r?.id != null && null != o && null != o.avatar) {
        let e = L({ userId: r.id, guildId: o.guildId, avatar: o.avatar, canAnimate: !1, size: i });
        if (null != e) return e;
    }
    if (null != r && a) {
        let e = O(r, !1, i);
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
                  keepAspectRatio: l,
              });
    if (null != r) {
        let e = O(r, !1, i);
        if (null != e) return e;
    }
    if (s) return A;
}
function F(e) {
    let { id: t, hash: n, size: i = _.eQT, keepAspectRatio: r = !1, format: a } = e;
    return S({
        endpoint: _.Rsh.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: i,
        canAnimate: !1,
        keepAspectRatio: r,
        format: a,
        canWebP: !1,
    });
}
function V(e) {
    let { userId: t, assetId: n, assetHash: i, size: r, canAnimate: a = !0 } = e;
    return S({
        endpoint: (e, r, a) => _.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, i, a),
        path: `video-filter-assets/${t}`,
        id: n,
        hash: i,
        size: r,
        canAnimate: a,
        canWebP: !1,
    });
}
function B(e) {
    let { id: t, icon: n, applicationId: r, size: a } = e;
    return null != r
        ? (k({ id: r, icon: n, size: a }) ?? i.DEFAULT_CHANNEL_ICON)
        : (S({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: a,
              canWebP: !1,
          }) ?? i.DEFAULT_GROUP_DM_AVATARS[u.default.extractTimestamp(t) % i.DEFAULT_GROUP_DM_AVATARS.length]);
}
function H(e) {
    return null != e && e.startsWith("a_");
}
function j(e) {
    return null != e && e.startsWith("v_");
}
function W(e) {
    return (
        null != e &&
        H(
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
let K = {
    getUserAvatarURL: R,
    getDefaultAvatarURL: C,
    getGuildMemberAvatarURL: y,
    getGuildMemberAvatarURLSimple: L,
    getGuildMemberAvatarSource: function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = y(e, n);
        return null != i ? Y(i) : t.getAvatarSource(e.guildId, n);
    },
    getGuildMemberBannerURL: b,
    getUserBannerURL: D,
    getAvatarDecorationURL: v,
    hasAnimatedGuildIcon: function (e) {
        return H(e?.icon);
    },
    isAnimatedIconHash: H,
    getUserAvatarSource: (e, t, n) => Y(R(e, t, n)),
    getGuildIconURL: G,
    getGuildSplashURL: M,
    getGuildSplashSource: function (e) {
        return Y(M(e));
    },
    getGuildDiscoverySplashURL: w,
    getGuildDiscoverySplashSource: function (e) {
        return Y(w(e));
    },
    getGuildBannerURL: P,
    getGuildHomeHeaderURL: U,
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
    getGuildTemplateIconURL: x,
    getChannelIconURL: B,
    getEmojiURL: N,
    getApplicationIconURL: k,
    getGameAssetURL: F,
    getVideoFilterAssetURL: V,
    getGameAssetSource: (e) => Y(F(e)),
    getGuildIconSource: (e) => Y(G(e)),
    getGuildTemplateIconSource: (e) => Y(x(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Y(P(e, t));
    },
    getGuildHomeHeaderSource: (e) => Y(U(e)),
    getChannelIconSource: (e) => Y(B(e)),
    getApplicationIconSource: (e) => Y(k(e)),
    makeSource: Y,
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
    return null != e && h.test(e);
}
function z(e) {
    return e ? "webp" : "gif";
}

let i;
(n(323874), n(14289), n(35956));
var r = n(824120),
    a = n.n(r),
    s = n(488428),
    l = n(118751),
    o = n(821956),
    d = n(776231),
    c = n(723702),
    u = n(811091),
    _ = n(652215);
n(190460);
var E = n(532406);
let A = /^data:/,
    f = (i = n(9320).A).DEFAULT_AVATARS,
    h = i.DEFAULT_AVATARS_SMALL ?? f,
    I = i.DEFAULT_AVATARS_SMALL_MAX_SIZE ?? 0,
    p = i.DEFAULT_PROVISIONAL_AVATARS;
i.DEFAULT_GROUP_DM_AVATARS;
let m = i.canUseWebp(),
    g = (0, c.m0)();
function T(e) {
    let t,
        {
            endpoint: n,
            path: i,
            id: r,
            hash: a,
            size: l,
            lossless: o = !1,
            canAnimate: c = !1,
            keepAspectRatio: u,
            format: _ = null,
            canWebP: E = m,
        } = e;
    if (null == r || null == a) return;
    let A = _ ?? (c && V(a) ? Y(E) : "jpg");
    c && H(a) && (A = "mp4");
    let f = window.GLOBAL_ENV.CDN_HOST;
    if (
        (null != f
            ? ("jpg" === A && (A = E ? "webp" : "png"), (t = `https://${f}/${i}/${r}/${a}.${A}`))
            : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, a, A)),
        "mp4" === A)
    )
        return t;
    let h = {};
    return (
        null != l && (h.size = (0, d.kr)(l * (0, d.mZ)())),
        null != u && (h.keep_aspect_ratio = u),
        o && (h.quality = "lossless"),
        "webp" === A && c && V(a) && (h.animated = !0),
        t + `?${s.As(h)}`
    );
}
function S(e) {
    let { id: t, animated: i, size: r, forcePNG: a = !1 } = e,
        s = m ? "webp" : "png",
        l = m ? "webp" : "gif",
        o = a ? "png" : i ? l : s,
        c = m && i ? "&animated=true" : "",
        u = `size=${(0, d.kr)(r * (0, d.mZ)(), g)}`,
        E = !1;
    try {
        let { getForceSdrEmojisStickersConfig: e } = n(796272);
        E = e({ location: "getEmojiURL" }).enabled;
    } catch {}
    let A = E ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST)
        return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/emojis/${t}.${o}?${u}${c}${A}`;
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.EMOJI(t, o);
        return E ? `${e}?force_sdr=true` : e;
    }
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = n ? p : !n && null != i && i <= I ? h : f;
    if (null == e && null == t) return r[0];
    let s = (0, l.cG)(t, 0);
    return s > 0 ? r[s % 5] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0];
}
function C(e) {
    let { id: t, avatar: n, discriminator: r, bot: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m;
    if (a) {
        let e = null != n ? i.BOT_AVATARS[n] : void 0;
        if (e) return e;
        if (null == n && "0000" === r) return f[0];
    }
    return T({
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
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m;
    return C(e, t, n, i, r) ?? N(e.id, e.discriminator, e.isProvisional, n);
}
function R(e) {
    let t,
        { guildId: n, userId: i, avatar: r, canAnimate: a = !1, size: l = 128, canWebP: o = m } = e,
        c = a && V(r) ? Y(o) : "jpg",
        { CDN_HOST: u } = window.GLOBAL_ENV;
    null != u
        ? ("jpg" === c && (c = o ? "webp" : "png"), (t = `https://${u}${_.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c)}`))
        : (t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_MEMBER_AVATAR(n, i, r, c));
    let E = { size: (0, d.kr)(l * (0, d.mZ)()) };
    return ("webp" === c && a && V(r) && (E.animated = !0), (t += `?${s.As(E)}`));
}
function L(e) {
    let { userId: t, avatar: n, guildId: i } = e,
        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : R({ userId: t, avatar: n, guildId: i, canAnimate: r });
}
function y(e) {
    let t,
        { id: n, banner: i, canAnimate: r, size: a } = e;
    if (null == i) return;
    let l = window.GLOBAL_ENV.CDN_HOST,
        o = r && V(i) ? Y(m) : "png";
    t =
        null != l
            ? `https://${l}/banners/${n}/${i}.${o}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.USER_BANNER(n, i, o);
    let c = { size: (0, d.kr)(a * (0, d.mZ)()) };
    return ("webp" === o && r && V(i) && (c.animated = !0), (t += `?${s.As(c)}`));
}
function D(e) {
    let { avatarDecoration: t, size: i = 70, canAnimate: r = !1 } = e;
    if (null == t || (0, o.bS)(t)) return null;
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
    let { CDN_HOST: s, API_ENDPOINT: l } = window.GLOBAL_ENV,
        c = _.Rsh.AVATAR_DECORATION_PRESETS(a),
        u = new URL(null != s ? `https://${s}${c}` : `${location.protocol}${l}${c}`);
    return (
        u.searchParams.set("size", `${(0, d.kr)(i * (0, d.mZ)(), g)}`),
        u.searchParams.set("passthrough", `${r}`),
        u.toString()
    );
}
function b(e) {
    let t,
        { id: n, guildId: i, banner: r, canAnimate: a, size: l } = e;
    if (null == r || null == i) return;
    let o = window.GLOBAL_ENV.CDN_HOST,
        c = a && V(r) ? Y(m) : "png",
        u = _.Rsh.GUILD_MEMBER_BANNER(i, n, r, c);
    t = null != o ? `https://${o}${u}` : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + u;
    let E = { size: (0, d.kr)(l * (0, d.mZ)()) };
    return ("webp" === c && a && V(r) && (E.animated = !0), (t += `?${s.As(E)}`));
}
function v(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    (null == i && (i = window.screen.width * (0, d.mZ)()), (i = (0, d.kr)(i)));
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
    let a = (0, d.kr)(360 * (0, d.mZ)()),
        l = m ? "webp" : "jpg",
        o = r && V(i) ? Y(m) : l,
        c = window.GLOBAL_ENV.CDN_HOST;
    t =
        null != c
            ? `https://${c}/banners/${n}/${i}.${o}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_BANNER(n, i, o);
    let u = { size: a };
    return (
        "jpg" === o && (u.quality = "lossless"), "webp" === o && r && V(i) && (u.animated = !0), (t += `?${s.As(u)}`)
    );
}
function M(e) {
    let { id: t, homeHeader: n } = e;
    if (null == n) return null;
    let i = (0, d.kr)(1096 * (0, d.mZ)()),
        r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/home-headers/${t}/${n}.png`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_HOME_HEADER(t, n)) + `?size=${i}`
    );
}
function U(e) {
    let { id: t, splash: n, size: i } = e;
    if (null == n) return null;
    (null == i && (i = window.screen.width * (0, d.mZ)()), (i = (0, d.kr)(i)));
    let r = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != r
            ? `https://${r}/discovery-splashes/${t}/${n}.jpg`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.GUILD_DISCOVERY_SPLASH(t, n)) + `?size=${i}`
    );
}
function w(e) {
    let { id: t, icon: n, size: i, canAnimate: r = !1, lossless: a = !1 } = e;
    return T({
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
function G(e) {
    let { id: t, icon: n, size: i = 128, canAnimate: r = !1 } = e;
    return T({
        endpoint: _.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: i,
        canAnimate: r,
        canWebP: !1,
    });
}
function x(e) {
    let {
        id: t,
        icon: n,
        size: i = 128,
        bot: r,
        botIconFirst: a,
        fallbackAvatar: s = !0,
        keepAspectRatio: l,
        guildMember: o,
    } = e;
    if (r?.id != null && null != o && null != o.avatar) {
        let e = R({ userId: r.id, guildId: o.guildId, avatar: o.avatar, canAnimate: !1, size: i });
        if (null != e) return e;
    }
    if (null != r && a) {
        let e = C(r, !1, i);
        if (null != e) return e;
    }
    if (null != n)
        return W(n)
            ? n
            : T({
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
        let e = C(r, !1, i);
        if (null != e) return e;
    }
    if (s) return E;
}
function k(e) {
    let { id: t, hash: n, size: i = 128, keepAspectRatio: r = !1, format: a } = e;
    return T({
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
function F(e) {
    let { userId: t, assetId: n, assetHash: i, size: r, canAnimate: a = !0 } = e;
    return T({
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
        ? (x({ id: r, icon: n, size: a }) ?? i.DEFAULT_CHANNEL_ICON)
        : (T({
              endpoint: _.Rsh.CHANNEL_ICON,
              path: "channel-icons",
              id: t,
              hash: n,
              canAnimate: !1,
              size: a,
              canWebP: !1,
          }) ?? i.DEFAULT_GROUP_DM_AVATARS[u.default.extractTimestamp(t) % i.DEFAULT_GROUP_DM_AVATARS.length]);
}
function V(e) {
    return null != e && e.startsWith("a_");
}
function H(e) {
    return null != e && e.startsWith("v_");
}
function j(e) {
    return "number" == typeof e ? e : { uri: e ?? void 0 };
}
function W(e) {
    return null != e && A.test(e);
}
function Y(e) {
    return e ? "webp" : "gif";
}
n.d(
    t,
    {},
    {
        AE: N,
        Ay: {
            getUserAvatarURL: O,
            getDefaultAvatarURL: N,
            getGuildMemberAvatarURL: L,
            getGuildMemberAvatarURLSimple: R,
            getGuildMemberAvatarSource: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = L(e, n);
                return null != i ? j(i) : t.getAvatarSource(e.guildId, n);
            },
            getGuildMemberBannerURL: b,
            getUserBannerURL: y,
            getAvatarDecorationURL: D,
            hasAnimatedGuildIcon: function (e) {
                return V(e?.icon);
            },
            isAnimatedIconHash: V,
            getUserAvatarSource: (e, t, n) => j(O(e, t, n)),
            getGuildIconURL: w,
            getGuildSplashURL: v,
            getGuildSplashSource: function (e) {
                return j(v(e));
            },
            getGuildDiscoverySplashURL: U,
            getGuildDiscoverySplashSource: function (e) {
                return j(U(e));
            },
            getGuildBannerURL: P,
            getGuildHomeHeaderURL: M,
            getResourceChannelIconURL: function (e) {
                let { channelId: t, icon: n } = e;
                return null == n
                    ? null
                    : T({
                          endpoint: _.Rsh.GUILD_RESOURCE_CHANNELS_ICON,
                          path: "resource-channels",
                          id: t,
                          hash: n,
                          size: 128,
                          canAnimate: !0,
                          canWebP: !1,
                      });
            },
            getNewMemberActionIconURL: function (e) {
                let { channelId: t, icon: n } = e;
                return null == n
                    ? null
                    : T({
                          endpoint: _.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
                          path: "new-member-actions",
                          id: t,
                          hash: n,
                          size: 128,
                          canAnimate: !0,
                          canWebP: !1,
                      });
            },
            getGuildTemplateIconURL: G,
            getChannelIconURL: B,
            getEmojiURL: S,
            getApplicationIconURL: x,
            getGameAssetURL: k,
            getVideoFilterAssetURL: F,
            getGameAssetSource: (e) => j(k(e)),
            getGuildIconSource: (e) => j(w(e)),
            getGuildTemplateIconSource: (e) => j(G(e)),
            getGuildBannerSource(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return j(P(e, t));
            },
            getGuildHomeHeaderSource: (e) => j(M(e)),
            getChannelIconSource: (e) => j(B(e)),
            getApplicationIconSource: (e) => j(x(e)),
            makeSource: j,
            getAnimatableSourceWithFallback(e, t) {
                let n = t(e);
                if (!(0, c.m0)() || !e || "number" == typeof n) return n;
                {
                    let e = t(!1);
                    return "number" != typeof e && e.uri === n.uri ? e : [n, { ...e, isForceCached: !0 }];
                }
            },
        },
        Bo: F,
        F_: D,
        QB: m,
        V0: W,
        VI: V,
        _O: S,
        aq: A,
        ku: O,
        ns: b,
        o4: function (e) {
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
        },
        q6: H,
        s7: R,
        vI: f,
        xT: L,
        z: y,
    },
);

(n.d(t, { br: () => er, rL: () => Q, Ay: () => J, $9: () => en, l7: () => ei, tl: () => q, ts: () => et, st: () => x }),
    n(321073));
var i = n(492462),
    r = n(567243),
    a = n(179771),
    s = n(121401);
(n(380610), n(100392));
var l = n(842241);
n(346542);
var o = n(123677),
    d = n(227327),
    c = n(299091),
    u = n(257120),
    _ = n(167189),
    E = n(477450);
let A = n.n(E)().v4().source,
    h = RegExp(
        `(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${A}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"()\\[\\]<>]*)?`,
        "ig",
    ),
    I = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g,
    f = /[.,;:?'*_~|]+$/;
function p(e) {
    return e.replace(f, "");
}
var T = n(652215),
    m = n(758836);
let g = /^\/([a-zA-Z0-9-]+)$/,
    S = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    N = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    C = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    O = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    R = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    L = /^\/activities\/([0-9-]+)\/?$/,
    y = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    D = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))(?:\/([0-9]+)(?:\/([^\/]+))?)?\/?$/,
    v = /^\/channels\/([0-9]+)\/shop$/,
    b = /^\/quests\/([0-9-]+)\/?$/,
    M = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    P = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    U = /^\/users\/([0-9]+)\/?$/,
    w = /^\/oauth2\/authorize/,
    G = /^#itemSkuId=([0-9]+)$/,
    x = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    k = $(window.GLOBAL_ENV.INVITE_HOST),
    F = $(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    B = $(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${T.U2_}`),
    V = $(`//canary.${T.U2_}`),
    H = $(`//ptb.${T.U2_}`),
    j = $("discordapp.com"),
    W = $("discord.com"),
    Y = [
        u.A.escape(k.host ?? ""),
        u.A.escape(F.host ?? ""),
        u.A.escape(B.host ?? ""),
        u.A.escape(j.host ?? ""),
        u.A.escape(W.host ?? ""),
    ].filter(Boolean),
    K = RegExp(`((https?://[^ ]*)|^|\\s)(${Y.join("|")})`, "g");
function $(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function z(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function X(e, t) {
    if (!z(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function q(e) {
    return X(B, e) ?? X(V, e) ?? X(H, e) ?? X(j, e) ?? X(W, e);
}
function Z(e) {
    let t = ei(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = X(k, t),
        i = X(F, t),
        r = X(B, t) ?? X(V, t) ?? X(H, t) ?? X(j, t) ?? X(W, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function Q(e) {
    if (e.includes("\\")) {
        let t = ei(e);
        if (null == t) return !1;
        if (z(k, t)) return !0;
        if ([B, V, H, j, W].some((e) => z(e, t))) return t.pathname?.toUpperCase().includes(_.I.INVITE) ?? !1;
    }
    return !1;
}
function J(e) {
    let t;
    if (null == e) return [];
    let n =
            ((t = (e = e.replace(K, (e, t, n, i) => (null == n ? `${t}http://${i}` : e))).replaceAll(I, " ").match(h)),
            t?.map(p) ?? []),
        r = e.match(x);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let u of e) {
            let {
                url: e,
                inviteHostRemainingPath: E,
                templateHostRemainingPath: A,
                primaryHostRemainingPath: h,
            } = Z(u);
            if (null == e || null == e.pathname) continue;
            let I = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: u }));
            }
            if (E?.match(g) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, l.fB)(E.substring(1), e.search);
                if ((c.A.getInvite(t), u.includes("\\"))) continue;
                r(_.I.INVITE, t);
            }
            A?.match(g) != null && r(_.I.TEMPLATE, A.substring(1));
            let f = h?.match(N);
            if (null != f) {
                let t = f[1].toUpperCase();
                if (t === _.I.INVITE) {
                    if (u.includes("\\")) continue;
                    let t = (0, l.fB)(f[2], e.search);
                    r(_.I.INVITE, t);
                } else r(t, f[2]);
            }
            h?.match(S) != null && r(_.I.CHANNEL_LINK, h.replace("/channels/", ""));
            let p = (function (e) {
                if (null == e) return null;
                let t = e.match(C);
                if (null != t && t.length >= 4) {
                    let e = t[2];
                    return null == e ? null : { guildId: t[1], guildEventId: e, recurrenceId: t[4] };
                }
                return null;
            })(e.pathname);
            if (
                (null != p &&
                    r(
                        _.I.EVENT,
                        `${p.guildId}-${p.guildEventId}` + (null != p.recurrenceId ? `-${p.recurrenceId}` : ""),
                    ),
                null != h?.match(w) && null != I)
            ) {
                let e = (0, o._)(I),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(_.I.APP_OAUTH2_LINK, t);
            }
            let T = h?.match(O);
            if (null != T) {
                let e = T[2];
                r(_.I.APP_DIRECTORY_PROFILE, e);
            }
            let b = h?.match(R);
            if (null != b) {
                let e = b[2],
                    t = b[3];
                if (null != t) {
                    let n = (0, s.L)(e, t);
                    r(_.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(_.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let x = h?.match(L);
            if (null != x) {
                let e = x[1];
                r(_.I.ACTIVITY_BOOKMARK, e);
            }
            let k = h?.match(y);
            null != k && r(_.I.GUILD_PRODUCT, `${k[1]}-${k[2]}`);
            let F = h?.match(v);
            null != F && r(_.I.SERVER_SHOP, F[1]);
            let B = h?.match(D);
            if (null != B) {
                let e = B[1] ?? B[2],
                    t = ee(B[3], null != I ? (0, i.parse)(I) : null);
                t.length > 0 && r(_.I.SOCIAL_LAYER_STOREFRONT, (0, d.m5)(t, e));
            }
            let V = et(u);
            null != V && r(_.I.QUESTS_EMBED, V);
            let H = h?.match(P);
            null != H && r(_.I.GAME_PROFILE, H[1]);
            let j = h?.match(M);
            null != j && r(_.I.GAME_SERVER_SHARE, j[1]);
            let W = h?.match(U);
            if ((null != W && r(_.I.USER_PROFILE, W[1]), "/shop" === h)) {
                let t = null != I ? (0, i.parse)(I) : null,
                    n = t?.tab,
                    a = t?.applicationId,
                    s = n === m.G2.GAME_SHOPS && "string" == typeof a ? ee(t?.skuId, t) : [];
                if ("string" == typeof a && s.length > 0) r(_.I.SOCIAL_LAYER_STOREFRONT_APP, (0, d.m5)(s, a));
                else {
                    let t = e.hash?.match(G);
                    r(_.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((n = n.concat(r ?? []))).slice(0, 10);
}
function ee(e, t) {
    if ("string" == typeof e) return (0, d.Z_)([e]);
    let n = t?.skuIds;
    return "string" == typeof n
        ? (0, d.Z_)(n.split(","))
        : Array.isArray(n)
          ? (0, d.Z_)(n.flatMap((e) => ("string" == typeof e ? e.split(",") : [])))
          : [];
}
function et(e) {
    let t = Z(e),
        n = t?.primaryHostRemainingPath?.match(b);
    return n?.[1] ?? null;
}
function en(e) {
    let t = Z(e),
        n = t?.primaryHostRemainingPath?.match(M);
    return n?.[1] ?? null;
}
function ei(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function er(e) {
    return J(e)[0];
}

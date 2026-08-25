"use strict";
n.d(t, {
    iY: () => ee,
    br: () => ei,
    rL: () => X,
    Ay: () => Q,
    $9: () => et,
    l7: () => en,
    tl: () => Z,
    ts: () => J,
    st: () => G,
}),
    n(321073);
var i = n(492462),
    r = n(567243),
    a = n(179771),
    s = n(121401);
n(380610), n(100392);
var l = n(842241);
n(346542);
var o = n(123677),
    d = n(299091),
    c = n(257120),
    u = n(167189),
    _ = n(477450);
let E = n.n(_)().v4().source,
    A = RegExp(
        `(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${E}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"()\\[\\]<>]*)?`,
        "ig",
    ),
    h = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g,
    I = /[.,;:?'*_~|]+$/;
function f(e) {
    return e.replace(I, "");
}
var p = n(652215),
    T = n(758836);
let m = /^\/([a-zA-Z0-9-]+)$/,
    g = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    S = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    N = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    C = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    R = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    O = /^\/activities\/([0-9-]+)\/?$/,
    L = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    y = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    D = /^\/channels\/([0-9]+)\/shop$/,
    v = /^\/quests\/([0-9-]+)\/?$/,
    b = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    M = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    P = /^\/users\/([0-9]+)\/?$/,
    U = /^\/oauth2\/authorize/,
    w = /^#itemSkuId=([0-9]+)$/,
    G = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    x = K(window.GLOBAL_ENV.INVITE_HOST),
    k = K(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    F = K(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${p.U2_}`),
    V = K(`//canary.${p.U2_}`),
    B = K(`//ptb.${p.U2_}`),
    H = K("discordapp.com"),
    j = K("discord.com"),
    W = [
        c.A.escape(x.host ?? ""),
        c.A.escape(k.host ?? ""),
        c.A.escape(F.host ?? ""),
        c.A.escape(H.host ?? ""),
        c.A.escape(j.host ?? ""),
    ].filter(Boolean),
    Y = RegExp(`((https?://[^ ]*)|^|\\s)(${W.join("|")})`, "g");
function K(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function $(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function z(e, t) {
    if (!$(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function Z(e) {
    return z(F, e) ?? z(V, e) ?? z(B, e) ?? z(H, e) ?? z(j, e);
}
function q(e) {
    let t = en(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = z(x, t),
        i = z(k, t),
        r = z(F, t) ?? z(V, t) ?? z(B, t) ?? z(H, t) ?? z(j, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function X(e) {
    if (e.includes("\\")) {
        let t = en(e);
        if (null == t) return !1;
        if ($(x, t)) return !0;
        if ([F, V, B, H, j].some((e) => $(e, t))) return t.pathname?.toUpperCase().includes(u.I.INVITE) ?? !1;
    }
    return !1;
}
function Q(e) {
    let t;
    if (null == e) return [];
    let n =
            ((t = (e = e.replace(Y, (e, t, n, i) => (null == n ? `${t}http://${i}` : e))).replaceAll(h, " ").match(A)),
            t?.map(f) ?? []),
        r = e.match(G);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let c of e) {
            let {
                url: e,
                inviteHostRemainingPath: _,
                templateHostRemainingPath: E,
                primaryHostRemainingPath: A,
            } = q(c);
            if (null == e || null == e.pathname) continue;
            let h = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: c }));
            }
            if (_?.match(m) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, l.fB)(_.substring(1), e.search);
                if ((d.A.getInvite(t), c.includes("\\"))) continue;
                r(u.I.INVITE, t);
            }
            E?.match(m) != null && r(u.I.TEMPLATE, E.substring(1));
            let I = A?.match(S);
            if (null != I) {
                let t = I[1].toUpperCase();
                if (t === u.I.INVITE) {
                    if (c.includes("\\")) continue;
                    let t = (0, l.fB)(I[2], e.search);
                    r(u.I.INVITE, t);
                } else r(t, I[2]);
            }
            A?.match(g) != null && r(u.I.CHANNEL_LINK, A.replace("/channels/", ""));
            let f = (function (e) {
                if (null == e) return null;
                let t = e.match(N);
                if (null != t && t.length >= 4) {
                    let e = t[2];
                    return null == e ? null : { guildId: t[1], guildEventId: e, recurrenceId: t[4] };
                }
                return null;
            })(e.pathname);
            if (
                (null != f &&
                    r(
                        u.I.EVENT,
                        `${f.guildId}-${f.guildEventId}` + (null != f.recurrenceId ? `-${f.recurrenceId}` : ""),
                    ),
                null != A?.match(U) && null != h)
            ) {
                let e = (0, o._)(h),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(u.I.APP_OAUTH2_LINK, t);
            }
            let p = A?.match(C);
            if (null != p) {
                let e = p[2];
                r(u.I.APP_DIRECTORY_PROFILE, e);
            }
            let v = A?.match(R);
            if (null != v) {
                let e = v[2],
                    t = v[3];
                if (null != t) {
                    let n = (0, s.L)(e, t);
                    r(u.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(u.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let G = A?.match(O);
            if (null != G) {
                let e = G[1];
                r(u.I.ACTIVITY_BOOKMARK, e);
            }
            let x = A?.match(L);
            null != x && r(u.I.GUILD_PRODUCT, `${x[1]}-${x[2]}`);
            let k = A?.match(D);
            null != k && r(u.I.SERVER_SHOP, k[1]);
            let F = A?.match(y);
            null != F && r(u.I.SOCIAL_LAYER_STOREFRONT, `${F[3]}-${F[1] ?? F[2]}`);
            let V = J(c);
            null != V && r(u.I.QUESTS_EMBED, V);
            let B = A?.match(M);
            null != B && r(u.I.GAME_PROFILE, B[1]);
            let H = A?.match(b);
            null != H && r(u.I.GAME_SERVER_SHARE, H[1]);
            let j = A?.match(P);
            if ((null != j && r(u.I.USER_PROFILE, j[1]), "/shop" === A)) {
                let t = null != h ? (0, i.parse)(h) : null,
                    n = t?.tab;
                if (n === T.G2.GAME_SHOPS && t?.applicationId != null && t?.skuId != null) {
                    let e = t.applicationId,
                        n = t.skuId;
                    "string" == typeof e && "string" == typeof n && r(u.I.SOCIAL_LAYER_STOREFRONT_APP, `${n}-${e}`);
                } else {
                    let t = e.hash?.match(w);
                    r(u.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((n = n.concat(r ?? []))).slice(0, 10);
}
function J(e) {
    let t = q(e),
        n = t?.primaryHostRemainingPath?.match(v);
    return n?.[1] ?? null;
}
function ee(e) {
    let t = q(e),
        n = t?.primaryHostRemainingPath?.match(P);
    return n?.[1] ?? null;
}
function et(e) {
    let t = q(e),
        n = t?.primaryHostRemainingPath?.match(b);
    return n?.[1] ?? null;
}
function en(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function ei(e) {
    return Q(e)[0];
}

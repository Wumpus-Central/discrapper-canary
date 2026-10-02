(n.d(t, {
    F9: () => el,
    br: () => es,
    rL: () => ee,
    Ay: () => et,
    $9: () => er,
    l7: () => ea,
    tl: () => Q,
    ts: () => ei,
    st: () => F,
}),
    n(321073));
var i = n(492462),
    r = n(567243),
    a = n(179771),
    s = n(121401);
(n(380610), n(100392));
var l = n(842241);
n(346542);
var o = n(417964),
    d = n(123677),
    c = n(227327),
    u = n(299091),
    _ = n(257120),
    E = n(167189),
    A = n(477450);
let h = n.n(A)().v4().source,
    I = RegExp(
        `(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${h}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"()\\[\\]<>]*)?`,
        "ig",
    ),
    f = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g,
    p = /[.,;:?'*_~|]+$/;
function T(e) {
    return e.replace(p, "");
}
var g = n(652215),
    m = n(758836);
let S = /^\/([a-zA-Z0-9-]+)$/,
    N = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    C = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    O = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    R = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    L = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    y = /^\/activities\/([0-9-]+)\/?$/,
    D = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    v = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))(?:\/([0-9]+)(?:\/([^\/]+))?)?\/?$/,
    b = /^\/channels\/([0-9]+)\/shop$/,
    M = /^\/quests\/([0-9-]+)\/?$/,
    P = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    U = /^\/game-organizations\/invite\/([A-Za-z0-9_-]+)\/?$/,
    w = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    G = /^\/users\/([0-9]+)\/?$/,
    x = /^\/oauth2\/authorize/,
    k = /^#itemSkuId=([0-9]+)$/,
    F = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = X(window.GLOBAL_ENV.INVITE_HOST),
    V = X(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    H = X(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${g.U2_}`),
    j = X(`//canary.${g.U2_}`),
    W = X(`//ptb.${g.U2_}`),
    Y = X("discordapp.com"),
    K = X("discord.com"),
    $ = [
        _.A.escape(B.host ?? ""),
        _.A.escape(V.host ?? ""),
        _.A.escape(H.host ?? ""),
        _.A.escape(Y.host ?? ""),
        _.A.escape(K.host ?? ""),
    ].filter(Boolean),
    z = RegExp(`((https?://[^ ]*)|^|\\s)(${$.join("|")})`, "g");
function X(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.parse)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function Z(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function q(e, t) {
    if (!Z(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function Q(e) {
    return q(H, e) ?? q(j, e) ?? q(W, e) ?? q(Y, e) ?? q(K, e);
}
function J(e) {
    let t = ea(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = q(B, t),
        i = q(V, t),
        r = q(H, t) ?? q(j, t) ?? q(W, t) ?? q(Y, t) ?? q(K, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function ee(e) {
    if (e.includes("\\")) {
        let t = ea(e);
        if (null == t) return !1;
        if (Z(B, t)) return !0;
        if ([H, j, W, Y, K].some((e) => Z(e, t))) return t.pathname?.toUpperCase().includes(E.I.INVITE) ?? !1;
    }
    return !1;
}
function et(e) {
    let t;
    if (null == e) return [];
    let n =
            ((t = (e = e.replace(z, (e, t, n, i) => (null == n ? `${t}http://${i}` : e))).replaceAll(f, " ").match(I)),
            t?.map(T) ?? []),
        r = e.match(F);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let o of e) {
            let {
                url: e,
                inviteHostRemainingPath: _,
                templateHostRemainingPath: A,
                primaryHostRemainingPath: h,
            } = J(o);
            if (null == e || null == e.pathname) continue;
            let I = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: o }));
            }
            if (_?.match(S) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, l.fB)(_.substring(1), e.search);
                if ((u.A.getInvite(t), o.includes("\\"))) continue;
                r(E.I.INVITE, t);
            }
            A?.match(S) != null && r(E.I.TEMPLATE, A.substring(1));
            let f = h?.match(C);
            if (null != f) {
                let t = f[1].toUpperCase();
                if (t === E.I.INVITE) {
                    if (o.includes("\\")) continue;
                    let t = (0, l.fB)(f[2], e.search);
                    r(E.I.INVITE, t);
                } else r(t, f[2]);
            }
            h?.match(N) != null && r(E.I.CHANNEL_LINK, h.replace("/channels/", ""));
            let p = (function (e) {
                if (null == e) return null;
                let t = e.match(O);
                if (null != t && t.length >= 4) {
                    let e = t[2];
                    return null == e ? null : { guildId: t[1], guildEventId: e, recurrenceId: t[4] };
                }
                return null;
            })(e.pathname);
            if (
                (null != p &&
                    r(
                        E.I.EVENT,
                        `${p.guildId}-${p.guildEventId}` + (null != p.recurrenceId ? `-${p.recurrenceId}` : ""),
                    ),
                null != h?.match(x) && null != I)
            ) {
                let e = (0, d._)(I),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(E.I.APP_OAUTH2_LINK, t);
            }
            let T = h?.match(R);
            if (null != T) {
                let e = T[2];
                r(E.I.APP_DIRECTORY_PROFILE, e);
            }
            let g = h?.match(L);
            if (null != g) {
                let e = g[2],
                    t = g[3];
                if (null != t) {
                    let n = (0, s.L)(e, t);
                    r(E.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(E.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let M = h?.match(y);
            if (null != M) {
                let e = M[1];
                r(E.I.ACTIVITY_BOOKMARK, e);
            }
            let F = h?.match(D);
            null != F && r(E.I.GUILD_PRODUCT, `${F[1]}-${F[2]}`);
            let B = h?.match(b);
            null != B && r(E.I.SERVER_SHOP, B[1]);
            let V = h?.match(v);
            if (null != V) {
                let e = V[1] ?? V[2],
                    t = en(V[3], null != I ? (0, i.parse)(I) : null);
                t.length > 0 && r(E.I.SOCIAL_LAYER_STOREFRONT, (0, c.m5)(t, e));
            }
            let H = ei(o);
            null != H && r(E.I.QUESTS_EMBED, H);
            let j = h?.match(w);
            null != j && r(E.I.GAME_PROFILE, j[1]);
            let W = h?.match(P);
            null != W && r(E.I.GAME_SERVER_SHARE, W[1]);
            let Y = h?.match(U);
            null != Y && r(E.I.GAME_ORGANIZATION_INVITE, Y[1]);
            let K = h?.match(G);
            if ((null != K && r(E.I.USER_PROFILE, K[1]), "/shop" === h)) {
                let t = null != I ? (0, i.parse)(I) : null,
                    n = t?.tab,
                    a = t?.applicationId,
                    s = n === m.G2.GAME_SHOPS && "string" == typeof a ? en(t?.skuId, t) : [];
                if ("string" == typeof a && s.length > 0) r(E.I.SOCIAL_LAYER_STOREFRONT_APP, (0, c.m5)(s, a));
                else {
                    let t = e.hash?.match(k);
                    r(E.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((n = n.concat(r ?? []))).slice(0, 10);
}
function en(e, t) {
    if ("string" == typeof e) return (0, c.Z_)([e]);
    let n = t?.skuIds;
    return "string" == typeof n
        ? (0, c.Z_)(n.split(","))
        : Array.isArray(n)
          ? (0, c.Z_)(n.flatMap((e) => ("string" == typeof e ? e.split(",") : [])))
          : [];
}
function ei(e) {
    let t = J(e),
        n = t?.primaryHostRemainingPath?.match(M);
    return n?.[1] ?? null;
}
function er(e) {
    let t = J(e),
        n = t?.primaryHostRemainingPath?.match(P);
    return n?.[1] ?? null;
}
function ea(e) {
    try {
        return (0, r.parse)(e);
    } catch (e) {
        return null;
    }
}
function es(e) {
    return et(e)[0];
}
function el(e) {
    return null != e && et((0, o.El)(e)).length > 0;
}

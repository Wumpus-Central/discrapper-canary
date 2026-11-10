(n.d(t, {
    st: () => V,
    F9: () => ed,
    Ay: () => ei,
    br: () => eo,
    rL: () => en,
    $9: () => es,
    ts: () => ea,
    l7: () => el,
    tl: () => ee,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956));
var i = n(492462),
    r = n(567243),
    a = n(179771),
    s = n(121401);
n(380610);
var l = n(729160);
n(100392);
var o = n(21599);
n(346542);
var d = n(417964),
    c = n(123677),
    u = n(227327),
    _ = n(299091),
    E = n(257120),
    A = n(167189),
    f = n(477450);
let h = n.n(f)().v4().source,
    I = RegExp(
        `(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|${h}|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"()\\[\\]<>]*)?`,
        "ig",
    ),
    p = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g,
    m = /[.,;:?'*_~|]+$/;
function T(e) {
    return e.replace(m, "");
}
var g = n(652215),
    S = n(758836);
let N = /^\/([a-zA-Z0-9-]+)$/,
    C = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    O = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    R = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    L = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    y = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    D = /^\/activities\/([0-9-]+)\/?$/,
    b = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    v =
        /^(?:\/game-shop\/([0-9]+)(?:\/([0-9]+)(?:\/[^/]+)?)?|\/channels\/([0-9]+)\/game-shop(?:\/([0-9]+)(?:\/([0-9]+)(?:\/[^/]+)?)?)?)\/?$/,
    P = /^\/channels\/([0-9]+)\/shop$/,
    M = /^\/quests\/([0-9-]+)\/?$/,
    U = /^\/game-servers\/share\/([A-Za-z0-9_-]+)$/,
    w = /^\/game-organizations\/invite\/([A-Za-z0-9_-]+)\/?$/,
    G = /^\/games\/([0-9]+)(?:\/[A-Za-z0-9-]*)?\/?$/,
    x = /^\/users\/([0-9]+)\/?$/,
    k = "wishlist-";
RegExp(`^${k}([0-9]+)$`);
let F = /^\/oauth2\/authorize/,
    B = /^#itemSkuId=([0-9]+)$/,
    V = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    H = Q(window.GLOBAL_ENV.INVITE_HOST),
    j = Q(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    W = Q(window.GLOBAL_ENV.WEBAPP_ENDPOINT ?? `//canary.${g.U2_}`),
    Y = Q(`//canary.${g.U2_}`),
    K = Q(`//ptb.${g.U2_}`),
    $ = Q("discordapp.com"),
    X = Q("discord.com"),
    z = [
        E.A.escape(H.host ?? ""),
        E.A.escape(j.host ?? ""),
        E.A.escape(W.host ?? ""),
        E.A.escape($.host ?? ""),
        E.A.escape(X.host ?? ""),
    ].filter(Boolean),
    q = RegExp(`((https?://[^ ]*)|^|\\s)(${z.join("|")})`, "g");
function Q(e) {
    if (null == e) return { host: null, pathPrefix: null };
    if (e.indexOf("/") >= 0) {
        let t = (0, r.qg)(e, void 0, !0);
        return { host: t.host, pathPrefix: t.pathname };
    }
    return { host: e, pathPrefix: null };
}
function Z(e, t) {
    return t.host?.replace(/^www[.]/i, "") === e.host;
}
function J(e, t) {
    if (!Z(e, t)) return null;
    let n = t.pathname ?? "",
        i = e.pathPrefix ?? "";
    if (!n.startsWith(i)) return null;
    let r = n.substring(i.length);
    return "" === r ? null : r;
}
function ee(e) {
    return J(W, e) ?? J(Y, e) ?? J(K, e) ?? J($, e) ?? J(X, e);
}
function et(e) {
    let t = el(e);
    if (null == t || null == t.pathname)
        return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null,
        };
    let n = J(H, t),
        i = J(j, t),
        r = J(W, t) ?? J(Y, t) ?? J(K, t) ?? J($, t) ?? J(X, t);
    return { url: t, inviteHostRemainingPath: n, templateHostRemainingPath: i, primaryHostRemainingPath: r };
}
function en(e) {
    if (e.includes("\\")) {
        let t = el(e);
        if (null == t) return !1;
        if (Z(H, t)) return !0;
        if ([W, Y, K, $, X].some((e) => Z(e, t))) return t.pathname?.toUpperCase().includes(A.I.INVITE) ?? !1;
    }
    return !1;
}
function ei(e) {
    let t;
    if (null == e) return [];
    let n =
            ((t = (e = e.replace(q, (e, t, n, i) => (null == n ? `${t}http://${i}` : e))).replaceAll(p, " ").match(I)),
            t?.map(T) ?? []),
        r = e.match(V);
    return (function (e) {
        if (null == e || 0 === e.length) return [];
        let t = new Set(),
            n = [];
        for (let d of e) {
            let {
                url: e,
                inviteHostRemainingPath: E,
                templateHostRemainingPath: f,
                primaryHostRemainingPath: h,
            } = et(d);
            if (null == e || null == e.pathname) continue;
            let I = null != e.query && e.query.length <= 1e3 ? e.query : null;
            function r(e, i) {
                t.has(i) || (t.add(i), n.push({ type: e, code: i, url: d }));
            }
            if (E?.match(N) != null && ("https:" === e.protocol || "http:" === e.protocol)) {
                let t = (0, o.fB)(E.substring(1), e.search);
                if ((_.A.getInvite(t), d.includes("\\"))) continue;
                r(A.I.INVITE, t);
            }
            f?.match(N) != null && r(A.I.TEMPLATE, f.substring(1));
            let p = h?.match(O);
            if (null != p) {
                let t = p[1].toUpperCase();
                if (t === A.I.INVITE) {
                    if (d.includes("\\")) continue;
                    let t = (0, o.fB)(p[2], e.search);
                    r(A.I.INVITE, t);
                } else r(t, p[2]);
            }
            h?.match(C) != null && r(A.I.CHANNEL_LINK, h.replace("/channels/", ""));
            let m = (function (e) {
                if (null == e) return null;
                let t = e.match(R);
                if (null != t && t.length >= 4) {
                    let e = t[2];
                    return null == e ? null : { guildId: t[1], guildEventId: e, recurrenceId: t[4] };
                }
                return null;
            })(e.pathname);
            if (
                (null != m &&
                    r(
                        A.I.EVENT,
                        `${m.guildId}-${m.guildEventId}` + (null != m.recurrenceId ? `-${m.recurrenceId}` : ""),
                    ),
                null != h?.match(F) && null != I)
            ) {
                let e = (0, c._)(I),
                    t = e.clientId;
                null == t ||
                    "" === t ||
                    e.scopes?.some((e) => e !== a.F.APPLICATIONS_COMMANDS) ||
                    r(A.I.APP_OAUTH2_LINK, t);
            }
            let T = h?.match(L);
            if (null != T) {
                let e = T[2];
                r(A.I.APP_DIRECTORY_PROFILE, e);
            }
            let g = h?.match(y);
            if (null != g) {
                let e = g[2],
                    t = g[3];
                if (null != t) {
                    let n = (0, s.L)(e, t);
                    r(A.I.APP_DIRECTORY_STOREFRONT_SKU, n);
                } else r(A.I.APP_DIRECTORY_STOREFRONT, e);
            }
            let M = h?.match(D);
            if (null != M) {
                let e = M[1];
                r(A.I.ACTIVITY_BOOKMARK, e);
            }
            let V = h?.match(b);
            null != V && r(A.I.GUILD_PRODUCT, `${V[1]}-${V[2]}`);
            let H = h?.match(P);
            null != H && r(A.I.SERVER_SHOP, H[1]);
            let j = (function (e) {
                let { allowUnpagedChannelPath: t = !1 } =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e?.match(v);
                return null != n && (t || null == n[3] || null != n[4])
                    ? { guildId: n[1] ?? n[3], skuId: n[2] ?? n[5] }
                    : null;
            })(h);
            if (null != j) {
                let e = er(j.skuId, null != I ? (0, i.qg)(I) : null);
                e.length > 0 && r(A.I.SOCIAL_LAYER_STOREFRONT, (0, u.m5)(e, j.guildId));
            }
            let W = ea(d);
            null != W && r(A.I.QUESTS_EMBED, W);
            let Y = h?.match(G);
            null != Y && r(A.I.GAME_PROFILE, Y[1]);
            let K = h?.match(U);
            null != K && r(A.I.GAME_SERVER_SHARE, K[1]);
            let $ = h?.match(w);
            null != $ && r(A.I.GAME_ORGANIZATION_INVITE, $[1]);
            let X = h?.match(x);
            if (null != X) {
                let e = X[1],
                    t = null != I ? new URLSearchParams(I).getAll("tab") : [];
                1 === t.length && "wishlist" === t[0] ? r(A.I.USER_WISHLIST, `${k}${e}`) : r(A.I.USER_PROFILE, e);
            }
            let z = (0, l.tY)(e);
            if ((null != z && r(A.I.CONJURE_PROJECT, z.applicationId), "/shop" === h)) {
                let t = null != I ? (0, i.qg)(I) : null,
                    n = t?.tab,
                    a = t?.applicationId,
                    s = n === S.G2.GAME_SHOPS && "string" == typeof a ? er(t?.skuId, t) : [];
                if ("string" == typeof a && s.length > 0) r(A.I.SOCIAL_LAYER_STOREFRONT_APP, (0, u.m5)(s, a));
                else {
                    let t = e.hash?.match(B);
                    r(A.I.COLLECTIBLES_SHOP, `${n ?? ""}-${t?.[1] ?? ""}`);
                }
            }
        }
        return n;
    })((n = n.concat(r ?? []))).slice(0, 10);
}
function er(e, t) {
    if ("string" == typeof e) return (0, u.Z_)([e]);
    let n = t?.skuIds;
    return "string" == typeof n
        ? (0, u.Z_)(n.split(","))
        : Array.isArray(n)
          ? (0, u.Z_)(n.flatMap((e) => ("string" == typeof e ? e.split(",") : [])))
          : [];
}
function ea(e) {
    let t = et(e),
        n = t?.primaryHostRemainingPath?.match(M);
    return n?.[1] ?? null;
}
function es(e) {
    let t = et(e),
        n = t?.primaryHostRemainingPath?.match(U);
    return n?.[1] ?? null;
}
function el(e) {
    try {
        return (0, r.qg)(e);
    } catch (e) {
        return null;
    }
}
function eo(e) {
    return ei(e)[0];
}
function ed(e) {
    return null != e && ei((0, d.El)(e)).length > 0;
}

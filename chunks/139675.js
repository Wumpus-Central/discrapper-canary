"use strict";
n.d(t, { Di: () => S, RG: () => O, Y: () => C, uD: () => v }), n(323874), n(14289), n(35956);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(264782),
    l = n(626584),
    u = n(776231),
    c = n(652215);
let d = "mp",
    _ = 36e5,
    f = "https://i.scdn.co/image/",
    p = (e, t, n) => `https://static-cdn.jtvnw.net/previews-ttv/live_user_${e}-${t}x${n}.jpg`,
    h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    m = (e) => `https://i.ytimg.com/vi/${e}/hqdefault_live.jpg`,
    g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    E = {
        [c.fg2.SPOTIFY]: { deserialize: (e) => `${f}${encodeURIComponent(e)}`, serialize: (e) => e.split(f)[1] },
        [c.fg2.TWITCH]: {
            deserialize: (e, t) => p(encodeURIComponent(e), t[0], t[1]),
            serialize: (e) => {
                let t = e.match(h);
                return null != t ? t[1] : null;
            },
        },
        [c.fg2.YOUTUBE]: {
            deserialize: (e) => m(encodeURIComponent(e)),
            serialize: (e) => {
                let t = e.match(g);
                return null != t ? t[1] : null;
            },
        },
        [d]: {
            deserialize: (e) => {
                i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                let t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT),
                    n = e.toLowerCase().endsWith(".gif"),
                    r = e.toLowerCase().endsWith(".webp"),
                    a = e.toLowerCase().endsWith(".avif");
                return (
                    n && t.searchParams.set("format", "webp"),
                    (n || r || a) && t.searchParams.set("animated", "true"),
                    t.toString()
                );
            },
            serialize: (e) => e,
        },
    },
    A = {};
function I(e) {
    return Date.now() - e > _;
}
async function T(e) {
    let { body: t } = await a.Bo.get({ url: c.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return (
        s.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), o.A.getApplicationAssets(e)
    );
}
function y(e) {
    let t = o.A.getApplicationAssets(e);
    return null == t || I(t.lastUpdated) ? T(e) : Promise.resolve(t);
}
function S(e, t) {
    let n = E[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, r] = t.split(":");
        return e === c.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new l.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : E[c.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(E, e)
              ? E[e].deserialize(r)
              : void 0;
    }
    if (null == e || null == t) return;
    let i = Array.isArray(n) ? Math.max(...n) : n,
        s = "number" == typeof i ? `?size=${(0, u.kr)(i)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${s}`
        : `${(0, a.TP)()}/applications/${e}/app-assets/${t}.${r}${s}`;
}
async function C(e) {
    let t = await y(e);
    return t?.assets;
}
async function b(e, t) {
    let n = t.filter((e) => null != e && !Object.prototype.hasOwnProperty.call(A, e) && null == A[e]);
    if (0 === n.length) return;
    let { body: r } = await a.Bo.post({
        url: c.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of r) A[e] = t;
}
function N(e, t) {
    let n = 0;
    if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (null == i) continue;
            let a = Object.prototype.hasOwnProperty.call(A, i) ? A[i] : void 0;
            null != a && ((t[r] = S(d, a)), n++);
        }
    return n === e.length;
}
function R(e, t, n, r) {
    let i = !1;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        if (null == s || null != t[a]) continue;
        let o = Object.prototype.hasOwnProperty.call(n, s) && n[s];
        if (!o) {
            if (null == r || r <= 0) {
                t[a] = null;
                continue;
            }
            i = !0;
        }
        t[a] = o.id;
    }
    return i;
}
async function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let r = [],
        i = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if ((i.length > 0 && (await b(e, i)), N(t, r)))
        return s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r;
    let a = await C(e);
    return (s.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: a }), R(t, r, a, n))
        ? T(e).then(() => O(e, t, n - 1))
        : (s.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r);
}

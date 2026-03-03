"use strict";
n.d(t, { Di: () => y, RG: () => b, Y: () => N, uD: () => v }), n(323874), n(14289), n(35956);
var r = n(284009),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
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
    E = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    g = {
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
                let t = e.match(E);
                return null != t ? t[1] : null;
            },
        },
        [d]: {
            deserialize: (e) => {
                i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                let t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT),
                    n = e.toLowerCase().endsWith(".gif"),
                    r = e.toLowerCase().endsWith(".webp"),
                    s = e.toLowerCase().endsWith(".avif");
                return (
                    n && t.searchParams.set("format", "webp"),
                    (n || r || s) && t.searchParams.set("animated", "true"),
                    t.toString()
                );
            },
            serialize: (e) => e,
        },
    },
    A = new Map();
function I(e) {
    return Date.now() - e > _;
}
async function T(e) {
    let { body: t } = await s.Bo.get({ url: c.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return (
        a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), o.A.getApplicationAssets(e)
    );
}
function S(e) {
    let t = o.A.getApplicationAssets(e);
    return null == t || I(t.lastUpdated) ? T(e) : Promise.resolve(t);
}
function y(e, t) {
    let n = g[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, r] = t.split(":");
        return e === c.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new l.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : g[c.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(g, e)
              ? g[e].deserialize(r)
              : void 0;
    }
    if (null == e || null == t) return;
    let i = Array.isArray(n) ? Math.max(...n) : n,
        a = "number" == typeof i ? `?size=${(0, u.kr)(i)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${a}`
        : `${(0, s.TP)()}/applications/${e}/app-assets/${t}.${r}${a}`;
}
async function N(e) {
    let t = await S(e);
    return t?.assets;
}
async function C(e, t) {
    let n = t.filter((e) => null != e && null == A.get(e));
    if (0 === n.length) return;
    let { body: r } = await s.Bo.post({
        url: c.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of r) A.set(e, t);
}
function R(e, t) {
    let n = 0;
    if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
        for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (null == i) continue;
            let s = A.get(i);
            null != s && ((t[r] = y(d, s)), n++);
        }
    return n === e.length;
}
function O(e, t, n, r) {
    let i = !1;
    for (let s = 0; s < e.length; s++) {
        let a = e[s];
        if (null == a || null != t[s]) continue;
        let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
        if (!o) {
            if (null == r || r <= 0) {
                t[s] = null;
                continue;
            }
            i = !0;
        }
        t[s] = o.id;
    }
    return i;
}
async function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let r = [],
        i = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if ((i.length > 0 && (await C(e, i)), R(t, r)))
        return a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r;
    let s = await N(e);
    return (a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: s }), O(t, r, s, n))
        ? T(e).then(() => b(e, t, n - 1))
        : (a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r);
}

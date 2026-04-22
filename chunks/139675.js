"use strict";
n.d(t, { Di: () => m, RG: () => T, Y: () => A, uD: () => g }), n(323874), n(14289), n(35956);
var r = n(284009),
    i = n.n(r),
    s = n(562465),
    a = n(73153),
    o = n(264782),
    l = n(626584),
    u = n(776231),
    d = n(652215);
let c = "https://i.scdn.co/image/",
    _ = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
    f = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
    E = {
        [d.fg2.SPOTIFY]: { deserialize: (e) => `${c}${encodeURIComponent(e)}`, serialize: (e) => e.split(c)[1] },
        [d.fg2.TWITCH]: {
            deserialize: (e, t) => {
                let n, r, i;
                return (
                    (n = encodeURIComponent(e)),
                    (r = t[0]),
                    (i = t[1]),
                    `https://static-cdn.jtvnw.net/previews-ttv/live_user_${n}-${r}x${i}.jpg`
                );
            },
            serialize: (e) => {
                let t = e.match(_);
                return null != t ? t[1] : null;
            },
        },
        [d.fg2.YOUTUBE]: {
            deserialize: (e) => {
                let t;
                return (t = encodeURIComponent(e)), `https://i.ytimg.com/vi/${t}/hqdefault_live.jpg`;
            },
            serialize: (e) => {
                let t = e.match(f);
                return null != t ? t[1] : null;
            },
        },
        mp: {
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
    h = new Map();
async function p(e) {
    let { body: t } = await s.Bo.get({ url: d.Rsh.APPLICATION_ASSETS(e), oldFormErrors: !0, rejectWithError: !1 });
    return (
        a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: t }), o.A.getApplicationAssets(e)
    );
}
function m(e, t) {
    let n = E[e].serialize(t);
    return n ? `${e}:${n.toString()}` : null;
}
function g(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "png";
    if (null != t && t.includes(":")) {
        let [e, r] = t.split(":");
        return e === d.fg2.TWITCH
            ? null == n || "number" == typeof n
                ? void new l.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch")
                : E[d.fg2.TWITCH].deserialize(r, n)
            : Object.prototype.hasOwnProperty.call(E, e)
              ? E[e].deserialize(r)
              : void 0;
    }
    if (null == e || null == t) return;
    let i = Array.isArray(n) ? Math.max(...n) : n,
        a = "number" == typeof i ? `?size=${(0, u.kr)(i)}` : "";
    return null != window.GLOBAL_ENV.CDN_HOST
        ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t}.${r}${a}`
        : `${(0, s.TP)()}/applications/${e}/app-assets/${t}.${r}${a}`;
}
async function A(e) {
    var t;
    let n,
        r = await (null == (n = o.A.getApplicationAssets(e)) || ((t = n.lastUpdated), Date.now() - t > 36e5)
            ? p(e)
            : Promise.resolve(n));
    return r?.assets;
}
async function I(e, t) {
    let n = t.filter((e) => null != e && null == h.get(e));
    if (0 === n.length) return;
    let { body: r } = await s.Bo.post({
        url: d.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
        body: { urls: n },
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    for (let { url: e, external_asset_path: t } of r) h.set(e, t);
}
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH", applicationId: e });
    let r = [],
        i = t.filter((e) => e?.startsWith("http:") || e?.startsWith("https:"));
    if (
        (i.length > 0 && (await I(e, i)),
        (function (e, t) {
            let n = 0;
            if (e.filter((e) => e?.startsWith("http:") || e?.startsWith("https:")).length > 0)
                for (let r = 0; r < e.length; r++) {
                    let i = e[r];
                    if (null == i) continue;
                    let s = h.get(i);
                    null != s && ((t[r] = m("mp", s)), n++);
                }
            return n === e.length;
        })(t, r))
    )
        return a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r;
    let s = await A(e);
    return (a.h.dispatch({ type: "APPLICATION_ASSETS_UPDATE", applicationId: e, assets: s }),
    (function (e, t, n, r) {
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
    })(t, r, s, n))
        ? p(e).then(() => T(e, t, n - 1))
        : (a.h.dispatch({ type: "APPLICATION_ASSETS_FETCH_SUCCESS", applicationId: e }), r);
}

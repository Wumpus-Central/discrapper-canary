"use strict";
n.d(t, { AE: () => N, mZ: () => _.A, LE: () => m, yt: () => g, kr: () => S });
var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a),
    l = n(488428),
    o = n(158390),
    d = n(515718),
    c = n(209489),
    u = n(998218),
    _ = n(835517);
let E = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
var A = n(652215);
let h = /\.webp($|\?|#)/i,
    I = /\.avif($|\?|#)/i,
    f = [
        16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640,
        1024, 1280, 1536, 2048, 3072, 4096,
    ],
    p = new (s())({ max: 1e3 });
function T(e, t, n) {
    let { callbacks: i, url: r } = t;
    if (e) p.del(r);
    else {
        let { width: e, height: i } = n;
        (t = { url: r, loaded: !0, width: e, height: i }), p.set(r, t);
    }
    null != i && i.forEach((n) => n(e, t));
}
function m(e) {
    let t = p.get(e);
    return null != t && t.loaded;
}
function g(e, t) {
    let n = p.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                c.A.awaitOnline().then(() => {
                    null != n &&
                        null != n.callbacks &&
                        n.callbacks.forEach((t) => {
                            null != n ? t(!1, n) : t(!0, { url: e, loaded: !0 });
                        });
                }),
            A.tEg
        );
    {
        let i;
        return (
            null == n &&
                ((n = { url: e, loaded: !1 }),
                p.set(e, n),
                (function e(t) {
                    let n = new Image();
                    (n.onerror = (function (t, n) {
                        null == t.backoff && (t.backoff = new o.A());
                        let { backoff: i } = t;
                        return async () => {
                            await c.A.isOnline(),
                                i.fails < 5
                                    ? i.fail(() => {
                                          e(t);
                                      })
                                    : T(!0, t, n);
                        };
                    })(t, n)),
                        (n.onload = () => {
                            let { backoff: e } = t;
                            null != e && e.succeed(), T(!1, t, n);
                        }),
                        (n.src = t.url);
                })(n)),
            null != t && ((i = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(i)),
            () => {
                null != i &&
                    null != n &&
                    (null != n.callbacks && n.callbacks.delete(i), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
        let t = f.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return f.find((t) => e <= t) ?? f[f.length - 1];
}
function N(e) {
    let {
            src: t,
            width: i,
            height: a,
            maxWidth: s,
            maxHeight: o,
            ratio: c = 1,
            format: f = null,
            quality: p = null,
            animated: T = !1,
            srcIsAnimated: m = !1,
        } = e,
        g = i,
        S = a;
    c < 1 && ((g = Math.round(i * c)), (S = Math.round(a * c))),
        null != s && (g = Math.min(g, s)),
        null != o && (S = Math.min(S, o));
    let N = (0, _.A)();
    return (function (e) {
        let {
            src: t,
            sourceWidth: i,
            sourceHeight: a,
            targetWidth: s,
            targetHeight: o,
            format: c = null,
            quality: _ = null,
            animated: f = !1,
            srcIsAnimated: p = !1,
        } = e;
        if (t.startsWith("data:image") || u.A.isDiscordCdnUrl(t)) return t;
        let [T, m] = (function (e) {
            let [t, n] = e.split("?");
            return [t, l.parse(n)];
        })(t);
        null != c && (m.format = c),
            null != _ && (m.quality = _),
            f && p && (h.test(t) || I.test(t)) && (m.animated = !0),
            I.test(t) && (m.format = "webp");
        let g = (0, d.Uj)({ width: s, height: o, maxWidth: A.uJv, maxHeight: A.uJv });
        if (((s = g.width), (o = g.height), s !== i || o !== a)) {
            let e = !(function (e) {
                try {
                    let { getAttachmentImageLadderConfig: t } = n(502571);
                    return !0 === t({ location: e }).enabled;
                } catch {
                    return !1;
                }
            })("ImageLoaderUtils.getSrcWithWidthAndHeight")
                ? { width: s, height: o }
                : (function (e) {
                      let { targetWidth: t, targetHeight: n, sourceWidth: i, sourceHeight: r, maxUpscale: a } = e,
                          s = Math.max(t, n);
                      if (s <= 0) return { width: t, height: n };
                      let l = E.find((e) => s <= e) ?? E[E.length - 1];
                      if (null != a && a > 1) {
                          let e;
                          for (let t of E)
                              if (t <= s) e = t;
                              else break;
                          null != e && s <= e * a && (l = e);
                      }
                      if (null != i && null != r && Math.max(i, r) <= l) return { width: i, height: r };
                      let o = l / s,
                          d = Math.max(1, Math.round(t * o)),
                          c = Math.max(1, Math.round(n * o));
                      return { width: null != i ? Math.min(d, i) : d, height: null != r ? Math.min(c, r) : c };
                  })({ targetWidth: s, targetHeight: o, sourceWidth: i, sourceHeight: a, maxUpscale: 1.1 });
            (e.width !== i || e.height !== a) && ((m.width = 0 | e.width), (m.height = 0 | e.height));
        }
        return r().isEmpty(m) || (T += "?" + l.stringify(m)), T;
    })({
        src: t,
        sourceWidth: i,
        sourceHeight: a,
        targetWidth: (g *= N),
        targetHeight: (S *= N),
        format: f,
        quality: p,
        animated: T,
        srcIsAnimated: m,
    });
}

"use strict";
n.d(t, { AE: () => N, LE: () => m, kr: () => S, mZ: () => _.A, yt: () => g });
var i = n(435558),
    r = n.n(i),
    a = n(635377),
    s = n.n(a),
    l = n(488428),
    o = n(158390),
    d = n(515718),
    c = n(209489),
    u = n(998218),
    _ = n(835517),
    E = n(459830),
    A = n(652215);
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
            quality: f = null,
            animated: p = !1,
            srcIsAnimated: T = !1,
        } = e;
        if (t.startsWith("data:image") || u.A.isDiscordCdnUrl(t)) return t;
        let [m, g] = (function (e) {
            let [t, n] = e.split("?");
            return [t, l.parse(n)];
        })(t);
        null != c && (g.format = c),
            null != f && (g.quality = f),
            p && T && (h.test(t) || I.test(t)) && (g.animated = !0),
            I.test(t) && (g.format = "webp");
        let S = (0, d.Uj)({ width: s, height: o, maxWidth: A.uJv, maxHeight: A.uJv });
        if (((s = S.width), (o = S.height), s !== i || o !== a)) {
            let e = (function (e) {
                    try {
                        let { getAttachmentImageLadderConfig: t } = n(502571),
                            i = t({ location: e });
                        return !0 === i.enabled ? i : null;
                    } catch {
                        return null;
                    }
                })("ImageLoaderUtils.getSrcWithWidthAndHeight"),
                t = { width: s, height: o };
            null != e &&
                (t = (0, E.v7)({
                    targetWidth: s,
                    targetHeight: o,
                    sourceWidth: i,
                    sourceHeight: a,
                    maxUpscale: (0, E.iE)(e, (0, _.A)()),
                })),
                (t.width !== i || t.height !== a) && ((g.width = 0 | t.width), (g.height = 0 | t.height));
        }
        return r().isEmpty(g) || (m += "?" + l.stringify(g)), m;
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

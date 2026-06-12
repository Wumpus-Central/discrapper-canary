"use strict";
n.d(t, { AE: () => S, LE: () => A, kr: () => T, mZ: () => _.A, yt: () => I });
var i = n(735438),
    r = n.n(i),
    s = n(635377),
    a = n.n(s),
    o = n(488428),
    l = n(158390),
    u = n(515718),
    c = n(209489),
    d = n(998218),
    _ = n(835517),
    h = n(652215);
let f = /\.webp($|\?|#)/i,
    p = /\.avif($|\?|#)/i,
    E = [
        16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640,
        1024, 1280, 1536, 2048, 3072, 4096,
    ],
    m = new (a())({ max: 1e3 });
function g(e, t, n) {
    let { callbacks: i, url: r } = t;
    if (e) m.del(r);
    else {
        let { width: e, height: i } = n;
        (t = { url: r, loaded: !0, width: e, height: i }), m.set(r, t);
    }
    null != i && i.forEach((n) => n(e, t));
}
function A(e) {
    let t = m.get(e);
    return null != t && t.loaded;
}
function I(e, t) {
    let n = m.get(e);
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
            h.tEg
        );
    {
        let i;
        return (
            null == n &&
                ((n = { url: e, loaded: !1 }),
                m.set(e, n),
                (function e(t) {
                    let n = new Image();
                    (n.onerror = (function (t, n) {
                        null == t.backoff && (t.backoff = new l.A());
                        let { backoff: i } = t;
                        return async () => {
                            await c.A.isOnline(),
                                i.fails < 5
                                    ? i.fail(() => {
                                          e(t);
                                      })
                                    : g(!0, t, n);
                        };
                    })(t, n)),
                        (n.onload = () => {
                            let { backoff: e } = t;
                            null != e && e.succeed(), g(!1, t, n);
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
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
        let t = E.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return E.find((t) => e <= t) ?? E[E.length - 1];
}
function S(e) {
    let {
            src: t,
            width: n,
            height: i,
            maxWidth: s,
            maxHeight: a,
            ratio: l = 1,
            format: c = null,
            quality: E = null,
            animated: m = !1,
            srcIsAnimated: g = !1,
        } = e,
        A = n,
        I = i;
    l < 1 && ((A = Math.round(n * l)), (I = Math.round(i * l))),
        null != s && (A = Math.min(A, s)),
        null != a && (I = Math.min(I, a));
    let T = (0, _.A)();
    return (function (e) {
        let {
            src: t,
            sourceWidth: n,
            sourceHeight: i,
            targetWidth: s,
            targetHeight: a,
            format: l = null,
            quality: c = null,
            animated: _ = !1,
            srcIsAnimated: E = !1,
        } = e;
        if (t.startsWith("data:image") || d.A.isDiscordCdnUrl(t)) return t;
        let [m, g] = (function (e) {
            let [t, n] = e.split("?");
            return [t, o.parse(n)];
        })(t);
        null != l && (g.format = l),
            null != c && (g.quality = c),
            _ && E && (f.test(t) || p.test(t)) && (g.animated = !0),
            p.test(t) && (g.format = "webp");
        let A = (0, u.Uj)({ width: s, height: a, maxWidth: h.uJv, maxHeight: h.uJv });
        return (
            (s = A.width),
            (a = A.height),
            (s !== n || a !== i) && ((g.width = 0 | s), (g.height = 0 | a)),
            r().isEmpty(g) || (m += "?" + o.stringify(g)),
            m
        );
    })({
        src: t,
        sourceWidth: n,
        sourceHeight: i,
        targetWidth: (A *= T),
        targetHeight: (I *= T),
        format: c,
        quality: E,
        animated: m,
        srcIsAnimated: g,
    });
}

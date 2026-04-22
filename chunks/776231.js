"use strict";
n.d(t, { AE: () => S, LE: () => A, kr: () => T, mZ: () => _.A, yt: () => I });
var r = n(735438),
    i = n.n(r),
    s = n(635377),
    a = n.n(s),
    o = n(488428),
    l = n(158390),
    u = n(515718),
    d = n(209489),
    c = n(998218),
    _ = n(835517),
    f = n(652215);
let E = /\.webp($|\?|#)/i,
    h = /\.avif($|\?|#)/i,
    p = [
        16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640,
        1024, 1280, 1536, 2048, 3072, 4096,
    ],
    m = new (a())({ max: 1e3 });
function g(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) m.del(i);
    else {
        let { width: e, height: r } = n;
        (t = { url: i, loaded: !0, width: e, height: r }), m.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
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
                d.A.awaitOnline().then(() => {
                    null != n &&
                        null != n.callbacks &&
                        n.callbacks.forEach((t) => {
                            null != n ? t(!1, n) : t(!0, { url: e, loaded: !0 });
                        });
                }),
            f.tEg
        );
    {
        let r;
        return (
            null == n &&
                ((n = { url: e, loaded: !1 }),
                m.set(e, n),
                (function e(t) {
                    let n = new Image();
                    (n.onerror = (function (t, n) {
                        null == t.backoff && (t.backoff = new l.A());
                        let { backoff: r } = t;
                        return async () => {
                            await d.A.isOnline(),
                                r.fails < 5
                                    ? r.fail(() => {
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
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r &&
                    null != n &&
                    (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
        let t = p.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return p.find((t) => e <= t) ?? p[p.length - 1];
}
function S(e) {
    let {
            src: t,
            width: n,
            height: r,
            maxWidth: s,
            maxHeight: a,
            ratio: l = 1,
            format: d = null,
            quality: p = null,
            animated: m = !1,
            srcIsAnimated: g = !1,
        } = e,
        A = n,
        I = r;
    l < 1 && ((A = Math.round(n * l)), (I = Math.round(r * l))),
        null != s && (A = Math.min(A, s)),
        null != a && (I = Math.min(I, a));
    let T = (0, _.A)();
    return (function (e) {
        let {
            src: t,
            sourceWidth: n,
            sourceHeight: r,
            targetWidth: s,
            targetHeight: a,
            format: l = null,
            quality: d = null,
            animated: _ = !1,
            srcIsAnimated: p = !1,
        } = e;
        if (t.startsWith("data:image") || c.A.isDiscordCdnUrl(t)) return t;
        let [m, g] = (function (e) {
            let [t, n] = e.split("?");
            return [t, o.parse(n)];
        })(t);
        null != l && (g.format = l),
            null != d && (g.quality = d),
            _ && p && (E.test(t) || h.test(t)) && (g.animated = !0),
            h.test(t) && (g.format = "webp");
        let A = (0, u.Uj)({ width: s, height: a, maxWidth: f.uJv, maxHeight: f.uJv });
        return (
            (s = A.width),
            (a = A.height),
            (s !== n || a !== r) && ((g.width = 0 | s), (g.height = 0 | a)),
            i().isEmpty(g) || (m += "?" + o.stringify(g)),
            m
        );
    })({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: (A *= T),
        targetHeight: (I *= T),
        format: d,
        quality: p,
        animated: m,
        srcIsAnimated: g,
    });
}

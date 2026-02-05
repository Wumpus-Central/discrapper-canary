"use strict";
n.d(t, { AE: () => N, LE: () => y, kr: () => v, mZ: () => _.A, yt: () => S });
var r = n(735438),
    i = n.n(r),
    a = n(635377),
    s = n.n(a),
    o = n(488428),
    l = n(158390),
    u = n(515718),
    c = n(209489),
    d = n(998218),
    _ = n(835517),
    f = n(652215);
let p = 5,
    h = /\.webp($|\?|#)/i,
    m = /\.avif($|\?|#)/i,
    g = [
        16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640,
        1024, 1280, 1536, 2048, 3072, 4096,
    ],
    E = new (s())({ max: 1e3 });
function A(e, t) {
    null == e.backoff && (e.backoff = new l.A());
    let { backoff: n } = e;
    return async () => {
        await c.A.isOnline(),
            n.fails < p
                ? n.fail(() => {
                      I(e);
                  })
                : T(!0, e, t);
    };
}
function I(e) {
    let t = new Image();
    (t.onerror = A(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), T(!1, e, t);
        }),
        (t.src = e.url);
}
function T(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) E.del(i);
    else {
        let { width: e, height: r } = n;
        (t = { url: i, loaded: !0, width: e, height: r }), E.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function y(e) {
    let t = E.get(e);
    return null != t && t.loaded;
}
function S(e, t) {
    let n = E.get(e);
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
            f.tEg
        );
    {
        let r;
        return (
            null == n && ((n = { url: e, loaded: !1 }), E.set(e, n), I(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r &&
                    null != n &&
                    (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (t) {
        let t = g.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return g.find((t) => e <= t) ?? g[g.length - 1];
}
function C(e) {
    let [t, n] = e.split("?");
    return [t, o.parse(n)];
}
function b(e) {
    let {
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: a,
        targetHeight: s,
        format: l = null,
        quality: c = null,
        animated: _ = !1,
        srcIsAnimated: p = !1,
    } = e;
    if (t.startsWith("data:image") || d.A.isDiscordCdnUrl(t)) return t;
    let [g, E] = C(t);
    null != l && (E.format = l),
        null != c && (E.quality = c),
        _ && p && (h.test(t) || m.test(t)) && (E.animated = !0),
        m.test(t) && (E.format = "webp");
    let A = (0, u.Uj)({ width: a, height: s, maxWidth: f.uJv, maxHeight: f.uJv });
    return (
        (a = A.width),
        (s = A.height),
        (a !== n || s !== r) && ((E.width = 0 | a), (E.height = 0 | s)),
        i().isEmpty(E) || (g += "?" + o.stringify(E)),
        g
    );
}
function N(e) {
    let {
            src: t,
            width: n,
            height: r,
            maxWidth: i,
            maxHeight: a,
            ratio: s = 1,
            format: o = null,
            quality: l = null,
            animated: u = !1,
            srcIsAnimated: c = !1,
        } = e,
        d = n,
        f = r;
    s < 1 && ((d = Math.round(n * s)), (f = Math.round(r * s))),
        null != i && (d = Math.min(d, i)),
        null != a && (f = Math.min(f, a));
    let p = (0, _.A)();
    return b({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: (d *= p),
        targetHeight: (f *= p),
        format: o,
        quality: l,
        animated: u,
        srcIsAnimated: c,
    });
}

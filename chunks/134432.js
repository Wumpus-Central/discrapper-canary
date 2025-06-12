n.d(t, {
    Q4: () => R,
    Vv: () => T,
    oO: () => A,
    po: () => S,
    x_: () => _.Z
}),
    n(388685),
    n(35282);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    o = n.n(a),
    s = n(664751),
    l = n(261470),
    c = n(956664),
    u = n(931619),
    d = n(591759),
    _ = n(921948),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
let m = 5,
    g = /\.webp($|\?|#)/i,
    E = /\.avif($|\?|#)/i,
    b = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    y = new (o())({ max: 1000 });
function O(e, t) {
    null == e.backoff && (e.backoff = new l.Z());
    let { backoff: n } = e;
    return async () => {
        await u.Z.isOnline(),
            n.fails < m
                ? n.fail(() => {
                      v(e);
                  })
                : I(!0, e, t);
    };
}
function v(e) {
    let t = new Image();
    (t.onerror = O(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), I(!1, e, t);
        }),
        (t.src = e.url);
}
function I(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) y.del(i);
    else {
        let { width: e, height: r } = n;
        (t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }),
            y.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function T(e) {
    let t = y.get(e);
    return null != t && t.loaded;
}
function S(e, t) {
    let n = y.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                u.Z.awaitOnline().then(() => {
                    null != n &&
                        null != n.callbacks &&
                        n.callbacks.forEach((t) => {
                            null != n
                                ? t(!1, n)
                                : t(!0, {
                                      url: e,
                                      loaded: !0
                                  });
                        });
                }),
            f.dG4
        );
    {
        let r;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                y.set(e, n),
                v(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function A(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = b.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null != (t = b.find((t) => e <= t)) ? t : b[b.length - 1];
}
function N(e) {
    let [t, n] = e.split('?');
    return [t, s.parse(n)];
}
function C(e) {
    let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: a, targetHeight: o, format: l = null, quality: u = null, animated: _ = !1, srcIsAnimated: p = !1 } = e;
    if (t.startsWith('data:image') || d.Z.isDiscordCdnUrl(t)) return t;
    let [h, m] = N(t);
    null != l && (m.format = l), null != u && (m.quality = u), _ && p && (g.test(t) || E.test(t)) && (m.animated = !0), E.test(t) && (m.format = 'webp');
    let b = (0, c.Tj)({
        width: a,
        height: o,
        maxWidth: f.hiG,
        maxHeight: f.hiG
    });
    return (a = b.width), (o = b.height), (a !== n || o !== r) && ((m.width = 0 | a), (m.height = 0 | o)), i().isEmpty(m) || (h += '?' + s.stringify(m)), h;
}
function R(e) {
    let { src: t, width: n, height: r, maxWidth: i, maxHeight: a, ratio: o = 1, format: s = null, quality: l = null, animated: c = !1, srcIsAnimated: u = !1 } = e,
        d = n,
        f = r;
    o < 1 && ((d = Math.round(n * o)), (f = Math.round(r * o))), null != i && (d = Math.min(d, i)), null != a && (f = Math.min(f, a));
    let p = (0, _.Z)();
    return C({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: (d *= p),
        targetHeight: (f *= p),
        format: s,
        quality: l,
        animated: c,
        srcIsAnimated: u
    });
}

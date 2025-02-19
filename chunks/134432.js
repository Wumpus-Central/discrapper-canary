n.d(t, {
    Q4: () => A,
    Vv: () => O,
    oO: () => I,
    po: () => S,
    x_: () => u.Z
}),
    n(47120),
    n(301563);
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o),
    s = n(664751),
    l = n(261470),
    c = n(931619),
    u = n(921948),
    d = n(981631);
function f(e, t, n) {
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
function p(e, t) {
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
let _ = 5,
    h = /\.webp($|\?|#)/i,
    m = /\.avif($|\?|#)/i,
    g = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    E = new (a())({ max: 1000 });
function v(e, t) {
    null == e.backoff && (e.backoff = new l.Z());
    let { backoff: n } = e;
    return async () => {
        await c.Z.isOnline(),
            n.fails < _
                ? n.fail(() => {
                      b(e);
                  })
                : y(!0, e, t);
    };
}
function b(e) {
    let t = new Image();
    (t.onerror = v(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), y(!1, e, t);
        }),
        (t.src = e.url);
}
function y(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) E.del(i);
    else {
        let { width: e, height: r } = n;
        (t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }),
            E.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function O(e) {
    let t = E.get(e);
    return null != t && t.loaded;
}
function S(e, t) {
    let n = E.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                c.Z.awaitOnline().then(() => {
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
            d.dG4
        );
    {
        let r;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                E.set(e, n),
                b(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = g.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null !== (t = g.find((t) => e <= t)) && void 0 !== t ? t : g[g.length - 1];
}
function T(e) {
    let [t, n] = e.split('?');
    return [t, s.parse(n)];
}
function N(e) {
    let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: o, targetHeight: a, format: l = null, quality: c = null, animated: u = !1, srcIsAnimated: d = !1 } = e;
    if (t.startsWith('data:image')) return t;
    let [f, p] = T(t);
    return null != l && (p.format = l), null != c && (p.quality = c), u && d && (h.test(t) || m.test(t)) && (p.animated = !0), m.test(t) && (p.format = 'webp'), (o !== n || a !== r) && ((p.width = 0 | o), (p.height = 0 | a)), i().isEmpty(p) || (f += '?' + s.stringify(p)), f;
}
function A(e) {
    let { src: t, width: n, height: r, maxWidth: i, maxHeight: o, ratio: a = 1, format: s = null, quality: l = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
        f = n,
        p = r;
    a < 1 && ((f = Math.round(n * a)), (p = Math.round(r * a))), null != i && (f = Math.min(f, i)), null != o && (p = Math.min(p, o));
    let _ = (0, u.Z)();
    return N({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: (f *= _),
        targetHeight: (p *= _),
        format: s,
        quality: l,
        animated: c,
        srcIsAnimated: d
    });
}

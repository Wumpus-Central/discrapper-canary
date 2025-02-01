n.d(t, {
    Q4: () => A,
    Vv: () => y,
    oO: () => T,
    po: () => I,
    x_: () => c.Z
}),
    n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(31775),
    s = n.n(a),
    o = n(664751),
    l = n(261470),
    u = n(931619),
    c = n(921948),
    d = n(981631);
let f = 5,
    _ = /\.webp($|\?|#)/i,
    p = /\.avif($|\?|#)/i,
    h = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    m = new (s())({ max: 1000 });
function g(e, t) {
    null == e.backoff && (e.backoff = new l.Z());
    let { backoff: n } = e;
    return async () => {
        await u.Z.isOnline(),
            n.fails < f
                ? n.fail(() => {
                      E(e);
                  })
                : v(!0, e, t);
    };
}
function E(e) {
    let t = new Image();
    (t.onerror = g(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), v(!1, e, t);
        }),
        (t.src = e.url);
}
function v(e, t, n) {
    let { callbacks: i, url: r } = t;
    if (e) m.del(r);
    else {
        let { width: e, height: i } = n;
        (t = {
            url: r,
            loaded: !0,
            width: e,
            height: i
        }),
            m.set(r, t);
    }
    null != i && i.forEach((n) => n(e, t));
}
function y(e) {
    let t = m.get(e);
    return null != t && t.loaded;
}
function I(e, t) {
    let n = m.get(e);
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
            d.dG4
        );
    {
        let i;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                m.set(e, n),
                E(n)),
            null != t && ((i = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(i)),
            () => {
                null != i && null != n && (null != n.callbacks && n.callbacks.delete(i), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = h.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null !== (t = h.find((t) => e <= t)) && void 0 !== t ? t : h[h.length - 1];
}
function b(e) {
    let [t, n] = e.split('?');
    return [t, o.parse(n)];
}
function S(e) {
    let { src: t, sourceWidth: n, sourceHeight: i, targetWidth: a, targetHeight: s, format: l = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e;
    if (t.startsWith('data:image')) return t;
    let [f, h] = b(t);
    return null != l && (h.format = l), null != u && (h.quality = u), c && d && (_.test(t) || p.test(t)) && (h.animated = !0), p.test(t) && (h.format = 'webp'), (a !== n || s !== i) && ((h.width = 0 | a), (h.height = 0 | s)), r().isEmpty(h) || (f += '?' + o.stringify(h)), f;
}
function A(e) {
    let { src: t, width: n, height: i, maxWidth: r, maxHeight: a, ratio: s = 1, format: o = null, quality: l = null, animated: u = !1, srcIsAnimated: d = !1 } = e,
        f = n,
        _ = i;
    s < 1 && ((f = Math.round(n * s)), (_ = Math.round(i * s))), null != r && (f = Math.min(f, r)), null != a && (_ = Math.min(_, a));
    let p = (0, c.Z)();
    return S({
        src: t,
        sourceWidth: n,
        sourceHeight: i,
        targetWidth: (f *= p),
        targetHeight: (_ *= p),
        format: o,
        quality: l,
        animated: u,
        srcIsAnimated: d
    });
}

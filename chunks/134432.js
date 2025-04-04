n.d(t, {
    Q4: () => R,
    Vv: () => S,
    oO: () => N,
    po: () => T,
    x_: () => d.Z
}),
    n(47120),
    n(301563);
var r = n(392711),
    i = n.n(r),
    o = n(31775),
    a = n.n(o),
    s = n(664751),
    l = n(261470),
    c = n(956664),
    u = n(931619),
    d = n(921948),
    f = n(981631);
function _(e, t, n) {
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
let h = 5,
    m = /\.webp($|\?|#)/i,
    g = /\.avif($|\?|#)/i,
    E = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    b = 4096,
    y = new (a())({ max: 1000 });
function v(e, t) {
    null == e.backoff && (e.backoff = new l.Z());
    let { backoff: n } = e;
    return async () => {
        await u.Z.isOnline(),
            n.fails < h
                ? n.fail(() => {
                      O(e);
                  })
                : I(!0, e, t);
    };
}
function O(e) {
    let t = new Image();
    (t.onerror = v(e, t)),
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
function S(e) {
    let t = y.get(e);
    return null != t && t.loaded;
}
function T(e, t) {
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
                O(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function N(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = E.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null != (t = E.find((t) => e <= t)) ? t : E[E.length - 1];
}
function A(e) {
    let [t, n] = e.split('?');
    return [t, s.parse(n)];
}
function C(e) {
    let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: o, targetHeight: a, format: l = null, quality: u = null, animated: d = !1, srcIsAnimated: f = !1 } = e;
    if (t.startsWith('data:image')) return t;
    let [_, p] = A(t);
    null != l && (p.format = l), null != u && (p.quality = u), d && f && (m.test(t) || g.test(t)) && (p.animated = !0), g.test(t) && (p.format = 'webp');
    let h = (0, c.Tj)({
        width: o,
        height: a,
        maxWidth: b,
        maxHeight: b
    });
    return (o = h.width), (a = h.height), (o !== n || a !== r) && ((p.width = 0 | o), (p.height = 0 | a)), i().isEmpty(p) || (_ += '?' + s.stringify(p)), _;
}
function R(e) {
    let { src: t, width: n, height: r, maxWidth: i, maxHeight: o, ratio: a = 1, format: s = null, quality: l = null, animated: c = !1, srcIsAnimated: u = !1 } = e,
        f = n,
        _ = r;
    a < 1 && ((f = Math.round(n * a)), (_ = Math.round(r * a))), null != i && (f = Math.min(f, i)), null != o && (_ = Math.min(_, o));
    let p = (0, d.Z)();
    return C({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: (f *= p),
        targetHeight: (_ *= p),
        format: s,
        quality: l,
        animated: c,
        srcIsAnimated: u
    });
}

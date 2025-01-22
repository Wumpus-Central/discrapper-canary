r.d(n, {
    Q4: function () {
        return N;
    },
    Vv: function () {
        return I;
    },
    oO: function () {
        return S;
    },
    po: function () {
        return T;
    },
    x_: function () {
        return f.Z;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(31775),
    l = r.n(s),
    u = r(664751),
    c = r(261470),
    d = r(931619),
    f = r(921948),
    p = r(981631);
let h = 5,
    _ = /\.webp($|\?|#)/i,
    m = /\.avif($|\?|#)/i,
    g = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    E = new (l())({ max: 1000 });
function v(e, n) {
    null == e.backoff && (e.backoff = new c.Z());
    let { backoff: r } = e;
    return async () => {
        await d.Z.isOnline(),
            r.fails < h
                ? r.fail(() => {
                      y(e);
                  })
                : b(!0, e, n);
    };
}
function y(e) {
    let n = new Image();
    (n.onerror = v(e, n)),
        (n.onload = () => {
            let { backoff: r } = e;
            null != r && r.succeed(), b(!1, e, n);
        }),
        (n.src = e.url);
}
function b(e, n, r) {
    let { callbacks: i, url: a } = n;
    if (e) E.del(a);
    else {
        let { width: e, height: i } = r;
        (n = {
            url: a,
            loaded: !0,
            width: e,
            height: i
        }),
            E.set(a, n);
    }
    null != i && i.forEach((r) => r(e, n));
}
function I(e) {
    let n = E.get(e);
    return null != n && n.loaded;
}
function T(e, n) {
    let r = E.get(e);
    if (null != r && r.loaded)
        return (
            null != n &&
                d.Z.awaitOnline().then(() => {
                    null != r &&
                        null != r.callbacks &&
                        r.callbacks.forEach((n) => {
                            null != r
                                ? n(!1, r)
                                : n(!0, {
                                      url: e,
                                      loaded: !0
                                  });
                        });
                }),
            p.dG4
        );
    {
        let i;
        return (
            null == r &&
                ((r = {
                    url: e,
                    loaded: !1
                }),
                E.set(e, r),
                y(r)),
            null != n && ((i = n.bind(null)), null == r.callbacks && (r.callbacks = new Set()), r.callbacks.add(i)),
            () => {
                null != i && null != r && (null != r.callbacks && r.callbacks.delete(i), null != r.backoff && r.backoff.cancel());
            }
        );
    }
}
function S(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (r) {
        let n = g.filter((n) => n <= e).pop();
        if (null != n && e / n <= 1.25) return n;
    }
    return null !== (n = g.find((n) => e <= n)) && void 0 !== n ? n : g[g.length - 1];
}
function A(e) {
    let [n, r] = e.split('?');
    return [n, u.parse(r)];
}
function C(e) {
    let { src: n, sourceWidth: r, sourceHeight: i, targetWidth: a, targetHeight: s, format: l = null, quality: c = null, animated: d = !1, srcIsAnimated: f = !1 } = e;
    if (n.startsWith('data:image')) return n;
    let [p, h] = A(n);
    return null != l && (h.format = l), null != c && (h.quality = c), d && f && (_.test(n) || m.test(n)) && (h.animated = !0), m.test(n) && (h.format = 'webp'), (a !== r || s !== i) && ((h.width = 0 | a), (h.height = 0 | s)), !o().isEmpty(h) && (p += '?' + u.stringify(h)), p;
}
function N(e) {
    let { src: n, width: r, height: i, maxWidth: a, maxHeight: o, ratio: s = 1, format: l = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
        p = r,
        h = i;
    s < 1 && ((p = Math.round(r * s)), (h = Math.round(i * s))), null != a && (p = Math.min(p, a)), null != o && (h = Math.min(h, o));
    let _ = (0, f.Z)();
    return (
        (p *= _),
        C({
            src: n,
            sourceWidth: r,
            sourceHeight: i,
            targetWidth: p,
            targetHeight: (h *= _),
            format: l,
            quality: u,
            animated: c,
            srcIsAnimated: d
        })
    );
}

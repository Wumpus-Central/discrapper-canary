n.d(t, {
    $0: () => m,
    j1: () => I,
    nP: () => T,
    nj: () => b,
    pX: () => E
}),
    n(47120);
var i = n(192379),
    r = n(688619),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(564334),
    f = n(302221),
    _ = n(308083);
let p = 15;
function h(e) {
    var t;
    let n = a()(e);
    return null ===
        (t = o()(_.ym)
            .map((e) => {
                let { primary: t } = e;
                return {
                    primary: t,
                    distance: a().distance(n, a()(t), 'hsl')
                };
            })
            .filter((e) => {
                let { distance: t } = e;
                return t < p;
            })
            .minBy((e) => {
                let { distance: t } = e;
                return t;
            })) || void 0 === t
        ? void 0
        : t.primary;
}
function m(e) {
    let t = a()(e),
        n = t.get('rgb.r');
    return (299 * n + 587 * t.get('rgb.g') + 114 * t.get('rgb.b')) / 1000 < 128
        ? u.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : u.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function g(e) {
    return new d.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function E(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.S3.Text;
    if (null == e) return;
    let r = null !== (n = h(e)) && void 0 !== n ? n : e,
        s = a()(r),
        o = a()(t),
        u = (0, f.k8)({
            colors: [g(s), g(o)],
            ratio: i,
            saturationFactor: 1
        });
    if (null != u) return a()(u.toHexString());
}
function v(e, t) {
    if (null == e) return;
    let n = E(e, t, l.S3.NonText);
    if (null == n) return;
    let i = 0.2 > n.luminance() ? n.brighten(0.3) : n.darken(0.3),
        r = 0.2 > n.luminance() ? n.brighten(0.35) : n.darken(0.35);
    return {
        '--custom-clan-bg': n.css(),
        '--custom-clan-hover-bg': i.css(),
        '--custom-clan-active-bg': r.css()
    };
}
function y(e) {
    return { '--custom-clan-text': m(e).hex() };
}
function I(e, t) {
    let n = v(e, t);
    if (null == n) return;
    let i = y(n['--custom-clan-bg']);
    return {
        ...n,
        ...i
    };
}
function T(e, t) {
    let [n, r = 1] = t,
        a = (0, c.ZP)();
    return i.useMemo(
        () =>
            null != e
                ? e
                : n
                      .resolve({
                          theme: a,
                          saturation: r
                      })
                      .hex(),
        [e, n, r, a]
    );
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let s = a()(e),
        o = { background: '\n      radial-gradient(\n        circle at '.concat(n, ',\n        ').concat(s.alpha(i).hex(), ' 0%,\n        transparent ').concat(r, '\n      )\n    ') };
    if (null != t) {
        let e = a()(t);
        o.background += ', '.concat(e.hex());
    }
    return o;
}

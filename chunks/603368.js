n.d(t, {
    $0: () => E,
    j1: () => I,
    nP: () => S,
    nj: () => T,
    pX: () => b
}),
    n(47120);
var r = n(192379),
    i = n(688619),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(564334),
    f = n(302221),
    _ = n(308083);
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = 15;
function g(e) {
    var t;
    let n = o()(e);
    return null ===
        (t = s()(_.ym)
            .map((e) => {
                let { primary: t } = e;
                return {
                    primary: t,
                    distance: o().distance(n, o()(t), 'hsl')
                };
            })
            .filter((e) => {
                let { distance: t } = e;
                return t < m;
            })
            .minBy((e) => {
                let { distance: t } = e;
                return t;
            })) || void 0 === t
        ? void 0
        : t.primary;
}
function E(e) {
    let t = o()(e),
        n = t.get('rgb.r');
    return (299 * n + 587 * t.get('rgb.g') + 114 * t.get('rgb.b')) / 1000 < 128
        ? c.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : c.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function v(e) {
    return new d.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function b(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.S3.Text;
    if (null == e) return;
    let i = null !== (n = g(e)) && void 0 !== n ? n : e,
        a = o()(i),
        s = o()(t),
        c = (0, f.k8)({
            colors: [v(a), v(s)],
            ratio: r,
            saturationFactor: 1
        });
    if (null != c) return o()(c.toHexString());
}
function y(e, t) {
    if (null == e) return;
    let n = b(e, t, l.S3.NonText);
    if (null == n) return;
    let r = 0.2 > n.luminance() ? n.brighten(0.3) : n.darken(0.3),
        i = 0.2 > n.luminance() ? n.brighten(0.35) : n.darken(0.35);
    return {
        '--custom-clan-bg': n.css(),
        '--custom-clan-hover-bg': r.css(),
        '--custom-clan-active-bg': i.css()
    };
}
function O(e) {
    return { '--custom-clan-text': E(e).hex() };
}
function I(e, t) {
    let n = y(e, t);
    if (null == n) return;
    let r = O(n['--custom-clan-bg']);
    return h({}, n, r);
}
function S(e, t) {
    let [n, i = 1] = t,
        o = (0, u.ZP)();
    return r.useMemo(
        () =>
            null != e
                ? e
                : n
                      .resolve({
                          theme: o,
                          saturation: i
                      })
                      .hex(),
        [e, n, i, o]
    );
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let a = o()(e),
        s = { background: '\n      radial-gradient(\n        circle at '.concat(n, ',\n        ').concat(a.alpha(r).hex(), ' 0%,\n        transparent ').concat(i, '\n      )\n    ') };
    if (null != t) {
        let e = o()(t);
        s.background += ', '.concat(e.hex());
    }
    return s;
}

r.d(n, {
    $0: function () {
        return E;
    },
    j1: function () {
        return T;
    },
    nP: function () {
        return S;
    },
    nj: function () {
        return A;
    },
    pX: function () {
        return y;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(688619),
    s = r.n(o),
    l = r(392711),
    u = r.n(l),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    p = r(564334),
    h = r(302221),
    _ = r(308083);
let m = 15;
function g(e) {
    var n;
    let r = s()(e);
    return null ===
        (n = u()(_.ym)
            .map((e) => {
                let { primary: n } = e;
                return {
                    primary: n,
                    distance: s().distance(r, s()(n), 'hsl')
                };
            })
            .filter((e) => {
                let { distance: n } = e;
                return n < m;
            })
            .minBy((e) => {
                let { distance: n } = e;
                return n;
            })) || void 0 === n
        ? void 0
        : n.primary;
}
function E(e) {
    let n = s()(e),
        r = n.get('rgb.r'),
        i = n.get('rgb.g');
    return (299 * r + 587 * i + 114 * n.get('rgb.b')) / 1000 < 128
        ? d.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : d.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function v(e) {
    return new p.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function y(e, n) {
    var r;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.S3.Text;
    if (null == e) return;
    let a = null !== (r = g(e)) && void 0 !== r ? r : e,
        o = s()(a),
        l = s()(n),
        u = (0, h.k8)({
            colors: [v(o), v(l)],
            ratio: i,
            saturationFactor: 1
        });
    if (null != u) return s()(u.toHexString());
}
function b(e, n) {
    if (null == e) return;
    let r = y(e, n, c.S3.NonText);
    if (null == r) return;
    let i = 0.2 > r.luminance() ? r.brighten(0.3) : r.darken(0.3),
        a = 0.2 > r.luminance() ? r.brighten(0.35) : r.darken(0.35);
    return {
        '--custom-clan-bg': r.css(),
        '--custom-clan-hover-bg': i.css(),
        '--custom-clan-active-bg': a.css()
    };
}
function I(e) {
    return { '--custom-clan-text': E(e).hex() };
}
function T(e, n) {
    let r = b(e, n);
    if (null == r) return;
    let i = I(r['--custom-clan-bg']);
    return {
        ...r,
        ...i
    };
}
function S(e, n) {
    let [r, i = 1] = n,
        o = (0, f.ZP)();
    return a.useMemo(
        () =>
            null != e
                ? e
                : r
                      .resolve({
                          theme: o,
                          saturation: i
                      })
                      .hex(),
        [e, r, i, o]
    );
}
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let o = s()(e),
        l = { background: '\n      radial-gradient(\n        circle at '.concat(r, ',\n        ').concat(o.alpha(i).hex(), ' 0%,\n        transparent ').concat(a, '\n      )\n    ') };
    if (null != n) {
        let e = s()(n);
        l.background += ', '.concat(e.hex());
    }
    return l;
}

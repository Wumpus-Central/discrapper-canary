n.d(t, {
    $0: () => A,
    j1: () => I,
    nP: () => O,
    nj: () => g,
    pX: () => N
}),
    n(47120);
var r = n(192379),
    l = n(688619),
    a = n.n(l),
    s = n(392711),
    i = n.n(s),
    o = n(780384),
    E = n(481060),
    c = n(410030),
    u = n(564334),
    _ = n(302221),
    d = n(308083);
function A(e) {
    let t = a()(e),
        n = t.get('rgb.r'),
        r = t.get('rgb.g');
    return (299 * n + 587 * r + 114 * t.get('rgb.b')) / 1000 < 128
        ? E.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : E.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function T(e) {
    return new u.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function N(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.S3.Text;
    if (null == e) return;
    let l =
            null !=
            (n = (function (e) {
                var t;
                let n = a()(e);
                return null ==
                    (t = i()(d.ym)
                        .map((e) => {
                            let { primary: t } = e;
                            return {
                                primary: t,
                                distance: a().distance(n, a()(t), 'hsl')
                            };
                        })
                        .filter((e) => {
                            let { distance: t } = e;
                            return t < 15;
                        })
                        .minBy((e) => {
                            let { distance: t } = e;
                            return t;
                        }))
                    ? void 0
                    : t.primary;
            })(e))
                ? n
                : e,
        s = a()(l),
        E = a()(t),
        c = (0, _.k8)({
            colors: [T(s), T(E)],
            ratio: r,
            saturationFactor: 1
        });
    if (null != c) return a()(c.toHexString());
}
function I(e, t) {
    let n = (function (e, t) {
        if (null == e) return;
        let n = N(e, t, o.S3.NonText);
        if (null == n) return;
        let r = 0.2 > n.luminance() ? n.brighten(0.3) : n.darken(0.3),
            l = 0.2 > n.luminance() ? n.brighten(0.35) : n.darken(0.35);
        return {
            '--custom-clan-bg': n.css(),
            '--custom-clan-hover-bg': r.css(),
            '--custom-clan-active-bg': l.css()
        };
    })(e, t);
    if (null == n) return;
    let r = { '--custom-clan-text': A(n['--custom-clan-bg']).hex() };
    return (function (e) {
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
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })({}, n, r);
}
function O(e, t) {
    let [n, l = 1] = t,
        a = (0, c.ZP)();
    return r.useMemo(
        () =>
            null != e
                ? e
                : n
                      .resolve({
                          theme: a,
                          saturation: l
                      })
                      .hex(),
        [e, n, l, a]
    );
}
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let s = a()(e),
        i = { background: '\n      radial-gradient(\n        circle at '.concat(n, ',\n        ').concat(s.alpha(r).hex(), ' 0%,\n        transparent ').concat(l, '\n      )\n    ') };
    if (null != t) {
        let e = a()(t);
        i.background += ', '.concat(e.hex());
    }
    return i;
}

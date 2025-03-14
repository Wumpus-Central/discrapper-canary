r.d(t, {
    $0: () => E,
    j1: () => M,
    nP: () => _,
    nj: () => O,
    pX: () => p
}),
    r(47120);
var n = r(192379),
    l = r(688619),
    i = r.n(l),
    a = r(392711),
    o = r.n(a),
    s = r(780384),
    h = r(481060),
    c = r(410030),
    v = r(564334),
    u = r(302221),
    d = r(308083);
function E(e) {
    let t = i()(e),
        r = t.get('rgb.r'),
        n = t.get('rgb.g');
    return (299 * r + 587 * n + 114 * t.get('rgb.b')) / 1000 < 128
        ? h.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : h.TVs.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function f(e) {
    return new v.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function p(e, t) {
    var r;
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.S3.Text;
    if (null == e) return;
    let l =
            null !==
                (r = (function (e) {
                    var t;
                    let r = i()(e);
                    return null ===
                        (t = o()(d.ym)
                            .map((e) => {
                                let { primary: t } = e;
                                return {
                                    primary: t,
                                    distance: i().distance(r, i()(t), 'hsl')
                                };
                            })
                            .filter((e) => {
                                let { distance: t } = e;
                                return t < 15;
                            })
                            .minBy((e) => {
                                let { distance: t } = e;
                                return t;
                            })) || void 0 === t
                        ? void 0
                        : t.primary;
                })(e)) && void 0 !== r
                ? r
                : e,
        a = i()(l),
        h = i()(t),
        c = (0, u.k8)({
            colors: [f(a), f(h)],
            ratio: n,
            saturationFactor: 1
        });
    if (null != c) return i()(c.toHexString());
}
function M(e, t) {
    let r = (function (e, t) {
        if (null == e) return;
        let r = p(e, t, s.S3.NonText);
        if (null == r) return;
        let n = 0.2 > r.luminance() ? r.brighten(0.3) : r.darken(0.3),
            l = 0.2 > r.luminance() ? r.brighten(0.35) : r.darken(0.35);
        return {
            '--custom-clan-bg': r.css(),
            '--custom-clan-hover-bg': n.css(),
            '--custom-clan-active-bg': l.css()
        };
    })(e, t);
    if (null == r) return;
    let n = { '--custom-clan-text': E(r['--custom-clan-bg']).hex() };
    return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            'function' == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })
                )),
                n.forEach(function (t) {
                    var n;
                    (n = r[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = n);
                });
        }
        return e;
    })({}, r, n);
}
function _(e, t) {
    let [r, l = 1] = t,
        i = (0, c.ZP)();
    return n.useMemo(
        () =>
            null != e
                ? e
                : r
                      .resolve({
                          theme: i,
                          saturation: l
                      })
                      .hex(),
        [e, r, l, i]
    );
}
function O(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let a = i()(e),
        o = { background: '\n      radial-gradient(\n        circle at '.concat(r, ',\n        ').concat(a.alpha(n).hex(), ' 0%,\n        transparent ').concat(l, '\n      )\n    ') };
    if (null != t) {
        let e = i()(t);
        o.background += ', '.concat(e.hex());
    }
    return o;
}

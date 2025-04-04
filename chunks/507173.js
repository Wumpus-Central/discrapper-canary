n.d(t, { y: () => _ }), n(47120), n(978209);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(692547),
    c = n(580315);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
var f = (function (e) {
    return (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large'), e;
})(f || {});
function _(e) {
    let { className: t, percents: n, size: i = 'small', foregroundColors: a = [l.Z.unsafe_rawColors.BRAND_500.css], backgroundColor: u = 'var(--background-modifier-active)', animate: f = !0 } = e,
        _ = s()
            .zip(n, a)
            .map((e, t) => {
                let n,
                    [a, s] = e;
                return (
                    (n = Array.isArray(s) ? { background: 'linear-gradient(to right, '.concat(s[0], ', ').concat(s[1], ')') } : { backgroundColor: s }),
                    (0, r.jsx)(
                        'div',
                        {
                            className: o()(c.progressBar, c[i], { [c.animating]: f }),
                            style: d({ transform: 'translate3d('.concat(Math.min(Math.max(0, a), 100) - 100, '%, 0, 0)') }, n)
                        },
                        t
                    )
                );
            })
            .reverse();
    return (0, r.jsx)('div', {
        className: o()(t, c.progress, c[i]),
        style: { backgroundColor: u },
        children: _
    });
}
_.Sizes = f;

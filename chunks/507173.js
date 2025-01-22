r.d(n, {
    y: function () {
        return p;
    }
});
var i,
    a = r(47120);
var o = r(200651);
r(192379);
var s = r(120356),
    l = r.n(s),
    u = r(392711),
    c = r.n(u),
    d = r(692547),
    f = r(718217);
function p(e) {
    let { className: n, percents: r, size: i = 'small', foregroundColors: a = [d.Z.unsafe_rawColors.BRAND_500.css], backgroundColor: s = 'var(--background-modifier-active)', animate: u = !0 } = e,
        p = c()
            .zip(r, a)
            .map((e, n) => {
                let r,
                    [a, s] = e;
                return (
                    (r = Array.isArray(s) ? { background: 'linear-gradient(to right, '.concat(s[0], ', ').concat(s[1], ')') } : { backgroundColor: s }),
                    (0, o.jsx)(
                        'div',
                        {
                            className: l()(f.progressBar, f[i], { [f.animating]: u }),
                            style: {
                                transform: 'translate3d('.concat(Math.min(Math.max(0, a), 100) - 100, '%, 0, 0)'),
                                ...r
                            }
                        },
                        n
                    )
                );
            })
            .reverse();
    return (0, o.jsx)('div', {
        className: l()(n, f.progress, f[i]),
        style: { backgroundColor: s },
        children: p
    });
}
!(function (e) {
    (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large');
})(i || (i = {})),
    (p.Sizes = i);

r.d(n, {
    y: function () {
        return _;
    }
});
var i,
    a = r(47120);
var s = r(200651);
r(192379);
var o = r(120356),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(692547),
    f = r(718217);
function _(e) {
    let { className: n, percents: r, size: i = 'small', foregroundColors: a = [d.Z.unsafe_rawColors.BRAND_500.css], backgroundColor: o = 'var(--background-modifier-active)', animate: u = !0 } = e,
        _ = c()
            .zip(r, a)
            .map((e, n) => {
                let r,
                    [a, o] = e;
                return (
                    (r = Array.isArray(o) ? { background: 'linear-gradient(to right, '.concat(o[0], ', ').concat(o[1], ')') } : { backgroundColor: o }),
                    (0, s.jsx)(
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
    return (0, s.jsx)('div', {
        className: l()(n, f.progress, f[i]),
        style: { backgroundColor: o },
        children: _
    });
}
!(function (e) {
    (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large');
})(i || (i = {})),
    (_.Sizes = i);

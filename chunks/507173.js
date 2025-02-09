n.d(t, { y: () => d }), n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    l = n(692547),
    u = n(392482),
    c = (function (e) {
        return (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large'), e;
    })(c || {});
function d(e) {
    let { className: t, percents: n, size: r = 'small', foregroundColors: s = [l.Z.unsafe_rawColors.BRAND_500.css], backgroundColor: c = 'var(--background-modifier-active)', animate: d = !0 } = e,
        f = o()
            .zip(n, s)
            .map((e, t) => {
                let n,
                    [s, o] = e;
                return (
                    (n = Array.isArray(o) ? { background: 'linear-gradient(to right, '.concat(o[0], ', ').concat(o[1], ')') } : { backgroundColor: o }),
                    (0, i.jsx)(
                        'div',
                        {
                            className: a()(u.progressBar, u[r], { [u.animating]: d }),
                            style: {
                                transform: 'translate3d('.concat(Math.min(Math.max(0, s), 100) - 100, '%, 0, 0)'),
                                ...n
                            }
                        },
                        t
                    )
                );
            })
            .reverse();
    return (0, i.jsx)('div', {
        className: a()(t, u.progress, u[r]),
        style: { backgroundColor: c },
        children: f
    });
}
d.Sizes = c;

r.d(n, {
    f: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(780384),
    c = r(481060),
    d = r(410030),
    f = r(388032),
    _ = r(959453);
function h(e) {
    let { src: n, size: r, constrain: i = 'height', className: o, alt: h, fallbackSrc: p, 'aria-hidden': m, showTooltip: g = !1 } = e,
        E = (0, d.ZP)(),
        v = ''.concat(r, 'px'),
        [I, T] = s.useState(!1),
        [b, y] = s.useState(!1),
        S = null == p || b;
    if (null == n || (I && S))
        return (0, a.jsx)(c.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, u.wj)(E) ? c.tokens.colors.WHITE : c.tokens.colors.BLACK,
            style: { maxWidth: v },
            className: l()(_.contentImage, o)
        });
    let A =
        'height' === i
            ? {
                  maxWidth: v,
                  height: v
              }
            : {
                  maxWidth: v,
                  minHeight: v
              };
    return (0, a.jsx)(
        c.Tooltip,
        {
            'aria-label': h,
            text: h,
            shouldShow: g,
            children: (e) =>
                (0, a.jsx)('img', {
                    ...e,
                    style: A,
                    className: l()(_.contentImage, o),
                    src: I && null != p ? p : n,
                    'aria-hidden': m,
                    alt: null != h ? h : m ? void 0 : f.intl.string(f.t['2B/phI']),
                    onError: (e) => (I ? y(!0) : T(!0))
                })
        },
        'content-image'
    );
}

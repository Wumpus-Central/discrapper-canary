r.d(n, {
    f: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(780384),
    c = r(481060),
    d = r(410030),
    f = r(388032),
    p = r(959453);
function h(e) {
    let { src: n, size: r, constrain: i = 'height', className: s, alt: h, fallbackSrc: _, 'aria-hidden': m, showTooltip: g = !1 } = e,
        E = (0, d.ZP)(),
        v = ''.concat(r, 'px'),
        [y, b] = o.useState(!1),
        [I, T] = o.useState(!1),
        S = null == _ || I;
    if (null == n || (y && S))
        return (0, a.jsx)(c.UnknownGameIcon, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, u.wj)(E) ? c.tokens.colors.WHITE : c.tokens.colors.BLACK,
            style: { maxWidth: v },
            className: l()(p.contentImage, s)
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
                    className: l()(p.contentImage, s),
                    src: y && null != _ ? _ : n,
                    'aria-hidden': m,
                    alt: null != h ? h : m ? void 0 : f.intl.string(f.t['2B/phI']),
                    onError: (e) => (y ? T(!0) : b(!0))
                })
        },
        'content-image'
    );
}

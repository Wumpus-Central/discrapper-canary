n.d(t, { f: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(388032),
    d = n(959453);
function f(e) {
    let { src: t, size: n, constrain: a = 'height', className: f, alt: _, fallbackSrc: p, 'aria-hidden': h, showTooltip: m = !1 } = e,
        g = (0, u.ZP)(),
        E = ''.concat(n, 'px'),
        [v, y] = r.useState(!1),
        [I, T] = r.useState(!1),
        b = null == p || I;
    if (null == t || (v && b))
        return (0, i.jsx)(l.IMN, {
            size: 'custom',
            width: '100%',
            height: '100%',
            color: (0, o.wj)(g) ? l.TVs.colors.WHITE : l.TVs.colors.BLACK,
            style: { maxWidth: E },
            className: s()(d.contentImage, f)
        });
    let S =
        'height' === a
            ? {
                  maxWidth: E,
                  height: E
              }
            : {
                  maxWidth: E,
                  minHeight: E
              };
    return (0, i.jsx)(
        l.ua7,
        {
            'aria-label': _,
            text: _,
            shouldShow: m,
            children: (e) =>
                (0, i.jsx)('img', {
                    ...e,
                    style: S,
                    className: s()(d.contentImage, f),
                    src: v && null != p ? p : t,
                    'aria-hidden': h,
                    alt: null != _ ? _ : h ? void 0 : c.intl.string(c.t['2B/phI']),
                    onError: (e) => (v ? T(!0) : y(!0))
                })
        },
        'content-image'
    );
}

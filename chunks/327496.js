n.d(t, { L: () => p }), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512969),
    l = n(481060),
    u = n(624138),
    c = n(544379);
let d = [18, 18, 16, 16, 14, 12, 10];
function f(e) {
    var t;
    return null !== (t = d[e.length - 1]) && void 0 !== t ? t : d[d.length - 1];
}
function _(e, t) {
    return s()({
        [c.childWrapper]: !0,
        [c.childWrapperNoHoverBg]: 'always' === e,
        [c.childWrapperHoverScale]: 'on-hover' === e && t
    });
}
let p = (e) => {
    let t,
        n,
        { backgroundStyle: a = 'always', children: d, icon: p, name: h, ariaLabel: m, className: g, style: E, to: v, onClick: y, selected: I = !1, ...T } = e,
        b = (0, o.k6)();
    null == p && null != h && (n = f((t = (0, u.Zg)(h))));
    let S = r.useCallback(
            (e) => {
                if (null == v);
                else if ('string' == typeof v) b.push(v);
                else {
                    let { pathname: e = '', state: t } = v;
                    b.push(e, t);
                }
                null != y && y(e);
            },
            [b, v, y]
        ),
        A = (0, l.dQu)(l.TVs.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsxs)(l.P3F, {
        ...T,
        onClick: S,
        className: s()(g, c.wrapper, { [c.selected]: I }),
        'aria-label': null != m && '' !== m ? m : null != h ? h : '',
        style: {
            ...E,
            fontSize: n
        },
        focusProps: { enabled: !1 },
        children: [
            null != t
                ? (0, i.jsx)('div', {
                      className: s()(_(a, !1), c.acronym),
                      'aria-hidden': !0,
                      children: t
                  })
                : null,
            null != p
                ? (0, i.jsx)('img', {
                      className: c.icon,
                      src: p,
                      alt: ' ',
                      width: A,
                      height: A,
                      'aria-hidden': !0
                  })
                : null,
            null != d
                ? (0, i.jsx)('div', {
                      className: _(a, !0),
                      children: d
                  })
                : null
        ]
    });
};

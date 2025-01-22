r.d(n, {
    L: function () {
        return m;
    }
});
var i = r(653041);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(512969),
    c = r(481060),
    d = r(624138),
    f = r(369455);
let p = [18, 18, 16, 16, 14, 12, 10];
function h(e) {
    var n;
    return null !== (n = p[e.length - 1]) && void 0 !== n ? n : p[p.length - 1];
}
function _(e, n) {
    return l()({
        [f.childWrapper]: !0,
        [f.childWrapperNoHoverBg]: 'always' === e,
        [f.childWrapperHoverScale]: 'on-hover' === e && n
    });
}
let m = (e) => {
    let n,
        r,
        { backgroundStyle: i = 'always', children: s, icon: p, name: m, ariaLabel: g, className: E, style: v, to: y, onClick: b, selected: I = !1, ...T } = e,
        S = (0, u.k6)();
    null == p && null != m && (r = h((n = (0, d.Zg)(m))));
    let A = o.useCallback(
            (e) => {
                if (null == y);
                else if ('string' == typeof y) S.push(y);
                else {
                    let { pathname: e = '', state: n } = y;
                    S.push(e, n);
                }
                null != b && b(e);
            },
            [S, y, b]
        ),
        C = (0, c.useToken)(c.tokens.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsxs)(c.Clickable, {
        ...T,
        onClick: A,
        className: l()(E, f.wrapper, { [f.selected]: I }),
        'aria-label': null != g && '' !== g ? g : null != m ? m : '',
        style: {
            ...v,
            fontSize: r
        },
        focusProps: { enabled: !1 },
        children: [
            null != n
                ? (0, a.jsx)('div', {
                      className: l()(_(i, !1), f.acronym),
                      'aria-hidden': !0,
                      children: n
                  })
                : null,
            null != p
                ? (0, a.jsx)('img', {
                      className: f.icon,
                      src: p,
                      alt: ' ',
                      width: C,
                      height: C,
                      'aria-hidden': !0
                  })
                : null,
            null != s
                ? (0, a.jsx)('div', {
                      className: _(i, !0),
                      children: s
                  })
                : null
        ]
    });
};

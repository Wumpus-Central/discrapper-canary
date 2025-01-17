r.d(n, {
    L: function () {
        return m;
    }
});
var i = r(653041);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(512969),
    c = r(481060),
    d = r(624138),
    f = r(369455);
let _ = [18, 18, 16, 16, 14, 12, 10];
function h(e) {
    var n;
    return null !== (n = _[e.length - 1]) && void 0 !== n ? n : _[_.length - 1];
}
function p(e, n) {
    return l()({
        [f.childWrapper]: !0,
        [f.childWrapperNoHoverBg]: 'always' === e,
        [f.childWrapperHoverScale]: 'on-hover' === e && n
    });
}
let m = (e) => {
    let n,
        r,
        { backgroundStyle: i = 'always', children: o, icon: _, name: m, ariaLabel: g, className: E, style: v, to: I, onClick: T, selected: b = !1, ...y } = e,
        S = (0, u.k6)();
    null == _ && null != m && (r = h((n = (0, d.Zg)(m))));
    let A = s.useCallback(
            (e) => {
                if (null == I);
                else if ('string' == typeof I) S.push(I);
                else {
                    let { pathname: e = '', state: n } = I;
                    S.push(e, n);
                }
                null != T && T(e);
            },
            [S, I, T]
        ),
        N = (0, c.useToken)(c.tokens.modules.guildbar.AVATAR_SIZE);
    return (0, a.jsxs)(c.Clickable, {
        ...y,
        onClick: A,
        className: l()(E, f.wrapper, { [f.selected]: b }),
        'aria-label': null != g && '' !== g ? g : null != m ? m : '',
        style: {
            ...v,
            fontSize: r
        },
        focusProps: { enabled: !1 },
        children: [
            null != n
                ? (0, a.jsx)('div', {
                      className: l()(p(i, !1), f.acronym),
                      'aria-hidden': !0,
                      children: n
                  })
                : null,
            null != _
                ? (0, a.jsx)('img', {
                      className: f.icon,
                      src: _,
                      alt: ' ',
                      width: N,
                      height: N,
                      'aria-hidden': !0
                  })
                : null,
            null != o
                ? (0, a.jsx)('div', {
                      className: p(i, !0),
                      children: o
                  })
                : null
        ]
    });
};

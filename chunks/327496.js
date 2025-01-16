r.d(n, {
    L: function () {
        return E;
    }
});
var i = r(653041);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(512969),
    c = r(481060),
    d = r(540059),
    f = r(624138),
    _ = r(369455);
let h = [18, 18, 16, 16, 14, 12, 10];
function p(e) {
    var n;
    return null !== (n = h[e.length - 1]) && void 0 !== n ? n : h[h.length - 1];
}
function m(e, n) {
    return l()({
        [_.childWrapper]: !0,
        [_.childWrapperNoHoverBg]: 'always' === e,
        [_.childWrapperHoverScale]: 'on-hover' === e && n
    });
}
function g(e) {
    return e ? 44 : 48;
}
let E = (e) => {
    let n,
        r,
        { backgroundStyle: i = 'always', children: o, icon: h, name: E, ariaLabel: v, className: I, style: T, to: b, onClick: y, selected: S = !1, ...A } = e,
        N = (0, u.k6)(),
        C = (0, d.Q3)('NavItem');
    null == h && null != E && (r = p((n = (0, f.Zg)(E))));
    let R = s.useCallback(
            (e) => {
                if (null == b);
                else if ('string' == typeof b) N.push(b);
                else {
                    let { pathname: e = '', state: n } = b;
                    N.push(e, n);
                }
                null != y && y(e);
            },
            [N, b, y]
        ),
        O = g(C);
    return (0, a.jsxs)(c.Clickable, {
        ...A,
        onClick: R,
        className: l()(I, _.wrapper, { [_.selected]: S }),
        'aria-label': null != v && '' !== v ? v : null != E ? E : '',
        style: {
            ...T,
            fontSize: r
        },
        focusProps: { enabled: !1 },
        children: [
            null != n
                ? (0, a.jsx)('div', {
                      className: l()(m(i, !1), _.acronym),
                      'aria-hidden': !0,
                      children: n
                  })
                : null,
            null != h
                ? (0, a.jsx)('img', {
                      className: _.icon,
                      src: h,
                      alt: ' ',
                      width: O,
                      height: O,
                      'aria-hidden': !0
                  })
                : null,
            null != o
                ? (0, a.jsx)('div', {
                      className: m(i, !0),
                      children: o
                  })
                : null
        ]
    });
};

r.d(n, {
    _: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(539907),
    c = r(743236),
    d = r(21340),
    f = r(450793);
function p(e) {
    let { subMenuClassName: n, parentItem: r, isFocused: i, menuSubmenuProps: s, renderSubmenu: p } = e,
        { focusIndex: h, isUsingKeyboardNavigation: _, ...m } = s,
        g = o.useRef(null),
        E = o.useRef(null),
        v = o.useRef(null),
        [y, b] = o.useState(!1);
    return (
        o.useLayoutEffect(() => {
            b(!0);
        }, []),
        o.useLayoutEffect(() => {
            var e;
            i && ((0, c.F)(g), null === (e = v.current) || void 0 === e || e.focus());
        }, [i]),
        (0, a.jsxs)('div', {
            ref: g,
            children: [
                (0, a.jsx)('div', { ref: E }),
                r,
                i && y
                    ? (0, a.jsx)(u.j, {
                          targetRef: E,
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          fixed: !0,
                          spacing: 4,
                          position: 'right',
                          align: 'top',
                          children: () =>
                              (0, a.jsx)('div', {
                                  className: f.submenuPaddingContainer,
                                  children: (0, a.jsx)('div', {
                                      className: l()(f.submenu, n),
                                      ...m,
                                      ref: v,
                                      children: (0, a.jsx)(d.zJ, {
                                          className: f.scroller,
                                          children: p()
                                      })
                                  })
                              })
                      })
                    : null
            ]
        })
    );
}

r.d(n, {
    _: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(539907),
    c = r(743236),
    d = r(21340),
    f = r(450793);
function _(e) {
    let { subMenuClassName: n, parentItem: r, isFocused: i, menuSubmenuProps: o, renderSubmenu: _ } = e,
        { focusIndex: h, isUsingKeyboardNavigation: p, ...m } = o,
        g = s.useRef(null),
        E = s.useRef(null),
        v = s.useRef(null),
        [I, T] = s.useState(!1);
    return (
        s.useLayoutEffect(() => {
            T(!0);
        }, []),
        s.useLayoutEffect(() => {
            var e;
            i && ((0, c.F)(g), null === (e = v.current) || void 0 === e || e.focus());
        }, [i]),
        (0, a.jsxs)('div', {
            ref: g,
            children: [
                (0, a.jsx)('div', { ref: E }),
                r,
                i && I
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
                                          children: _()
                                      })
                                  })
                              })
                      })
                    : null
            ]
        })
    );
}

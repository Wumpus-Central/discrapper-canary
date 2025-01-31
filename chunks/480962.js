n.d(t, { _: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(539907),
    l = n(743236),
    u = n(21340),
    c = n(450793);
function d(e) {
    let { subMenuClassName: t, parentItem: n, isFocused: a, menuSubmenuProps: d, renderSubmenu: f } = e,
        { focusIndex: _, isUsingKeyboardNavigation: p, ...h } = d,
        m = r.useRef(null),
        g = r.useRef(null),
        E = r.useRef(null),
        [v, y] = r.useState(!1);
    return (
        r.useLayoutEffect(() => {
            y(!0);
        }, []),
        r.useLayoutEffect(() => {
            var e;
            a && ((0, l.F)(m), null === (e = E.current) || void 0 === e || e.focus());
        }, [a]),
        (0, i.jsxs)('div', {
            ref: m,
            children: [
                (0, i.jsx)('div', { ref: g }),
                n,
                a && v
                    ? (0, i.jsx)(o.j, {
                          targetRef: g,
                          autoInvert: !0,
                          nudgeAlignIntoViewport: !0,
                          fixed: !0,
                          spacing: 4,
                          position: 'right',
                          align: 'top',
                          children: () =>
                              (0, i.jsx)('div', {
                                  className: c.submenuPaddingContainer,
                                  children: (0, i.jsx)('div', {
                                      className: s()(c.submenu, t),
                                      ...h,
                                      ref: E,
                                      children: (0, i.jsx)(u.zJ, {
                                          className: c.scroller,
                                          children: f()
                                      })
                                  })
                              })
                      })
                    : null
            ]
        })
    );
}

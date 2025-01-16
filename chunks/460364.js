r.d(n, {
    C: function () {
        return c;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(539907),
    o = r(743236),
    l = r(218867),
    u = r(450793);
function c(e) {
    let { parentItem: n, isFocused: r, menuSubmenuProps: c, rows: d, rowHeight: f, onScroll: _, listClassName: h } = e,
        p = a.useRef(null),
        m = a.useRef(null),
        g = a.useRef(null),
        E = a.useRef(null),
        { isUsingKeyboardNavigation: v, focusIndex: I, ...T } = c;
    a.useLayoutEffect(() => {
        var e;
        r && ((0, o.F)(p), null === (e = g.current) || void 0 === e || e.focus());
    }, [r]),
        a.useEffect(() => {
            if (r && I >= 0 && v) {
                var e;
                null === (e = E.current) || void 0 === e || e.scrollRowIntoView(I);
            }
        }, [r, v, I]);
    let b = a.useCallback((e) => d[e], [d]);
    return (0, i.jsxs)('div', {
        ref: p,
        className: u.__invalid_submenuContainer,
        children: [
            (0, i.jsx)('div', { ref: m }),
            n,
            r
                ? (0, i.jsx)(s.j, {
                      targetRef: m,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      fixed: !0,
                      spacing: 4,
                      position: 'right',
                      align: 'top',
                      children: () =>
                          d.length > 0 &&
                          (0, i.jsx)('div', {
                              className: u.submenuPaddingContainer,
                              children: (0, i.jsx)('div', {
                                  className: u.submenu,
                                  ...T,
                                  ref: g,
                                  children: (0, i.jsx)(l.Z, {
                                      ref: E,
                                      className: h,
                                      listPadding: [6, 0, 6, 8],
                                      onScroll: _,
                                      renderRow: b,
                                      rowCount: d.length,
                                      rowHeight: f
                                  })
                              })
                          })
                  })
                : null
        ]
    });
}

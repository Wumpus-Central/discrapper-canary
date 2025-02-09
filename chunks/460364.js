n.d(t, { C: () => u });
var i = n(200651),
    r = n(192379),
    a = n(539907),
    s = n(743236),
    o = n(218867),
    l = n(335765);
function u(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: u, rows: c, rowHeight: d, onScroll: f, listClassName: _ } = e,
        p = r.useRef(null),
        h = r.useRef(null),
        m = r.useRef(null),
        g = r.useRef(null),
        { isUsingKeyboardNavigation: E, focusIndex: v, ...y } = u;
    r.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(p), null === (e = m.current) || void 0 === e || e.focus());
    }, [n]),
        r.useEffect(() => {
            if (n && v >= 0 && E) {
                var e;
                null === (e = g.current) || void 0 === e || e.scrollRowIntoView(v);
            }
        }, [n, E, v]);
    let I = r.useCallback((e) => c[e], [c]);
    return (0, i.jsxs)('div', {
        ref: p,
        className: l.__invalid_submenuContainer,
        children: [
            (0, i.jsx)('div', { ref: h }),
            t,
            n
                ? (0, i.jsx)(a.j, {
                      targetRef: h,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      fixed: !0,
                      spacing: 4,
                      position: 'right',
                      align: 'top',
                      children: () =>
                          c.length > 0 &&
                          (0, i.jsx)('div', {
                              className: l.submenuPaddingContainer,
                              children: (0, i.jsx)('div', {
                                  className: l.submenu,
                                  ...y,
                                  ref: m,
                                  children: (0, i.jsx)(o.Z, {
                                      ref: g,
                                      className: _,
                                      listPadding: [6, 0, 6, 8],
                                      onScroll: f,
                                      renderRow: I,
                                      rowCount: c.length,
                                      rowHeight: d
                                  })
                              })
                          })
                  })
                : null
        ]
    });
}

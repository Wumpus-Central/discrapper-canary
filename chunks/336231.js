l.r(e), l.d(e, { default: () => o }), l(47120);
var n = l(200651),
    s = l(192379),
    u = l(481060),
    a = l(388032);
function o(t) {
    let { defaultColor: e, colors: l, value: o, onChange: i, disabled: r = !1, customPickerPosition: c = 'bottom' } = t,
        [d, b] = s.useState(() => (0 === o || o === e || l.some((t) => t === o) ? null : o));
    s.useEffect(() => {
        b(0 === o || o === e || l.some((t) => t === o) ? null : o);
    }, [o, l, e]);
    let h = s.useCallback(
            (t) => {
                null == i || i(t), b(null);
            },
            [i, b]
        ),
        p = s.useCallback(
            (t) => {
                null == i || i(t), b(t);
            },
            [i, b]
        ),
        x = s.useCallback(
            () =>
                (0, n.jsx)(u.Z$W, {
                    onChange: p,
                    value: d
                }),
            [p, d]
        ),
        C = s.useCallback(
            (t) => {
                let e = (0, n.jsx)(u.jHW, {
                    ...t,
                    'aria-label': a.intl.string(a.t['FHBa//'])
                });
                return r
                    ? e
                    : (0, n.jsx)(u.yRy, {
                          renderPopout: x,
                          position: c,
                          children: (t) =>
                              (0, n.jsx)(u.ua7, {
                                  text: a.intl.string(a.t['FHBa//']),
                                  position: 'bottom',
                                  children: (l) =>
                                      (0, n.jsx)('div', {
                                          ...l,
                                          ...t,
                                          children: e
                                      })
                              })
                      });
            },
            [c, r, x]
        ),
        j = s.useCallback(
            (t) => {
                let e = (0, n.jsx)(u.AGO, { ...t });
                return r
                    ? e
                    : (0, n.jsx)(u.ua7, {
                          text: a.intl.string(a.t.bBvAEB),
                          position: 'bottom',
                          children: (t) =>
                              (0, n.jsx)('div', {
                                  ...t,
                                  children: e
                              })
                      });
            },
            [r]
        );
    return (0, n.jsx)(u.zH8, {
        ...t,
        renderDefaultButton: j,
        renderCustomButton: C,
        customColor: d,
        onChange: h
    });
}

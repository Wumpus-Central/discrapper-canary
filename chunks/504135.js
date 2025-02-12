n.d(t, { s: () => h });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(1561),
    l = n(761224),
    u = n(898560),
    c = n(743236),
    d = n(525220),
    f = n(481060),
    _ = n(939350),
    p = n(186928);
function h(e) {
    let { color: t = 'default', label: n, icon: a, iconLeft: h, iconLeftSize: m = 'md', hint: g, subtext: E, subtextLineClamp: v, hasSubmenu: y, disabled: I, isFocused: T, menuItemProps: b, action: S, onClose: A, onFocus: N, className: C, focusedClassName: R, subMenuIconClassName: O, dontCloseOnActionIfHoldingShiftKey: D, dontCloseOnAction: L, iconProps: x, sparkle: P } = e,
        w = r.useContext(u.r),
        M = r.useRef(null),
        k = r.useCallback(
            (e) => {
                if (null == S) return !1;
                (e.shiftKey && D) || L || A(), e.persist(), null == w || w(), requestAnimationFrame(() => S(e));
            },
            [S, A, w, D, L]
        );
    return (
        r.useEffect(() => {
            T && ((0, c.F)(M), null == N || N());
        }, [T, N]),
        (0, i.jsxs)(o.P, {
            innerRef: M,
            className: s()(p.item, p.labelContainer, _._[t], C, {
                [p.disabled]: I,
                [p.focused]: T,
                [null != R ? R : '']: T
            }),
            onClick: I ? void 0 : k,
            'aria-disabled': I,
            ...b,
            'data-menu-item': 'true',
            children: [
                null != h &&
                    (0, i.jsx)('div', {
                        className: s()(p.iconContainerLeft, { [p.iconContainerLarge]: 'lg' === m }),
                        children: (0, i.jsx)(h, {
                            color: 'currentColor',
                            ...x,
                            className: s()(p.icon, null == x ? void 0 : x.className),
                            isFocused: T
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: p.label,
                    children: [
                        (0, l.I)(n, e),
                        null != E &&
                            (0, i.jsx)(f.Text, {
                                variant: 'text-xs/normal',
                                className: s()(p.subtext, { [p.subtextLineClamp]: null != v }),
                                lineClamp: v,
                                children: E
                            })
                    ]
                }),
                null != g &&
                    (0, i.jsx)('div', {
                        className: p.hintContainer,
                        children: (0, l.I)(g, e)
                    }),
                (0, d.Y)(a)
                    ? a
                    : null != a &&
                      (0, i.jsx)('div', {
                          className: s()(p.iconContainer),
                          children: (0, i.jsx)(a, {
                              color: 'currentColor',
                              ...x,
                              className: s()(p.icon, null == x ? void 0 : x.className),
                              isFocused: T
                          })
                      }),
                y &&
                    (0, i.jsxs)('div', {
                        className: p.iconContainer,
                        children: [
                            (0, i.jsx)(f.Fbu, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(p.caret, O)
                            }),
                            P && (0, i.jsx)(f.K1N, { className: p.sparkles })
                        ]
                    })
            ]
        })
    );
}

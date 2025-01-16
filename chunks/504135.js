r.d(n, {
    s: function () {
        return m;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(1561),
    u = r(761224),
    c = r(898560),
    d = r(743236),
    f = r(525220),
    _ = r(481060),
    h = r(939350),
    p = r(450793);
function m(e) {
    let { color: n = 'default', label: r, icon: s, iconLeft: m, iconLeftSize: g = 'md', hint: E, subtext: v, subtextLineClamp: I, hasSubmenu: T, disabled: b, isFocused: y, menuItemProps: S, action: A, onClose: N, onFocus: C, className: R, focusedClassName: O, subMenuIconClassName: D, dontCloseOnActionIfHoldingShiftKey: L, dontCloseOnAction: x, iconProps: w, sparkle: P } = e,
        M = a.useContext(c.r),
        k = a.useRef(null),
        U = a.useCallback(
            (e) => {
                if (null == A) return !1;
                !(e.shiftKey && L) && !x && N(), e.persist(), null == M || M(), requestAnimationFrame(() => A(e));
            },
            [A, N, M, L, x]
        );
    return (
        a.useEffect(() => {
            y && ((0, d.F)(k), null == C || C());
        }, [y, C]),
        (0, i.jsxs)(l.P, {
            innerRef: k,
            className: o()(p.item, p.labelContainer, h._[n], R, {
                [p.disabled]: b,
                [p.focused]: y,
                [null != O ? O : '']: y
            }),
            onClick: b ? void 0 : U,
            'aria-disabled': b,
            ...S,
            'data-menu-item': 'true',
            children: [
                null != m &&
                    (0, i.jsx)('div', {
                        className: o()(p.iconContainerLeft, { [p.iconContainerLarge]: 'lg' === g }),
                        children: (0, i.jsx)(m, {
                            color: 'currentColor',
                            ...w,
                            className: o()(p.icon, null == w ? void 0 : w.className),
                            isFocused: y
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: p.label,
                    children: [
                        (0, u.I)(r, e),
                        null != v &&
                            (0, i.jsx)(_.Text, {
                                variant: 'text-xs/normal',
                                className: o()(p.subtext, { [p.subtextLineClamp]: null != I }),
                                lineClamp: I,
                                children: v
                            })
                    ]
                }),
                null != E &&
                    (0, i.jsx)('div', {
                        className: p.hintContainer,
                        children: (0, u.I)(E, e)
                    }),
                (0, f.Y)(s)
                    ? s
                    : null != s &&
                      (0, i.jsx)('div', {
                          className: o()(p.iconContainer),
                          children: (0, i.jsx)(s, {
                              color: 'currentColor',
                              ...w,
                              className: o()(p.icon, null == w ? void 0 : w.className),
                              isFocused: y
                          })
                      }),
                T &&
                    (0, i.jsxs)('div', {
                        className: p.iconContainer,
                        children: [
                            (0, i.jsx)(_.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(p.caret, D)
                            }),
                            P && (0, i.jsx)(_.LottieSparkle, { className: p.sparkles })
                        ]
                    })
            ]
        })
    );
}

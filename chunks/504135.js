r.d(n, {
    s: function () {
        return m;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(1561),
    u = r(761224),
    c = r(898560),
    d = r(743236),
    f = r(525220),
    p = r(481060),
    h = r(939350),
    _ = r(450793);
function m(e) {
    let { color: n = 'default', label: r, icon: o, iconLeft: m, iconLeftSize: g = 'md', hint: E, subtext: v, subtextLineClamp: y, hasSubmenu: b, disabled: I, isFocused: T, menuItemProps: S, action: A, onClose: C, onFocus: N, className: R, focusedClassName: O, subMenuIconClassName: D, dontCloseOnActionIfHoldingShiftKey: L, dontCloseOnAction: x, iconProps: w, sparkle: P } = e,
        M = a.useContext(c.r),
        k = a.useRef(null),
        U = a.useCallback(
            (e) => {
                if (null == A) return !1;
                !(e.shiftKey && L) && !x && C(), e.persist(), null == M || M(), requestAnimationFrame(() => A(e));
            },
            [A, C, M, L, x]
        );
    return (
        a.useEffect(() => {
            T && ((0, d.F)(k), null == N || N());
        }, [T, N]),
        (0, i.jsxs)(l.P, {
            innerRef: k,
            className: s()(_.item, _.labelContainer, h._[n], R, {
                [_.disabled]: I,
                [_.focused]: T,
                [null != O ? O : '']: T
            }),
            onClick: I ? void 0 : U,
            'aria-disabled': I,
            ...S,
            'data-menu-item': 'true',
            children: [
                null != m &&
                    (0, i.jsx)('div', {
                        className: s()(_.iconContainerLeft, { [_.iconContainerLarge]: 'lg' === g }),
                        children: (0, i.jsx)(m, {
                            color: 'currentColor',
                            ...w,
                            className: s()(_.icon, null == w ? void 0 : w.className),
                            isFocused: T
                        })
                    }),
                (0, i.jsxs)('div', {
                    className: _.label,
                    children: [
                        (0, u.I)(r, e),
                        null != v &&
                            (0, i.jsx)(p.Text, {
                                variant: 'text-xs/normal',
                                className: s()(_.subtext, { [_.subtextLineClamp]: null != y }),
                                lineClamp: y,
                                children: v
                            })
                    ]
                }),
                null != E &&
                    (0, i.jsx)('div', {
                        className: _.hintContainer,
                        children: (0, u.I)(E, e)
                    }),
                (0, f.Y)(o)
                    ? o
                    : null != o &&
                      (0, i.jsx)('div', {
                          className: s()(_.iconContainer),
                          children: (0, i.jsx)(o, {
                              color: 'currentColor',
                              ...w,
                              className: s()(_.icon, null == w ? void 0 : w.className),
                              isFocused: T
                          })
                      }),
                b &&
                    (0, i.jsxs)('div', {
                        className: _.iconContainer,
                        children: [
                            (0, i.jsx)(p.ChevronSmallRightIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: s()(_.caret, D)
                            }),
                            P && (0, i.jsx)(p.LottieSparkle, { className: _.sparkles })
                        ]
                    })
            ]
        })
    );
}

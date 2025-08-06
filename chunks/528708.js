n.d(t, { T: () => l });
var r = n(944296),
    i = n(73800),
    o = n(440717);
let a = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px',
    whiteSpace: 'nowrap'
};
function s(e = {}) {
    let { style: t, isFocusable: n } = e,
        [r, l] = (0, i.useState)(!1),
        { focusWithinProps: c } = (0, o.L)({
            isDisabled: !n,
            onFocusWithinChange: (e) => l(e)
        }),
        u = (0, i.useMemo)(
            () =>
                r
                    ? t
                    : t
                      ? {
                            ...a,
                            ...t
                        }
                      : a,
            [r]
        );
    return {
        visuallyHiddenProps: {
            ...c,
            style: u
        }
    };
}
function l(e) {
    let { children: t, elementType: n = 'div', isFocusable: o, style: a, ...l } = e,
        { visuallyHiddenProps: c } = s(e);
    return i.createElement(n, (0, r.d)(l, c), t);
}

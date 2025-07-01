n.d(t, { T: () => a });
var r = n(944296),
    i = n(73800),
    o = n(440717);
let u = {
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
function a(e) {
    let { children: t, elementType: n = 'div', isFocusable: a, style: s, ...l } = e,
        { visuallyHiddenProps: c } = (function (e = {}) {
            let { style: t, isFocusable: n } = e,
                [r, a] = (0, i.useState)(!1),
                { focusWithinProps: s } = (0, o.L)({
                    isDisabled: !n,
                    onFocusWithinChange: (e) => a(e)
                }),
                l = (0, i.useMemo)(
                    () =>
                        r
                            ? t
                            : t
                              ? {
                                    ...u,
                                    ...t
                                }
                              : u,
                    [r]
                );
            return {
                visuallyHiddenProps: {
                    ...s,
                    style: l
                }
            };
        })(e);
    return i.createElement(n, (0, r.d)(l, c), t);
}

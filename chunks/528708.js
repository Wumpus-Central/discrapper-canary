n.d(t, { T: () => a });
var i = n(944296),
    r = n(73800),
    o = n(440717);
let s = {
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
    let { children: t, elementType: n = 'div', isFocusable: a, style: l, ...u } = e,
        { visuallyHiddenProps: c } = (function (e = {}) {
            let { style: t, isFocusable: n } = e,
                [i, a] = (0, r.useState)(!1),
                { focusWithinProps: l } = (0, o.L)({
                    isDisabled: !n,
                    onFocusWithinChange: (e) => a(e)
                }),
                u = (0, r.useMemo)(
                    () =>
                        i
                            ? t
                            : t
                              ? {
                                    ...s,
                                    ...t
                                }
                              : s,
                    [i]
                );
            return {
                visuallyHiddenProps: {
                    ...l,
                    style: u
                }
            };
        })(e);
    return r.createElement(n, (0, i.d)(u, c), t);
}

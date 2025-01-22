r.d(n, {
    N: function () {
        return a;
    },
    U: function () {
        return o;
    }
});
var i = r(661763);
function a(e) {
    let { id: n, label: r, 'aria-labelledby': a, 'aria-label': o, labelElementType: s = 'label' } = e;
    n = (0, i.Me)(n);
    let l = (0, i.Me)(),
        u = {};
    return (
        r
            ? ((a = a ? `${l} ${a}` : l),
              (u = {
                  id: l,
                  htmlFor: 'label' === s ? n : void 0
              }))
            : !a && !o && console.warn('If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'),
        {
            labelProps: u,
            fieldProps: (0, i.bE)({
                id: n,
                'aria-label': o,
                'aria-labelledby': a
            })
        }
    );
}
function o(e) {
    let { description: n, errorMessage: r, isInvalid: o, validationState: s } = e,
        { labelProps: l, fieldProps: u } = a(e),
        c = (0, i.mp)([!!n, !!r, o, s]),
        d = (0, i.mp)([!!n, !!r, o, s]);
    return {
        labelProps: l,
        fieldProps: (u = (0, i.dG)(u, {
            'aria-describedby': [c, d, e['aria-describedby']].filter(Boolean).join(' ') || void 0
        })),
        descriptionProps: { id: c },
        errorMessageProps: { id: d }
    };
}

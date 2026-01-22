n.d(t, {
    M: () => s,
});
var r = n(783786),
    i = n(723906),
    a = n(803082);

function s(e) {
    let { description: t, errorMessage: n, isInvalid: s, validationState: o } = e,
        { labelProps: l, fieldProps: c } = (0, r.M)(e),
        u = (0, i.X1)([!!t, !!n, s, o]),
        d = (0, i.X1)([!!t, !!n, s, o]);
    return {
        labelProps: l,
        fieldProps: (c = (0, a.v)(c, {
            "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: {
            id: u,
        },
        errorMessageProps: {
            id: d,
        },
    };
}

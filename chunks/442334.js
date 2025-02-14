n.d(t, {
    O: () => c,
    Q: () => d
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(86656);
function c(e) {
    let { title: t, note: n, children: s, className: r, id: c } = e;
    return (0, i.jsxs)('div', {
        className: l()(o.inputItem, r),
        children: [
            (0, i.jsxs)('div', {
                className: o.inputItemText,
                children: [
                    (0, i.jsx)(a.Text, {
                        tag: 'label',
                        variant: 'text-md/medium',
                        className: o.inputItemTitle,
                        id: c,
                        children: t
                    }),
                    null != n &&
                        (0, i.jsx)(a.R94, {
                            className: o.__invalid_note,
                            type: a.R94.Types.DESCRIPTION,
                            children: n
                        })
                ]
            }),
            s
        ]
    });
}
function d(e) {
    let { options: t, value: n, select: r, selectClassName: d, ...u } = e,
        m = s.useId();
    return (0, i.jsx)(c, {
        ...u,
        id: m,
        children: (0, i.jsx)(a.PhF, {
            'aria-labelledby': m,
            className: l()(o.selectControl, d),
            options: t,
            isSelected: (e) => e === n,
            select: r,
            serialize: (e) => String(e)
        })
    });
}

n.d(t, {
    O: () => c,
    Q: () => d
});
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(919939);
function c(e) {
    let { title: t, note: n, children: s, className: l, id: c } = e;
    return (0, i.jsxs)('div', {
        className: r()(o.inputItem, l),
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
    let { options: t, value: n, select: l, selectClassName: d, ...u } = e,
        h = s.useId();
    return (0, i.jsx)(c, {
        ...u,
        id: h,
        children: (0, i.jsx)(a.PhF, {
            'aria-labelledby': h,
            className: r()(o.selectControl, d),
            options: t,
            isSelected: (e) => e === n,
            select: l,
            serialize: (e) => String(e)
        })
    });
}

n.d(t, {
    O: function () {
        return c;
    },
    Q: function () {
        return d;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(38419);
function c(e) {
    let { title: t, note: n, children: s, className: r, id: c } = e;
    return (0, i.jsxs)('div', {
        className: a()(o.inputItem, r),
        children: [
            (0, i.jsxs)('div', {
                className: o.inputItemText,
                children: [
                    (0, i.jsx)(l.Text, {
                        tag: 'label',
                        variant: 'text-md/medium',
                        className: o.inputItemTitle,
                        id: c,
                        children: t
                    }),
                    null != n &&
                        (0, i.jsx)(l.FormText, {
                            className: o.__invalid_note,
                            type: l.FormText.Types.DESCRIPTION,
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
        children: (0, i.jsx)(l.Select, {
            'aria-labelledby': m,
            className: a()(o.selectControl, d),
            options: t,
            isSelected: (e) => e === n,
            select: r,
            serialize: (e) => String(e)
        })
    });
}

var o = n(200651);
n(192379);
var r = n(866442),
    s = n(481060),
    a = n(102787);
t.Z = function (e) {
    let { colorKey: t, value: n, onChange: i, title: l } = e;
    return (0, o.jsxs)(s.FormItem, {
        children: [
            (0, o.jsx)(s.FormTitle, {
                tag: s.FormTitleTags.H5,
                children: l
            }),
            (0, o.jsx)(s.Popout, {
                renderPopout: (e) =>
                    (0, o.jsx)(s.CustomColorPicker, {
                        ...e,
                        value: n,
                        onChange: (e) => i(t, (0, r.Rf)(e))
                    }),
                children: (e) =>
                    (0, o.jsx)(s.Clickable, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: a.swatchContainer,
                        style: { backgroundColor: n },
                        children: (0, o.jsx)(s.EyeDropperIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: a.swatchIcon
                        })
                    })
            })
        ]
    });
};

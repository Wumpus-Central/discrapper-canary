A.d(t, {
    Z: function () {
        return g;
    }
});
var n = A(200651);
A(192379);
var r = A(512722),
    a = A.n(r),
    i = A(866442),
    l = A(481060),
    o = A(313201),
    s = A(981631),
    d = A(388032),
    c = A(597646);
let u = (0, o.hQ)();
function g(e) {
    let { newRoleParams: t, setNewRoleParams: A } = e,
        { name: r, color: o } = t,
        g = (e) =>
            A(
                (t) => (
                    a()(null != t, 'newRoleParams should be defined'),
                    {
                        ...t,
                        color: e
                    }
                )
            );
    return (0, n.jsxs)('div', {
        className: c.roleInputContainer,
        children: [
            (0, n.jsx)(l.TextInput, {
                autoFocus: !0,
                value: r,
                onChange: (e) =>
                    A(
                        (t) => (
                            a()(null != t, 'newRoleParams should be defined'),
                            {
                                ...t,
                                name: e
                            }
                        )
                    ),
                id: u,
                placeholder: d.intl.string(d.t.oNauur),
                maxLength: s.VKK,
                inputClassName: c.input
            }),
            (0, n.jsxs)('div', {
                className: c.roleColorContainer,
                children: [
                    (0, n.jsx)(l.HiddenVisually, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, i.Rf)(o) }) }),
                    (0, n.jsx)('div', {
                        className: c.roleColorPreview,
                        style: { backgroundColor: (0, i.Rf)(o) }
                    }),
                    (0, n.jsx)(l.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(l.Popout, {
                        renderPopout: (e) =>
                            (0, n.jsx)(l.CustomColorPicker, {
                                ...e,
                                value: o,
                                onChange: g
                            }),
                        children: (e) =>
                            (0, n.jsx)(l.Clickable, {
                                ...e,
                                tag: 'span',
                                'aria-label': d.intl.string(d.t.QLgdlZ),
                                className: c.dropperIconContainer,
                                children: (0, n.jsx)(l.EyeDropperIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: c.dropperIcon
                                })
                            })
                    })
                ]
            })
        ]
    });
}

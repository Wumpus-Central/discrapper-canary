n.d(t, {
    Z: function () {
        return g;
    }
});
var A = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    l = n(866442),
    i = n(481060),
    o = n(313201),
    s = n(981631),
    d = n(388032),
    c = n(597646);
let u = (0, o.hQ)();
function g(e) {
    let { newRoleParams: t, setNewRoleParams: n } = e,
        { name: r, color: o } = t,
        g = (e) =>
            n(
                (t) => (
                    a()(null != t, 'newRoleParams should be defined'),
                    {
                        ...t,
                        color: e
                    }
                )
            );
    return (0, A.jsxs)('div', {
        className: c.roleInputContainer,
        children: [
            (0, A.jsx)(i.TextInput, {
                autoFocus: !0,
                value: r,
                onChange: (e) =>
                    n(
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
            (0, A.jsxs)('div', {
                className: c.roleColorContainer,
                children: [
                    (0, A.jsx)(i.HiddenVisually, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, l.Rf)(o) }) }),
                    (0, A.jsx)('div', {
                        className: c.roleColorPreview,
                        style: { backgroundColor: (0, l.Rf)(o) }
                    }),
                    (0, A.jsx)(i.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, A.jsx)(i.Popout, {
                        renderPopout: (e) =>
                            (0, A.jsx)(i.CustomColorPicker, {
                                ...e,
                                value: o,
                                onChange: g
                            }),
                        children: (e) =>
                            (0, A.jsx)(i.Clickable, {
                                ...e,
                                tag: 'span',
                                'aria-label': d.intl.string(d.t.QLgdlZ),
                                className: c.dropperIconContainer,
                                children: (0, A.jsx)(i.EyeDropperIcon, {
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

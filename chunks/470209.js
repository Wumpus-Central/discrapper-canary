t.d(e, { Z: () => g });
var n = t(200651);
t(192379);
var a = t(512722),
    l = t.n(a),
    r = t(866442),
    i = t(481060),
    o = t(313201),
    s = t(981631),
    d = t(388032),
    c = t(95151);
let u = (0, o.hQ)();
function g(A) {
    let { newRoleParams: e, setNewRoleParams: t } = A,
        { name: a, color: o } = e,
        g = (A) =>
            t(
                (e) => (
                    l()(null != e, 'newRoleParams should be defined'),
                    {
                        ...e,
                        color: A
                    }
                )
            );
    return (0, n.jsxs)('div', {
        className: c.roleInputContainer,
        children: [
            (0, n.jsx)(i.oil, {
                autoFocus: !0,
                value: a,
                onChange: (A) =>
                    t(
                        (e) => (
                            l()(null != e, 'newRoleParams should be defined'),
                            {
                                ...e,
                                name: A
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
                    (0, n.jsx)(i.nn4, { children: d.intl.format(d.t['Vlq/pK'], { color: (0, r.Rf)(o) }) }),
                    (0, n.jsx)('div', {
                        className: c.roleColorPreview,
                        style: { backgroundColor: (0, r.Rf)(o) }
                    }),
                    (0, n.jsx)(i.LZC, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, n.jsx)(i.yRy, {
                        renderPopout: (A) =>
                            (0, n.jsx)(i.Z$W, {
                                ...A,
                                value: o,
                                onChange: g
                            }),
                        children: (A) =>
                            (0, n.jsx)(i.P3F, {
                                ...A,
                                tag: 'span',
                                'aria-label': d.intl.string(d.t.QLgdlZ),
                                className: c.dropperIconContainer,
                                children: (0, n.jsx)(i.ilE, {
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

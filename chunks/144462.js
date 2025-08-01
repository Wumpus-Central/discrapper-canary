(n.d(t, { default: () => h }), n(388685));
var a = n(255367),
    s = n(73800),
    i = n(755721),
    o = n(481060),
    r = n(313201),
    l = n(273504),
    c = n(388032),
    d = n(831242);
function h(e) {
    let { initialCustomMessage: t, onSubmit: n, onClose: h, transitionState: x } = e,
        m = (0, r.Dt)(),
        [u, g] = s.useState(t);
    return (0, a.jsxs)(o.Y0X, {
        transitionState: x,
        'aria-labelledby': m,
        size: o.CgR.SMALL,
        parentComponent: 'AutomodActionBlockMessageModal',
        children: [
            (0, a.jsxs)(o.hzk, {
                className: d.actionContentContainer,
                children: [
                    (0, a.jsx)(o.X6q, {
                        id: m,
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: d.header,
                        children: c.intl.string(c.t.Df4aUF)
                    }),
                    (0, a.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.intl.string(c.t.eOWEmJ)
                    }),
                    (0, a.jsx)(i.iS, {
                        className: d.customMessageTextArea,
                        placeholder: c.intl.string(c.t.gDZw7O),
                        value: u,
                        onChange: g,
                        maxLength: l._6
                    })
                ]
            }),
            (0, a.jsxs)(o.mzw, {
                children: [
                    (0, a.jsx)(o.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: c.intl.string(c.t.bt75u7),
                        onClick: () => {
                            n(u);
                        }
                    }),
                    (0, a.jsx)(i.zx, {
                        onClick: () => {
                            h();
                        },
                        color: i.zx.Colors.TRANSPARENT,
                        look: i.zx.Looks.LINK,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

(n.d(t, { default: () => d }), n(388685));
var s = n(255367),
    a = n(73800),
    o = n(481060),
    i = n(313201),
    r = n(273504),
    l = n(388032),
    c = n(831242);
function d(e) {
    let { initialCustomMessage: t, onSubmit: n, onClose: d, transitionState: h } = e,
        x = (0, i.Dt)(),
        [k, m] = a.useState(t);
    return (0, s.jsxs)(o.Y0X, {
        transitionState: h,
        'aria-labelledby': x,
        size: o.CgR.SMALL,
        parentComponent: 'AutomodActionBlockMessageModal',
        children: [
            (0, s.jsxs)(o.hzk, {
                className: c.actionContentContainer,
                children: [
                    (0, s.jsx)(o.X6q, {
                        id: x,
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: c.header,
                        children: l.intl.string(l.t.Df4aUF)
                    }),
                    (0, s.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: l.intl.string(l.t.eOWEmJ)
                    }),
                    (0, s.jsx)(o.Kx8, {
                        className: c.customMessageTextArea,
                        placeholder: l.intl.string(l.t.gDZw7O),
                        value: k,
                        onChange: m,
                        maxLength: r._6
                    })
                ]
            }),
            (0, s.jsxs)(o.mzw, {
                children: [
                    (0, s.jsx)(o.zxk, {
                        onClick: () => {
                            n(k);
                        },
                        color: o.zxk.Colors.BRAND,
                        size: o.zxk.Sizes.SMALL,
                        children: l.intl.string(l.t.bt75u7)
                    }),
                    (0, s.jsx)(o.zxk, {
                        onClick: () => {
                            d();
                        },
                        color: o.zxk.Colors.TRANSPARENT,
                        look: o.zxk.Looks.LINK,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

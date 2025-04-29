n.d(t, { default: () => d }), n(388685);
var s = n(255367),
    a = n(73800),
    i = n(481060),
    r = n(313201),
    o = n(273504),
    l = n(388032),
    c = n(831242);
function d(e) {
    let { initialCustomMessage: t, onSubmit: n, onClose: d, transitionState: h } = e,
        x = (0, r.Dt)(),
        [k, u] = a.useState(t);
    return (0, s.jsxs)(i.Y0X, {
        transitionState: h,
        'aria-labelledby': x,
        size: i.CgR.SMALL,
        children: [
            (0, s.jsxs)(i.hzk, {
                className: c.actionContentContainer,
                children: [
                    (0, s.jsx)(i.X6q, {
                        id: x,
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: c.header,
                        children: l.intl.string(l.t.Df4aUF)
                    }),
                    (0, s.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: l.intl.string(l.t.eOWEmJ)
                    }),
                    (0, s.jsx)(i.Kx8, {
                        className: c.customMessageTextArea,
                        placeholder: l.intl.string(l.t.gDZw7O),
                        value: k,
                        onChange: u,
                        maxLength: o._6
                    })
                ]
            }),
            (0, s.jsxs)(i.mzw, {
                children: [
                    (0, s.jsx)(i.zxk, {
                        onClick: () => {
                            n(k);
                        },
                        color: i.zxk.Colors.BRAND,
                        size: i.zxk.Sizes.SMALL,
                        children: l.intl.string(l.t.bt75u7)
                    }),
                    (0, s.jsx)(i.zxk, {
                        onClick: () => {
                            d();
                        },
                        color: i.zxk.Colors.TRANSPARENT,
                        look: i.zxk.Looks.LINK,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

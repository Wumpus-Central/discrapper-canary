s.d(t, { default: () => d }), s(47120);
var a = s(200651),
    n = s(192379),
    r = s(481060),
    o = s(313201),
    i = s(273504),
    c = s(388032),
    l = s(831242);
function d(e) {
    let { initialCustomMessage: t, onSubmit: s, onClose: d, transitionState: h } = e,
        x = (0, o.Dt)(),
        [k, u] = n.useState(t);
    return (0, a.jsxs)(r.Y0X, {
        transitionState: h,
        'aria-labelledby': x,
        size: r.CgR.SMALL,
        children: [
            (0, a.jsxs)(r.hzk, {
                className: l.actionContentContainer,
                children: [
                    (0, a.jsx)(r.X6q, {
                        id: x,
                        color: 'header-primary',
                        variant: 'heading-md/semibold',
                        className: l.header,
                        children: c.NW.string(c.t.Df4aUF)
                    }),
                    (0, a.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: c.NW.string(c.t.eOWEmJ)
                    }),
                    (0, a.jsx)(r.Kx8, {
                        className: l.customMessageTextArea,
                        placeholder: c.NW.string(c.t.gDZw7O),
                        value: k,
                        onChange: u,
                        maxLength: i._6
                    })
                ]
            }),
            (0, a.jsxs)(r.mzw, {
                children: [
                    (0, a.jsx)(r.zxk, {
                        onClick: () => {
                            s(k);
                        },
                        color: r.zxk.Colors.BRAND,
                        size: r.zxk.Sizes.SMALL,
                        children: c.NW.string(c.t.bt75u7)
                    }),
                    (0, a.jsx)(r.zxk, {
                        onClick: () => {
                            d();
                        },
                        color: r.zxk.Colors.TRANSPARENT,
                        look: r.zxk.Looks.LINK,
                        children: c.NW.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}

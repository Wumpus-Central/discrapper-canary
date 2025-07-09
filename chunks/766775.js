n.d(i, { default: () => m });
var a = n(255367);
n(73800);
var t = n(120356),
    c = n.n(t),
    o = n(481060),
    r = n(388905),
    l = n(313201),
    d = n(659900),
    _ = n(473855),
    s = n(388032),
    f = n(430537);
function m(e) {
    let { transitionState: i, onClose: n, guildTemplate: t } = e,
        { form: m, preview: p, handleSubmit: h } = (0, d.Z)(t, !1),
        C = (0, l.Dt)();
    return (0, a.jsx)('div', {
        children: (0, a.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            transitionState: i,
            className: f.modalRoot,
            'aria-labelledby': C,
            parentComponent: 'GuildTemplateModal',
            children: [
                (0, a.jsxs)('div', {
                    className: f.modalContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: c()(f.modalSection, f.ctaSection),
                            children: (0, a.jsx)('div', {
                                className: f.ctaContainer,
                                children: (0, a.jsx)(_.Z, {
                                    guildTemplate: t,
                                    headerId: C
                                })
                            })
                        }),
                        (0, a.jsx)('div', {
                            className: c()(f.modalSection, f.formSection),
                            children: (0, a.jsxs)(o.Ttm, {
                                className: f.formContainer,
                                children: [
                                    (0, a.jsx)(r.Dx, {
                                        className: f.header,
                                        children: s.intl.string(s.t.UNFvtL)
                                    }),
                                    m,
                                    p
                                ]
                            })
                        })
                    ]
                }),
                (0, a.jsxs)(o.mzw, {
                    className: f.modalFooter,
                    children: [
                        (0, a.jsx)(o.zxk, {
                            variant: 'secondary',
                            text: s.intl.string(s.t.cpT0Cg),
                            onClick: n
                        }),
                        (0, a.jsx)(o.zxk, {
                            variant: 'active',
                            text: s.intl.string(s.t.CumH4u),
                            onClick: async () => {
                                null != (await h()) && n();
                            }
                        })
                    ]
                })
            ]
        })
    });
}

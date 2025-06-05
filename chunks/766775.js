n.d(i, { default: () => m });
var o = n(255367);
n(73800);
var a = n(120356),
    c = n.n(a),
    r = n(481060),
    t = n(388905),
    l = n(313201),
    d = n(659900),
    _ = n(473855),
    s = n(388032),
    f = n(430537);
function m(e) {
    let { transitionState: i, onClose: n, guildTemplate: a } = e,
        { form: m, preview: p, handleSubmit: h } = (0, d.Z)(a, !1),
        C = (0, l.Dt)();
    return (0, o.jsx)('div', {
        children: (0, o.jsxs)(r.Y0X, {
            size: r.CgR.DYNAMIC,
            transitionState: i,
            className: f.modalRoot,
            'aria-labelledby': C,
            parentComponent: 'GuildTemplateModal',
            children: [
                (0, o.jsxs)('div', {
                    className: f.modalContainer,
                    children: [
                        (0, o.jsx)('div', {
                            className: c()(f.modalSection, f.ctaSection),
                            children: (0, o.jsx)('div', {
                                className: f.ctaContainer,
                                children: (0, o.jsx)(_.Z, {
                                    guildTemplate: a,
                                    headerId: C
                                })
                            })
                        }),
                        (0, o.jsx)('div', {
                            className: c()(f.modalSection, f.formSection),
                            children: (0, o.jsxs)(r.Ttm, {
                                className: f.formContainer,
                                children: [
                                    (0, o.jsx)(t.Dx, {
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
                (0, o.jsxs)(r.mzw, {
                    className: f.modalFooter,
                    children: [
                        (0, o.jsx)(r.zxk, {
                            color: r.zxk.Colors.PRIMARY,
                            onClick: n,
                            children: s.intl.string(s.t.cpT0Cg)
                        }),
                        (0, o.jsx)(r.zxk, {
                            color: r.zxk.Colors.GREEN,
                            onClick: async () => {
                                null != (await h()) && n();
                            },
                            children: s.intl.string(s.t.CumH4u)
                        })
                    ]
                })
            ]
        })
    });
}

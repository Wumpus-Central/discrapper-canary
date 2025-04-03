n.d(i, { default: () => m });
var c = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    t = n(388905),
    l = n(313201),
    d = n(659900),
    _ = n(473855),
    s = n(388032),
    f = n(430537);
function m(e) {
    let { transitionState: i, onClose: n, guildTemplate: o } = e,
        { form: m, preview: h, handleSubmit: p } = (0, d.Z)(o, !1),
        C = (0, l.Dt)();
    return (0, c.jsx)('div', {
        children: (0, c.jsxs)(r.Y0X, {
            size: r.CgR.DYNAMIC,
            transitionState: i,
            className: f.modalRoot,
            'aria-labelledby': C,
            children: [
                (0, c.jsxs)('div', {
                    className: f.modalContainer,
                    children: [
                        (0, c.jsx)('div', {
                            className: a()(f.modalSection, f.ctaSection),
                            children: (0, c.jsx)('div', {
                                className: f.ctaContainer,
                                children: (0, c.jsx)(_.Z, {
                                    guildTemplate: o,
                                    headerId: C
                                })
                            })
                        }),
                        (0, c.jsx)('div', {
                            className: a()(f.modalSection, f.formSection),
                            children: (0, c.jsxs)(r.Ttm, {
                                className: f.formContainer,
                                children: [
                                    (0, c.jsx)(t.Dx, {
                                        className: f.header,
                                        children: s.NW.string(s.t.UNFvtL)
                                    }),
                                    m,
                                    h
                                ]
                            })
                        })
                    ]
                }),
                (0, c.jsxs)(r.mzw, {
                    className: f.modalFooter,
                    children: [
                        (0, c.jsx)(r.zxk, {
                            color: r.zxk.Colors.PRIMARY,
                            onClick: n,
                            children: s.NW.string(s.t.cpT0Cg)
                        }),
                        (0, c.jsx)(r.zxk, {
                            color: r.zxk.Colors.GREEN,
                            onClick: async () => {
                                null != (await p()) && n();
                            },
                            children: s.NW.string(s.t.CumH4u)
                        })
                    ]
                })
            ]
        })
    });
}

o.r(n),
    o.d(n, {
        default: function () {
            return m;
        }
    });
var i = o(200651);
o(192379);
var a = o(120356),
    t = o.n(a),
    r = o(481060),
    l = o(388905),
    c = o(313201),
    d = o(659900),
    s = o(473855),
    _ = o(388032),
    f = o(205857);
function m(e) {
    let { transitionState: n, onClose: o, guildTemplate: a } = e,
        { form: m, preview: h, handleSubmit: u } = (0, d.Z)(a, !1),
        p = (0, c.Dt)();
    return (0, i.jsx)('div', {
        children: (0, i.jsxs)(r.ModalRoot, {
            size: r.ModalSize.DYNAMIC,
            transitionState: n,
            className: t()(f.modalRoot),
            'aria-labelledby': p,
            children: [
                (0, i.jsxs)('div', {
                    className: f.modalContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: t()(f.modalSection, f.ctaSection),
                            children: (0, i.jsx)('div', {
                                className: f.ctaContainer,
                                children: (0, i.jsx)(s.Z, {
                                    guildTemplate: a,
                                    headerId: p
                                })
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: t()(f.modalSection, f.formSection),
                            children: (0, i.jsxs)(r.Scroller, {
                                className: f.formContainer,
                                children: [
                                    (0, i.jsx)(l.Dx, {
                                        className: f.header,
                                        children: _.intl.string(_.t.UNFvtL)
                                    }),
                                    m,
                                    h
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(r.ModalFooter, {
                    className: f.modalFooter,
                    children: [
                        (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            onClick: o,
                            children: _.intl.string(_.t.cpT0Cg)
                        }),
                        (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: async () => {
                                null != (await u()) && o();
                            },
                            children: _.intl.string(_.t.CumH4u)
                        })
                    ]
                })
            ]
        })
    });
}

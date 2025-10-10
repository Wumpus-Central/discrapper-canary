a.d(n, { default: () => m });
var i = a(951288);
a(647438);
var c = a(120356),
    t = a.n(c),
    o = a(481060),
    r = a(388905),
    l = a(313201),
    d = a(659900),
    s = a(473855),
    _ = a(388032),
    f = a(204078);
function m(e) {
    let { transitionState: n, onClose: a, guildTemplate: c } = e,
        { form: m, preview: h, handleSubmit: C } = (0, d.Z)(c, !1),
        x = (0, l.Dt)();
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            transitionState: n,
            className: f.modalRoot,
            "aria-labelledby": x,
            parentComponent: "GuildTemplateModal",
            children: [
                (0, i.jsxs)("div", {
                    className: f.modalContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: t()(f.modalSection, f.ctaSection),
                            children: (0, i.jsx)("div", {
                                className: f.ctaContainer,
                                children: (0, i.jsx)(s.Z, {
                                    guildTemplate: c,
                                    headerId: x,
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: t()(f.modalSection, f.formSection),
                            children: (0, i.jsxs)(o.Ttm, {
                                className: f.formContainer,
                                children: [
                                    (0, i.jsx)(r.Dx, {
                                        className: f.header,
                                        children: _.intl.string(_.t.UNFvtL),
                                    }),
                                    (0, i.jsxs)(o.C3N, {
                                        children: [m, h],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(o.mzw, {
                    className: f.modalFooter,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: "secondary",
                            text: _.intl.string(_.t.cpT0Cg),
                            onClick: a,
                        }),
                        (0, i.jsx)(o.zxk, {
                            variant: "active",
                            text: _.intl.string(_.t.CumH4u),
                            onClick: async () => {
                                null != (await C()) && a();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}

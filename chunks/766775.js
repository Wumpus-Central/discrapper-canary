a.d(n, { default: () => m });
var i = a(951288);
a(647438);
var t = a(120356),
    c = a.n(t),
    o = a(481060),
    r = a(388905),
    l = a(313201),
    d = a(659900),
    s = a(473855),
    _ = a(388032),
    f = a(204078);
function m(e) {
    let { transitionState: n, onClose: a, guildTemplate: t } = e,
        { form: m, preview: h, handleSubmit: C } = (0, d.Z)(t, !1),
        u = (0, l.Dt)();
    return (0, i.jsx)("div", {
        children: (0, i.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            transitionState: n,
            className: f.modalRoot,
            "aria-labelledby": u,
            parentComponent: "GuildTemplateModal",
            children: [
                (0, i.jsxs)("div", {
                    className: f.modalContainer,
                    children: [
                        (0, i.jsx)("div", {
                            className: c()(f.modalSection, f.ctaSection),
                            children: (0, i.jsx)("div", {
                                className: f.ctaContainer,
                                children: (0, i.jsx)(s.Z, {
                                    guildTemplate: t,
                                    headerId: u,
                                }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: c()(f.modalSection, f.formSection),
                            children: (0, i.jsxs)(o.Ttm, {
                                className: f.formContainer,
                                children: [
                                    (0, i.jsx)(r.Dx, {
                                        className: f.header,
                                        children: _.intl.string(_.t.UNFvtM),
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
                        (0, i.jsx)(o.Button, {
                            variant: "secondary",
                            text: _.intl.string(_.t.cpT0Cq),
                            onClick: a,
                        }),
                        (0, i.jsx)(o.Button, {
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

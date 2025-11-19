i.d(n, { default: () => h });
var a = i(54381);
i(473749);
var c = i(120356),
    t = i.n(c),
    r = i(793030),
    o = i(481060),
    l = i(313201),
    s = i(659900),
    d = i(473855),
    _ = i(388032),
    f = i(204078);
function h(e) {
    let { transitionState: n, onClose: i, guildTemplate: c } = e,
        { form: h, preview: C, handleSubmit: m } = (0, s.Z)(c, !1),
        u = (0, l.Dt)();
    return (0, a.jsxs)(r.IX, {
        transitionState: n,
        onClose: i,
        size: "xxl",
        "aria-labelledby": u,
        children: [
            (0, a.jsxs)("div", {
                className: f.modalContainer,
                children: [
                    (0, a.jsx)("div", {
                        className: t()(f.modalSection, f.ctaSection),
                        children: (0, a.jsx)("div", {
                            className: f.ctaContainer,
                            children: (0, a.jsx)(d.Z, {
                                guildTemplate: c,
                                headerId: u,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: t()(f.modalSection, f.formSection),
                        children: (0, a.jsxs)(o.Ttm, {
                            className: f.formContainer,
                            children: [
                                (0, a.jsx)(o.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: f.header,
                                    children: _.intl.string(_.t.UNFvtM),
                                }),
                                (0, a.jsxs)(o.C3N, {
                                    children: [h, C],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, a.jsx)(r.Go$, {
                actions: [
                    {
                        variant: "secondary",
                        text: _.intl.string(_.t.cpT0Cq),
                        onClick: i,
                    },
                    {
                        variant: "primary",
                        text: _.intl.string(_.t.CumH4u),
                        onClick: async () => {
                            null != (await m()) && i();
                        },
                    },
                ],
            }),
        ],
    });
}

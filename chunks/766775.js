c.d(a, { default: () => C });
var n = c(54381);
c(473749);
var i = c(120356),
    t = c.n(i),
    r = c(793030),
    d = c(481060),
    o = c(313201),
    l = c(659900),
    s = c(473855),
    f = c(388032),
    h = c(193352);
function C(e) {
    let { transitionState: a, onClose: c, guildTemplate: i } = e,
        { form: C, preview: m, handleSubmit: u } = (0, l.Z)(i, !1),
        _ = (0, o.Dt)();
    return (0, n.jsxs)(r.IX, {
        transitionState: a,
        onClose: c,
        size: "xxl",
        "aria-labelledby": _,
        children: [
            (0, n.jsxs)("div", {
                className: h.modalContainer,
                children: [
                    (0, n.jsx)("div", {
                        className: t()(h.modalSection, h.ctaSection),
                        children: (0, n.jsx)("div", {
                            className: h.ctaContainer,
                            children: (0, n.jsx)(s.Z, {
                                guildTemplate: i,
                                headerId: _,
                            }),
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: t()(h.modalSection, h.formSection),
                        children: (0, n.jsxs)(d.Ttm, {
                            className: h.formContainer,
                            children: [
                                (0, n.jsx)(d.Heading, {
                                    variant: "heading-xl/semibold",
                                    className: h.header,
                                    children: f.intl.string(f.t.UNFvtM),
                                }),
                                (0, n.jsxs)(d.C3N, {
                                    children: [C, m],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(r.Go$, {
                actions: [
                    {
                        variant: "secondary",
                        text: f.intl.string(f.t.cpT0Cq),
                        onClick: c,
                    },
                    {
                        variant: "primary",
                        text: f.intl.string(f.t.CumH4u),
                        onClick: async () => {
                            null != (await u()) && c();
                        },
                    },
                ],
            }),
        ],
    });
}

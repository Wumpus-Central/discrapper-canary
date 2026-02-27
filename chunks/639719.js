n.d(t, { default: () => g });
var i = n(627968),
    r = n(64700),
    l = n(110259),
    a = n(158954),
    s = n(417597),
    o = n(397927),
    d = n(803306),
    c = n(139286),
    u = n(870570),
    A = n(652215),
    h = n(985018),
    _ = n(665763),
    m = n(546);
function p(e) {
    let { text: t } = e;
    return (0, i.jsxs)("li", {
        className: _.nf,
        children: [t, " ", (0, i.jsx)(a.I9m, { size: "sm", color: "currentColor" })],
    });
}
function g(e) {
    let { transitionState: t } = e,
        n = (0, s.bG)([u.A], () => u.A.getAction()),
        [a, g] = r.useState(!1);
    async function E() {
        return g(!0), n === A.a3B.AGREEMENTS && g(await (0, d.Q9)()), null;
    }
    return (
        (0, c.A)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, i.jsx)(o.kpP, {
            graphic: { src: m.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: h.intl.string(h.t["7glvXu"]),
            subtitle: h.intl.string(h.t["+USXQE"]),
            actions: [{ variant: "primary", text: h.intl.string(h.t["+TBKL1"]), onClick: E, loading: a }],
            transitionState: t,
            onClose: A.js$,
            children: (0, i.jsxs)(o.BJc, {
                gap: 20,
                children: [
                    n === A.a3B.AGREEMENTS
                        ? (0, i.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: _.h_,
                              children: h.intl.format(h.t.CN0Hvb, { url: A.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: _.kL,
                        children: (0, i.jsxs)("ul", {
                            className: _.yJ,
                            children: [
                                (0, i.jsx)(p, { text: h.intl.format(h.t.iw0hFi, { url: A.X7G.TERMS }) }),
                                (0, i.jsx)(o.cGx, {}),
                                (0, i.jsx)(p, { text: h.intl.format(h.t["36klnD"], { url: A.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(o.cGx, {}),
                                (0, i.jsx)(p, { text: h.intl.format(h.t.TquFBF, { url: A.X7G.PRIVACY }) }),
                                (0, i.jsx)(o.cGx, {}),
                                (0, i.jsx)(p, { text: h.intl.format(h.t.ia96Tb, { url: A.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

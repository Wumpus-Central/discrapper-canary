n.d(t, { default: () => m }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(110259),
    a = n(158954),
    s = n(417597),
    o = n(397927),
    c = n(803306),
    u = n(139286),
    d = n(870570),
    p = n(652215),
    f = n(985018),
    h = n(665763),
    A = n(546);
function g(e) {
    let { text: t } = e;
    return (0, r.jsxs)("li", {
        className: h.nf,
        children: [
            t,
            " ",
            (0, r.jsx)(a.I9m, {
                size: "sm",
                color: "currentColor",
            }),
        ],
    });
}
function m(e) {
    let { transitionState: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getAction()),
        [a, m] = i.useState(!1);
    async function b() {
        return m(!0), n === p.a3B.AGREEMENTS && m(await (0, c.Q9)()), null;
    }
    return (
        (0, u.A)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, r.jsx)(o.kpP, {
            graphic: {
                src: A.A,
                type: "image",
            },
            gradientColor: "blue",
            dismissable: !1,
            title: f.intl.string(f.t["7glvXu"]),
            subtitle: f.intl.string(f.t["+USXQE"]),
            actions: [
                {
                    variant: "primary",
                    text: f.intl.string(f.t["+TBKL1"]),
                    onClick: b,
                    loading: a,
                },
            ],
            transitionState: t,
            onClose: p.js$,
            children: (0, r.jsxs)(o.BJc, {
                gap: 20,
                children: [
                    n === p.a3B.AGREEMENTS
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: h.h_,
                              children: f.intl.format(f.t.CN0Hvb, { url: p.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: h.kL,
                        children: (0, r.jsxs)("ul", {
                            className: h.yJ,
                            children: [
                                (0, r.jsx)(g, { text: f.intl.format(f.t.iw0hFi, { url: p.X7G.TERMS }) }),
                                (0, r.jsx)(o.cGx, {}),
                                (0, r.jsx)(g, { text: f.intl.format(f.t["36klnD"], { url: p.X7G.PAID_TERMS }) }),
                                (0, r.jsx)(o.cGx, {}),
                                (0, r.jsx)(g, { text: f.intl.format(f.t.TquFBF, { url: p.X7G.PRIVACY }) }),
                                (0, r.jsx)(o.cGx, {}),
                                (0, r.jsx)(g, { text: f.intl.format(f.t.ia96Tb, { url: p.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

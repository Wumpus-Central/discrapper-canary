var n = i(477900),
    r = i(582128),
    e = i(613412),
    l = i(164636),
    a = i(509434),
    c = i(772707),
    o = i(331322),
    u = i(834730),
    m = i(404778),
    x = i(803306),
    d = i(139286),
    E = i(870570),
    p = i(652215),
    j = i(792996),
    h = i(304133),
    S = i(546);
function A(t) {
    let { text: s } = t;
    return (0, n.jsxs)("li", {
        className: h.nf,
        children: [s, " ", (0, n.jsx)(a.LinkExternalSmallIcon, { size: "sm", color: "currentColor" })],
    });
}
i.d(
    s,
    {},
    {
        default: function (t) {
            let { transitionState: s } = t,
                i = (0, l.bG)([E.A], () => E.A.getAction()),
                [a, f] = r.useState(!1);
            return (
                (0, d.A)(
                    {
                        type: e.ImpressionTypes.VIEW,
                        name: e.ImpressionNames.USER_AGREEMENTS,
                        properties: { required_action: i },
                    },
                    {},
                    [],
                ),
                (0, n.jsx)(c.k, {
                    graphic: { src: S.A, type: "image" },
                    gradientColor: "blue",
                    dismissable: !1,
                    title: j.intl.string(j.t["7glvXu"]),
                    subtitle: j.intl.string(j.t["+USXQE"]),
                    actions: [
                        {
                            variant: "primary",
                            text: j.intl.string(j.t["+TBKL1"]),
                            onClick: async function () {
                                return (f(!0), i === p.a3B.AGREEMENTS && f(await (0, x.Q9)()), null);
                            },
                            loading: a,
                        },
                    ],
                    transitionState: s,
                    onClose: p.js$,
                    children: (0, n.jsxs)(o.B, {
                        gap: 20,
                        children: [
                            i === p.a3B.AGREEMENTS
                                ? (0, n.jsx)(u.E, {
                                      variant: "body-md/normal",
                                      className: h.h_,
                                      children: j.intl.format(j.t.CN0Hvb, { url: p.X7G.TERMS_SUMMARY }),
                                  })
                                : null,
                            (0, n.jsx)("div", {
                                className: h.kL,
                                children: (0, n.jsxs)("ul", {
                                    className: h.yJ,
                                    children: [
                                        (0, n.jsx)(A, { text: j.intl.format(j.t.iw0hFi, { url: p.X7G.TERMS }) }),
                                        (0, n.jsx)(m.c, {}),
                                        (0, n.jsx)(A, {
                                            text: j.intl.format(j.t["36klnD"], { url: p.X7G.PAID_TERMS }),
                                        }),
                                        (0, n.jsx)(m.c, {}),
                                        (0, n.jsx)(A, { text: j.intl.format(j.t.TquFBF, { url: p.X7G.PRIVACY }) }),
                                        (0, n.jsx)(m.c, {}),
                                        (0, n.jsx)(A, { text: j.intl.format(j.t.ia96Tb, { url: p.X7G.GUIDELINES }) }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                })
            );
        },
    },
);

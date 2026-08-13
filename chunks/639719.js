e.d(s, { default: () => g });
var i = e(477900),
    n = e(582128),
    r = e(562708),
    a = e(509434),
    l = e(702841),
    c = e(772707),
    o = e(331322),
    u = e(834730),
    m = e(404778),
    x = e(803306),
    d = e(139286),
    p = e(870570),
    E = e(652215),
    j = e(375708),
    h = e(323744),
    A = e(546);
function S(t) {
    let { text: s } = t;
    return (0, i.jsxs)("li", {
        className: h.nf,
        children: [s, " ", (0, i.jsx)(a.I, { size: "sm", color: "currentColor" })],
    });
}
function g(t) {
    let { transitionState: s } = t,
        e = (0, l.bG)([p.A], () => p.A.getAction()),
        [a, g] = n.useState(!1);
    async function f() {
        return g(!0), e === E.a3B.AGREEMENTS && g(await (0, x.acceptAgreements)()), null;
    }
    return (
        (0, d.A)(
            {
                type: r.ImpressionTypes.VIEW,
                name: r.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: e },
            },
            {},
            [],
        ),
        (0, i.jsx)(c.k, {
            graphic: { src: A.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: j.intl.string(j.t["7glvXu"]),
            subtitle: j.intl.string(j.t["+USXQE"]),
            actions: [{ variant: "primary", text: j.intl.string(j.t["+TBKL1"]), onClick: f, loading: a }],
            transitionState: s,
            onClose: E.js$,
            children: (0, i.jsxs)(o.B, {
                gap: 20,
                children: [
                    e === E.a3B.AGREEMENTS
                        ? (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              className: h.h_,
                              children: j.intl.format(j.t.CN0Hvb, { url: E.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: h.kL,
                        children: (0, i.jsxs)("ul", {
                            className: h.yJ,
                            children: [
                                (0, i.jsx)(S, { text: j.intl.format(j.t.iw0hFi, { url: E.X7G.TERMS }) }),
                                (0, i.jsx)(m.c, {}),
                                (0, i.jsx)(S, { text: j.intl.format(j.t["36klnD"], { url: E.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(m.c, {}),
                                (0, i.jsx)(S, { text: j.intl.format(j.t.TquFBF, { url: E.X7G.PRIVACY }) }),
                                (0, i.jsx)(m.c, {}),
                                (0, i.jsx)(S, { text: j.intl.format(j.t.ia96Tb, { url: E.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

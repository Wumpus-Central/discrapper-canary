n.d(t, { default: () => C });
var i = n(627968),
    r = n(64700),
    a = n(110259),
    l = n(509434),
    s = n(417597),
    o = n(772707),
    d = n(331322),
    u = n(834730),
    c = n(404778),
    A = n(803306),
    h = n(139286),
    _ = n(870570),
    E = n(652215),
    p = n(985018),
    m = n(893192),
    g = n(546);
function I(e) {
    let { text: t } = e;
    return (0, i.jsxs)("li", {
        className: m.nf,
        children: [t, " ", (0, i.jsx)(l.I, { size: "sm", color: "currentColor" })],
    });
}
function C(e) {
    let { transitionState: t } = e,
        n = (0, s.bG)([_.A], () => _.A.getAction()),
        [l, C] = r.useState(!1);
    async function f() {
        return C(!0), n === E.a3B.AGREEMENTS && C(await (0, A.Q9)()), null;
    }
    return (
        (0, h.A)(
            {
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, i.jsx)(o.k, {
            graphic: { src: g.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: p.intl.string(p.t["7glvXu"]),
            subtitle: p.intl.string(p.t["+USXQE"]),
            actions: [{ variant: "primary", text: p.intl.string(p.t["+TBKL1"]), onClick: f, loading: l }],
            transitionState: t,
            onClose: E.js$,
            children: (0, i.jsxs)(d.B, {
                gap: 20,
                children: [
                    n === E.a3B.AGREEMENTS
                        ? (0, i.jsx)(u.E, {
                              variant: "text-md/normal",
                              className: m.h_,
                              children: p.intl.format(p.t.CN0Hvb, { url: E.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: m.kL,
                        children: (0, i.jsxs)("ul", {
                            className: m.yJ,
                            children: [
                                (0, i.jsx)(I, { text: p.intl.format(p.t.iw0hFi, { url: E.X7G.TERMS }) }),
                                (0, i.jsx)(c.c, {}),
                                (0, i.jsx)(I, { text: p.intl.format(p.t["36klnD"], { url: E.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(c.c, {}),
                                (0, i.jsx)(I, { text: p.intl.format(p.t.TquFBF, { url: E.X7G.PRIVACY }) }),
                                (0, i.jsx)(c.c, {}),
                                (0, i.jsx)(I, { text: p.intl.format(p.t.ia96Tb, { url: E.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

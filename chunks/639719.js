"use strict";
n.d(t, { default: () => I });
var i = n(627968),
    r = n(64700),
    s = n(562708),
    a = n(509434),
    o = n(702841),
    l = n(772707),
    u = n(331322),
    c = n(834730),
    d = n(404778),
    _ = n(803306),
    f = n(139286),
    h = n(870570),
    p = n(652215),
    E = n(375708),
    m = n(893192),
    g = n(546);
function A(e) {
    let { text: t } = e;
    return (0, i.jsxs)("li", {
        className: m.nf,
        children: [t, " ", (0, i.jsx)(a.I, { size: "sm", color: "currentColor" })],
    });
}
function I(e) {
    let { transitionState: t } = e,
        n = (0, o.bG)([h.A], () => h.A.getAction()),
        [a, I] = r.useState(!1);
    async function T() {
        return I(!0), n === p.a3B.AGREEMENTS && I(await (0, _.Q9)()), null;
    }
    return (
        (0, f.A)(
            {
                type: s.ImpressionTypes.VIEW,
                name: s.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, i.jsx)(l.k, {
            graphic: { src: g.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: E.intl.string(E.t["7glvXu"]),
            subtitle: E.intl.string(E.t["+USXQE"]),
            actions: [{ variant: "primary", text: E.intl.string(E.t["+TBKL1"]), onClick: T, loading: a }],
            transitionState: t,
            onClose: p.js$,
            children: (0, i.jsxs)(u.B, {
                gap: 20,
                children: [
                    n === p.a3B.AGREEMENTS
                        ? (0, i.jsx)(c.E, {
                              variant: "text-md/normal",
                              className: m.h_,
                              children: E.intl.format(E.t.CN0Hvb, { url: p.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: m.kL,
                        children: (0, i.jsxs)("ul", {
                            className: m.yJ,
                            children: [
                                (0, i.jsx)(A, { text: E.intl.format(E.t.iw0hFi, { url: p.X7G.TERMS }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: E.intl.format(E.t["36klnD"], { url: p.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: E.intl.format(E.t.TquFBF, { url: p.X7G.PRIVACY }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: E.intl.format(E.t.ia96Tb, { url: p.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

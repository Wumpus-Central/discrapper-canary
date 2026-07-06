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
    h = n(139286),
    f = n(870570),
    E = n(652215),
    p = n(375708),
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
        n = (0, o.bG)([f.A], () => f.A.getAction()),
        [a, I] = r.useState(!1);
    async function T() {
        return I(!0), n === E.a3B.AGREEMENTS && I(await (0, _.Q9)()), null;
    }
    return (
        (0, h.A)(
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
            title: p.intl.string(p.t["7glvXu"]),
            subtitle: p.intl.string(p.t["+USXQE"]),
            actions: [{ variant: "primary", text: p.intl.string(p.t["+TBKL1"]), onClick: T, loading: a }],
            transitionState: t,
            onClose: E.js$,
            children: (0, i.jsxs)(u.B, {
                gap: 20,
                children: [
                    n === E.a3B.AGREEMENTS
                        ? (0, i.jsx)(c.E, {
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
                                (0, i.jsx)(A, { text: p.intl.format(p.t.iw0hFi, { url: E.X7G.TERMS }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: p.intl.format(p.t["36klnD"], { url: E.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: p.intl.format(p.t.TquFBF, { url: E.X7G.PRIVACY }) }),
                                (0, i.jsx)(d.c, {}),
                                (0, i.jsx)(A, { text: p.intl.format(p.t.ia96Tb, { url: E.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

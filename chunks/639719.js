"use strict";
n.d(t, { default: () => m });
var i = n(627968),
    r = n(64700),
    a = n(562708),
    s = n(509434),
    l = n(702841),
    o = n(772707),
    d = n(331322),
    c = n(834730),
    u = n(404778),
    _ = n(803306),
    E = n(139286),
    A = n(870570),
    h = n(652215),
    I = n(375708),
    f = n(893192),
    p = n(546);
function T(e) {
    let { text: t } = e;
    return (0, i.jsxs)("li", {
        className: f.nf,
        children: [t, " ", (0, i.jsx)(s.I, { size: "sm", color: "currentColor" })],
    });
}
function m(e) {
    let { transitionState: t } = e,
        n = (0, l.bG)([A.A], () => A.A.getAction()),
        [s, m] = r.useState(!1);
    async function g() {
        return m(!0), n === h.a3B.AGREEMENTS && m(await (0, _.Q9)()), null;
    }
    return (
        (0, E.A)(
            {
                type: a.ImpressionTypes.VIEW,
                name: a.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, i.jsx)(o.k, {
            graphic: { src: p.A, type: "image" },
            gradientColor: "blue",
            dismissable: !1,
            title: I.intl.string(I.t["7glvXu"]),
            subtitle: I.intl.string(I.t["+USXQE"]),
            actions: [{ variant: "primary", text: I.intl.string(I.t["+TBKL1"]), onClick: g, loading: s }],
            transitionState: t,
            onClose: h.js$,
            children: (0, i.jsxs)(d.B, {
                gap: 20,
                children: [
                    n === h.a3B.AGREEMENTS
                        ? (0, i.jsx)(c.E, {
                              variant: "text-md/normal",
                              className: f.h_,
                              children: I.intl.format(I.t.CN0Hvb, { url: h.X7G.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, i.jsx)("div", {
                        className: f.kL,
                        children: (0, i.jsxs)("ul", {
                            className: f.yJ,
                            children: [
                                (0, i.jsx)(T, { text: I.intl.format(I.t.iw0hFi, { url: h.X7G.TERMS }) }),
                                (0, i.jsx)(u.c, {}),
                                (0, i.jsx)(T, { text: I.intl.format(I.t["36klnD"], { url: h.X7G.PAID_TERMS }) }),
                                (0, i.jsx)(u.c, {}),
                                (0, i.jsx)(T, { text: I.intl.format(I.t.TquFBF, { url: h.X7G.PRIVACY }) }),
                                (0, i.jsx)(u.c, {}),
                                (0, i.jsx)(T, { text: I.intl.format(I.t.ia96Tb, { url: h.X7G.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

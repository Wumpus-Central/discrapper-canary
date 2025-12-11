n.d(t, { default: () => b }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(990547),
    a = n(793030),
    s = n(399606),
    o = n(481060),
    c = n(232567),
    u = n(213609),
    d = n(23434),
    p = n(981631),
    f = n(388032),
    g = n(597667),
    h = n(602042);
function m(e) {
    let { text: t } = e;
    return (0, r.jsxs)("li", {
        className: g.link,
        children: [
            t,
            " ",
            (0, r.jsx)(a.Gr1, {
                size: "sm",
                color: "currentColor",
            }),
        ],
    });
}
function b(e) {
    let { transitionState: t } = e,
        n = (0, s.e7)([d.Z], () => d.Z.getAction()),
        [a, b] = i.useState(!1);
    async function _() {
        return b(!0), n === p.c2C.AGREEMENTS && b(await (0, c.Lr)()), null;
    }
    return (
        (0, u.Z)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: n },
            },
            {},
            [],
        ),
        (0, r.jsx)(o.Ioy, {
            graphic: {
                src: h.Z,
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
                    onClick: _,
                    loading: a,
                },
            ],
            transitionState: t,
            onClose: p.Cyb,
            children: (0, r.jsxs)(o.Kqy, {
                gap: 20,
                children: [
                    n === p.c2C.AGREEMENTS
                        ? (0, r.jsx)(o.Text, {
                              variant: "text-md/normal",
                              className: g.description,
                              children: f.intl.format(f.t.CN0Hvb, { url: p.EYA.TERMS_SUMMARY }),
                          })
                        : null,
                    (0, r.jsx)("div", {
                        className: g.container,
                        children: (0, r.jsxs)("ul", {
                            className: g.links,
                            children: [
                                (0, r.jsx)(m, { text: f.intl.format(f.t.iw0hFi, { url: p.EYA.TERMS }) }),
                                (0, r.jsx)(o.izJ, {}),
                                (0, r.jsx)(m, { text: f.intl.format(f.t["36klnD"], { url: p.EYA.PAID_TERMS }) }),
                                (0, r.jsx)(o.izJ, {}),
                                (0, r.jsx)(m, { text: f.intl.format(f.t.TquFBF, { url: p.EYA.PRIVACY }) }),
                                (0, r.jsx)(o.izJ, {}),
                                (0, r.jsx)(m, { text: f.intl.format(f.t.ia96Tb, { url: p.EYA.GUIDELINES }) }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}

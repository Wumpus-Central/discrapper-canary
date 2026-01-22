n.d(t, {
    A: () => o,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(620216),
    c = n(445180);

function o(e) {
    let {
        title: t,
        description: n,
        action: i,
        highlightColor: o = a.t.NONE,
        selected: d = !1,
        subsection: u = null,
        onClick: f,
        className: g,
        disabled: b,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(c.container, g),
        children: [
            (0, r.jsx)(s.DUT, {
                className: l()(
                    c.clickableContainer,
                    {
                        [c.noAction]: null == f,
                        [c.disabled]: b,
                    },
                    g,
                ),
                onClick: b ? void 0 : f,
                children: (0, r.jsxs)("div", {
                    className: l()(c.backgroundModifierContainer, c[o], {
                        [c.selected]: d,
                        [c.disabled]: b,
                        [c.noAction]: null == f,
                    }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: c.settingsDescriptionContainer,
                            children: [
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-text-active",
                                    children: t,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-text-default",
                                    className: c.description,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: c.__invalid_action,
                            children: i,
                        }),
                    ],
                }),
            }),
            null != u &&
                (0, r.jsx)("div", {
                    className: c.subsectionContainer,
                    children: u,
                }),
        ],
    });
}

n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(939249),
    a = n(834730),
    o = n(620216),
    d = n(500903);
function c(e) {
    let {
        title: t,
        description: n,
        action: l,
        highlightColor: c = o.t.NONE,
        selected: u = !1,
        subsection: m = null,
        onClick: g,
        className: h,
        disabled: x,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(d.container, h),
        children: [
            (0, i.jsx)(r.D, {
                className: s()(d.clickableContainer, { [d.noAction]: null == g, [d.disabled]: x }, h),
                onClick: x ? void 0 : g,
                children: (0, i.jsxs)("div", {
                    className: s()(d.backgroundModifierContainer, d[c], {
                        [d.selected]: u,
                        [d.disabled]: x,
                        [d.noAction]: null == g,
                    }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: d.settingsDescriptionContainer,
                            children: [
                                (0, i.jsx)(a.E, {
                                    variant: "text-sm/medium",
                                    color: "interactive-text-active",
                                    children: t,
                                }),
                                (0, i.jsx)(a.E, {
                                    variant: "text-sm/normal",
                                    color: "interactive-text-default",
                                    className: d.description,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: d.__invalid_action, children: l }),
                    ],
                }),
            }),
            null != m && (0, i.jsx)("div", { className: d.subsectionContainer, children: m }),
        ],
    });
}

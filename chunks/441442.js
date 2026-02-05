"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(620216),
    o = n(445180);
function d(e) {
    let {
        title: t,
        description: n,
        action: s,
        highlightColor: d = a.t.NONE,
        selected: c = !1,
        subsection: u = null,
        onClick: m,
        className: g,
        disabled: x,
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(o.container, g),
        children: [
            (0, i.jsx)(r.DUT, {
                className: l()(o.clickableContainer, { [o.noAction]: null == m, [o.disabled]: x }, g),
                onClick: x ? void 0 : m,
                children: (0, i.jsxs)("div", {
                    className: l()(o.backgroundModifierContainer, o[d], {
                        [o.selected]: c,
                        [o.disabled]: x,
                        [o.noAction]: null == m,
                    }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: o.settingsDescriptionContainer,
                            children: [
                                (0, i.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-text-active",
                                    children: t,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    color: "interactive-text-default",
                                    className: o.description,
                                    children: n,
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", { className: o.__invalid_action, children: s }),
                    ],
                }),
            }),
            null != u && (0, i.jsx)("div", { className: o.subsectionContainer, children: u }),
        ],
    });
}

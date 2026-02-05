"use strict";
n.d(t, { A: () => f });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    r = n(853742),
    o = n(835369),
    d = n(253913),
    c = n(49999),
    u = n(985018),
    m = n(1004),
    h = n(526174),
    x = n(558997),
    g = n(827469);
function f(e) {
    let { onDismiss: t } = e;
    return (0, l.jsxs)(a.DUT, {
        onClick: () => {
            open(d.X_), (0, r.Md)({ readGuideCta: !0 });
        },
        className: s()(x.kL, h.kL, m.mainCard),
        children: [
            (0, l.jsxs)("div", {
                className: h.mG,
                children: [
                    (0, l.jsxs)("div", {
                        className: h.cy,
                        children: [
                            (0, l.jsx)(a.pVd, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: h.Mg,
                            }),
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.uvGmCx),
                            }),
                            (0, l.jsxs)("div", {
                                className: h.lm,
                                children: [
                                    (0, l.jsx)(a.mir, { size: "md", color: "currentColor", className: h.G }),
                                    (0, l.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: u.intl.string(u.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(a.DUT, {
                        onClick: (e) => {
                            e.stopPropagation(), t(c.i.DISMISS), (0, r.Md)({ readGuideCta: !1 });
                        },
                        children: (0, l.jsx)(a.PGe, { size: "xs", color: "currentColor", className: h.ut }),
                    }),
                ],
            }),
            (0, l.jsx)("hr", { className: h.me }),
            (0, l.jsxs)("div", {
                className: h.mG,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(a.Heading, {
                                className: s()(x.__invalid_channelName, h.DD),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.JtSpD0),
                            }),
                            (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: u.intl.string(u.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, l.jsx)("img", { src: g, alt: u.intl.string(u.t.gAlJzV), width: o.T5, height: o.T5 }),
                ],
            }),
        ],
    });
}

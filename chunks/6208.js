n.d(t, { A: () => x });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(397927),
    s = n(853742),
    c = n(835369),
    o = n(253913),
    d = n(49999),
    u = n(985018),
    m = n(1004),
    h = n(526174),
    f = n(558997),
    g = n(827469);
function x(e) {
    let { onDismiss: t } = e;
    return (0, l.jsxs)(i.DUT, {
        onClick: () => {
            open(o.X_), (0, s.Md)({ readGuideCta: !0 });
        },
        className: a()(f.kL, h.kL, m.mainCard),
        children: [
            (0, l.jsxs)("div", {
                className: h.mG,
                children: [
                    (0, l.jsxs)("div", {
                        className: h.cy,
                        children: [
                            (0, l.jsx)(i.pVd, {
                                size: "custom",
                                width: 28,
                                height: 28,
                                color: "currentColor",
                                className: h.Mg,
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.uvGmCx),
                            }),
                            (0, l.jsxs)("div", {
                                className: h.lm,
                                children: [
                                    (0, l.jsx)(i.mir, {
                                        size: "md",
                                        color: "currentColor",
                                        className: h.G,
                                    }),
                                    (0, l.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: u.intl.string(u.t.t2GkVR),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(i.DUT, {
                        onClick: (e) => {
                            e.stopPropagation(), t(d.i.DISMISS), (0, s.Md)({ readGuideCta: !1 });
                        },
                        children: (0, l.jsx)(i.PGe, {
                            size: "xs",
                            color: "currentColor",
                            className: h.ut,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("hr", { className: h.me }),
            (0, l.jsxs)("div", {
                className: h.mG,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(i.Heading, {
                                className: a()(f.__invalid_channelName, h.DD),
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: u.intl.string(u.t.JtSpD0),
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: u.intl.string(u.t.Ajhp03),
                            }),
                        ],
                    }),
                    (0, l.jsx)("img", {
                        src: g,
                        alt: u.intl.string(u.t.gAlJzV),
                        width: c.T5,
                        height: c.T5,
                    }),
                ],
            }),
        ],
    });
}

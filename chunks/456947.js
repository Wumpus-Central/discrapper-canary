s.d(i, { default: () => h });
var n = s(477900);
s(582128);
var r = s(834730),
    e = s(772707),
    c = s(83107),
    a = s(960027),
    l = s(297152),
    o = s(375708),
    d = s(756537),
    x = s(973324);
function u(t) {
    let { text: i, icon: s, foreground: e } = t;
    return (0, n.jsxs)("div", {
        className: d.OI,
        children: [
            (0, n.jsx)("div", {
                className: d.zc,
                children: (0, n.jsx)(s, {
                    color: e ?? "currentColor",
                    className: d.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, n.jsx)(r.E, { variant: "text-md/normal", color: "text-default", className: d.Ct, children: i }),
        ],
    });
}
function h(t) {
    let { transitionState: i, onClose: s, ...r } = t;
    return (0, n.jsxs)(e.k, {
        ...r,
        graphic: { type: "image", src: x.A },
        title: o.intl.string(o.t.UVuXCs),
        onClose: s,
        transitionState: i,
        actions: [{ text: o.intl.string(o.t.obLqZ8), variant: "primary", onClick: s }],
        children: [
            (0, n.jsx)(u, { text: o.intl.string(o.t.sBDfo6), icon: c.z, foreground: "var(--icon-feedback-critical)" }),
            (0, n.jsx)(u, { text: o.intl.string(o.t.x58YtH), icon: a.z }),
            (0, n.jsx)(u, { text: o.intl.string(o.t.XtVqla), icon: l.E }),
        ],
    });
}

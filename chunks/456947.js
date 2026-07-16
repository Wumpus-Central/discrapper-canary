s.d(i, { default: () => h });
var n = s(627968);
s(64700);
var r = s(772707),
    e = s(834730),
    c = s(83107),
    a = s(960027),
    l = s(297152),
    o = s(375708),
    d = s(792046),
    x = s(973324);
function u(t) {
    let { text: i, icon: s, foreground: r } = t;
    return (0, n.jsxs)("div", {
        className: d.OI,
        children: [
            (0, n.jsx)("div", {
                className: d.zc,
                children: (0, n.jsx)(s, {
                    color: r ?? "currentColor",
                    className: d.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, n.jsx)(e.E, { variant: "text-md/normal", color: "text-default", className: d.Ct, children: i }),
        ],
    });
}
function h(t) {
    let { transitionState: i, onClose: s, ...e } = t;
    return (0, n.jsxs)(r.k, {
        ...e,
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

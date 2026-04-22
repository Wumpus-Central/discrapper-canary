i.d(e, { default: () => h });
var s = i(627968);
i(64700);
var n = i(772707),
    c = i(834730),
    r = i(83107),
    a = i(960027),
    l = i(297152),
    o = i(985018),
    d = i(792046),
    x = i(973324);
let u = (t) => {
    let { text: e, icon: i, foreground: n } = t;
    return (0, s.jsxs)("div", {
        className: d.OI,
        children: [
            (0, s.jsx)("div", {
                className: d.zc,
                children: (0, s.jsx)(i, {
                    color: n ?? "currentColor",
                    className: d.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, s.jsx)(c.E, { variant: "text-md/normal", color: "text-default", className: d.Ct, children: e }),
        ],
    });
};
function h(t) {
    let { transitionState: e, onClose: i, ...c } = t;
    return (0, s.jsxs)(n.k, {
        ...c,
        graphic: { type: "image", src: x.A },
        title: o.intl.string(o.t.UVuXCs),
        onClose: i,
        transitionState: e,
        actions: [{ text: o.intl.string(o.t.obLqZ8), variant: "primary", onClick: i }],
        children: [
            (0, s.jsx)(u, { text: o.intl.string(o.t.sBDfo6), icon: r.z, foreground: "var(--icon-feedback-critical)" }),
            (0, s.jsx)(u, { text: o.intl.string(o.t.x58YtH), icon: a.z }),
            (0, s.jsx)(u, { text: o.intl.string(o.t.XtVqla), icon: l.E }),
        ],
    });
}

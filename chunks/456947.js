e.d(i, { default: () => x });
var n = e(627968);
e(64700);
var s = e(158954),
    r = e(397927),
    a = e(985018),
    c = e(909406),
    l = e(973324);
let o = (t) => {
    let { text: i, icon: e, foreground: s } = t;
    return (0, n.jsxs)("div", {
        className: c.OI,
        children: [
            (0, n.jsx)("div", {
                className: c.zc,
                children: (0, n.jsx)(e, {
                    color: s ?? "currentColor",
                    className: c.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, n.jsx)(r.Text, { variant: "text-md/normal", color: "text-default", className: c.Ct, children: i }),
        ],
    });
};
function x(t) {
    let { transitionState: i, onClose: e, ...c } = t;
    return (0, n.jsxs)(s.ExpressiveModal, {
        ...c,
        graphic: { type: "image", src: l.A },
        title: a.intl.string(a.t.UVuXCs),
        onClose: e,
        transitionState: i,
        actions: [{ text: a.intl.string(a.t.obLqZ8), variant: "primary", onClick: e }],
        children: [
            (0, n.jsx)(o, {
                text: a.intl.string(a.t.sBDfo6),
                icon: r.z0P,
                foreground: "var(--icon-feedback-critical)",
            }),
            (0, n.jsx)(o, { text: a.intl.string(a.t.x58YtH), icon: r.zWQ }),
            (0, n.jsx)(o, { text: a.intl.string(a.t.XtVqla), icon: r.E7M }),
        ],
    });
}

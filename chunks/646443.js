l.d(t, { l: () => u });
var a = l(627968),
    n = l(934551),
    r = l(732955),
    i = l(397927),
    o = l(957565),
    s = l(64056);
let u = (e) => {
    let { label: t, value: l } = e;
    return (0, a.jsxs)("div", {
        className: s.I,
        children: [
            (0, a.jsxs)(i.Text, { variant: "text-sm/medium", children: [t, ":"] }),
            (0, a.jsx)(i.Text, { variant: "text-sm/normal", children: l }),
            (0, a.jsx)(r.K0, {
                size: "sm",
                "aria-label": "Copy Link",
                variant: "icon-only",
                icon: n.CopyIcon,
                onClick: () => (0, o.C)(l),
            }),
        ],
    });
};

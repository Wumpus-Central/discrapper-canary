n.d(t, {
    A: () => d,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    o = n(817363),
    c = n(93064);

function d(e) {
    let { filename: t, className: n, filters: i, buttonText: d, placeholder: u, onFileSelect: m } = e,
        p = l.useRef(null),
        h = l.useRef(null);
    return (0, a.jsx)(s.vN3, {
        ringTarget: p,
        within: !0,
        children: (0, a.jsxs)(s.FON, {
            ref: p,
            className: r()(n, c.U),
            children: [
                (0, a.jsx)(s.JMY, {
                    size: "sm",
                }),
                (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : u,
                }),
                (0, a.jsx)(s.Button, {
                    "aria-hidden": !0,
                    variant: "secondary",
                    size: "sm",
                    text: d,
                    tabIndex: -1,
                }),
                (0, a.jsx)(o.A, {
                    ref: h,
                    onChange: (e) => {
                        var t;
                        m(null == (t = e.currentTarget.files) ? void 0 : t[0]);
                    },
                    multiple: !1,
                    filters: i,
                }),
            ],
        }),
    });
}

n.d(t, { A: () => c });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(817363),
    d = n(93064);
function c(e) {
    let { filename: t, className: n, filters: l, buttonText: c, placeholder: u, onFileSelect: m } = e,
        h = i.useRef(null),
        p = i.useRef(null);
    return (0, a.jsx)(r.vN3, {
        ringTarget: h,
        within: !0,
        children: (0, a.jsxs)(r.FON, {
            ref: h,
            className: s()(n, d.U),
            children: [
                (0, a.jsx)(r.JMY, { size: "sm" }),
                (0, a.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "" !== t ? "text-default" : "text-muted",
                    lineClamp: 1,
                    children: "" !== t ? t : u,
                }),
                (0, a.jsx)(r.Button, { "aria-hidden": !0, variant: "secondary", size: "sm", text: c, tabIndex: -1 }),
                (0, a.jsx)(o.A, {
                    ref: p,
                    onChange: (e) => {
                        m(e.currentTarget.files?.[0]);
                    },
                    multiple: !1,
                    filters: l,
                }),
            ],
        }),
    });
}

n.d(t, {
    A: () => o,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018),
    s = n(643850);

function o(e) {
    let { name: t, onRetry: n } = e,
        o = null != t ? t : a.intl.string(a.t["11pdXZ"]);
    return (0, r.jsx)("div", {
        className: s.kL,
        children: (0, r.jsxs)("div", {
            className: s.wR,
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: o,
                }),
                (0, r.jsxs)(i.DUT, {
                    className: s.z3,
                    onClick: n,
                    children: [
                        (0, r.jsx)(i.EpV, {
                            size: "sm",
                            color: "currentColor",
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: a.intl.string(a.t.tmGHjc),
                        }),
                    ],
                }),
            ],
        }),
    });
}

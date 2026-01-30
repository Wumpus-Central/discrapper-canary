n.d(t, {
    A: () => a,
}),
    n(228524);
var r = n(627968),
    l = n(158954),
    i = n(985018),
    s = n(885794);

function a(e) {
    let { title: t, description: n, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: s.S,
        children: [
            (0, r.jsx)(l.DUT, {
                onClick: a,
                className: s.H,
                "aria-label": i.intl.string(i.t.pLPjsb),
                children: (0, r.jsx)(l.EYj, {
                    variant: "text-sm/semibold",
                    color: "text-default",
                    lineClamp: 2,
                    children: t,
                }),
            }),
            (0, r.jsx)(l.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: n,
            }),
        ],
    });
}

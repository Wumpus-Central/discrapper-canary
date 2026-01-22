n.d(t, { A: () => f }), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(732955),
    o = n(397927),
    l = n(985018),
    c = n(109878),
    u = n(595654),
    d = n(713052);
function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["KzCF/6"]),
            }),
            (0, r.jsx)(o.hKd, { size: 4 }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                className: c.yV,
                children: l.intl.string(l.t["3D7qCu"]),
            }),
            (0, r.jsx)(o.hKd, { size: 24 }),
            (0, r.jsxs)("div", {
                className: a()(u.Qn, c.Nr),
                children: [
                    (0, r.jsx)("img", {
                        src: d,
                        alt: "",
                        className: c.RI,
                    }),
                    (0, r.jsxs)("div", {
                        className: c.FS,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.wx,
                                children: l.intl.string(l.t["KzCF/6"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: c.h_,
                                children: l.intl.format(l.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.$nd, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: l.intl.string(l.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}

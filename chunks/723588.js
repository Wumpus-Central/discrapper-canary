n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(732955),
    l = n(397927),
    o = n(985018),
    c = n(109878),
    d = n(595654),
    u = n(713052);
function _(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, { variant: "heading-md/bold", children: o.intl.string(o.t["KzCF/6"]) }),
            (0, i.jsx)(l.hKd, { size: 4 }),
            (0, i.jsx)(l.Text, { variant: "text-md/normal", className: c.yV, children: o.intl.string(o.t["3D7qCu"]) }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: r()(d.Qn, c.Nr),
                children: [
                    (0, i.jsx)("img", { src: u, alt: "", className: c.RI }),
                    (0, i.jsxs)("div", {
                        className: c.FS,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.wx,
                                children: o.intl.string(o.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: c.h_,
                                children: o.intl.format(o.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.$nd, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: o.intl.string(o.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}

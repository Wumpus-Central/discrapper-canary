n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(732955),
    l = n(397927),
    a = n(985018),
    r = n(109878),
    o = n(713052);
function d(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, { variant: "heading-md/bold", children: a.intl.string(a.t["KzCF/6"]) }),
            (0, i.jsx)(l.hKd, { size: 4 }),
            (0, i.jsx)(l.Text, { variant: "text-md/normal", className: r.yV, children: a.intl.string(a.t["3D7qCu"]) }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: r.Nr,
                children: [
                    (0, i.jsx)("img", { src: o, alt: "", className: r.RI }),
                    (0, i.jsxs)("div", {
                        className: r.FS,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                className: r.wx,
                                children: a.intl.string(a.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: r.h_,
                                children: a.intl.format(a.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.$nd, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: a.intl.string(a.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}

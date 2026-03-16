n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(732955),
    l = n(397927),
    r = n(985018),
    a = n(109878),
    o = n(713052);
function d(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.Heading, { variant: "heading-md/bold", children: r.intl.string(r.t["KzCF/6"]) }),
            (0, i.jsx)(l.hKd, { size: 4 }),
            (0, i.jsx)(l.Text, { variant: "text-md/normal", className: a.yV, children: r.intl.string(r.t["3D7qCu"]) }),
            (0, i.jsx)(l.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: a.Nr,
                children: [
                    (0, i.jsx)("img", { src: o, alt: "", className: a.RI }),
                    (0, i.jsxs)("div", {
                        className: a.FS,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-xl/semibold",
                                className: a.wx,
                                children: r.intl.string(r.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: a.h_,
                                children: r.intl.format(r.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.$nd, {
                        size: "sm",
                        variant: "overlay-primary",
                        text: r.intl.string(r.t["3a8Xxj"]),
                        onClick: t,
                    }),
                ],
            }),
        ],
    });
}

n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(732955),
    a = n(397927),
    l = n(985018),
    r = n(109878),
    o = n(713052);
function c(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Heading, { variant: "heading-md/bold", children: l.intl.string(l.t["KzCF/6"]) }),
            (0, i.jsx)(a.hKd, { size: 4 }),
            (0, i.jsx)(a.Text, { variant: "text-md/normal", className: r.yV, children: l.intl.string(l.t["3D7qCu"]) }),
            (0, i.jsx)(a.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: r.Nr,
                children: [
                    (0, i.jsx)("img", { src: o, alt: "", className: r.RI }),
                    (0, i.jsxs)("div", {
                        className: r.FS,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-xl/semibold",
                                className: r.wx,
                                children: l.intl.string(l.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: r.h_,
                                children: l.intl.format(l.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.$nd, {
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

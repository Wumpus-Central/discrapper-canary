n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(821609),
    l = n(534514),
    a = n(696986),
    r = n(834730),
    o = n(985018),
    d = n(819411),
    u = n(713052);
function c(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(l.D, { variant: "heading-md/bold", children: o.intl.string(o.t["KzCF/6"]) }),
            (0, i.jsx)(a.h, { size: 4 }),
            (0, i.jsx)(r.E, { variant: "text-md/normal", className: d.yV, children: o.intl.string(o.t["3D7qCu"]) }),
            (0, i.jsx)(a.h, { size: 24 }),
            (0, i.jsxs)("div", {
                className: d.Nr,
                children: [
                    (0, i.jsx)("img", { src: u, alt: "", className: d.RI }),
                    (0, i.jsxs)("div", {
                        className: d.FS,
                        children: [
                            (0, i.jsx)(l.D, {
                                variant: "heading-xl/semibold",
                                className: d.wx,
                                children: o.intl.string(o.t["KzCF/6"]),
                            }),
                            (0, i.jsx)(r.E, {
                                variant: "text-md/normal",
                                className: d.h_,
                                children: o.intl.format(o.t["m+pcOO"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(s.$, {
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

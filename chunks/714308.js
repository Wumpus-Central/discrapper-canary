n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(534514),
    l = n(696986),
    a = n(834730),
    r = n(327479),
    o = n(985018),
    d = n(334335),
    u = n(193921);
function c(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.D, { variant: "heading-md/bold", children: o.intl.string(o.t["48ywCu"]) }),
            (0, i.jsx)(l.h, { size: 4 }),
            (0, i.jsx)(a.E, { variant: "text-md/normal", className: d.yV, children: o.intl.string(o.t.VWxmSo) }),
            (0, i.jsx)(l.h, { size: 24 }),
            (0, i.jsxs)("div", {
                className: d.Nr,
                children: [
                    (0, i.jsx)("img", { src: u, alt: "", className: d._e }),
                    (0, i.jsxs)("div", {
                        className: d.FS,
                        children: [
                            (0, i.jsx)(s.D, {
                                variant: "heading-xl/semibold",
                                className: d.wx,
                                children: o.intl.string(o.t["48ywCu"]),
                            }),
                            (0, i.jsx)(a.E, {
                                variant: "text-md/normal",
                                className: d.h_,
                                children: o.intl.format(o.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(r.A, { onClick: t, text: o.intl.string(o.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}

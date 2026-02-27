n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(327479),
    l = n(985018),
    r = n(869678),
    o = n(193921);
function c(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.Heading, { variant: "heading-md/bold", children: l.intl.string(l.t["48ywCu"]) }),
            (0, i.jsx)(s.hKd, { size: 4 }),
            (0, i.jsx)(s.Text, { variant: "text-md/normal", className: r.yV, children: l.intl.string(l.t.VWxmSo) }),
            (0, i.jsx)(s.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: r.Nr,
                children: [
                    (0, i.jsx)("img", { src: o, alt: "", className: r._e }),
                    (0, i.jsxs)("div", {
                        className: r.FS,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: r.wx,
                                children: l.intl.string(l.t["48ywCu"]),
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: r.h_,
                                children: l.intl.format(l.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.A, { onClick: t, text: l.intl.string(l.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}

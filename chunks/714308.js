n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(327479),
    o = n(985018),
    c = n(869678),
    d = n(595654),
    u = n(193921);
function _(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.Heading, { variant: "heading-md/bold", children: o.intl.string(o.t["48ywCu"]) }),
            (0, i.jsx)(a.hKd, { size: 4 }),
            (0, i.jsx)(a.Text, { variant: "text-md/normal", className: c.yV, children: o.intl.string(o.t.VWxmSo) }),
            (0, i.jsx)(a.hKd, { size: 24 }),
            (0, i.jsxs)("div", {
                className: r()(d.Qn, c.Nr),
                children: [
                    (0, i.jsx)("img", { src: u, alt: "", className: c._e }),
                    (0, i.jsxs)("div", {
                        className: c.FS,
                        children: [
                            (0, i.jsx)(a.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.wx,
                                children: o.intl.string(o.t["48ywCu"]),
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: "text-md/normal",
                                className: c.h_,
                                children: o.intl.format(o.t["/esXLj"], { numSubscriptions: n }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(l.A, { onClick: t, text: o.intl.string(o.t["z5YcJ+"]) }),
                ],
            }),
        ],
    });
}

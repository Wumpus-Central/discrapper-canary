n.d(t, {
    A: () => f,
}),
    n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(327479),
    l = n(985018),
    c = n(869678),
    u = n(595654),
    d = n(193921);

function f(e) {
    let { onClickManageSubscription: t, count: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/bold",
                children: l.intl.string(l.t["48ywCu"]),
            }),
            (0, r.jsx)(s.hKd, {
                size: 4,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                className: c.yV,
                children: l.intl.string(l.t.VWxmSo),
            }),
            (0, r.jsx)(s.hKd, {
                size: 24,
            }),
            (0, r.jsxs)("div", {
                className: a()(u.Qn, c.Nr),
                children: [
                    (0, r.jsx)("img", {
                        src: d,
                        alt: "",
                        className: c._e,
                    }),
                    (0, r.jsxs)("div", {
                        className: c.FS,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/semibold",
                                className: c.wx,
                                children: l.intl.string(l.t["48ywCu"]),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.h_,
                                children: l.intl.format(l.t["/esXLj"], {
                                    numSubscriptions: n,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(o.A, {
                        onClick: t,
                        text: l.intl.string(l.t["z5YcJ+"]),
                    }),
                ],
            }),
        ],
    });
}

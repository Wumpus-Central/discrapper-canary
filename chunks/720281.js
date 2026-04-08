"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    r = n(397927),
    a = n(615900),
    o = n(260509),
    d = n(287809),
    c = n(985018),
    u = n(206786);
function m(e) {
    let { guild: t } = e,
        n = (0, s.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return (0, o.bM)(t, e);
        });
    return (0, i.jsxs)(r.BJc, {
        gap: 24,
        className: u.k,
        children: [
            (0, i.jsx)(r.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: c.intl.string(c.t.Ms33Ds),
            }),
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: c.intl.string(c.t.xK7oic),
            }),
            (0, i.jsx)(l.m, {
                text: c.intl.string(c.t.VAIHXQ),
                shouldShow: !n,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.Button, {
                        variant: "primary",
                        text: c.intl.string(c.t.ZXeJbS),
                        disabled: !n,
                        onClick: () => {
                            (0, a.h)(t.id, { demonetized: !0 });
                        },
                    }),
                }),
            }),
        ],
    });
}

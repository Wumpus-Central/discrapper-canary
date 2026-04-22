n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    r = n(331322),
    a = n(534514),
    o = n(834730),
    d = n(821609),
    c = n(615900),
    u = n(260509),
    m = n(287809),
    g = n(985018),
    h = n(566066);
function x(e) {
    let { guild: t } = e,
        n = (0, l.bG)([m.default], () => {
            let e = m.default.getCurrentUser();
            return (0, u.bM)(t, e);
        });
    return (0, i.jsxs)(r.B, {
        gap: 24,
        className: h.k,
        children: [
            (0, i.jsx)(a.D, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: g.intl.string(g.t.Ms33Ds),
            }),
            (0, i.jsx)(o.E, { variant: "text-md/normal", color: "text-default", children: g.intl.string(g.t.xK7oic) }),
            (0, i.jsx)(s.m, {
                text: g.intl.string(g.t.VAIHXQ),
                shouldShow: !n,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        text: g.intl.string(g.t.ZXeJbS),
                        disabled: !n,
                        onClick: () => {
                            (0, c.h)(t.id, { demonetized: !0 });
                        },
                    }),
                }),
            }),
        ],
    });
}

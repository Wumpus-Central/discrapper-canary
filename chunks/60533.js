n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(28664),
    a = n(481060),
    s = n(90815),
    o = n(601964),
    c = n(594174),
    u = n(388032),
    d = n(254574);
function g(e) {
    let { guild: t } = e,
        n = (0, i.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (0, o.eM)(t, e);
        });
    return (0, r.jsxs)(a.Kqy, {
        gap: 24,
        className: d.container,
        children: [
            (0, r.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: u.intl.string(u.t.Ms33Ds),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: u.intl.string(u.t.xK7oic),
            }),
            (0, r.jsx)(l.u, {
                text: u.intl.string(u.t.VAIHXQ),
                shouldShow: !n,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.ZXeJbS),
                        disabled: !n,
                        onClick: () => {
                            (0, s.q)(t.id, { demonetized: !0 });
                        },
                    }),
                }),
            }),
        ],
    });
}

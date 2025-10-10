n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(28664),
    s = n(481060),
    a = n(90815),
    o = n(601964),
    c = n(594174),
    d = n(388032),
    u = n(254574);
function g(e) {
    let { guild: t } = e,
        n = (0, i.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (0, o.eM)(t, e);
        });
    return (0, r.jsxs)(s.Kqy, {
        gap: 24,
        className: u.container,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-lg/semibold",
                color: "header-primary",
                children: d.intl.string(d.t.Ms33Dg),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: d.intl.string(d.t.xK7oiY),
            }),
            (0, r.jsx)(l.u, {
                text: d.intl.string(d.t.VAIHXV),
                shouldShow: !n,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.zxk, {
                        variant: "primary",
                        text: d.intl.string(d.t.ZXeJbW),
                        disabled: !n,
                        onClick: () => {
                            (0, a.q)(t.id, { demonetized: !0 });
                        },
                    }),
                }),
            }),
        ],
    });
}

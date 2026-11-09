var r = n(477900);
n(582128);
var l = n(430392),
    i = n(323384),
    a = n(127062),
    o = n(177953),
    u = n(950305),
    s = n(331322),
    c = n(834730),
    d = n(191850),
    f = n(792996),
    p = n(32924);
let h = {
    bots: l.RobotIcon,
    channels: i.AppsIcon,
    test_app: a.BeakerIcon,
    collaboration: o.GroupIcon,
    only_you: u.UserIcon,
};
n.d(
    e,
    {},
    {
        A: function (t) {
            let { rows: e } = t;
            return (0, r.jsxs)(s.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(c.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: f.intl.string(d.default["kG/2e8"]),
                    }),
                    (0, r.jsx)("div", {
                        className: p.a,
                        children: e.map((t) => {
                            let e = h[t.key];
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: p.n,
                                    children: [
                                        (0, r.jsx)(e, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                        (0, r.jsx)(c.E, {
                                            variant: "body-sm/medium",
                                            color: "text-subtle",
                                            children: t.text,
                                        }),
                                    ],
                                },
                                t.key,
                            );
                        }),
                    }),
                ],
            });
        },
    },
);

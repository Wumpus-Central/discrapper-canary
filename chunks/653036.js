var l = n(477900);
n(582128);
var r = n(430392),
    i = n(323384),
    a = n(127062),
    o = n(280645),
    u = n(687966),
    s = n(177953),
    c = n(950305),
    d = n(331322),
    f = n(834730),
    p = n(191850),
    h = n(792996),
    g = n(32924);
let y = {
    bots: r.RobotIcon,
    channels: i.AppsIcon,
    test_app: a.BeakerIcon,
    profile_widget: o.IdCardIcon,
    overlay: u.GameControllerIcon,
    collaboration: s.GroupIcon,
    only_you: c.UserIcon,
};
n.d(
    t,
    {},
    {
        A: function (e) {
            let { rows: t } = e;
            return (0, l.jsxs)(d.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(f.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: h.intl.string(p.default["kG/2e8"]),
                    }),
                    (0, l.jsx)("div", {
                        className: g.a,
                        children: t.map((e) => {
                            let t = y[e.key];
                            return (0, l.jsxs)(
                                "div",
                                {
                                    className: g.n,
                                    children: [
                                        (0, l.jsx)(t, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                        (0, l.jsx)(f.E, {
                                            variant: "body-sm/medium",
                                            color: "text-subtle",
                                            children: e.text,
                                        }),
                                    ],
                                },
                                e.key,
                            );
                        }),
                    }),
                ],
            });
        },
    },
);

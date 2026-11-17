var l = n(477900);
n(582128);
var r = n(430392),
    i = n(323384),
    a = n(127062),
    o = n(280645),
    u = n(687966),
    s = n(231483),
    c = n(177953),
    d = n(950305),
    f = n(331322),
    p = n(834730),
    h = n(191850),
    g = n(792996),
    m = n(32924);
let y = {
    bots: r.RobotIcon,
    channels: i.AppsIcon,
    test_app: a.BeakerIcon,
    profile_widget: o.IdCardIcon,
    overlay: u.GameControllerIcon,
    automod: s.ShieldIcon,
    collaboration: c.GroupIcon,
    only_you: d.UserIcon,
};
n.d(
    e,
    {},
    {
        A: function (t) {
            let { rows: e } = t;
            return (0, l.jsxs)(f.B, {
                gap: 8,
                children: [
                    (0, l.jsx)(p.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: g.intl.string(h.default["kG/2e8"]),
                    }),
                    (0, l.jsx)("div", {
                        className: m.a,
                        children: e.map((t) => {
                            let e = y[t.key];
                            return (0, l.jsxs)(
                                "div",
                                {
                                    className: m.n,
                                    children: [
                                        (0, l.jsx)(e, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                        (0, l.jsx)(p.E, {
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

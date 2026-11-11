var r = n(477900);
n(582128);
var l = n(430392),
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
let m = {
    bots: l.RobotIcon,
    channels: i.AppsIcon,
    test_app: a.BeakerIcon,
    profile_widget: o.IdCardIcon,
    overlay: u.GameControllerIcon,
    collaboration: s.GroupIcon,
    only_you: c.UserIcon,
};
n.d(
    e,
    {},
    {
        A: function (t) {
            let { rows: e } = t;
            return (0, r.jsxs)(d.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(f.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: h.intl.string(p.default["kG/2e8"]),
                    }),
                    (0, r.jsx)("div", {
                        className: g.a,
                        children: e.map((t) => {
                            let e = m[t.key];
                            return (0, r.jsxs)(
                                "div",
                                {
                                    className: g.n,
                                    children: [
                                        (0, r.jsx)(e, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                        (0, r.jsx)(f.E, {
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

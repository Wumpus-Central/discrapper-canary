var e = l(477900);
l(582128);
var i = l(430392),
    a = l(323384),
    u = l(127062),
    r = l(280645),
    s = l(687966),
    o = l(231483),
    d = l(177953),
    c = l(950305),
    p = l(664121),
    f = l(625903),
    g = l(331322),
    h = l(834730),
    _ = l(191850),
    m = l(792996),
    b = l(32924);
let A = {
    bots: i.RobotIcon,
    channels: a.AppsIcon,
    test_app: u.BeakerIcon,
    profile_widget: r.IdCardIcon,
    overlay: s.GameControllerIcon,
    automod: o.ShieldIcon,
    collaboration: d.GroupIcon,
    only_you: c.UserIcon,
    server: p.ServerIcon,
    settings: f.SettingsIcon,
};
l.d(
    n,
    {},
    {
        A: function (t) {
            let { rows: n } = t;
            return (0, e.jsxs)(g.B, {
                gap: 8,
                children: [
                    (0, e.jsx)(h.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: m.intl.string(_.default["kG/2e8"]),
                    }),
                    (0, e.jsx)("div", {
                        className: b.a,
                        children: n.map((t) => {
                            let n = A[t.key];
                            return (0, e.jsxs)(
                                "div",
                                {
                                    className: b.n,
                                    children: [
                                        (0, e.jsx)(n, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                                        (0, e.jsx)(h.E, {
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

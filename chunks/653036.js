var n = l(477900);
l(582128);
var a = l(430392),
    r = l(323384),
    i = l(127062),
    s = l(280645),
    u = l(687966),
    o = l(231483),
    d = l(177953),
    c = l(950305),
    f = l(152367),
    m = l(664121),
    g = l(625903),
    p = l(331322),
    v = l(834730),
    h = l(191850),
    x = l(792996),
    b = l(32924);
let y = {
    bots: a.RobotIcon,
    channels: r.AppsIcon,
    test_app: i.BeakerIcon,
    profile_widget: s.IdCardIcon,
    overlay: u.GameControllerIcon,
    automod: o.ShieldIcon,
    collaboration: d.GroupIcon,
    only_you: c.UserIcon,
    location: f.MagicWandIcon,
    server: m.ServerIcon,
    settings: g.SettingsIcon,
};
l.d(
    t,
    {},
    {
        A: function (e) {
            let { rows: t } = e;
            return (0, n.jsxs)(p.B, {
                gap: 8,
                children: [
                    (0, n.jsx)(v.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: x.intl.string(h.default["kG/2e8"]),
                    }),
                    (0, n.jsx)("div", {
                        className: b.aP,
                        children: t.map((e) => {
                            let t = y[e.key];
                            return (0, n.jsxs)(
                                "div",
                                {
                                    className: b.nM,
                                    children: [
                                        (0, n.jsx)(t, {
                                            size: "sm",
                                            color: "currentColor",
                                            className: b.Kk,
                                            "aria-hidden": !0,
                                        }),
                                        (0, n.jsx)(v.E, {
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

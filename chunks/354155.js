var e = i(477900);
i(582128);
var a = i(189213),
    r = i(331322),
    l = i(834730),
    s = i(95264),
    o = i(529424),
    c = i(589444),
    d = i(191850),
    p = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { applicationId: n, guildId: i, transitionState: u, onClose: x } = t,
                j = (0, o.A)(n),
                y = { text: p.intl.string(p.t.cpT0Cq), variant: "secondary", onClick: x };
            if ("ready" !== j.type && "info_only" !== j.type)
                return (0, e.jsx)(a.a, {
                    transitionState: u,
                    onClose: x,
                    title: p.intl.string("loading" === j.type ? p.t.ZTNur7 : d.default.mQma36),
                    actions: [y],
                });
            let { application: m } = j,
                g = "ready" === j.type && j.canRemix ? j.project : null;
            function f() {
                null != g && (x(), (0, s.A)(g, i));
            }
            return (0, e.jsx)(a.a, {
                transitionState: u,
                onClose: x,
                title: m.name,
                size: "md",
                actions:
                    null == g
                        ? [y]
                        : [
                              { text: p.intl.string(d.default["6RGR3m"]), variant: "secondary", onClick: f },
                              { text: p.intl.string(d.default["UsUa/c"]), variant: "primary", onClick: f },
                          ],
                children: (0, e.jsxs)(r.B, {
                    gap: 16,
                    children: [
                        (0, e.jsx)(c.go, { application: m }),
                        (0, e.jsx)(c.PJ, { application: m }),
                        "ready" === j.type
                            ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                      (0, e.jsx)(c.r8, { project: j.project }),
                                      (0, e.jsx)(c.HP, { project: j.project, guildId: i }),
                                  ],
                              })
                            : (0, e.jsx)(l.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: p.intl.string(d.default["2DSRxV"]),
                              }),
                    ],
                }),
            });
        },
    },
);

var a = i(477900);
i(582128);
var e = i(189213),
    l = i(331322),
    r = i(834730),
    o = i(95264),
    c = i(529424),
    s = i(995907),
    d = i(395009),
    p = i(589444),
    u = i(191850),
    x = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { applicationId: n, source: i, transitionState: y, onClose: j } = t,
                { guildId: m } = i,
                h = (0, c.A)(n),
                {
                    type: f,
                    launching: g,
                    launchFailed: k,
                    run: C,
                } = (0, s.A)(n, "ready" === h.type ? h.project : null, i),
                v = { text: x.intl.string(x.t.cpT0Cq), variant: "secondary", onClick: j };
            if ("ready" !== h.type && "info_only" !== h.type)
                return (0, a.jsx)(e.a, {
                    transitionState: y,
                    onClose: j,
                    title: x.intl.string("loading" === h.type ? x.t.ZTNur7 : u.default.mQma36),
                    actions: [v],
                });
            let { application: b } = h,
                A = "ready" === h.type && h.canRemix ? h.project : null;
            function R(t) {
                null != A && (j(), (0, o.A)(A, m, t));
            }
            return (0, a.jsx)(e.a, {
                transitionState: y,
                onClose: j,
                title: b.name,
                size: "md",
                actions:
                    null == A
                        ? [v]
                        : [
                              {
                                  text: x.intl.string(u.default["6RGR3m"]),
                                  variant: "secondary",
                                  onClick: () => R("remix"),
                              },
                              {
                                  text: x.intl.string(u.default["UsUa/c"]),
                                  variant: "primary",
                                  onClick: () => R("copy"),
                              },
                          ],
                children: (0, a.jsxs)(l.B, {
                    gap: 16,
                    children: [
                        null != f
                            ? (0, a.jsx)(d.A, {
                                  application: b,
                                  type: f,
                                  launching: g,
                                  onAction: async function () {
                                      (await C()) && j();
                                  },
                              })
                            : (0, a.jsx)(p.go, { application: b }),
                        k
                            ? (0, a.jsx)(r.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  children: x.intl.string(u.default.hh2nuX),
                              })
                            : null,
                        (0, a.jsx)(p.PJ, { application: b }),
                        "ready" === h.type
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(p.r8, { project: h.project }),
                                      (0, a.jsx)(p.HP, { project: h.project, guildId: m }),
                                  ],
                              })
                            : (0, a.jsx)(r.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: x.intl.string(u.default["2DSRxV"]),
                              }),
                    ],
                }),
            });
        },
    },
);

var a = i(477900);
i(582128);
var e = i(189213),
    l = i(331322),
    r = i(834730),
    o = i(95264),
    c = i(529424),
    s = i(412667),
    d = i(395009),
    p = i(589444),
    u = i(191850),
    x = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { applicationId: n, source: i, ticket: y = null, transitionState: j, onClose: h } = t,
                { guildId: m } = i,
                f = (0, c.A)(n, y),
                {
                    type: g,
                    launching: v,
                    launchFailed: k,
                    run: C,
                } = (0, s.A)(n, "ready" === f.type ? f.project : null, i),
                b = { text: x.intl.string(x.t.cpT0Cq), variant: "secondary", onClick: h };
            if ("ready" !== f.type && "info_only" !== f.type)
                return (0, a.jsx)(e.a, {
                    transitionState: j,
                    onClose: h,
                    title: x.intl.string(
                        "loading" === f.type ? x.t.ZTNur7 : "expired" === f.type ? u.default.wahvH2 : u.default.mQma36,
                    ),
                    actions: [b],
                });
            let { application: A } = f,
                w = "ready" === f.type && f.canRemix ? f.project : null;
            function R(t) {
                null != w && (h(), (0, o.A)(w, m, t, y ?? void 0));
            }
            return (0, a.jsx)(e.a, {
                transitionState: j,
                onClose: h,
                title: A.name,
                size: "md",
                actions:
                    null == w
                        ? [b]
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
                        null != g
                            ? (0, a.jsx)(d.A, {
                                  application: A,
                                  type: g,
                                  launching: v,
                                  onAction: async function () {
                                      (await C()) && h();
                                  },
                              })
                            : (0, a.jsx)(p.go, { application: A }),
                        k
                            ? (0, a.jsx)(r.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  children: x.intl.string(u.default.hh2nuX),
                              })
                            : null,
                        (0, a.jsx)(p.PJ, { application: A }),
                        "ready" === f.type
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      (0, a.jsx)(p.r8, { project: f.project }),
                                      (0, a.jsx)(p.HP, { project: f.project, guildId: m }),
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

var e = i(477900);
i(582128);
var a = i(189213),
    l = i(331322),
    r = i(834730),
    o = i(95264),
    c = i(529424),
    s = i(412667),
    d = i(395009),
    p = i(207602),
    u = i(258576),
    x = i(792996);
i.d(
    n,
    {},
    {
        default: function (t) {
            let { applicationId: n, source: i, ticket: y = null, transitionState: j, onClose: h } = t,
                { guildId: f } = i,
                g = (0, c.A)(n, y),
                {
                    type: m,
                    launching: v,
                    launchFailed: k,
                    run: C,
                } = (0, s.A)(n, "ready" === g.type ? g.project : null, i),
                A = { text: x.intl.string(x.t.cpT0Cq), variant: "secondary", onClick: h };
            if ("ready" !== g.type && "info_only" !== g.type)
                return (0, e.jsx)(a.a, {
                    transitionState: j,
                    onClose: h,
                    title: x.intl.string(
                        "loading" === g.type ? x.t.ZTNur7 : "expired" === g.type ? u.default.wahvH2 : u.default.mQma36,
                    ),
                    actions: [A],
                });
            let { application: b } = g,
                w = "ready" === g.type && g.canRemix ? g.project : null;
            return (0, e.jsx)(a.a, {
                transitionState: j,
                onClose: h,
                title: b.name,
                size: "md",
                actions:
                    null == w
                        ? [A]
                        : [
                              A,
                              {
                                  text: x.intl.string(u.default.XWgAfc),
                                  variant: "primary",
                                  onClick: function () {
                                      null != w && (h(), (0, o.A)(w, f, y ?? void 0));
                                  },
                              },
                          ],
                children: (0, e.jsxs)(l.B, {
                    gap: 16,
                    children: [
                        null != m
                            ? (0, e.jsx)(d.A, {
                                  application: b,
                                  type: m,
                                  launching: v,
                                  onAction: async function () {
                                      (await C()) && h();
                                  },
                              })
                            : (0, e.jsx)(p.go, { application: b }),
                        k
                            ? (0, e.jsx)(r.E, {
                                  variant: "body-sm/normal",
                                  color: "text-feedback-critical",
                                  children: x.intl.string(u.default.hh2nuX),
                              })
                            : null,
                        (0, e.jsx)(p.PJ, { application: b }),
                        "ready" === g.type
                            ? (0, e.jsxs)(e.Fragment, {
                                  children: [
                                      (0, e.jsx)(p.r8, { project: g.project }),
                                      (0, e.jsx)(p.HP, { project: g.project, guildId: f }),
                                  ],
                              })
                            : (0, e.jsx)(r.E, {
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

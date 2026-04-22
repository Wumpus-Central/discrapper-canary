l.d(n, { A: () => C });
var t = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    s = l(311907),
    a = l(778712),
    o = l(109112),
    d = l(939249),
    c = l(834730),
    u = l(730134),
    g = l(169869),
    A = l(837057),
    m = l(310419),
    f = l(773669),
    p = l(427157),
    x = l(967198),
    h = l(183555),
    v = l(488995),
    j = l(985018),
    I = l(985176);
function b(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        s = (0, g.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: I.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(u.A, { user: new p.A(n.application.bot), size: a._3.SIZE_16 })
                        : (0, t.jsx)(o._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: I.Hd,
                children: [
                    (0, t.jsxs)(d.D, {
                        className: I.OB,
                        onClick: () => {
                            i?.(),
                                (0, A.transitionToGlobalDiscovery)({
                                    tab: v.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: m.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(c.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: I.nk,
                                children: j.intl.format(j.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, t.jsx)("div", { className: I.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function C(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: a } = (0, h.NJ)(),
        o = (0, s.bG)([f.default], () => f.default.locale),
        d = (0, s.bG)([x.A], () => x.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: r()(I.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: I.FI,
                          children: (0, t.jsx)(b, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  a({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}

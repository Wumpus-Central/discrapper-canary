t.d(n, { A: () => C });
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(311907),
    s = t(778712),
    o = t(109112),
    d = t(939249),
    c = t(834730),
    u = t(730134),
    g = t(169869),
    A = t(837057),
    f = t(310419),
    m = t(773669),
    p = t(427157),
    x = t(967198),
    h = t(183555),
    v = t(488995),
    j = t(985018),
    I = t(985176);
function b(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, g.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: I.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(u.A, { user: new p.A(n.application.bot), size: s._3.SIZE_16 })
                        : (0, l.jsx)(o._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: I.Hd,
                children: [
                    (0, l.jsxs)(d.D, {
                        className: I.OB,
                        onClick: () => {
                            i?.(),
                                (0, A.transitionToGlobalDiscovery)({
                                    tab: v.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: f.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(c.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: I.nk,
                                children: j.intl.format(j.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, l.jsx)("div", { className: I.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function C(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: s } = (0, h.NJ)(),
        o = (0, a.bG)([m.default], () => m.default.locale),
        d = (0, a.bG)([x.A], () => x.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(I.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: I.FI,
                          children: (0, l.jsx)(b, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  s({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}

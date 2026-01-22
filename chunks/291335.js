t.d(l, { A: () => v });
var n = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    s = t(311907),
    a = t(397927),
    o = t(730134),
    d = t(169869),
    c = t(837057),
    u = t(310419),
    f = t(773669),
    p = t(427157),
    m = t(967198),
    x = t(183555),
    A = t(488995),
    j = t(985018),
    h = t(882119);
function g(e) {
    let { applicationRoleConnection: l, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        s = (0, d.VW)(l, t);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: h.k_,
                children:
                    null != l.application.bot
                        ? (0, n.jsx)(o.A, {
                              user: new p.A(l.application.bot),
                              size: a._3J.SIZE_16,
                          })
                        : (0, n.jsx)(a._7Z, {
                              color: "currentColor",
                              size: "sm",
                          }),
            }),
            (0, n.jsxs)("div", {
                className: h.Hd,
                children: [
                    (0, n.jsxs)(a.DUT, {
                        className: h.OB,
                        onClick: () => {
                            null == i || i(),
                                (0, c.transitionToGlobalDiscovery)({
                                    tab: A.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: u.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, n.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, n.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, n.jsx)(a.Text, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: h.nk,
                                children: j.intl.format(j.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0
                        ? (0, n.jsx)("div", {
                              className: h.yu,
                              children: s,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function v(e) {
    let { applicationRoleConnections: l, className: t, onClose: i } = e,
        { trackUserProfileAction: a } = (0, x.NJ)(),
        o = (0, s.bG)([f.default], () => f.default.locale),
        d = (0, s.bG)([m.A], () => m.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, n.jsx)("ul", {
              className: r()(h.kL, t),
              children: l.map((e, l) =>
                  (0, n.jsx)(
                      "li",
                      {
                          className: h.FI,
                          children: (0, n.jsx)(g, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  a({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: null != d ? d : void 0,
                          }),
                      },
                      "".concat(l, "-").concat(e.application.id),
                  ),
              ),
          });
}

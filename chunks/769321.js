t.d(n, { Z: () => b });
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(481060),
    a = t(99690),
    c = t(888496),
    d = t(749681),
    u = t(258971),
    m = t(706454),
    p = t(598077),
    f = t(914010),
    h = t(785717),
    x = t(49898),
    j = t(388032),
    v = t(20163);
function g(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        o = (0, c.rm)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: v.platformIconContainer,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(a.Z, {
                              user: new p.Z(n.application.bot),
                              size: s.EFr.SIZE_16,
                          })
                        : (0, l.jsx)(s.IMN, {
                              color: "currentColor",
                              size: "sm",
                          }),
            }),
            (0, l.jsxs)("div", {
                className: v.connectionInfo,
                children: [
                    (0, l.jsxs)(s.P3F, {
                        className: v.connectedAppRoleAccountClickable,
                        onClick: () => {
                            null == i || i(),
                                (0, d.transitionToGlobalDiscovery)({
                                    tab: x.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: u.xF.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(s.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(s.Text, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: v.connectedAppRoleAccountPoweredBy,
                                children: j.intl.format(j.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != o && o.length > 0
                        ? (0, l.jsx)("div", {
                              className: v.metadata,
                              children: o,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function b(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: s } = (0, h.KZ)(),
        a = (0, o.e7)([m.default], () => m.default.locale),
        c = (0, o.e7)([f.Z], () => f.Z.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(v.container, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: v.connection,
                          children: (0, l.jsx)(g, {
                              applicationRoleConnection: e,
                              locale: a,
                              onApplicationClicked: () => {
                                  s({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: null != c ? c : void 0,
                          }),
                      },
                      "".concat(n, "-").concat(e.application.id),
                  ),
              ),
          });
}

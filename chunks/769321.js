t.d(n, { Z: () => g });
var l = t(54381);
t(473749);
var i = t(120356),
    o = t.n(i),
    r = t(442837),
    a = t(481060),
    c = t(99690),
    s = t(888496),
    d = t(749681),
    u = t(258971),
    f = t(706454),
    m = t(598077),
    p = t(914010),
    x = t(785717),
    h = t(49898),
    b = t(388032),
    v = t(980120);
function j(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: o } = e,
        r = (0, s.rm)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: v.platformIconContainer,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(c.Z, {
                              user: new m.Z(n.application.bot),
                              size: a.EFr.SIZE_16,
                          })
                        : (0, l.jsx)(a.IMN, {
                              color: "currentColor",
                              size: "sm",
                          }),
            }),
            (0, l.jsxs)("div", {
                className: v.connectionInfo,
                children: [
                    (0, l.jsxs)(a.P3F, {
                        className: v.connectedAppRoleAccountClickable,
                        onClick: () => {
                            null == i || i(),
                                (0, d.transitionToGlobalDiscovery)({
                                    tab: h.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: u.xF.APPLICATION_DIRECTORY_URL },
                                        guildId: o,
                                    },
                                });
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(a.Text, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(a.Text, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: v.connectedAppRoleAccountPoweredBy,
                                children: b.intl.format(b.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0
                        ? (0, l.jsx)("div", {
                              className: v.metadata,
                              children: r,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function g(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: a } = (0, x.KZ)(),
        c = (0, r.e7)([f.default], () => f.default.locale),
        s = (0, r.e7)([p.Z], () => p.Z.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: o()(v.container, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: v.connection,
                          children: (0, l.jsx)(j, {
                              applicationRoleConnection: e,
                              locale: c,
                              onApplicationClicked: () => {
                                  a({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: null != s ? s : void 0,
                          }),
                      },
                      "".concat(n, "-").concat(e.application.id),
                  ),
              ),
          });
}

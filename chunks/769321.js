t.d(n, { Z: () => b });
var l = t(54381);
t(473749);
var i = t(120356),
    o = t.n(i),
    r = t(442837),
    s = t(481060),
    a = t(99690),
    c = t(888496),
    d = t(749681),
    u = t(258971),
    m = t(706454),
    p = t(598077),
    f = t(914010),
    x = t(785717),
    h = t(49898),
    v = t(388032),
    j = t(20163);
function g(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: o } = e,
        r = (0, c.rm)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: j.platformIconContainer,
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
                className: j.connectionInfo,
                children: [
                    (0, l.jsxs)(s.P3F, {
                        className: j.connectedAppRoleAccountClickable,
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
                                className: j.connectedAppRoleAccountPoweredBy,
                                children: v.intl.format(v.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != r && r.length > 0
                        ? (0, l.jsx)("div", {
                              className: j.metadata,
                              children: r,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function b(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: s } = (0, x.KZ)(),
        a = (0, r.e7)([m.default], () => m.default.locale),
        c = (0, r.e7)([f.Z], () => f.Z.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: o()(j.container, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: j.connection,
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

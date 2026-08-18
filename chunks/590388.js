t.d(n, { A: () => I });
var i = t(477900),
    r = t(582128),
    s = t(922016),
    l = t(980707),
    a = t(477782),
    o = t(534890),
    c = t(625903),
    d = t(939249),
    u = t(365199),
    p = t(442433),
    g = t(793574),
    v = t(363487),
    h = t(123917),
    m = t(981381),
    x = t(144977),
    f = t(628049),
    j = t(275695),
    b = t(375708),
    y = t(409205);
let A = { steps: { [f.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function I(e) {
    let { guildId: n, instance: t } = e,
        f = r.useRef(null),
        I = (0, m.A)(t.providerType, t.gameServerPanelUrl);
    return (0, v.A)(n)
        ? (0, i.jsx)(s.Y, {
              targetElementRef: f,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: r } = e;
                  return (0, i.jsx)(l.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, p.Z_)(), r();
                      },
                      "aria-label": b.intl.string(j.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, i.jsxs)(a.rX, {
                          children: [
                              null != I &&
                                  (0, i.jsx)(a.Dr, {
                                      id: "get-support",
                                      icon: o.ChatIcon,
                                      leadingAccessory: { type: "icon", icon: o.ChatIcon },
                                      label: b.intl.string(j.default.bBkeMs),
                                      action: () => {
                                          (0, h.h)({ href: I });
                                      },
                                  }),
                              (0, i.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: c.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: c.SettingsIcon },
                                  label: b.intl.string(j.default["feUiM/"]),
                                  action: () => {
                                      (0, x.A)({
                                          guildId: n,
                                          stepConfig: A,
                                          initialGameServerInstance: t,
                                          analyticsLocation: g.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, i.jsx)(d.D, {
                      "aria-label": b.intl.string(b.t["UKOtz+"]),
                      className: y.v,
                      ...e,
                      innerRef: f,
                      children: (0, i.jsx)(u.MoreHorizontalIcon, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

n.d(t, { A: () => v });
var l = n(477900),
    i = n(582128);
if (221552 == n.j) var r = n(922016);
if (221552 == n.j) var s = n(980707);
if (221552 == n.j) var a = n(477782);
if (221552 == n.j) var o = n(534890);
if (221552 == n.j) var u = n(625903);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var c = n(365199);
var _ = n(442433),
    E = n(793574),
    S = n(363487),
    f = n(123917),
    A = n(981381),
    I = n(144977),
    g = n(628049),
    h = n(632847),
    C = n(375708),
    p = n(784420);
let R = { steps: { [g.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function v(e) {
    let { guildId: t, instance: n } = e,
        g = i.useRef(null),
        v = (0, A.A)(n.providerType, n.gameServerPanelUrl);
    return (0, S.A)(t)
        ? (0, l.jsx)(r.Y, {
              targetElementRef: g,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, l.jsx)(s.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, _.Z_)(), i();
                      },
                      "aria-label": C.intl.string(h.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, l.jsxs)(a.rX, {
                          children: [
                              null != v &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "get-support",
                                      icon: o.ChatIcon,
                                      leadingAccessory: { type: "icon", icon: o.ChatIcon },
                                      label: C.intl.string(h.default.bBkeMs),
                                      action: () => {
                                          (0, f.h)({ href: v });
                                      },
                                  }),
                              (0, l.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: u.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                  label: C.intl.string(h.default["feUiM/"]),
                                  action: () => {
                                      (0, I.A)({
                                          guildId: t,
                                          stepConfig: R,
                                          initialGameServerInstance: n,
                                          analyticsLocation: E.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, l.jsx)(d.D, {
                      "aria-label": C.intl.string(C.t["UKOtz+"]),
                      className: p.v,
                      ...e,
                      innerRef: g,
                      children: (0, l.jsx)(c.MoreHorizontalIcon, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128);
if (221552 == n.j) var r = n(922016);
if (221552 == n.j) var s = n(980707);
if (221552 == n.j) var a = n(477782);
if (221552 == n.j) var o = n(534890);
if (221552 == n.j) var c = n(625903);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var u = n(365199);
var E = n(442433),
    g = n(793574),
    h = n(363487),
    _ = n(123917),
    A = n(981381),
    S = n(144977),
    f = n(628049),
    I = n(632847),
    C = n(375708),
    p = n(784420);
let m = { steps: { [f.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function v(e) {
    let { guildId: t, instance: n } = e,
        f = l.useRef(null),
        v = (0, A.A)(n.providerType, n.gameServerPanelUrl);
    return (0, h.A)(t)
        ? (0, i.jsx)(r.Y, {
              targetElementRef: f,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: l } = e;
                  return (0, i.jsx)(s.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, E.Z_)(), l();
                      },
                      "aria-label": C.intl.string(I.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, i.jsxs)(a.rX, {
                          children: [
                              null != v &&
                                  (0, i.jsx)(a.Dr, {
                                      id: "get-support",
                                      icon: o.ChatIcon,
                                      leadingAccessory: { type: "icon", icon: o.ChatIcon },
                                      label: C.intl.string(I.default.bBkeMs),
                                      action: () => {
                                          (0, _.h)({ href: v });
                                      },
                                  }),
                              (0, i.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: c.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: c.SettingsIcon },
                                  label: C.intl.string(I.default["feUiM/"]),
                                  action: () => {
                                      (0, S.A)({
                                          guildId: t,
                                          stepConfig: m,
                                          initialGameServerInstance: n,
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
                      "aria-label": C.intl.string(C.t["UKOtz+"]),
                      className: p.v,
                      ...e,
                      innerRef: f,
                      children: (0, i.jsx)(u.MoreHorizontalIcon, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

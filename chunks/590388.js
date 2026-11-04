var l = n(477900),
    i = n(582128);
if (221552 == n.j) var r = n(265872);
if (221552 == n.j) var s = n(165862);
if (221552 == n.j) var a = n(477782);
if (221552 == n.j) var o = n(534890);
if (221552 == n.j) var u = n(625903);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var c = n(365199);
var _ = n(442433),
    E = n(793574),
    f = n(363487),
    A = n(889558),
    S = n(981381),
    I = n(144977),
    g = n(628049),
    C = n(105518),
    h = n(792996),
    p = n(784420);
let R = { steps: { [g.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, instance: n } = e,
                g = i.useRef(null),
                m = (0, S.A)(n.providerType, n.gameServerPanelUrl);
            return (0, f.A)(t)
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
                                  ((0, _.Z_)(), i());
                              },
                              "aria-label": h.intl.string(C.default["yb+ork"]),
                              onSelect: void 0,
                              children: (0, l.jsxs)(a.rX, {
                                  children: [
                                      null != m &&
                                          (0, l.jsx)(a.Dr, {
                                              id: "get-support",
                                              icon: o.ChatIcon,
                                              leadingAccessory: { type: "icon", icon: o.ChatIcon },
                                              label: h.intl.string(C.default.bBkeMs),
                                              action: () => {
                                                  (0, A.h)({ href: m });
                                              },
                                          }),
                                      (0, l.jsx)(a.Dr, {
                                          id: "settings",
                                          icon: u.SettingsIcon,
                                          leadingAccessory: { type: "icon", icon: u.SettingsIcon },
                                          label: h.intl.string(C.default["feUiM/"]),
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
                              "aria-label": h.intl.string(h.t["UKOtz+"]),
                              className: p.v,
                              ...e,
                              innerRef: g,
                              children: (0, l.jsx)(c.MoreHorizontalIcon, { color: "currentColor", size: "sm" }),
                          }),
                  })
                : null;
        },
    },
);

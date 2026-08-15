n.d(t, { A: () => v });
var i = n(477900),
    l = n(582128);
if (221552 == n.j) var r = n(922016);
if (221552 == n.j) var s = n(980707);
if (221552 == n.j) var a = n(477782);
if (221552 == n.j) var o = n(534890);
if (221552 == n.j) var d = n(625903);
if (221552 == n.j) var u = n(939249);
if (221552 == n.j) var c = n(365199);
var E = n(442433),
    g = n(793574),
    h = n(363487),
    A = n(123917),
    _ = n(981381),
    f = n(144977),
    S = n(628049),
    I = n(275695),
    C = n(375708),
    m = n(409205);
let p = { steps: { [S.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function v(e) {
    let { guildId: t, instance: n } = e,
        S = l.useRef(null),
        v = (0, _.A)(n.providerType, n.gameServerPanelUrl);
    return (0, h.A)(t)
        ? (0, i.jsx)(r.Y, {
              targetElementRef: S,
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
                                      icon: o.o,
                                      leadingAccessory: { type: "icon", icon: o.o },
                                      label: C.intl.string(I.default.bBkeMs),
                                      action: () => {
                                          (0, A.h)({ href: v });
                                      },
                                  }),
                              (0, i.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: d.Z,
                                  leadingAccessory: { type: "icon", icon: d.Z },
                                  label: C.intl.string(I.default["feUiM/"]),
                                  action: () => {
                                      (0, f.A)({
                                          guildId: t,
                                          stepConfig: p,
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
                  (0, i.jsx)(u.D, {
                      "aria-label": C.intl.string(C.t["UKOtz+"]),
                      className: m.v,
                      ...e,
                      innerRef: S,
                      children: (0, i.jsx)(c.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

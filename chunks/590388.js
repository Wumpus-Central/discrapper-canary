t.d(n, { A: () => E });
var l = t(477900),
    r = t(582128),
    i = t(922016),
    s = t(980707),
    a = t(477782),
    o = t(534890),
    c = t(625903),
    d = t(939249),
    u = t(365199),
    p = t(442433),
    v = t(793574),
    m = t(363487),
    g = t(123917),
    h = t(981381),
    x = t(144977),
    f = t(628049),
    j = t(275695),
    A = t(375708),
    b = t(409205);
let y = { steps: { [f.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function E(e) {
    let { guildId: n, instance: t } = e,
        f = r.useRef(null),
        E = (0, h.A)(t.providerType, t.gameServerPanelUrl);
    return (0, m.A)(n)
        ? (0, l.jsx)(i.Y, {
              targetElementRef: f,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: r } = e;
                  return (0, l.jsx)(s.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, p.Z_)(), r();
                      },
                      "aria-label": A.intl.string(j.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, l.jsxs)(a.rX, {
                          children: [
                              null != E &&
                                  (0, l.jsx)(a.Dr, {
                                      id: "get-support",
                                      icon: o.o,
                                      leadingAccessory: { type: "icon", icon: o.o },
                                      label: A.intl.string(j.default.bBkeMs),
                                      action: () => {
                                          (0, g.h)({ href: E });
                                      },
                                  }),
                              (0, l.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: c.Z,
                                  leadingAccessory: { type: "icon", icon: c.Z },
                                  label: A.intl.string(j.default["feUiM/"]),
                                  action: () => {
                                      (0, x.A)({
                                          guildId: n,
                                          stepConfig: y,
                                          initialGameServerInstance: t,
                                          analyticsLocation: v.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, l.jsx)(d.D, {
                      "aria-label": A.intl.string(A.t["UKOtz+"]),
                      className: b.v,
                      ...e,
                      innerRef: f,
                      children: (0, l.jsx)(u.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

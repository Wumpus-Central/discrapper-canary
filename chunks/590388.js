t.d(n, { A: () => N });
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
    v = t(793574),
    m = t(363487),
    g = t(123917),
    h = t(981381),
    x = t(144977),
    j = t(628049),
    f = t(275695),
    b = t(375708),
    y = t(409205);
let A = { steps: { [j.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function N(e) {
    let { guildId: n, instance: t } = e,
        j = r.useRef(null),
        N = (0, h.A)(t.providerType, t.gameServerPanelUrl);
    return (0, m.A)(n)
        ? (0, i.jsx)(s.Y, {
              targetElementRef: j,
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
                      "aria-label": b.intl.string(f.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, i.jsxs)(a.rX, {
                          children: [
                              null != N &&
                                  (0, i.jsx)(a.Dr, {
                                      id: "get-support",
                                      icon: o.o,
                                      leadingAccessory: { type: "icon", icon: o.o },
                                      label: b.intl.string(f.default.bBkeMs),
                                      action: () => {
                                          (0, g.h)({ href: N });
                                      },
                                  }),
                              (0, i.jsx)(a.Dr, {
                                  id: "settings",
                                  icon: c.Z,
                                  leadingAccessory: { type: "icon", icon: c.Z },
                                  label: b.intl.string(f.default["feUiM/"]),
                                  action: () => {
                                      (0, x.A)({
                                          guildId: n,
                                          stepConfig: A,
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
                  (0, i.jsx)(d.D, {
                      "aria-label": b.intl.string(b.t["UKOtz+"]),
                      className: y.v,
                      ...e,
                      innerRef: j,
                      children: (0, i.jsx)(u.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

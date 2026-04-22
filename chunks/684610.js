n.d(t, { A: () => C });
var a = n(627968),
    s = n(64700),
    i = n(265872),
    l = n(861672),
    r = n(477782),
    d = n(534890),
    c = n(625903),
    o = n(939249),
    u = n(365199),
    _ = n(442433),
    m = n(793574),
    x = n(307600),
    f = n(363487),
    g = n(365003),
    v = n(843095),
    j = n(800007),
    h = n(76660),
    A = n(985018),
    p = n(590795);
let E = { steps: { [j.HS.SERVER_SETTINGS]: { onBack: { type: "close" }, onNext: { type: "save" } } } };
function C(e) {
    let { guildId: t, instance: n } = e,
        j = s.useRef(null),
        C = (0, g.A)(n.providerType, n.gameServerPanelUrl);
    return (0, f.A)(t)
        ? (0, a.jsx)(i.Y, {
              targetElementRef: j,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, a.jsx)(l.W, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, _.Z_)(), s();
                      },
                      "aria-label": A.intl.string(h.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, a.jsxs)(r.rX, {
                          children: [
                              null != C &&
                                  (0, a.jsx)(r.Dr, {
                                      id: "get-support",
                                      icon: d.o,
                                      leadingAccessory: { type: "icon", icon: d.o },
                                      label: A.intl.string(h.default.bBkeMs),
                                      action: () => {
                                          (0, x.h)({ href: C });
                                      },
                                  }),
                              (0, a.jsx)(r.Dr, {
                                  id: "settings",
                                  icon: c.Z,
                                  leadingAccessory: { type: "icon", icon: c.Z },
                                  label: A.intl.string(h.default["feUiM/"]),
                                  action: () => {
                                      (0, v.A)({
                                          guildId: t,
                                          stepConfig: E,
                                          initialGameServerInstance: n,
                                          analyticsLocation: m.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) =>
                  (0, a.jsx)(o.D, {
                      "aria-label": A.intl.string(A.t["UKOtz+"]),
                      className: p.v,
                      ...e,
                      innerRef: j,
                      children: (0, a.jsx)(u.j, { color: "currentColor", size: "sm" }),
                  }),
          })
        : null;
}

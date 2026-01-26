n.d(t, {
    A: () => v,
});
var r = n(627968),
    a = n(64700),
    i = n(397927),
    l = n(442433),
    s = n(793574),
    o = n(307600),
    c = n(363487),
    d = n(365003),
    u = n(843095),
    m = n(800007),
    g = n(294726),
    f = n(985018),
    _ = n(396936);
let x = {
    steps: {
        [m.HS.SERVER_SETTINGS]: {
            onBack: {
                type: "close",
            },
            onNext: {
                type: "save",
            },
        },
    },
};

function v(e) {
    let { guildId: t, instance: n } = e,
        m = a.useRef(null),
        v = (0, d.A)(n.providerType, n.gameServerPanelUrl);
    return (0, c.A)(t)
        ? (0, r.jsx)(i.YNO, {
              targetElementRef: m,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, r.jsx)(i.W1t, {
                      "data-menu-migrated": !0,
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, l.Z_)(), a();
                      },
                      "aria-label": f.intl.string(g.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, r.jsxs)(i.rXV, {
                          children: [
                              null != v &&
                                  (0, r.jsx)(i.Drp, {
                                      id: "get-support",
                                      icon: i.oyn,
                                      leadingAccessory: {
                                          type: "icon",
                                          icon: i.oyn,
                                      },
                                      label: f.intl.string(g.default.bBkeMs),
                                      action: () => {
                                          (0, o.h)({
                                              href: v,
                                          });
                                      },
                                  }),
                              (0, r.jsx)(i.Drp, {
                                  id: "settings",
                                  icon: i.Zes,
                                  leadingAccessory: {
                                      type: "icon",
                                      icon: i.Zes,
                                  },
                                  label: f.intl.string(g.default["feUiM/"]),
                                  action: () => {
                                      (0, u.A)({
                                          guildId: t,
                                          stepConfig: x,
                                          initialGameServerInstance: n,
                                          analyticsLocation: s.A.GAME_SERVER_PAGE,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(
                      i.DUT,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              "aria-label": f.intl.string(f.t["UKOtz+"]),
                              className: _.v,
                          },
                          e,
                      )),
                      (n = n =
                          {
                              innerRef: m,
                              children: (0, r.jsx)(i.jNK, {
                                  color: "currentColor",
                                  size: "sm",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t),
                  );
              },
          })
        : null;
}

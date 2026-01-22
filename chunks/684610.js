n.d(t, { A: () => v });
var r = n(627968),
    a = n(64700),
    l = n(397927),
    i = n(442433),
    s = n(793574),
    c = n(307600),
    o = n(363487),
    d = n(365003),
    u = n(843095),
    f = n(800007),
    b = n(294726),
    m = n(985018),
    x = n(396936);
let j = {
    steps: {
        [f.HS.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function v(e) {
    let { guildId: t, instance: n } = e,
        f = a.useRef(null),
        v = (0, d.A)(n.providerType, n.gameServerPanelUrl);
    return (0, o.A)(t)
        ? (0, r.jsx)(l.YNO, {
              targetElementRef: f,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, r.jsx)(l.W1t, {
                      navId: "game_server-popout-context-menu",
                      onClose: () => {
                          (0, i.Z_)(), a();
                      },
                      "aria-label": m.intl.string(b.default["yb+ork"]),
                      onSelect: void 0,
                      children: (0, r.jsxs)(l.rXV, {
                          children: [
                              null != v &&
                                  (0, r.jsx)(l.Drp, {
                                      id: "get-support",
                                      icon: l.oyn,
                                      label: m.intl.string(b.default.bBkeMs),
                                      action: () => {
                                          (0, c.h)({ href: v });
                                      },
                                  }),
                              (0, r.jsx)(l.Drp, {
                                  id: "settings",
                                  icon: l.Zes,
                                  label: m.intl.string(b.default["feUiM/"]),
                                  action: () => {
                                      (0, u.A)({
                                          guildId: t,
                                          stepConfig: j,
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
                      l.DUT,
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
                              "aria-label": m.intl.string(m.t["UKOtz+"]),
                              className: x.v,
                          },
                          e,
                      )),
                      (n = n =
                          {
                              innerRef: f,
                              children: (0, r.jsx)(l.jNK, {
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

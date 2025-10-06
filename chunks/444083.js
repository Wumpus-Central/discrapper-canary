t.d(n, { Z: () => x });
var r = t(951288),
    a = t(647438),
    i = t(481060),
    o = t(239091),
    s = t(100527),
    l = t(49012),
    c = t(639777),
    d = t(809741),
    u = t(473682),
    m = t(440589),
    b = t(388032),
    g = t(412247);
let f = {
    steps: {
        [u.Vb.SERVER_SETTINGS]: {
            onBack: { type: "close" },
            onNext: { type: "save" },
        },
    },
};
function x(e) {
    let { guildId: n, instance: t } = e,
        x = a.useRef(null);
    return (0, c.Z)(n)
        ? (0, r.jsx)(i.yRy, {
              targetElementRef: x,
              align: "top",
              position: "right",
              animationPosition: "bottom",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, r.jsx)(i.v2r, {
                      navId: "portkey-popout-context-menu",
                      onClose: () => {
                          (0, o.Zy)(), a();
                      },
                      "aria-label": b.intl.string(m.default.xCq1DA),
                      onSelect: void 0,
                      children: (0, r.jsxs)(i.kSQ, {
                          children: [
                              null != t.providerType &&
                                  (0, r.jsx)(i.sNh, {
                                      id: "get-support",
                                      icon: i.kBi,
                                      label: b.intl.string(m.default["TciV8/"]),
                                      action: () => {
                                          (0, l.q)({ href: u.BH[t.providerType] });
                                      },
                                  }),
                              (0, r.jsx)(i.sNh, {
                                  id: "settings",
                                  icon: i.ewm,
                                  label: b.intl.string(m.default.NUTl4u),
                                  action: () => {
                                      (0, d.Z)({
                                          guildId: n,
                                          stepConfig: f,
                                          initialPortkeyInstance: t,
                                          analyticsLocation: s.Z.PORTKEY_OVERVIEW,
                                      });
                                  },
                              }),
                          ],
                      }),
                  });
              },
              children: (e) => {
                  var n, t;
                  return (0, r.jsx)(
                      i.P3F,
                      ((n = (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(t).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (n) {
                                      var r;
                                      (r = t[n]),
                                          n in e
                                              ? Object.defineProperty(e, n, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[n] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              "aria-label": b.intl.string(b.t.UKOtz8),
                              className: g.clickable,
                          },
                          e,
                      )),
                      (t = t =
                          {
                              innerRef: x,
                              children: (0, r.jsx)(i.xhG, {
                                  color: "currentColor",
                                  size: "sm",
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                          : (function (e, n) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, r);
                                }
                                return t;
                            })(Object(t)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                            }),
                      n),
                  );
              },
          })
        : null;
}

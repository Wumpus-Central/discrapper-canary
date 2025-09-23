t.d(n, { Z: () => O });
var a,
    r,
    i = t(951288),
    o = t(647438),
    s = t(120356),
    c = t.n(s),
    l = t(793030),
    d = t(442837),
    u = t(481060),
    b = t(100527),
    m = t(744993),
    g = t(693587),
    f = t(567225),
    x = t(678328),
    p = t(809741),
    j = t(473682),
    v = t(440589),
    _ = t(388032),
    h = t(197530);
let y =
    ((a = (function (e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
                a = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols &&
                (a = a.concat(
                    Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }),
                )),
                a.forEach(function (n) {
                    var a;
                    (a = t[n]),
                        n in e
                            ? Object.defineProperty(e, n, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[n] = a);
                });
        }
        return e;
    })({}, j.T9)),
    (r = r = { initialStep: j.Vb.SERVER_SETTINGS }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r))
        : (function (e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, a);
              }
              return t;
          })(Object(r)).forEach(function (e) {
              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(r, e));
          }),
    a);
function O(e) {
    let { guildId: n } = e;
    o.useEffect(() => {
        (0, m.po)(n);
    }, [n]);
    let t = (0, d.e7)([g.Z], () => g.Z.getStateForGuild(n)),
        { catalog: a, instances: r } = o.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        s = r.length >= j.zI;
    return 0 === a.length
        ? (0, i.jsx)("div", {
              className: h.container,
              children: (0, i.jsx)(u.$jN, {
                  type: u.RAz.SPINNING_CIRCLE,
                  className: h.spinner,
              }),
          })
        : (0, i.jsxs)("div", {
              className: h.container,
              children: [
                  (0, i.jsx)(l.X6q, {
                      className: h.heading,
                      variant: "heading-md/semibold",
                      children: _.intl.string(v.default.jeYp1t),
                  }),
                  s &&
                      (0, i.jsx)("div", {
                          className: h.maxInstancesWarning,
                          children: (0, i.jsx)(x.Y, {}),
                      }),
                  (0, i.jsx)(l.zJl, {
                      className: c()(h.gameContainerWrapper, { [h.disabled]: s }),
                      children: (0, i.jsx)("div", {
                          className: h.gameContainer,
                          children: a.map((e, t) =>
                              (0, i.jsx)(
                                  f.Z,
                                  {
                                      className: h.game,
                                      game: e,
                                      onClick: () =>
                                          (0, p.Z)({
                                              guildId: n,
                                              stepConfig: y,
                                              initialPortkeyGame: e,
                                              analyticsLocation: b.Z.PORTKEY_OVERVIEW,
                                          }),
                                      imageClassName: h.image,
                                      disabled: s,
                                  },
                                  "sidebar-game-".concat(t, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

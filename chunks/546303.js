t.d(n, { Z: () => C });
var r,
    a,
    i = t(951288),
    s = t(647438),
    o = t(120356),
    l = t.n(o),
    c = t(793030),
    d = t(442837),
    u = t(481060),
    m = t(100527),
    g = t(905551),
    f = t(60482),
    x = t(858594),
    _ = t(899789),
    b = t(735276),
    v = t(619733),
    p = t(948208),
    j = t(388032),
    h = t(62525);
let y =
    ((r = (function (e) {
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
    })({}, v.IX)),
    (a = a = { initialStep: v.EK.SERVER_SETTINGS }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
        : (function (e, n) {
              var t = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, r);
              }
              return t;
          })(Object(a)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
          }),
    r);
function C(e) {
    let { guildId: n } = e;
    s.useEffect(() => {
        (0, g.ce)(n);
    }, [n]);
    let t = (0, d.e7)([f.Z], () => f.Z.getStateForGuild(n)),
        { catalog: r, instances: a } = s.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        o = a.length >= v.YX;
    return 0 === r.length
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
                  (0, i.jsx)(c.X6q, {
                      className: h.heading,
                      variant: "heading-md/semibold",
                      children: j.intl.string(p.default["3vWDMz"]),
                  }),
                  o &&
                      (0, i.jsx)("div", {
                          className: h.maxInstancesWarning,
                          children: (0, i.jsx)(_.C, {}),
                      }),
                  (0, i.jsx)(c.zJl, {
                      className: l()(h.gameContainerWrapper, { [h.disabled]: o }),
                      children: (0, i.jsx)("div", {
                          className: h.gameContainer,
                          children: r.map((e, t) =>
                              (0, i.jsx)(
                                  x.Z,
                                  {
                                      game: e,
                                      onClick: () =>
                                          (0, b.Z)({
                                              guildId: n,
                                              stepConfig: y,
                                              initialGameServerGame: e,
                                              analyticsLocation: m.Z.GAME_SERVER_OVERVIEW,
                                          }),
                                      imageClassName: h.image,
                                      titleClassName: h.title,
                                      disabled: o,
                                  },
                                  "sidebar-game-".concat(t, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

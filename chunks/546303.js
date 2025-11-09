t.d(n, { Z: () => h });
var r,
    a,
    i = t(951288),
    l = t(647438),
    s = t(793030),
    o = t(442837),
    c = t(481060),
    d = t(100527),
    u = t(905551),
    m = t(60482),
    g = t(858594),
    f = t(899789),
    x = t(735276),
    _ = t(619733),
    v = t(97200),
    b = t(388032),
    j = t(204613);
let p =
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
    })({}, _.IX)),
    (a = a = { initialStep: _.EK.SERVER_SETTINGS }),
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
function h(e) {
    let { guildId: n } = e;
    l.useEffect(() => {
        (0, u.ce)(n);
    }, [n]);
    let t = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(n)),
        { catalog: r, instances: a } = l.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        h = a.length >= _.YX;
    return 0 === r.length
        ? (0, i.jsx)("div", {
              className: j.container,
              children: (0, i.jsx)(c.$jN, {
                  type: c.RAz.SPINNING_CIRCLE,
                  className: j.spinner,
              }),
          })
        : (0, i.jsxs)("div", {
              className: j.container,
              children: [
                  (0, i.jsx)(s.X6q, {
                      className: j.heading,
                      variant: "heading-md/semibold",
                      children: b.intl.string(v.default["3vWDMz"]),
                  }),
                  h &&
                      (0, i.jsx)("div", {
                          className: j.maxInstancesWarning,
                          children: (0, i.jsx)(f.C, {}),
                      }),
                  (0, i.jsx)(s.zJl, {
                      className: j.gameContainerWrapper,
                      children: (0, i.jsx)("div", {
                          className: j.gameContainer,
                          children: r.map((e, t) =>
                              (0, i.jsx)(
                                  g.Z,
                                  {
                                      guildId: n,
                                      game: e,
                                      onClick: () =>
                                          (0, x.Z)({
                                              guildId: n,
                                              stepConfig: p,
                                              initialGameServerGame: e,
                                              analyticsLocation: d.Z.GAME_SERVER_PAGE_SIDEBAR,
                                          }),
                                      imageClassName: j.image,
                                      titleClassName: j.title,
                                      disabled: h,
                                      location: d.Z.GAME_SERVER_PAGE_SIDEBAR,
                                  },
                                  "sidebar-game-".concat(t, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

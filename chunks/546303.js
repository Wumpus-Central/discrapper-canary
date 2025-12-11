t.d(n, { Z: () => C });
var a,
    r,
    i = t(54381),
    l = t(473749),
    s = t(793030),
    o = t(442837),
    c = t(481060),
    d = t(100527),
    u = t(905551),
    m = t(60482),
    g = t(858594),
    f = t(899789),
    b = t(735276),
    x = t(619733),
    v = t(160589),
    j = t(388032),
    p = t(468678);
let h =
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
    })({}, x.IX)),
    (r = r = { initialStep: x.EK.SERVER_SETTINGS }),
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
function C(e) {
    let { guildId: n } = e;
    l.useEffect(() => {
        (0, u.ce)(n);
    }, [n]);
    let t = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(n)),
        { catalog: a, instances: r } = l.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        C = r.length >= x.YX;
    return 0 === a.length
        ? (0, i.jsx)("div", {
              className: p.container,
              children: (0, i.jsx)(c.$jN, {
                  type: c.RAz.SPINNING_CIRCLE,
                  className: p.spinner,
              }),
          })
        : (0, i.jsxs)("div", {
              className: p.container,
              children: [
                  (0, i.jsx)(s.X6q, {
                      className: p.heading,
                      variant: "heading-md/semibold",
                      children: j.intl.string(v.default["3vWDMz"]),
                  }),
                  C &&
                      (0, i.jsx)("div", {
                          className: p.maxInstancesWarning,
                          children: (0, i.jsx)(f.C, {}),
                      }),
                  (0, i.jsx)(s.zJl, {
                      className: p.gameContainerWrapper,
                      children: (0, i.jsx)("div", {
                          className: p.gameContainer,
                          children: a.map((e, t) =>
                              (0, i.jsx)(
                                  g.Z,
                                  {
                                      guildId: n,
                                      game: e,
                                      onClick: () =>
                                          (0, b.Z)({
                                              guildId: n,
                                              stepConfig: h,
                                              initialGameServerGame: e,
                                              analyticsLocation: d.Z.GAME_SERVER_PAGE_SIDEBAR,
                                          }),
                                      imageClassName: p.image,
                                      titleClassName: p.title,
                                      disabled: C,
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

t.d(n, { Z: () => h });
var r,
    a,
    i = t(951288),
    o = t(647438),
    s = t(120356),
    l = t.n(s),
    c = t(793030),
    d = t(442837),
    u = t(481060),
    m = t(100527),
    b = t(744993),
    g = t(693587),
    f = t(567225),
    x = t(678328),
    p = t(809741),
    v = t(473682),
    j = t(440589),
    _ = t(388032),
    y = t(197530);
let O =
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
    })({}, v.T9)),
    (a = a = { initialStep: v.Vb.SERVER_SETTINGS }),
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
    o.useEffect(() => {
        (0, b.po)(n);
    }, [n]);
    let t = (0, d.e7)([g.Z], () => g.Z.getStateForGuild(n)),
        { catalog: r, instances: a } = o.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        s = a.length >= v.zI;
    return 0 === r.length
        ? (0, i.jsx)("div", {
              className: y.container,
              children: (0, i.jsx)(u.$jN, {
                  type: u.RAz.SPINNING_CIRCLE,
                  className: y.spinner,
              }),
          })
        : (0, i.jsxs)("div", {
              className: y.container,
              children: [
                  (0, i.jsx)(c.X6q, {
                      className: y.heading,
                      variant: "heading-md/semibold",
                      children: _.intl.string(j.default.DG1SHB),
                  }),
                  s &&
                      (0, i.jsx)("div", {
                          className: y.maxInstancesWarning,
                          children: (0, i.jsx)(x.Y, {}),
                      }),
                  (0, i.jsx)(c.zJl, {
                      className: l()(y.gameContainerWrapper, { [y.disabled]: s }),
                      children: (0, i.jsx)("div", {
                          className: y.gameContainer,
                          children: r.map((e, t) =>
                              (0, i.jsx)(
                                  f.Z,
                                  {
                                      game: e,
                                      onClick: () =>
                                          (0, p.Z)({
                                              guildId: n,
                                              stepConfig: O,
                                              initialPortkeyGame: e,
                                              analyticsLocation: m.Z.PORTKEY_OVERVIEW,
                                          }),
                                      imageClassName: y.image,
                                      titleClassName: y.title,
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

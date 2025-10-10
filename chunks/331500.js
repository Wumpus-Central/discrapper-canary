t.d(n, { Z: () => C });
var r,
    a,
    i = t(951288),
    s = t(647438),
    l = t(120356),
    o = t.n(l),
    c = t(793030),
    d = t(442837),
    u = t(481060),
    m = t(100527),
    g = t(744993),
    b = t(693587),
    f = t(567225),
    x = t(678328),
    p = t(809741),
    v = t(473682),
    j = t(401561),
    _ = t(388032),
    h = t(134977);
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
function C(e) {
    let { guildId: n } = e;
    s.useEffect(() => {
        (0, g.po)(n);
    }, [n]);
    let t = (0, d.e7)([b.Z], () => b.Z.getStateForGuild(n)),
        { catalog: r, instances: a } = s.useMemo(() => {
            var e, n;
            return {
                catalog: Object.values(null != (e = null == t ? void 0 : t.catalog) ? e : {}),
                instances: Object.values(null != (n = null == t ? void 0 : t.instances) ? n : {}),
            };
        }, [null == t ? void 0 : t.catalog, null == t ? void 0 : t.instances]),
        l = a.length >= v.zI;
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
                      children: _.intl.string(j.default.DG1SHB),
                  }),
                  l &&
                      (0, i.jsx)("div", {
                          className: h.maxInstancesWarning,
                          children: (0, i.jsx)(x.Y, {}),
                      }),
                  (0, i.jsx)(c.zJl, {
                      className: o()(h.gameContainerWrapper, { [h.disabled]: l }),
                      children: (0, i.jsx)("div", {
                          className: h.gameContainer,
                          children: r.map((e, t) =>
                              (0, i.jsx)(
                                  f.Z,
                                  {
                                      game: e,
                                      onClick: () =>
                                          (0, p.Z)({
                                              guildId: n,
                                              stepConfig: y,
                                              initialPortkeyGame: e,
                                              analyticsLocation: m.Z.PORTKEY_OVERVIEW,
                                          }),
                                      imageClassName: h.image,
                                      titleClassName: h.title,
                                      disabled: l,
                                  },
                                  "sidebar-game-".concat(t, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

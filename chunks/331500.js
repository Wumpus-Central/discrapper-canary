n.d(t, { Z: () => y });
var r,
    a,
    i = n(951288),
    s = n(647438),
    c = n(793030),
    o = n(442837),
    l = n(481060),
    d = n(100527),
    u = n(744993),
    b = n(693587),
    m = n(567225),
    p = n(809741),
    f = n(473682),
    j = n(401561),
    g = n(388032),
    v = n(134977);
let x =
    ((r = (function (e) {
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
    })({}, f.T9)),
    (a = a = { initialStep: f.Vb.SERVER_SETTINGS }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
        : (function (e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
              }
              return n;
          })(Object(a)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
          }),
    r);
function y(e) {
    let { guildId: t } = e;
    s.useEffect(() => {
        (0, u.po)(t);
    }, [t]);
    let n = (0, o.Wu)([b.Z], () => {
        let e = b.Z.getStateForGuild(t);
        return (null == e ? void 0 : e.catalog) != null ? Object.values(e.catalog) : [];
    });
    return 0 === n.length
        ? (0, i.jsx)("div", {
              className: v.container,
              children: (0, i.jsx)(l.$jN, {
                  type: l.RAz.SPINNING_CIRCLE,
                  className: v.spinner,
              }),
          })
        : (0, i.jsxs)("div", {
              className: v.container,
              children: [
                  (0, i.jsx)(c.X6q, {
                      className: v.heading,
                      variant: "heading-md/semibold",
                      children: g.intl.string(j.default.jeYp1t),
                  }),
                  (0, i.jsx)(c.zJl, {
                      className: v.gameContainerWrapper,
                      children: (0, i.jsx)("div", {
                          className: v.gameContainer,
                          children: n.map((e, n) =>
                              (0, i.jsx)(
                                  m.Z,
                                  {
                                      className: v.game,
                                      game: e,
                                      onClick: () =>
                                          (0, p.Z)({
                                              guildId: t,
                                              stepConfig: x,
                                              initialPortkeyGame: e,
                                              analyticsLocation: d.Z.PORTKEY_OVERVIEW,
                                          }),
                                      imageClassName: v.image,
                                  },
                                  "sidebar-game-".concat(n, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

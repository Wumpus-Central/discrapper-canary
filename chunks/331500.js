n.d(t, { Z: () => P });
var r,
    i,
    s = n(951288),
    a = n(647438),
    o = n(793030),
    c = n(442837),
    l = n(481060),
    d = n(100527),
    u = n(744993),
    m = n(693587),
    p = n(567225),
    b = n(809741),
    g = n(473682),
    f = n(401561),
    v = n(388032),
    y = n(134977);
let j =
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
    })({}, g.T9)),
    (i = i = { initialStep: g.Vb.SERVER_SETTINGS }),
    Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
        : (function (e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r);
              }
              return n;
          })(Object(i)).forEach(function (e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
          }),
    r);
function P(e) {
    let { guildId: t } = e;
    a.useEffect(() => {
        (0, u.po)(t);
    }, [t]);
    let n = (0, c.Wu)([m.Z], () => {
        let e = m.Z.getStateForGuild(t);
        return (null == e ? void 0 : e.catalog) != null ? Object.values(e.catalog) : [];
    });
    return 0 === n.length
        ? (0, s.jsx)("div", {
              className: y.container,
              children: (0, s.jsx)(l.$jN, {
                  type: l.RAz.SPINNING_CIRCLE,
                  className: y.spinner,
              }),
          })
        : (0, s.jsxs)("div", {
              className: y.container,
              children: [
                  (0, s.jsx)(o.X6q, {
                      variant: "heading-md/semibold",
                      children: v.intl.string(f.default.jeYp1t),
                  }),
                  (0, s.jsx)("div", {
                      className: y.gameContainer,
                      children: n.map((e, n) =>
                          (0, s.jsx)(
                              p.Z,
                              {
                                  className: y.game,
                                  game: e,
                                  onClick: () =>
                                      (0, b.Z)({
                                          guildId: t,
                                          stepConfig: j,
                                          initialPortkeyGame: e,
                                          analyticsLocation: d.Z.PORTKEY_OVERVIEW,
                                      }),
                                  imageClassName: y.image,
                              },
                              "sidebar-game-".concat(n, "-").concat(e.id),
                          ),
                      ),
                  }),
              ],
          });
}

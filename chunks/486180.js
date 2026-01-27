n.d(t, {
    A: () => y,
});
var r,
    a,
    i = n(627968),
    l = n(64700),
    s = n(158954),
    o = n(311907),
    c = n(990078),
    d = n(397927),
    u = n(793574),
    m = n(665171),
    f = n(522055),
    g = n(895770),
    _ = n(355609),
    x = n(843095),
    v = n(800007),
    j = n(294726),
    p = n(985018),
    b = n(979402);
let h =
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
    })({}, v.ZN)),
    (a = a =
        {
            initialStep: v.HS.SERVER_SETTINGS,
        }),
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
    l.useEffect(() => {
        (0, m.z9)(t);
    }, [t]);
    let n = (0, o.bG)([f.A], () => f.A.getStateForGuild(t)),
        { catalog: r, instances: a } = l.useMemo(() => {
            var e, t;
            return {
                catalog: Object.values(null != (e = null == n ? void 0 : n.catalog) ? e : {}),
                instances: Object.values(null != (t = null == n ? void 0 : n.instances) ? t : {}),
            };
        }, [null == n ? void 0 : n.catalog, null == n ? void 0 : n.instances]),
        y = a.length >= v.ZI;
    return 0 === r.length
        ? (0, i.jsx)("div", {
              className: b.kL,
              children: (0, i.jsx)(d.y$y, {
                  type: d.tVU.SPINNING_CIRCLE,
                  className: b.u1,
              }),
          })
        : (0, i.jsxs)("div", {
              className: b.kL,
              children: [
                  (0, i.jsx)(s.DZT, {
                      className: b.R_,
                      variant: "heading-md/semibold",
                      children: p.intl.string(j.default["3vWDMz"]),
                  }),
                  y &&
                      (0, i.jsx)("div", {
                          className: b.Bq,
                          children: (0, i.jsx)(_.k, {}),
                      }),
                  (0, i.jsx)(s.IpV, {
                      className: b.nd,
                      children: (0, i.jsx)("div", {
                          className: b.Y_,
                          children: r.map((e, n) =>
                              (0, i.jsx)(
                                  c.m,
                                  {
                                      asContainer: !0,
                                      text: e.disabled
                                          ? p.intl.formatToPlainString(j.default.uVpJYf, {
                                                gameName: e.name,
                                            })
                                          : null,
                                      position: "top",
                                      children: (0, i.jsx)(g.A, {
                                          guildId: t,
                                          game: e,
                                          onClick: () =>
                                              (0, x.A)({
                                                  guildId: t,
                                                  stepConfig: h,
                                                  initialGameServerGame: e,
                                                  analyticsLocation: u.A.GAME_SERVER_PAGE_SIDEBAR,
                                              }),
                                          imageClassName: b.Sl,
                                          titleClassName: b.DD,
                                          disabled: y || e.disabled,
                                          location: u.A.GAME_SERVER_PAGE_SIDEBAR,
                                      }),
                                  },
                                  "sidebar-game-".concat(n, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

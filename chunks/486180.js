n.d(t, { A: () => y });
var r,
    a,
    l = n(627968),
    i = n(64700),
    s = n(158954),
    c = n(311907),
    o = n(397927),
    d = n(793574),
    u = n(665171),
    f = n(522055),
    b = n(895770),
    m = n(355609),
    x = n(843095),
    j = n(800007),
    v = n(294726),
    g = n(985018),
    p = n(979402);
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
    })({}, j.ZN)),
    (a = a = { initialStep: j.HS.SERVER_SETTINGS }),
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
    i.useEffect(() => {
        (0, u.z9)(t);
    }, [t]);
    let n = (0, c.bG)([f.A], () => f.A.getStateForGuild(t)),
        { catalog: r, instances: a } = i.useMemo(() => {
            var e, t;
            return {
                catalog: Object.values(null != (e = null == n ? void 0 : n.catalog) ? e : {}),
                instances: Object.values(null != (t = null == n ? void 0 : n.instances) ? t : {}),
            };
        }, [null == n ? void 0 : n.catalog, null == n ? void 0 : n.instances]),
        y = a.length >= j.ZI;
    return 0 === r.length
        ? (0, l.jsx)("div", {
              className: p.kL,
              children: (0, l.jsx)(o.y$y, {
                  type: o.tVU.SPINNING_CIRCLE,
                  className: p.u1,
              }),
          })
        : (0, l.jsxs)("div", {
              className: p.kL,
              children: [
                  (0, l.jsx)(s.DZT, {
                      className: p.R_,
                      variant: "heading-md/semibold",
                      children: g.intl.string(v.default["3vWDMz"]),
                  }),
                  y &&
                      (0, l.jsx)("div", {
                          className: p.Bq,
                          children: (0, l.jsx)(m.k, {}),
                      }),
                  (0, l.jsx)(s.IpV, {
                      className: p.nd,
                      children: (0, l.jsx)("div", {
                          className: p.Y_,
                          children: r.map((e, n) =>
                              (0, l.jsx)(
                                  b.A,
                                  {
                                      guildId: t,
                                      game: e,
                                      onClick: () =>
                                          (0, x.A)({
                                              guildId: t,
                                              stepConfig: h,
                                              initialGameServerGame: e,
                                              analyticsLocation: d.A.GAME_SERVER_PAGE_SIDEBAR,
                                          }),
                                      imageClassName: p.Sl,
                                      titleClassName: p.DD,
                                      disabled: y,
                                      location: d.A.GAME_SERVER_PAGE_SIDEBAR,
                                  },
                                  "sidebar-game-".concat(n, "-").concat(e.id),
                              ),
                          ),
                      }),
                  }),
              ],
          });
}

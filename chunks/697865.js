l.d(t, { A: () => N });
var r = l(627968),
    n = l(503698),
    i = l.n(n),
    s = l(158954),
    o = l(311907),
    a = l(421380),
    u = l(397927),
    d = l(730134),
    c = l(775602),
    f = l(509536),
    p = l(721923),
    m = l(29086),
    v = l(854627),
    A = l(696451),
    g = l(317525),
    x = l(71393),
    b = l(287809),
    h = l(562153),
    j = l(837921),
    _ = l(652215),
    E = l(333354),
    y = l(985018),
    I = l(520277),
    S = l(445826);
let w = j.Ay.getEnableHardwareAcceleration() ? u.JsQ : d.A;
function N(e) {
    var t, l;
    let { guildId: n } = e,
        d = (0, o.bG)([x.A], () => x.A.getGuild(n)),
        j = (0, o.bG)([g.A], () =>
            g.A.getSortedRoles(n).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        N = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        O = null == N ? void 0 : N.id,
        L = (0, o.bG)([A.Ay], () => (null != O ? A.Ay.getMember(n, O) : void 0), [O, n]),
        P = (null == L ? void 0 : L.premiumSince) != null,
        T = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: C,
            eventHandlers: G,
        } = (0, v.A)({
            userId: null == N ? void 0 : N.id,
            guildId: n,
            size: u._3J.SIZE_40,
            animateOnHover: !T,
        });
    return null == d || null == L || null == N
        ? null
        : (0, r.jsxs)(u.hLv, {
              className: I.kL,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: I.Sl,
                      src: S,
                  }),
                  (0, r.jsxs)("div", {
                      className: I.FS,
                      children: [
                          (0, r.jsx)(s.EYj, {
                              variant: "text-md/semibold",
                              children: y.intl.string(P ? E.default.KSWK1U : E.default.XXXX5l),
                          }),
                          (0, r.jsx)(s.EYj, {
                              variant: "text-sm/medium",
                              children: y.intl.format(P ? E.default["7fWTg4"] : E.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, f.K)({
                                          guildId: n,
                                          location: {
                                              section: _.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: _.ZSU.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != j &&
                      !P &&
                      (0, r.jsx)(m.V, {
                          avatar: (0, r.jsx)(
                              w,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var l = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(l);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(l).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = l[t]),
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
                              })({}, G)),
                              (l = l =
                                  {
                                      user: N,
                                      src: C,
                                      avatarDecoration: k,
                                      size: u._3J.SIZE_40,
                                      "aria-hidden": !0,
                                      animate: !0,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var l = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            l.push.apply(l, r);
                                        }
                                        return l;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              t),
                          ),
                          username: (0, r.jsx)(u.gyj, {
                              variant: "text-md/semibold",
                              name: h.Ay.getName(n, null, N),
                              colorString: j.colorString,
                              colorStrings: j.colorStrings,
                          }),
                          className: i()(I.Qs, I.cX),
                          message: y.intl.string(y.t["6OSasb"]),
                          decorations: (0, r.jsx)(u._Jp, {
                              color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: I.$J,
                          }),
                      }),
                  (0, r.jsx)(p.A, {
                      guild: d,
                      className: I.Qs,
                      analyticsLocation: {
                          page: _.liQ.GUILD_POWERUPS_OVERVIEW,
                          section: _.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: a.XD.BRAND,
                      size: a.lO.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u._Jp, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}

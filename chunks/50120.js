n.d(t, {
    default: () => L,
}),
    n(896048),
    n(667532),
    n(321073),
    n(747238),
    n(812715);
var i = n(627968),
    l = n(64700),
    r = n(397927),
    a = n(442433),
    s = n(361739),
    o = n(358367),
    c = n(793574),
    u = n(688810),
    d = n(148810),
    g = n(390486),
    p = n(780964),
    b = n(358776),
    O = n(360619),
    E = n(840065),
    y = n(380450),
    f = n(227542),
    v = n(84654),
    h = n(8086),
    S = n(616621),
    P = n(264124),
    A = n(850060),
    j = n(235661),
    _ = n(466410),
    x = n(652215),
    D = n(985018);
let L = (0, o.A)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: o } = e,
            [c, L] = l.useState(!1),
            T = (0, h.A)(),
            I = (0, P.A)(),
            w = (0, f.A)(),
            C = (0, y.A)(),
            N = (0, j.A)(),
            m = (0, A.A)(),
            R = (0, v.A)(),
            V = (0, _.A)(),
            k = (0, S.A)(),
            { analyticsLocations: M } = (0, u.Ay)(),
            U = l.useMemo(() => (0, g.H)(), []);
        async function G() {
            try {
                L(!0), await (0, d.iD)(), window.location.reload(!0);
            } catch (e) {
                L(!1);
            }
        }
        let H = (0, b.t0)("UserSettingsCogContextMenu"),
            X = (0, E.getWebUserSettingsByUserSettingsSections)(),
            B = (0, O.Lu)(),
            F = l.useMemo(() => {
                let e = [];
                if (
                    (B.forEach((t) => {
                        let { section: n, predicate: i } = t;
                        n !== s.Fq.HEADER &&
                            n !== s.Fq.CUSTOM &&
                            n !== s.Fq.DIVIDER &&
                            "logout" !== n &&
                            (null == i || i()) &&
                            null != X.get(n) &&
                            (n === x.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t));
                    }),
                    H)
                ) {
                    let t = e.findIndex((e) => e.section === x.nc_.NOTIFICATIONS),
                        n = e.findIndex((e) => e.section === x.nc_.CONNECTIONS);
                    if (-1 !== t && -1 !== n && t > n) {
                        let [i] = e.splice(t, 1);
                        e.splice(n + 1, 0, i);
                    }
                }
                return e;
            }, [B, X, H]);
        return (0, i.jsx)(u.f5, {
            value: M,
            children: (0, i.jsxs)(r.W1t, {
                navId: "user-settings-cog",
                onClose: a.Z_,
                "aria-label": D.intl.string(D.t.opYYHn),
                onSelect: n,
                onInteraction: o,
                children: [
                    F.map((e) => {
                        var t, n;
                        let { section: l, label: a, onClick: s } = e,
                            o = l.replace(/\W/gi, "_");
                        return (0, i.jsx)(
                            r.Drp,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })(
                                {
                                    id: o,
                                },
                                {
                                    label: a,
                                    action: () => {
                                        var e, t;
                                        let n;
                                        return null != s
                                            ? s()
                                            : ((t = null != (e = X.get(l)) ? e : p.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (n = Object.values(x.nc_).filter((e) => e === l)[0]) &&
                                                  (0, E.openUserSettings)(t, {
                                                      section: n,
                                                      analyticsLocations: M,
                                                  })
                                              ));
                                    },
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case x.nc_.GAMES:
                                                return T;
                                            case x.nc_.STREAMER_MODE:
                                                return I;
                                            case x.nc_.APPEARANCE:
                                                return w;
                                            case x.nc_.ACCESSIBILITY:
                                                return C;
                                            case x.nc_.VOICE:
                                                return N;
                                            case x.nc_.TEXT:
                                                return m;
                                            case x.nc_.EXPERIMENTS:
                                                return R;
                                            case x.nc_.DEVELOPER_OPTIONS:
                                                return V;
                                            default:
                                                return null;
                                        }
                                    })(l),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            o,
                        );
                    }),
                    e.user.isStaff() && k,
                    e.user.isStaff() && U.length > 0
                        ? (0, i.jsx)(r.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, i.jsx)(r.rXV, {
                                  children: U.map((e) =>
                                      (0, i.jsx)(
                                          r.iDA,
                                          {
                                              id: "input-".concat(e.payload),
                                              group: "build_overrides",
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) === e.id ||
                                                      (200 === (await (0, d.oA)(e.payload)).status &&
                                                          window.location.reload(!0));
                                              },
                                          },
                                          "input-".concat(e.payload),
                                      ),
                                  ),
                              }),
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(r.rXV, {
                              children: (0, i.jsx)(r.Drp, {
                                  id: "clear-build-override",
                                  disabled: c,
                                  label: D.intl.string(D.t["/Nz9rY"]),
                                  action: G,
                                  color: "danger",
                              }),
                          })
                        : null,
                ],
            }),
        });
    },
    [c.A.CONTEXT_MENU, c.A.USER_SETTINGS_MENU],
);

n.d(t, {
    default: () => D,
}),
    n(896048),
    n(667532),
    n(321073),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(442433),
    o = n(361739),
    c = n(358367),
    s = n(793574),
    d = n(688810),
    u = n(148810),
    g = n(390486),
    p = n(780964),
    b = n(358776),
    y = n(360619),
    O = n(840065),
    f = n(380450),
    v = n(227542),
    E = n(84654),
    h = n(8086),
    A = n(616621),
    j = n(264124),
    S = n(850060),
    P = n(235661),
    x = n(466410),
    w = n(652215),
    C = n(985018);
let D = (0, c.A)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: c } = e,
            [s, D] = i.useState(!1),
            _ = (0, h.A)(),
            m = (0, j.A)(),
            T = (0, v.A)(),
            I = (0, f.A)(),
            L = (0, P.A)(),
            N = (0, S.A)(),
            k = (0, E.A)(),
            R = (0, x.A)(),
            V = (0, A.A)(),
            { analyticsLocations: M } = (0, d.Ay)(),
            U = i.useMemo(() => (0, g.H)(), []);
        async function G() {
            try {
                D(!0), await (0, u.iD)(), window.location.reload(!0);
            } catch (e) {
                D(!1);
            }
        }
        let X = (0, b.t0)("UserSettingsCogContextMenu"),
            H = (0, O.getWebUserSettingsByUserSettingsSections)(),
            F = (0, y.Lu)(),
            Y = i.useMemo(() => {
                let e = [];
                F.forEach((t) => {
                    let { section: n, predicate: r } = t;
                    n !== o.Fq.HEADER &&
                        n !== o.Fq.CUSTOM &&
                        n !== o.Fq.DIVIDER &&
                        "logout" !== n &&
                        (null == r || r()) &&
                        null != H.get(n) &&
                        (n === w.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t));
                });
                let t = e.findIndex((e) => e.section === w.nc_.ADVANCED);
                if (
                    (-1 !== t &&
                        e.splice(t, 0, {
                            section: w.nc_.STREAMER_MODE,
                            label: C.intl.string(C.t.S5GfOW),
                        }),
                    X)
                ) {
                    let t = e.findIndex((e) => e.section === w.nc_.NOTIFICATIONS),
                        n = e.findIndex((e) => e.section === w.nc_.CONNECTIONS);
                    if (-1 !== t && -1 !== n && t > n) {
                        let [r] = e.splice(t, 1);
                        e.splice(n + 1, 0, r);
                    }
                }
                return e;
            }, [F, H, X]);
        return (0, r.jsx)(d.f5, {
            value: M,
            children: (0, r.jsxs)(l.W1t, {
                "data-menu-migration-ready": !0,
                navId: "user-settings-cog",
                onClose: a.Z_,
                "aria-label": C.intl.string(C.t.opYYHn),
                onSelect: n,
                onInteraction: c,
                children: [
                    Y.map((e) => {
                        var t, n;
                        let { section: i, label: a, onClick: o } = e,
                            c = i.replace(/\W/gi, "_");
                        return (0, r.jsx)(
                            l.Drp,
                            ((t = (function (e) {
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
                            })(
                                {
                                    id: c,
                                },
                                {
                                    label: a,
                                    action: () => {
                                        var e, t;
                                        let n;
                                        return null != o
                                            ? o()
                                            : ((t = null != (e = H.get(i)) ? e : p.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (n = Object.values(w.nc_).filter((e) => e === i)[0]) &&
                                                  (0, O.openUserSettings)(t, {
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
                                            case w.nc_.GAMES:
                                                return _;
                                            case w.nc_.STREAMER_MODE:
                                                return m;
                                            case w.nc_.APPEARANCE:
                                                return T;
                                            case w.nc_.ACCESSIBILITY:
                                                return I;
                                            case w.nc_.VOICE:
                                                return L;
                                            case w.nc_.TEXT:
                                                return N;
                                            case w.nc_.EXPERIMENTS:
                                                return k;
                                            case w.nc_.DEVELOPER_OPTIONS:
                                                return R;
                                            default:
                                                return null;
                                        }
                                    })(i),
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            c,
                        );
                    }),
                    e.user.isStaff() && V,
                    e.user.isStaff() && U.length > 0
                        ? (0, r.jsx)(l.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, r.jsx)(l.rXV, {
                                  children: U.map((e) =>
                                      (0, r.jsx)(
                                          l.iDA,
                                          {
                                              id: "input-".concat(e.payload),
                                              group: "build_overrides",
                                              label: e.id,
                                              checked: (null == t ? void 0 : t.id) === e.id,
                                              action: async () => {
                                                  (null == t ? void 0 : t.id) === e.id ||
                                                      (200 === (await (0, u.oA)(e.payload)).status &&
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
                        ? (0, r.jsx)(l.rXV, {
                              children: (0, r.jsx)(l.Drp, {
                                  id: "clear-build-override",
                                  disabled: s,
                                  label: C.intl.string(C.t["/Nz9rY"]),
                                  action: G,
                                  color: "danger",
                              }),
                          })
                        : null,
                ],
            }),
        });
    },
    [s.A.CONTEXT_MENU, s.A.USER_SETTINGS_MENU],
);

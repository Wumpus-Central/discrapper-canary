n.d(t, {
    default: () => _,
}),
    n(896048),
    n(667532),
    n(321073),
    n(747238),
    n(812715);
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(442433),
    o = n(361739),
    c = n(358367),
    s = n(793574),
    d = n(688810),
    u = n(148810),
    g = n(390486),
    p = n(734066),
    b = n(780964),
    y = n(358776),
    O = n(360619),
    f = n(840065),
    v = n(380450),
    E = n(227542),
    h = n(84654),
    A = n(8086),
    j = n(616621),
    S = n(264124),
    P = n(850060),
    x = n(235661),
    w = n(466410),
    C = n(652215),
    D = n(985018);
let _ = (0, c.A)(
    function (e) {
        let { webBuildOverride: t, onSelect: n, onInteraction: c } = e,
            [s, _] = r.useState(!1),
            m = (0, A.A)(),
            L = (0, S.A)(),
            I = (0, E.A)(),
            T = (0, v.A)(),
            N = (0, x.A)(),
            k = (0, P.A)(),
            R = (0, h.A)(),
            V = (0, w.A)(),
            M = (0, j.A)(),
            U = (0, p.sw)(),
            { analyticsLocations: G } = (0, d.Ay)(),
            X = r.useMemo(() => (0, g.H)(), []);
        async function H() {
            try {
                _(!0), await (0, u.iD)(), window.location.reload(!0);
            } catch (e) {
                _(!1);
            }
        }
        let F = (0, y.t0)("UserSettingsCogContextMenu"),
            Y = (0, f.getWebUserSettingsByUserSettingsSections)(),
            q = (0, O.Lu)(),
            z = r.useMemo(() => {
                let e = [];
                q.forEach((t) => {
                    let { section: n, predicate: i } = t;
                    n !== o.Fq.HEADER &&
                        n !== o.Fq.CUSTOM &&
                        n !== o.Fq.DIVIDER &&
                        "logout" !== n &&
                        (null == i || i()) &&
                        null != Y.get(n) &&
                        (n === C.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t));
                });
                let t = e.findIndex((e) => e.section === C.nc_.ADVANCED);
                -1 !== t &&
                    e.splice(t, 0, {
                        section: C.nc_.STREAMER_MODE,
                        label: D.intl.string(D.t.S5GfOW),
                    });
                let n = e.findIndex((e) => e.section === C.nc_.CONNECTIONS);
                if (U) {
                    let t = {
                        section: C.nc_.CLIPS,
                        label: D.intl.string(D.t.z2jK6X),
                        onClick: () => (0, f.openUserSettings)(b.X.CLIPS_PANEL),
                    };
                    -1 !== n && e.splice(n + 1, 0, t);
                }
                if (F) {
                    let t = e.findIndex((e) => e.section === C.nc_.NOTIFICATIONS);
                    if (-1 !== t && -1 !== n && t > n) {
                        let [i] = e.splice(t, 1);
                        e.splice(n + 1, 0, i);
                    }
                }
                return e;
            }, [U, F, Y, q]);
        return (0, i.jsx)(d.f5, {
            value: G,
            children: (0, i.jsxs)(l.W1t, {
                "data-menu-migrated": !0,
                navId: "user-settings-cog",
                onClose: a.Z_,
                "aria-label": D.intl.string(D.t.opYYHn),
                onSelect: n,
                onInteraction: c,
                children: [
                    z.map((e) => {
                        var t, n;
                        let { section: r, label: a, onClick: o } = e,
                            c = r.replace(/\W/gi, "_");
                        return (0, i.jsx)(
                            l.Drp,
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
                                    id: c,
                                },
                                {
                                    void_label: a,
                                    action: () => {
                                        var e, t;
                                        let n;
                                        return null != o
                                            ? o()
                                            : ((t = null != (e = Y.get(r)) ? e : b.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (n = Object.values(C.nc_).filter((e) => e === r)[0]) &&
                                                  (0, f.openUserSettings)(t, {
                                                      section: n,
                                                      analyticsLocations: G,
                                                  })
                                              ));
                                    },
                                },
                            )),
                            (n = n =
                                {
                                    children: ((e) => {
                                        switch (e) {
                                            case C.nc_.GAMES:
                                                return m;
                                            case C.nc_.STREAMER_MODE:
                                                return L;
                                            case C.nc_.APPEARANCE:
                                                return I;
                                            case C.nc_.ACCESSIBILITY:
                                                return T;
                                            case C.nc_.VOICE:
                                                return N;
                                            case C.nc_.TEXT:
                                                return k;
                                            case C.nc_.EXPERIMENTS:
                                                return R;
                                            case C.nc_.DEVELOPER_OPTIONS:
                                                return V;
                                            default:
                                                return null;
                                        }
                                    })(r),
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
                            c,
                        );
                    }),
                    e.user.isStaff() && M,
                    e.user.isStaff() && X.length > 0
                        ? (0, i.jsx)(l.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, i.jsx)(l.rXV, {
                                  children: X.map((e) =>
                                      (0, i.jsx)(
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
                        ? (0, i.jsx)(l.rXV, {
                              children: (0, i.jsx)(l.Drp, {
                                  id: "clear-build-override",
                                  disabled: s,
                                  label: D.intl.string(D.t["/Nz9rY"]),
                                  action: H,
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

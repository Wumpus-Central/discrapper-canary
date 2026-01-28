n.d(t, {
    default: () => D,
}),
    n(896048),
    n(667532),
    n(321073),
    n(747238),
    n(812715);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(442433),
    o = n(361739),
    c = n(358367),
    s = n(793574),
    d = n(688810),
    u = n(148810),
    g = n(390486),
    p = n(734066),
    b = n(780964),
    y = n(360619),
    O = n(840065),
    v = n(380450),
    f = n(227542),
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
            [s, D] = l.useState(!1),
            _ = (0, h.A)(),
            m = (0, j.A)(),
            T = (0, f.A)(),
            L = (0, v.A)(),
            I = (0, P.A)(),
            N = (0, S.A)(),
            k = (0, E.A)(),
            R = (0, x.A)(),
            V = (0, A.A)(),
            M = (0, p.sw)(),
            { analyticsLocations: G } = (0, d.Ay)(),
            U = l.useMemo(() => (0, g.H)(), []);
        async function X() {
            try {
                D(!0), await (0, u.iD)(), window.location.reload(!0);
            } catch (e) {
                D(!1);
            }
        }
        let H = (0, O.getWebUserSettingsByUserSettingsSections)(),
            F = (0, y.Lu)(),
            Y = l.useMemo(() => {
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
                -1 !== t &&
                    e.splice(t, 0, {
                        section: w.nc_.STREAMER_MODE,
                        label: C.intl.string(C.t.S5GfOW),
                    });
                let n = e.findIndex((e) => e.section === w.nc_.CONNECTIONS),
                    r = {
                        section: w.nc_.NOTIFICATIONS,
                        label: C.intl.string(C.t.HcoRu0),
                    },
                    l = {
                        section: w.nc_.CLIPS,
                        label: C.intl.string(C.t.z2jK6X),
                    };
                return -1 !== n && e.splice(n + 1, 0, r, ...(M ? [l] : [])), e;
            }, [M, H, F]);
        return (0, r.jsx)(d.f5, {
            value: G,
            children: (0, r.jsxs)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "user-settings-cog",
                onClose: a.Z_,
                "aria-label": C.intl.string(C.t.opYYHn),
                onSelect: n,
                onInteraction: c,
                children: [
                    Y.map((e) => {
                        var t, n;
                        let { section: l, label: a, onClick: o } = e,
                            c = l.replace(/\W/gi, "_");
                        return (0, r.jsx)(
                            i.Drp,
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
                                    void_label: a,
                                    action: () => {
                                        var e, t;
                                        let n;
                                        return null != o
                                            ? o()
                                            : ((t = null != (e = H.get(l)) ? e : b.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (n = Object.values(w.nc_).filter((e) => e === l)[0]) &&
                                                  (0, O.openUserSettings)(t, {
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
                                            case w.nc_.GAMES:
                                                return _;
                                            case w.nc_.STREAMER_MODE:
                                                return m;
                                            case w.nc_.APPEARANCE:
                                                return T;
                                            case w.nc_.ACCESSIBILITY:
                                                return L;
                                            case w.nc_.VOICE:
                                                return I;
                                            case w.nc_.TEXT:
                                                return N;
                                            case w.nc_.EXPERIMENTS:
                                                return k;
                                            case w.nc_.DEVELOPER_OPTIONS:
                                                return R;
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
                        ? (0, r.jsx)(i.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, r.jsx)(i.rXV, {
                                  children: U.map((e) =>
                                      (0, r.jsx)(
                                          i.iDA,
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
                        ? (0, r.jsx)(i.rXV, {
                              children: (0, r.jsx)(i.Drp, {
                                  id: "clear-build-override",
                                  disabled: s,
                                  label: C.intl.string(C.t["/Nz9rY"]),
                                  action: X,
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

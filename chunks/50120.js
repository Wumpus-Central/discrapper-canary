t.d(n, { default: () => T }), t(667532), t(321073);
var l = t(627968),
    i = t(64700),
    a = t(397927),
    s = t(442433),
    r = t(361739),
    c = t(358367),
    o = t(793574),
    d = t(688810),
    u = t(148810),
    g = t(390486),
    p = t(734066),
    E = t(780964),
    A = t(358776),
    v = t(360619),
    b = t(840065),
    h = t(380450),
    S = t(227542),
    y = t(84654),
    x = t(8086),
    f = t(616621),
    C = t(264124),
    O = t(850060),
    _ = t(235661),
    I = t(466410),
    j = t(652215),
    D = t(985018);
let T = (0, c.A)(
    function (e) {
        let { webBuildOverride: n, onSelect: t, onInteraction: c } = e,
            [o, T] = i.useState(!1),
            L = (0, x.A)(),
            P = (0, C.A)(),
            N = (0, S.A)(),
            w = (0, h.A)(),
            R = (0, _.A)(),
            V = (0, O.A)(),
            m = (0, y.A)(),
            M = (0, I.A)(),
            k = (0, f.A)(),
            U = (0, p.sw)(),
            G = (0, A._A)("UserSettingsCogContextMenu"),
            { analyticsLocations: X } = (0, d.Ay)(),
            H = i.useMemo(() => (0, g.H)(), []);
        async function F() {
            try {
                T(!0), await (0, u.iD)(), window.location.reload(!0);
            } catch (e) {
                T(!1);
            }
        }
        let Y = (0, b.getWebUserSettingsByUserSettingsSections)(),
            q = (0, v.Lu)(),
            z = i.useMemo(() => {
                let e = [];
                q.forEach((n) => {
                    let { section: t, predicate: l } = n;
                    t === r.Fq.HEADER ||
                        t === r.Fq.CUSTOM ||
                        t === r.Fq.DIVIDER ||
                        "logout" === t ||
                        (t === j.nc_.SESSIONS && G) ||
                        (null != l && !l()) ||
                        (null != Y.get(t) && (t === j.nc_.PROFILE_CUSTOMIZATION ? e.unshift(n) : e.push(n)));
                });
                let n = e.findIndex((e) => e.section === j.nc_.ADVANCED);
                -1 !== n && e.splice(n, 0, { section: j.nc_.STREAMER_MODE, label: D.intl.string(D.t.S5GfOW) });
                let t = e.findIndex((e) => e.section === j.nc_.ACCESSIBILITY);
                -1 !== t && e.splice(t + 1, 0, { section: j.nc_.VOICE, label: D.intl.string(D.t.B1fFpf) });
                let l = e.findIndex((e) => e.section === j.nc_.CONNECTIONS),
                    i = { section: j.nc_.NOTIFICATIONS, label: D.intl.string(D.t.HcoRu0) },
                    a = { section: j.nc_.CLIPS, label: D.intl.string(D.t.z2jK6X) };
                return -1 !== l && e.splice(l + 1, 0, i, ...(U ? [a] : [])), e;
            }, [U, G, Y, q]);
        return (0, l.jsx)(d.f5, {
            value: X,
            children: (0, l.jsxs)(a.W1t, {
                "data-menu-migrated": !0,
                navId: "user-settings-cog",
                onClose: s.Z_,
                "aria-label": D.intl.string(D.t.opYYHn),
                onSelect: t,
                onInteraction: c,
                children: [
                    z.map((e) => {
                        let { section: n, label: t, onClick: i } = e,
                            s = n.replace(/\W/gi, "_");
                        return (0, l.jsx)(
                            a.Drp,
                            {
                                id: s,
                                ...{
                                    void_label: t,
                                    action: () => {
                                        var e;
                                        let t;
                                        return null != i
                                            ? i()
                                            : ((e = Y.get(n) ?? E.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (t = Object.values(j.nc_).filter((e) => e === n)[0]) &&
                                                  (0, b.openUserSettings)(e, { section: t, analyticsLocations: X })
                                              ));
                                    },
                                },
                                children: ((e) => {
                                    switch (e) {
                                        case j.nc_.GAMES:
                                            return L;
                                        case j.nc_.STREAMER_MODE:
                                            return P;
                                        case j.nc_.APPEARANCE:
                                            return N;
                                        case j.nc_.ACCESSIBILITY:
                                            return w;
                                        case j.nc_.VOICE:
                                            return R;
                                        case j.nc_.TEXT:
                                            return V;
                                        case j.nc_.EXPERIMENTS:
                                            return m;
                                        case j.nc_.DEVELOPER_OPTIONS:
                                            return M;
                                        default:
                                            return null;
                                    }
                                })(n),
                            },
                            s,
                        );
                    }),
                    e.user.isStaff() && k,
                    e.user.isStaff() && H.length > 0
                        ? (0, l.jsx)(a.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, l.jsx)(a.rXV, {
                                  children: H.map((e) =>
                                      (0, l.jsx)(
                                          a.iDA,
                                          {
                                              id: `input-${e.payload}`,
                                              group: "build_overrides",
                                              label: e.id,
                                              checked: n?.id === e.id,
                                              action: async () => {
                                                  n?.id === e.id ||
                                                      (200 === (await (0, u.oA)(e.payload)).status &&
                                                          window.location.reload(!0));
                                              },
                                          },
                                          `input-${e.payload}`,
                                      ),
                                  ),
                              }),
                          })
                        : null,
                    null != n
                        ? (0, l.jsx)(a.rXV, {
                              children: (0, l.jsx)(a.Drp, {
                                  id: "clear-build-override",
                                  disabled: o,
                                  label: D.intl.string(D.t["/Nz9rY"]),
                                  action: F,
                                  color: "danger",
                              }),
                          })
                        : null,
                ],
            }),
        });
    },
    [o.A.CONTEXT_MENU, o.A.USER_SETTINGS_MENU],
);

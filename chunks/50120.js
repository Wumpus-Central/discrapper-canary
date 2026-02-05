t.d(n, { default: () => D }), t(667532), t(321073);
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
    v = t(360619),
    A = t(840065),
    b = t(380450),
    h = t(227542),
    y = t(84654),
    S = t(8086),
    x = t(616621),
    f = t(264124),
    C = t(850060),
    O = t(235661),
    _ = t(466410),
    I = t(652215),
    j = t(985018);
let D = (0, c.A)(
    function (e) {
        let { webBuildOverride: n, onSelect: t, onInteraction: c } = e,
            [o, D] = i.useState(!1),
            T = (0, S.A)(),
            L = (0, f.A)(),
            P = (0, h.A)(),
            N = (0, b.A)(),
            w = (0, O.A)(),
            R = (0, C.A)(),
            V = (0, y.A)(),
            m = (0, _.A)(),
            M = (0, x.A)(),
            k = (0, p.sw)(),
            { analyticsLocations: G } = (0, d.Ay)(),
            U = i.useMemo(() => (0, g.H)(), []);
        async function X() {
            try {
                D(!0), await (0, u.iD)(), window.location.reload(!0);
            } catch (e) {
                D(!1);
            }
        }
        let H = (0, A.getWebUserSettingsByUserSettingsSections)(),
            F = (0, v.Lu)(),
            Y = i.useMemo(() => {
                let e = [];
                F.forEach((n) => {
                    let { section: t, predicate: l } = n;
                    t !== r.Fq.HEADER &&
                        t !== r.Fq.CUSTOM &&
                        t !== r.Fq.DIVIDER &&
                        "logout" !== t &&
                        (null == l || l()) &&
                        null != H.get(t) &&
                        (t === I.nc_.PROFILE_CUSTOMIZATION ? e.unshift(n) : e.push(n));
                });
                let n = e.findIndex((e) => e.section === I.nc_.ADVANCED);
                -1 !== n && e.splice(n, 0, { section: I.nc_.STREAMER_MODE, label: j.intl.string(j.t.S5GfOW) });
                let t = e.findIndex((e) => e.section === I.nc_.ACCESSIBILITY);
                -1 !== t && e.splice(t + 1, 0, { section: I.nc_.VOICE, label: j.intl.string(j.t.B1fFpf) });
                let l = e.findIndex((e) => e.section === I.nc_.CONNECTIONS),
                    i = { section: I.nc_.NOTIFICATIONS, label: j.intl.string(j.t.HcoRu0) },
                    a = { section: I.nc_.CLIPS, label: j.intl.string(j.t.z2jK6X) };
                return -1 !== l && e.splice(l + 1, 0, i, ...(k ? [a] : [])), e;
            }, [k, H, F]);
        return (0, l.jsx)(d.f5, {
            value: G,
            children: (0, l.jsxs)(a.W1t, {
                "data-menu-migrated": !0,
                navId: "user-settings-cog",
                onClose: s.Z_,
                "aria-label": j.intl.string(j.t.opYYHn),
                onSelect: t,
                onInteraction: c,
                children: [
                    Y.map((e) => {
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
                                            : ((e = H.get(n) ?? E.X.ACCOUNT_PANEL),
                                              void (
                                                  null != (t = Object.values(I.nc_).filter((e) => e === n)[0]) &&
                                                  (0, A.openUserSettings)(e, { section: t, analyticsLocations: G })
                                              ));
                                    },
                                },
                                children: ((e) => {
                                    switch (e) {
                                        case I.nc_.GAMES:
                                            return T;
                                        case I.nc_.STREAMER_MODE:
                                            return L;
                                        case I.nc_.APPEARANCE:
                                            return P;
                                        case I.nc_.ACCESSIBILITY:
                                            return N;
                                        case I.nc_.VOICE:
                                            return w;
                                        case I.nc_.TEXT:
                                            return R;
                                        case I.nc_.EXPERIMENTS:
                                            return V;
                                        case I.nc_.DEVELOPER_OPTIONS:
                                            return m;
                                        default:
                                            return null;
                                    }
                                })(n),
                            },
                            s,
                        );
                    }),
                    e.user.isStaff() && M,
                    e.user.isStaff() && U.length > 0
                        ? (0, l.jsx)(a.Drp, {
                              label: "Build Overrides",
                              id: "build_overrides",
                              children: (0, l.jsx)(a.rXV, {
                                  children: U.map((e) =>
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
                                  label: j.intl.string(j.t["/Nz9rY"]),
                                  action: X,
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

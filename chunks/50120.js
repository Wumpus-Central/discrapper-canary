t.d(n, { default: () => N }), t(667532), t(321073);
var i = t(627968),
    l = t(64700),
    a = t(397927),
    s = t(442433),
    c = t(361739),
    r = t(358367),
    o = t(793574),
    d = t(688810),
    u = t(148810),
    g = t(390486),
    p = t(734066),
    A = t(780964),
    E = t(358776),
    v = t(360619),
    b = t(840065),
    h = t(380450),
    S = t(227542),
    y = t(84654),
    _ = t(8086),
    x = t(616621),
    C = t(264124),
    O = t(850060),
    f = t(235661),
    D = t(466410),
    I = t(652215),
    T = t(985018);
let j = [I.nc_.WINDOWS, I.nc_.LINUX, I.nc_.STREAMER_MODE, I.nc_.TEXT, I.nc_.ADVANCED, I.nc_.APPEARANCE],
    L = [I.nc_.SESSIONS],
    N = (0, r.A)(
        function (e) {
            let { webBuildOverride: n, onSelect: t, onInteraction: r } = e,
                [o, N] = l.useState(!1),
                P = (0, _.A)(),
                R = (0, C.A)(),
                w = (0, S.A)(),
                V = (0, h.A)(),
                M = (0, f.A)(),
                m = (0, O.A)(),
                k = (0, y.A)(),
                U = (0, D.A)(),
                G = (0, x.A)(),
                X = (0, p.sw)(),
                H = (0, E.bp)("UserSettingsCogContextMenu"),
                F = (0, E._A)("UserSettingsCogContextMenu"),
                { analyticsLocations: Y } = (0, d.Ay)(),
                B = l.useMemo(() => (0, g.H)(), []);
            async function q() {
                try {
                    N(!0), await (0, u.iD)(), window.location.reload(!0);
                } catch (e) {
                    N(!1);
                }
            }
            let z = (0, b.getWebUserSettingsByUserSettingsSections)(),
                W = (0, v.Lu)(),
                K = l.useMemo(() => {
                    let e = [];
                    W.forEach((n) => {
                        let { section: t, predicate: i } = n;
                        t === c.Fq.HEADER ||
                            t === c.Fq.CUSTOM ||
                            t === c.Fq.DIVIDER ||
                            "logout" === t ||
                            (H && j.includes(t)) ||
                            (F && L.includes(t)) ||
                            (null != i && !i()) ||
                            (null != z.get(t) && (t === I.nc_.PROFILE_CUSTOMIZATION ? e.unshift(n) : e.push(n)));
                    });
                    let n = e.findIndex((e) => e.section === I.nc_.ADVANCED);
                    -1 !== n && e.splice(n, 0, { section: I.nc_.STREAMER_MODE, label: T.intl.string(T.t.S5GfOW) });
                    let t = e.findIndex((e) => e.section === I.nc_.ACCESSIBILITY);
                    -1 !== t &&
                        e.splice(
                            H ? t : t + 1,
                            0,
                            { section: I.nc_.VOICE, label: T.intl.string(T.t.B1fFpf) },
                            ...(H ? [{ section: I.nc_.APPEARANCE, label: T.intl.string(T.t.DVatCa) }] : []),
                        );
                    let i = e.findIndex((e) => e.section === I.nc_.CONNECTIONS),
                        l = { section: I.nc_.NOTIFICATIONS, label: T.intl.string(T.t.HcoRu0) },
                        a = { section: I.nc_.CLIPS, label: T.intl.string(T.t.z2jK6X) };
                    if ((-1 !== i && e.splice(i + 1, 0, l, ...(X ? [a] : [])), H)) {
                        let n = { section: I.nc_.ADVANCED, label: T.intl.string(T.t["0BRxRp"]) };
                        e.push(n);
                    }
                    return e;
                }, [X, H, F, z, W]);
            return (0, i.jsx)(d.f5, {
                value: Y,
                children: (0, i.jsxs)(a.W1t, {
                    "data-menu-migrated": !0,
                    navId: "user-settings-cog",
                    onClose: s.Z_,
                    "aria-label": T.intl.string(T.t.opYYHn),
                    onSelect: t,
                    onInteraction: r,
                    children: [
                        K.map((e) => {
                            let { section: n, label: t, onClick: l } = e,
                                s = n.replace(/\W/gi, "_");
                            return (0, i.jsx)(
                                a.Drp,
                                {
                                    id: s,
                                    ...{
                                        void_label: t,
                                        action: () => {
                                            var e;
                                            let t;
                                            return null != l
                                                ? l()
                                                : ((e = z.get(n) ?? A.X.ACCOUNT_PANEL),
                                                  void (
                                                      null != (t = Object.values(I.nc_).filter((e) => e === n)[0]) &&
                                                      (0, b.openUserSettings)(e, { section: t, analyticsLocations: Y })
                                                  ));
                                        },
                                    },
                                    children: ((e) => {
                                        switch (e) {
                                            case I.nc_.GAMES:
                                                return P;
                                            case I.nc_.STREAMER_MODE:
                                                return R;
                                            case I.nc_.APPEARANCE:
                                                return w;
                                            case I.nc_.ACCESSIBILITY:
                                                return V;
                                            case I.nc_.VOICE:
                                                return M;
                                            case I.nc_.TEXT:
                                                return m;
                                            case I.nc_.EXPERIMENTS:
                                                return k;
                                            case I.nc_.DEVELOPER_OPTIONS:
                                                return U;
                                            default:
                                                return null;
                                        }
                                    })(n),
                                },
                                s,
                            );
                        }),
                        e.user.isStaff() && G,
                        e.user.isStaff() && B.length > 0
                            ? (0, i.jsx)(a.Drp, {
                                  label: "Build Overrides",
                                  id: "build_overrides",
                                  children: (0, i.jsx)(a.rXV, {
                                      children: B.map((e) =>
                                          (0, i.jsx)(
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
                            ? (0, i.jsx)(a.rXV, {
                                  children: (0, i.jsx)(a.Drp, {
                                      id: "clear-build-override",
                                      disabled: o,
                                      label: T.intl.string(T.t["/Nz9rY"]),
                                      action: q,
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

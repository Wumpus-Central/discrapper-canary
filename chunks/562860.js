var n = i(477900),
    s = i(582128),
    a = i(855986),
    r = i(873298),
    d = i(858899),
    c = i(331322),
    l = i(534514),
    E = i(793574),
    o = i(688810),
    u = i(823459),
    h = i(47671),
    T = i(653523),
    f = i(270746),
    S = i(793943),
    p = i(506988),
    g = i(973654),
    b = i(413599),
    m = i(830543),
    x = i(332560),
    A = i(773527),
    C = i(262560),
    _ = i(455207),
    v = i(60069),
    I = i(211824),
    H = i(385803),
    N = i(701256),
    j = i(792996);
i.d(
    t,
    {},
    {
        A: function (e) {
            let { type: t, isLocked: i, iconSize: B = H.ni.SIZE_48, tabIndex: L, className: M } = e,
                { analyticsLocations: G } = (0, o.Ay)(E.A.CLIENT_THEMES_THEME_SELECTOR),
                P = (0, a.bG)([h.A, b.A], () => !b.A.isSameAsDeviceThemeEnabled() && (0, A.oB)(h.A.gradientPreset?.id)),
                [k, y] = s.useState(!1),
                z = s.useRef(!1),
                D = t === f.v0.SETTINGS;
            return (
                (0, x.UF)(p.uF.CLIENT_THEME_SETTINGS, x.rl.THEME_PICKER, !0),
                (0, n.jsxs)(c.B, {
                    as: "section",
                    gap: D ? 24 : 16,
                    fullWidth: !1,
                    className: M,
                    children: [
                        (0, n.jsxs)(c.B, {
                            gap: D ? 4 : 8,
                            children: [
                                (0, n.jsxs)(c.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    gap: 8,
                                    children: [
                                        (0, n.jsx)(l.D, {
                                            variant: D ? "heading-sm/semibold" : "body-md/medium",
                                            color: D ? "text-default" : "text-strong",
                                            children: j.intl.string(N.default.SOxhth),
                                        }),
                                        !i && (0, n.jsx)(C.A, { perk: I.vB.CLIENT_THEME }),
                                    ],
                                }),
                                (0, n.jsx)(_.A, {}),
                            ],
                        }),
                        (0, n.jsx)(c.B, {
                            direction: "horizontal",
                            children: (0, n.jsx)(T.MX, {
                                size: B,
                                preset: H.eJ,
                                isSelected: P,
                                onSelect: function () {
                                    i
                                        ? ((0, u.bc)(H.eJ.id),
                                          (0, f.X8)({
                                              isPersisted: !1,
                                              analyticsLocations: G,
                                              themeName: r.ju[H.eJ.id],
                                          }),
                                          (0, g.GQ)(H.eJ.theme),
                                          D && ((0, S.nf)(S.HP.CLIENT_THEMES), (0, m.default)()))
                                        : (async function () {
                                              if (P || z.current) return;
                                              ((z.current = !0), y(!0));
                                              let e = await (0, v.r)(G);
                                              ((z.current = !1),
                                                  y(!1),
                                                  e ||
                                                      (0, d.P0)({
                                                          text: j.intl.string(j.t.F8FvUy),
                                                          variant: "critical",
                                                      }));
                                          })();
                                },
                                disabled: k,
                                tabIndex: L,
                            }),
                        }),
                    ],
                })
            );
        },
    },
);

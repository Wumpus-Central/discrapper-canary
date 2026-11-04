var t = e(477900),
    i = e(582128),
    u = e(855986),
    c = e(477782),
    r = e(444570),
    o = e(22231),
    a = e(625903),
    d = e(615606),
    s = e(911040),
    A = e(64656),
    g = e(919417),
    p = e(540665),
    y = e(46486),
    f = e(381991),
    I = e(260498),
    v = e(95264),
    b = e(442331),
    h = e(616334),
    j = e(246338),
    _ = e(913396),
    x = e(914315),
    G = e(191850),
    P = e(792996);
let w = { remix: null, edit: null, settings: null, showOverlay: null, devicePermissions: null };
e.d(
    n,
    {},
    {
        A: function (l, n) {
            let { includeSettings: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                m = (0, j.w$)(l, n),
                D = (0, _.A)(m ? l : null),
                F = D?.id ?? null,
                k = l.guild_id ?? null,
                E = (0, x.A)(l, n);
            i.useEffect(() => {
                null != F && (0, p.ensureConnection)(F);
            }, [F]);
            let M = (0, u.bG)([b.A], () => null != F && null != b.A.getSettings(F), [F]),
                S = (0, A.A)((0, s.A)(l).frameId),
                C = (0, d.q)(l)?.id ?? null,
                L = (0, g.V5)(C),
                U = (0, y.A)(C);
            return m && null != k
                ? {
                      remix:
                          null != E
                              ? (0, t.jsx)(
                                    c.Dr,
                                    {
                                        id: "conjure-remix",
                                        icon: r.i,
                                        leadingAccessory: { type: "icon", icon: r.i },
                                        label: P.intl.string(G.default["276ll6"]),
                                        action: () => (0, v.A)(E, k),
                                    },
                                    "remix",
                                )
                              : null,
                      edit:
                          null != D
                              ? (0, t.jsx)(
                                    c.Dr,
                                    {
                                        id: "conjure-edit",
                                        icon: o.PencilIcon,
                                        leadingAccessory: { type: "icon", icon: o.PencilIcon },
                                        label: P.intl.string(G.default.jMMrDM),
                                        action: () => (0, f.A)(D.id, "app_channel"),
                                    },
                                    "edit",
                                )
                              : null,
                      settings:
                          null != D && e && (M || (0, I.PV)(D))
                              ? (0, t.jsx)(
                                    c.Dr,
                                    {
                                        id: "conjure-settings",
                                        icon: a.SettingsIcon,
                                        leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                        label: P.intl.string(G.default.I2XSKe),
                                        action: () => (0, h.A)(D.id, { guildId: k, initialTab: "app" }),
                                    },
                                    "settings",
                                )
                              : null,
                      showOverlay:
                          S && null != C
                              ? (0, t.jsx)(
                                    c.sL,
                                    {
                                        id: "conjure-show-overlay",
                                        label: P.intl.string(G.default.FQb5Z3),
                                        checked: L,
                                        action: () => (0, g.Gt)(C, !L),
                                    },
                                    "show-overlay",
                                )
                              : null,
                      devicePermissions: U,
                  }
                : w;
        },
    },
);

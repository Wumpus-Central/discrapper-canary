var t = e(477900),
    i = e(582128),
    u = e(855986),
    c = e(477782),
    r = e(444570),
    o = e(22231),
    a = e(625903),
    s = e(615606),
    d = e(911040),
    A = e(64656),
    p = e(919417),
    g = e(540665),
    y = e(46486),
    f = e(381991),
    I = e(260498),
    v = e(95264),
    b = e(442331),
    h = e(616334),
    P = e(246338),
    j = e(913396),
    _ = e(914315),
    x = e(191850),
    G = e(792996);
let w = { remix: null, edit: null, settings: null, showOverlay: null, devicePermissions: null };
e.d(
    n,
    {},
    {
        A: function (l, n) {
            let { includeSettings: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                m = (0, P.w$)(l, n),
                D = (0, j.A)(m ? l : null),
                F = D?.id ?? null,
                k = l.guild_id ?? null,
                E = (0, _.A)(l, n);
            i.useEffect(() => {
                null != F && (0, g.ensureConnection)(F);
            }, [F]);
            let M = (0, u.bG)([b.A], () => null != F && null != b.A.getSettings(F), [F]),
                S = (0, A.A)((0, d.A)(l).frameId),
                C = (0, s.q)(l)?.id ?? null,
                L = (0, p.V5)(C),
                U = (0, y.A)(C);
            return m && null != k
                ? {
                      remix:
                          null != E
                              ? (0, t.jsx)(
                                    c.Dr,
                                    {
                                        id: "conjure-remix",
                                        icon: r.PaperPlusIcon,
                                        leadingAccessory: { type: "icon", icon: r.PaperPlusIcon },
                                        label: G.intl.string(x.default["276ll6"]),
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
                                        label: G.intl.string(x.default.jMMrDM),
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
                                        label: G.intl.string(x.default.I2XSKe),
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
                                        label: G.intl.string(x.default.FQb5Z3),
                                        checked: L,
                                        action: () => (0, p.Gt)(C, !L),
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

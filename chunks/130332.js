e.d(n, { A: () => m });
var t = e(477900),
    i = e(582128),
    u = e(17928),
    c = e(477782),
    r = e(826967),
    o = e(22231),
    a = e(625903),
    d = e(615606),
    s = e(911040),
    A = e(64656),
    g = e(919417),
    p = e(322227),
    y = e(136968),
    f = e(381991),
    v = e(260498),
    I = e(95264),
    b = e(442331),
    x = e(616334),
    h = e(246338),
    j = e(913396),
    G = e(914315),
    _ = e(87501),
    P = e(105292);
let w = { remix: null, edit: null, settings: null, showOverlay: null, devicePermissions: null };
function m(l, n) {
    let { includeSettings: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, h.w$)(l, n),
        D = (0, j.A)(m ? l : null),
        F = D?.id ?? null,
        k = l.guild_id ?? null,
        E = (0, G.A)(l, n);
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
                                icon: r.x,
                                leadingAccessory: { type: "icon", icon: r.x },
                                label: P.intl.string(_.default["9wQTdG"]),
                                action: () => (0, I.A)(E, k),
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
                                label: P.intl.string(_.default.jMMrDM),
                                action: () => (0, f.A)(D.id),
                            },
                            "edit",
                        )
                      : null,
              settings:
                  null != D && e && (M || (0, v.PV)(D))
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-settings",
                                icon: a.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                label: P.intl.string(_.default.I2XSKe),
                                action: () => (0, x.A)(D.id, { guildId: k, initialTab: "app" }),
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
                                label: P.intl.string(_.default.FQb5Z3),
                                checked: L,
                                action: () => (0, g.Gt)(C, !L),
                            },
                            "show-overlay",
                        )
                      : null,
              devicePermissions: U,
          }
        : w;
}

e.d(n, { A: () => m });
var t = e(477900),
    i = e(582128),
    u = e(17928),
    c = e(477782),
    r = e(624479),
    o = e(22231),
    a = e(625903),
    d = e(615606),
    s = e(911040),
    A = e(64656),
    g = e(919417),
    p = e(319481),
    y = e(136968),
    f = e(381991),
    I = e(260498),
    v = e(95264),
    b = e(442331),
    h = e(616334),
    j = e(246338),
    x = e(913396),
    G = e(914315),
    _ = e(248675),
    w = e(105292);
let P = { remix: null, edit: null, settings: null, showOverlay: null, devicePermissions: null };
function m(l, n) {
    let { includeSettings: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        m = (0, j.w$)(l, n),
        D = (0, x.A)(m ? l : null),
        F = D?.id ?? null,
        C = l.guild_id ?? null,
        k = (0, G.A)(l, n);
    i.useEffect(() => {
        null != F && (0, p.ensureConnection)(F);
    }, [F]);
    let E = (0, u.bG)([b.A], () => null != F && null != b.A.getSettings(F), [F]),
        M = (0, A.A)((0, s.A)(l).frameId),
        S = (0, d.q)(l)?.id ?? null,
        L = (0, g.V5)(S),
        U = (0, y.A)(S);
    return m && null != C
        ? {
              remix:
                  null != k
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-remix",
                                icon: r.CopyIcon,
                                leadingAccessory: { type: "icon", icon: r.CopyIcon },
                                label: w.intl.string(_.default["9wQTdG"]),
                                action: () => (0, v.A)(k, C),
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
                                label: w.intl.string(_.default.jMMrDM),
                                action: () => (0, f.Ay)(D.id),
                            },
                            "edit",
                        )
                      : null,
              settings:
                  null != D && e && (E || (0, I.PV)(D))
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-settings",
                                icon: a.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                label: w.intl.string(_.default.I2XSKe),
                                action: () => (0, h.A)(D.id, { guildId: C, initialTab: "app" }),
                            },
                            "settings",
                        )
                      : null,
              showOverlay:
                  M && null != S
                      ? (0, t.jsx)(
                            c.sL,
                            {
                                id: "conjure-show-overlay",
                                label: w.intl.string(_.default.FQb5Z3),
                                checked: L,
                                action: () => (0, g.Gt)(S, !L),
                            },
                            "show-overlay",
                        )
                      : null,
              devicePermissions: U,
          }
        : P;
}

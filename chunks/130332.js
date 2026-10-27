e.d(n, { A: () => D });
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
    p = e(976860),
    g = e(919417),
    y = e(319481),
    f = e(136968),
    I = e(260498),
    v = e(95264),
    b = e(442331),
    h = e(616334),
    j = e(246338),
    x = e(913396),
    G = e(914315),
    _ = e(652215),
    w = e(746080),
    P = e(248675),
    m = e(105292);
let C = { remix: null, edit: null, settings: null, showOverlay: null, devicePermissions: null };
function D(l, n) {
    let { includeSettings: e = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        D = (0, j.w$)(l, n),
        E = (0, x.A)(D ? l : null),
        F = E?.id ?? null,
        V = l.guild_id ?? null,
        k = (0, G.A)(l, n);
    i.useEffect(() => {
        null != F && (0, y.ensureConnection)(F);
    }, [F]);
    let L = (0, u.bG)([b.A], () => null != F && null != b.A.getSettings(F), [F]),
        M = (0, A.A)((0, s.A)(l).frameId),
        N = (0, d.q)(l)?.id ?? null,
        S = (0, g.V5)(N),
        U = (0, f.A)(N);
    return D && null != V
        ? {
              remix:
                  null != k
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-remix",
                                icon: r.CopyIcon,
                                leadingAccessory: { type: "icon", icon: r.CopyIcon },
                                label: m.intl.string(P.default["9wQTdG"]),
                                action: () => (0, v.A)(k, V),
                            },
                            "remix",
                        )
                      : null,
              edit:
                  null != E
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-edit",
                                icon: o.PencilIcon,
                                leadingAccessory: { type: "icon", icon: o.PencilIcon },
                                label: m.intl.string(P.default.jMMrDM),
                                action: () => (0, p.pX)(_.BVt.CHANNEL(V, w.VV.CONJURE, E.id)),
                            },
                            "edit",
                        )
                      : null,
              settings:
                  null != E && e && (L || (0, I.PV)(E))
                      ? (0, t.jsx)(
                            c.Dr,
                            {
                                id: "conjure-settings",
                                icon: a.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                label: m.intl.string(P.default.I2XSKe),
                                action: () => (0, h.A)(E.id, { guildId: V, initialTab: "app" }),
                            },
                            "settings",
                        )
                      : null,
              showOverlay:
                  M && null != N
                      ? (0, t.jsx)(
                            c.sL,
                            {
                                id: "conjure-show-overlay",
                                label: m.intl.string(P.default.FQb5Z3),
                                checked: S,
                                action: () => (0, g.Gt)(N, !S),
                            },
                            "show-overlay",
                        )
                      : null,
              devicePermissions: U,
          }
        : C;
}

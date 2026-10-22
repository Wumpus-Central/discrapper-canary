t.d(n, { A: () => C });
var e = t(477900),
    i = t(582128),
    u = t(17928),
    c = t(477782),
    r = t(624479),
    o = t(22231),
    a = t(625903),
    d = t(615606),
    s = t(911040),
    A = t(64656),
    p = t(976860),
    g = t(919417),
    y = t(319481),
    f = t(260498),
    I = t(95264),
    v = t(442331),
    b = t(616334),
    h = t(246338),
    j = t(913396),
    x = t(914315),
    G = t(652215),
    _ = t(746080),
    w = t(248675),
    P = t(105292);
let m = { remix: null, edit: null, settings: null, showOverlay: null };
function C(l, n) {
    let { includeSettings: t = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        C = (0, h.w$)(l, n),
        D = (0, j.A)(C ? l : null),
        E = D?.id ?? null,
        F = l.guild_id ?? null,
        V = (0, x.A)(l, n);
    i.useEffect(() => {
        null != E && (0, y.ensureConnection)(E);
    }, [E]);
    let k = (0, u.bG)([v.A], () => null != E && null != v.A.getSettings(E), [E]),
        L = (0, A.A)((0, s.A)(l).frameId),
        M = (0, d.q)(l)?.id ?? null,
        N = (0, g.V5)(M);
    return C && null != F
        ? {
              remix:
                  null != V
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-remix",
                                icon: r.CopyIcon,
                                leadingAccessory: { type: "icon", icon: r.CopyIcon },
                                label: P.intl.string(w.default["9wQTdG"]),
                                action: () => (0, I.A)(V, F),
                            },
                            "remix",
                        )
                      : null,
              edit:
                  null != D
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-edit",
                                icon: o.PencilIcon,
                                leadingAccessory: { type: "icon", icon: o.PencilIcon },
                                label: P.intl.string(w.default.jMMrDM),
                                action: () => (0, p.pX)(G.BVt.CHANNEL(F, _.VV.CONJURE, D.id)),
                            },
                            "edit",
                        )
                      : null,
              settings:
                  null != D && t && (k || (0, f.PV)(D))
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-settings",
                                icon: a.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                label: P.intl.string(w.default.I2XSKe),
                                action: () => (0, b.A)(D.id, { guildId: F, initialTab: "app" }),
                            },
                            "settings",
                        )
                      : null,
              showOverlay:
                  L && null != M
                      ? (0, e.jsx)(
                            c.sL,
                            {
                                id: "conjure-show-overlay",
                                label: P.intl.string(w.default.FQb5Z3),
                                checked: N,
                                action: () => (0, g.Gt)(M, !N),
                            },
                            "show-overlay",
                        )
                      : null,
          }
        : m;
}

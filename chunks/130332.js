t.d(n, { A: () => h });
var e = t(477900),
    i = t(582128),
    u = t(17928),
    c = t(477782),
    r = t(624479),
    o = t(22231),
    a = t(625903),
    d = t(976860),
    s = t(319481),
    A = t(260498),
    p = t(95264),
    g = t(442331),
    y = t(616334),
    f = t(246338),
    I = t(913396),
    b = t(914315),
    _ = t(652215),
    v = t(746080),
    x = t(248675),
    G = t(105292);
let j = { remix: null, edit: null, settings: null };
function h(l, n) {
    let { includeSettings: t = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        h = (0, f.w$)(l, n),
        P = (0, I.A)(h ? l : null),
        C = P?.id ?? null,
        m = l.guild_id ?? null,
        w = (0, b.A)(l, n);
    i.useEffect(() => {
        null != C && (0, s.ensureConnection)(C);
    }, [C]);
    let D = (0, u.bG)([g.A], () => null != C && null != g.A.getSettings(C), [C]);
    return h && null != m
        ? {
              remix:
                  null != w
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-remix",
                                icon: r.CopyIcon,
                                leadingAccessory: { type: "icon", icon: r.CopyIcon },
                                label: G.intl.string(x.default["9wQTdG"]),
                                action: () => (0, p.A)(w, m),
                            },
                            "remix",
                        )
                      : null,
              edit:
                  null != P
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-edit",
                                icon: o.PencilIcon,
                                leadingAccessory: { type: "icon", icon: o.PencilIcon },
                                label: G.intl.string(x.default.jMMrDM),
                                action: () => (0, d.pX)(_.BVt.CHANNEL(m, v.VV.CONJURE, P.id)),
                            },
                            "edit",
                        )
                      : null,
              settings:
                  null != P && t && (D || (0, A.PV)(P))
                      ? (0, e.jsx)(
                            c.Dr,
                            {
                                id: "conjure-settings",
                                icon: a.SettingsIcon,
                                leadingAccessory: { type: "icon", icon: a.SettingsIcon },
                                label: G.intl.string(x.default.I2XSKe),
                                action: () => (0, y.A)(P.id, { guildId: m, initialTab: "app" }),
                            },
                            "settings",
                        )
                      : null,
          }
        : j;
}

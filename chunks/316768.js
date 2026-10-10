(e.d(l, { A: () => P }), e(321073));
var t = e(477900),
    i = e(582128),
    c = e(17928),
    o = e(477782),
    u = e(22231),
    r = e(625903),
    d = e(624479),
    a = e(70688),
    s = e(976860),
    A = e(712808),
    p = e(42766),
    g = e(95264),
    I = e(616334),
    y = e(246338),
    f = e(696451),
    _ = e(71393),
    h = e(576705),
    b = e(935208),
    x = e(164892),
    C = e(371169),
    E = e(652215),
    D = e(577964),
    G = e(746080),
    N = e(165610),
    V = e(248675),
    j = e(660183);
function P(n, l, e) {
    var P;
    let v,
        T,
        B,
        L,
        M,
        F = (0, y.w$)(n, e),
        H =
            ((P = F ? n : null),
            (T = null != (v = (0, y.us)(P))),
            (B = P?.guild_id ?? null),
            (L = (0, c.bG)(
                [_.A, h.A],
                () => {
                    let n = null != B ? _.A.getGuild(B) : null;
                    return null != n && h.A.can(E.xBc.MANAGE_GUILD, n);
                },
                [B],
            )),
            (M = (0, c.yK)([f.Ay], () => (null != B ? (f.Ay.getSelfMember(B)?.roles ?? []) : []), [B])),
            i.useEffect(() => {
                T && null != v && (0, C.hF)(B ?? void 0);
            }, [T, v, B, L, M]),
            (0, c.bG)(
                [p.Ay],
                () => {
                    if (null == v) return null;
                    let n = p.Ay.findProjectByApplicationId(v);
                    if (null == n || (0, p.PV)(n)) return n;
                    let l = null != B ? b.default.castGuildIdAsEveryoneGuildRoleId(B) : null,
                        e = (n.collaborator_role_ids ?? []).some((n) => n === l || M.includes(n));
                    return n.guild_id === B && (0, x.Hn)(n) && (L || e) ? n : null;
                },
                [v, L, M, B],
            )),
        S = H?.id ?? null,
        m = n.guild_id ?? null;
    i.useEffect(() => {
        null != S && (0, A.Hc)(S);
    }, [S]);
    let O = (0, c.bG)([A.Ay], () => null != S && null != A.Ay.getSettings(S), [S]),
        k = l?.id,
        w = i.useCallback(() => (0, D.A)(k, m, n.id), [k, m, n.id]);
    if (!F || null == H || null == m) return [];
    let U = [
        (0, t.jsx)(
            o.Dr,
            {
                id: "conjure-edit",
                icon: u.PencilIcon,
                leadingAccessory: { type: "icon", icon: u.PencilIcon },
                label: j.intl.string(V.default.jMMrDM),
                action: () => (0, s.pX)(E.BVt.CHANNEL(m, G.VV.CONJURE, H.id)),
            },
            "edit",
        ),
    ];
    return (
        (O || (0, p.PV)(H)) &&
            U.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-settings",
                        icon: r.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                        label: j.intl.string(V.default.I2XSKe),
                        action: () => (0, I.A)(H.id, { guildId: m, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        (0, p.H_)(H) &&
            U.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-remix",
                        icon: d.CopyIcon,
                        leadingAccessory: { type: "icon", icon: d.CopyIcon },
                        label: j.intl.string(V.default["9wQTdG"]),
                        action: () => (0, g.A)(H, m),
                    },
                    "remix",
                ),
            ),
        (0, N.x1)(l) &&
            U.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-close",
                        icon: a.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: a.DoorExitIcon },
                        label: j.intl.string(V.default["/TlGcK"]),
                        action: w,
                    },
                    "close",
                ),
            ),
        U
    );
}

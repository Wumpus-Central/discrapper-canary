(e.d(l, { A: () => v }), e(321073));
var t = e(477900),
    i = e(582128),
    c = e(17928),
    o = e(477782),
    u = e(22231),
    r = e(625903),
    d = e(624479),
    a = e(70688),
    s = e(976860),
    A = e(723312),
    p = e(260498),
    g = e(95264),
    I = e(442331),
    y = e(616334),
    f = e(246338),
    _ = e(696451),
    h = e(71393),
    C = e(576705),
    b = e(935208),
    x = e(371169),
    E = e(951178),
    D = e(652215),
    G = e(577964),
    N = e(746080),
    V = e(165610),
    j = e(248675),
    P = e(660183);
function v(n, l, e) {
    var v;
    let T,
        B,
        L,
        M,
        F,
        S = (0, f.w$)(n, e),
        m =
            ((v = S ? n : null),
            (B = null != (T = (0, f.us)(v))),
            (L = v?.guild_id ?? null),
            (M = (0, c.bG)(
                [h.A, C.A],
                () => {
                    let n = null != L ? h.A.getGuild(L) : null;
                    return null != n && C.A.can(D.xBc.MANAGE_GUILD, n);
                },
                [L],
            )),
            (F = (0, c.yK)([_.Ay], () => (null != L ? (_.Ay.getSelfMember(L)?.roles ?? []) : []), [L])),
            i.useEffect(() => {
                B && null != T && (0, x.hF)(L ?? void 0);
            }, [B, T, L, M, F]),
            (0, c.bG)(
                [p.Ay],
                () => {
                    if (null == T) return null;
                    let n = p.Ay.findProjectByApplicationId(T);
                    if (null == n || (0, p.PV)(n)) return n;
                    let l = null != L ? b.default.castGuildIdAsEveryoneGuildRoleId(L) : null,
                        e = (n.collaborator_role_ids ?? []).some((n) => n === l || F.includes(n));
                    return n.guild_id === L && (0, E.XE)(n) && (M || e) ? n : null;
                },
                [T, M, F, L],
            )),
        O = m?.id ?? null,
        k = n.guild_id ?? null;
    i.useEffect(() => {
        null != O && (0, A.ensureConnection)(O);
    }, [O]);
    let w = (0, c.bG)([I.A], () => null != O && null != I.A.getSettings(O), [O]),
        H = l?.id,
        U = i.useCallback(() => (0, G.A)(H, k, n.id), [H, k, n.id]);
    if (!S || null == m || null == k) return [];
    let R = [
        (0, t.jsx)(
            o.Dr,
            {
                id: "conjure-edit",
                icon: u.PencilIcon,
                leadingAccessory: { type: "icon", icon: u.PencilIcon },
                label: P.intl.string(j.default.jMMrDM),
                action: () => (0, s.pX)(D.BVt.CHANNEL(k, N.VV.CONJURE, m.id)),
            },
            "edit",
        ),
    ];
    return (
        (w || (0, p.PV)(m)) &&
            R.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-settings",
                        icon: r.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                        label: P.intl.string(j.default.I2XSKe),
                        action: () => (0, y.A)(m.id, { guildId: k, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        (0, p.H_)(m) &&
            R.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-remix",
                        icon: d.CopyIcon,
                        leadingAccessory: { type: "icon", icon: d.CopyIcon },
                        label: P.intl.string(j.default["9wQTdG"]),
                        action: () => (0, g.A)(m, k),
                    },
                    "remix",
                ),
            ),
        (0, V.x1)(l) &&
            R.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-close",
                        icon: a.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: a.DoorExitIcon },
                        label: P.intl.string(j.default["/TlGcK"]),
                        action: U,
                    },
                    "close",
                ),
            ),
        R
    );
}

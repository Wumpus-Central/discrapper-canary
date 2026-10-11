(e.d(n, { A: () => v }), e(321073));
var t = e(477900),
    i = e(582128),
    c = e(17928),
    o = e(477782),
    u = e(22231),
    r = e(625903),
    d = e(624479),
    a = e(70688),
    s = e(976860),
    A = e(591277),
    p = e(260498),
    g = e(95264),
    I = e(442331),
    y = e(616334),
    f = e(246338),
    _ = e(696451),
    h = e(71393),
    b = e(576705),
    x = e(935208),
    C = e(371169),
    E = e(951178),
    D = e(652215),
    G = e(577964),
    N = e(746080),
    V = e(165610),
    j = e(248675),
    P = e(660183);
function v(l, n, e) {
    var v;
    let T,
        B,
        L,
        M,
        F,
        S = (0, f.w$)(l, e),
        m =
            ((v = S ? l : null),
            (B = null != (T = (0, f.us)(v))),
            (L = v?.guild_id ?? null),
            (M = (0, c.bG)(
                [h.A, b.A],
                () => {
                    let l = null != L ? h.A.getGuild(L) : null;
                    return null != l && b.A.can(D.xBc.MANAGE_GUILD, l);
                },
                [L],
            )),
            (F = (0, c.yK)([_.Ay], () => (null != L ? (_.Ay.getSelfMember(L)?.roles ?? []) : []), [L])),
            i.useEffect(() => {
                B && null != T && (0, C.hF)(L ?? void 0);
            }, [B, T, L, M, F]),
            (0, c.bG)(
                [p.Ay],
                () => {
                    if (null == T) return null;
                    let l = p.Ay.findProjectByApplicationId(T);
                    if (null == l || (0, p.PV)(l)) return l;
                    let n = null != L ? x.default.castGuildIdAsEveryoneGuildRoleId(L) : null,
                        e = (l.collaborator_role_ids ?? []).some((l) => l === n || F.includes(l));
                    return l.guild_id === L && (0, E.XE)(l) && (M || e) ? l : null;
                },
                [T, M, F, L],
            )),
        H = m?.id ?? null,
        O = l.guild_id ?? null;
    i.useEffect(() => {
        null != H && (0, A.Hc)(H);
    }, [H]);
    let k = (0, c.bG)([I.A], () => null != H && null != I.A.getSettings(H), [H]),
        w = n?.id,
        U = i.useCallback(() => (0, G.A)(w, O, l.id), [w, O, l.id]);
    if (!S || null == m || null == O) return [];
    let R = [
        (0, t.jsx)(
            o.Dr,
            {
                id: "conjure-edit",
                icon: u.PencilIcon,
                leadingAccessory: { type: "icon", icon: u.PencilIcon },
                label: P.intl.string(j.default.jMMrDM),
                action: () => (0, s.pX)(D.BVt.CHANNEL(O, N.VV.CONJURE, m.id)),
            },
            "edit",
        ),
    ];
    return (
        (k || (0, p.PV)(m)) &&
            R.push(
                (0, t.jsx)(
                    o.Dr,
                    {
                        id: "conjure-settings",
                        icon: r.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                        label: P.intl.string(j.default.I2XSKe),
                        action: () => (0, y.A)(m.id, { guildId: O, initialTab: "app" }),
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
                        action: () => (0, g.A)(m, O),
                    },
                    "remix",
                ),
            ),
        (0, V.x1)(n) &&
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

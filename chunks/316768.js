(t.d(l, { A: () => j }), t(321073));
var i = t(477900),
    e = t(582128),
    c = t(17928),
    u = t(477782),
    r = t(22231),
    o = t(625903),
    a = t(624479),
    d = t(70688),
    s = t(976860),
    A = t(723312),
    p = t(260498),
    g = t(95264),
    y = t(442331),
    I = t(616334),
    f = t(246338),
    _ = t(696451),
    x = t(71393),
    C = t(576705),
    b = t(935208),
    h = t(371169),
    E = t(951178),
    D = t(652215),
    G = t(577964),
    N = t(746080),
    v = t(165610),
    P = t(248675),
    V = t(105292);
function j(n, l, t) {
    var j;
    let F,
        L,
        T,
        B,
        M,
        w = (0, f.w$)(n, t),
        S =
            ((j = w ? n : null),
            (L = null != (F = (0, f.us)(j))),
            (T = j?.guild_id ?? null),
            (B = (0, c.bG)(
                [x.A, C.A],
                () => {
                    let n = null != T ? x.A.getGuild(T) : null;
                    return null != n && C.A.can(D.xBc.MANAGE_GUILD, n);
                },
                [T],
            )),
            (M = (0, c.yK)([_.Ay], () => (null != T ? (_.Ay.getSelfMember(T)?.roles ?? []) : []), [T])),
            e.useEffect(() => {
                L && null != F && (0, h.hF)(T ?? void 0);
            }, [L, F, T, B, M]),
            (0, c.bG)(
                [p.Ay],
                () => {
                    if (null == F) return null;
                    let n = p.Ay.findProjectByApplicationId(F);
                    if (null == n || (0, p.PV)(n)) return n;
                    let l = null != T ? b.default.castGuildIdAsEveryoneGuildRoleId(T) : null,
                        t = (n.collaborator_role_ids ?? []).some((n) => n === l || M.includes(n));
                    return n.guild_id === T && (0, E.pL)(n) && (B || t) ? n : null;
                },
                [F, B, M, T],
            )),
        m = S?.id ?? null,
        H = n.guild_id ?? null;
    e.useEffect(() => {
        null != m && (0, A.ensureConnection)(m);
    }, [m]);
    let O = (0, c.bG)([y.A], () => null != m && null != y.A.getSettings(m), [m]),
        U = l?.id,
        k = e.useCallback(() => (0, G.A)(U, H, n.id), [U, H, n.id]);
    if (!w || null == S || null == H) return [];
    let R = [
        (0, i.jsx)(
            u.Dr,
            {
                id: "conjure-edit",
                icon: r.PencilIcon,
                leadingAccessory: { type: "icon", icon: r.PencilIcon },
                label: V.intl.string(P.default.jMMrDM),
                action: () => (0, s.pX)(D.BVt.CHANNEL(H, N.VV.CONJURE, S.id)),
            },
            "edit",
        ),
    ];
    return (
        (O || (0, p.PV)(S)) &&
            R.push(
                (0, i.jsx)(
                    u.Dr,
                    {
                        id: "conjure-settings",
                        icon: o.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: o.SettingsIcon },
                        label: V.intl.string(P.default.I2XSKe),
                        action: () => (0, I.A)(S.id, { guildId: H, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        (0, p.H_)(S) &&
            R.push(
                (0, i.jsx)(
                    u.Dr,
                    {
                        id: "conjure-remix",
                        icon: a.CopyIcon,
                        leadingAccessory: { type: "icon", icon: a.CopyIcon },
                        label: V.intl.string(P.default["9wQTdG"]),
                        action: () => (0, g.A)(S, H),
                    },
                    "remix",
                ),
            ),
        (0, v.x1)(l) &&
            R.push(
                (0, i.jsx)(
                    u.Dr,
                    {
                        id: "conjure-close",
                        icon: d.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: d.DoorExitIcon },
                        label: V.intl.string(P.default["/TlGcK"]),
                        action: k,
                    },
                    "close",
                ),
            ),
        R
    );
}

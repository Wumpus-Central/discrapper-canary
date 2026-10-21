(t.d(n, { A: () => E }), t(321073));
var e = t(477900),
    i = t(582128),
    u = t(17928),
    c = t(477782),
    r = t(22231),
    o = t(625903),
    a = t(624479),
    d = t(615606),
    s = t(976860),
    p = t(319481),
    A = t(371169),
    g = t(260498),
    y = t(95264),
    f = t(442331),
    I = t(616334),
    b = t(246338),
    h = t(696451),
    _ = t(71393),
    G = t(576705),
    j = t(935208),
    v = t(951178),
    x = t(652215),
    P = t(746080),
    C = t(248675),
    D = t(105292);
function E(l, n) {
    var t;
    let E,
        w,
        F,
        m,
        M,
        { includeSettings: N = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        S = (0, b.w$)(l, n),
        V =
            ((t = S ? l : null),
            (w = null != (E = (0, b.us)(t))),
            (F = t?.guild_id ?? null),
            (m = (0, u.bG)(
                [_.A, G.A],
                () => {
                    let l = null != F ? _.A.getGuild(F) : null;
                    return null != l && G.A.can(x.xBc.MANAGE_GUILD, l);
                },
                [F],
            )),
            (M = (0, u.yK)([h.Ay], () => (null != F ? (h.Ay.getSelfMember(F)?.roles ?? []) : []), [F])),
            i.useEffect(() => {
                w && null != E && (0, A.hF)(F ?? void 0);
            }, [w, E, F, m, M]),
            (0, u.bG)(
                [g.Ay],
                () => {
                    if (null == E) return null;
                    let l = g.Ay.findProjectByApplicationId(E);
                    if (null == l || (0, g.PV)(l)) return l;
                    let n = null != F ? j.default.castGuildIdAsEveryoneGuildRoleId(F) : null,
                        t = (l.collaborator_role_ids ?? []).some((l) => l === n || M.includes(l));
                    return l.guild_id === F && (0, v.pL)(l) && (m || t) ? l : null;
                },
                [E, m, M, F],
            )),
        k = V?.id ?? null,
        L = l.guild_id ?? null,
        U = (0, d.q)(l),
        B = S && null == V ? (U?.conjureProjectId ?? null) : null;
    i.useEffect(() => {
        null != B && (0, A.tF)([B]);
    }, [B]);
    let H = (0, u.bG)([g.Ay], () => (null != B ? g.Ay.getProject(B) : null), [B]),
        K = V ?? H;
    i.useEffect(() => {
        null != k && (0, p.ensureConnection)(k);
    }, [k]);
    let R = (0, u.bG)([f.A], () => null != k && null != f.A.getSettings(k), [k]);
    if (!S || null == L) return [];
    let T = [];
    return (
        null != V &&
            T.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-edit",
                        icon: r.PencilIcon,
                        leadingAccessory: { type: "icon", icon: r.PencilIcon },
                        label: D.intl.string(C.default.jMMrDM),
                        action: () => (0, s.pX)(x.BVt.CHANNEL(L, P.VV.CONJURE, V.id)),
                    },
                    "edit",
                ),
            ),
        null != V &&
            N &&
            (R || (0, g.PV)(V)) &&
            T.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-settings",
                        icon: o.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: o.SettingsIcon },
                        label: D.intl.string(C.default.I2XSKe),
                        action: () => (0, I.A)(V.id, { guildId: L, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        null != K &&
            (0, g.H_)(K) &&
            T.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-remix",
                        icon: a.CopyIcon,
                        leadingAccessory: { type: "icon", icon: a.CopyIcon },
                        label: D.intl.string(C.default["9wQTdG"]),
                        action: () => (0, y.A)(K, L),
                    },
                    "remix",
                ),
            ),
        T
    );
}

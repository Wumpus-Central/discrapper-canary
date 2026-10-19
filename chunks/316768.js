(t.d(n, { A: () => F }), t(321073));
var e = t(477900),
    i = t(582128),
    u = t(17928),
    c = t(477782),
    r = t(22231),
    o = t(625903),
    a = t(624479),
    d = t(70688),
    s = t(615606),
    A = t(976860),
    p = t(291815),
    g = t(371169),
    y = t(260498),
    I = t(95264),
    f = t(442331),
    h = t(616334),
    _ = t(246338),
    b = t(696451),
    x = t(71393),
    C = t(576705),
    E = t(935208),
    j = t(951178),
    G = t(652215),
    P = t(577964),
    v = t(746080),
    D = t(165610),
    N = t(261425),
    V = t(105292);
function F(l, n, t) {
    var F;
    let L,
        T,
        B,
        M,
        w,
        { includeSettings: S = !0 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        m = (0, _.w$)(l, t),
        H =
            ((F = m ? l : null),
            (T = null != (L = (0, _.us)(F))),
            (B = F?.guild_id ?? null),
            (M = (0, u.bG)(
                [x.A, C.A],
                () => {
                    let l = null != B ? x.A.getGuild(B) : null;
                    return null != l && C.A.can(G.xBc.MANAGE_GUILD, l);
                },
                [B],
            )),
            (w = (0, u.yK)([b.Ay], () => (null != B ? (b.Ay.getSelfMember(B)?.roles ?? []) : []), [B])),
            i.useEffect(() => {
                T && null != L && (0, g.hF)(B ?? void 0);
            }, [T, L, B, M, w]),
            (0, u.bG)(
                [y.Ay],
                () => {
                    if (null == L) return null;
                    let l = y.Ay.findProjectByApplicationId(L);
                    if (null == l || (0, y.PV)(l)) return l;
                    let n = null != B ? E.default.castGuildIdAsEveryoneGuildRoleId(B) : null,
                        t = (l.collaborator_role_ids ?? []).some((l) => l === n || w.includes(l));
                    return l.guild_id === B && (0, j.pL)(l) && (M || t) ? l : null;
                },
                [L, M, w, B],
            )),
        O = H?.id ?? null,
        U = l.guild_id ?? null,
        k = (0, s.q)(l),
        R = m && null == H ? (k?.conjureProjectId ?? null) : null;
    i.useEffect(() => {
        null != R && (0, g.tF)([R]);
    }, [R]);
    let K = (0, u.bG)([y.Ay], () => (null != R ? y.Ay.getProject(R) : null), [R]),
        X = H ?? K;
    i.useEffect(() => {
        null != O && (0, p.ensureConnection)(O);
    }, [O]);
    let W = (0, u.bG)([f.A], () => null != O && null != f.A.getSettings(O), [O]),
        Y = n?.id,
        q = i.useCallback(() => (0, P.A)(Y, U, l.id), [Y, U, l.id]);
    if (!m || null == U) return [];
    let J = [];
    return (
        null != H &&
            J.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-edit",
                        icon: r.PencilIcon,
                        leadingAccessory: { type: "icon", icon: r.PencilIcon },
                        label: V.intl.string(N.default.jMMrDM),
                        action: () => (0, A.pX)(G.BVt.CHANNEL(U, v.VV.CONJURE, H.id)),
                    },
                    "edit",
                ),
            ),
        null != H &&
            S &&
            (W || (0, y.PV)(H)) &&
            J.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-settings",
                        icon: o.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: o.SettingsIcon },
                        label: V.intl.string(N.default.I2XSKe),
                        action: () => (0, h.A)(H.id, { guildId: U, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        null != X &&
            (0, y.H_)(X) &&
            J.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-remix",
                        icon: a.CopyIcon,
                        leadingAccessory: { type: "icon", icon: a.CopyIcon },
                        label: V.intl.string(N.default["9wQTdG"]),
                        action: () => (0, I.A)(X, U),
                    },
                    "remix",
                ),
            ),
        (0, D.x1)(n) &&
            J.push(
                (0, e.jsx)(
                    c.Dr,
                    {
                        id: "conjure-close",
                        icon: d.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: d.DoorExitIcon },
                        label: V.intl.string(N.default["/TlGcK"]),
                        action: q,
                    },
                    "close",
                ),
            ),
        J
    );
}

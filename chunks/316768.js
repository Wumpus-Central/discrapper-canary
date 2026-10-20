(t.d(n, { A: () => k }), t(321073));
var e = t(477900),
    i = t(582128),
    c = t(17928),
    u = t(477782),
    o = t(22231),
    r = t(625903),
    a = t(624479),
    d = t(70688),
    s = t(615606),
    p = t(545691),
    A = t(976860),
    g = t(319481),
    y = t(371169),
    f = t(260498),
    I = t(95264),
    b = t(442331),
    h = t(616334),
    x = t(246338),
    j = t(696451),
    G = t(71393),
    _ = t(576705),
    v = t(935208),
    D = t(951178),
    P = t(652215),
    C = t(746080),
    E = t(165610),
    w = t(261425),
    F = t(105292);
function k(l, n, t) {
    var k;
    let m,
        M,
        N,
        S,
        V,
        { includeSettings: L = !0 } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        U = (0, x.w$)(l, t),
        B =
            ((k = U ? l : null),
            (M = null != (m = (0, x.us)(k))),
            (N = k?.guild_id ?? null),
            (S = (0, c.bG)(
                [G.A, _.A],
                () => {
                    let l = null != N ? G.A.getGuild(N) : null;
                    return null != l && _.A.can(P.xBc.MANAGE_GUILD, l);
                },
                [N],
            )),
            (V = (0, c.yK)([j.Ay], () => (null != N ? (j.Ay.getSelfMember(N)?.roles ?? []) : []), [N])),
            i.useEffect(() => {
                M && null != m && (0, y.hF)(N ?? void 0);
            }, [M, m, N, S, V]),
            (0, c.bG)(
                [f.Ay],
                () => {
                    if (null == m) return null;
                    let l = f.Ay.findProjectByApplicationId(m);
                    if (null == l || (0, f.PV)(l)) return l;
                    let n = null != N ? v.default.castGuildIdAsEveryoneGuildRoleId(N) : null,
                        t = (l.collaborator_role_ids ?? []).some((l) => l === n || V.includes(l));
                    return l.guild_id === N && (0, D.pL)(l) && (S || t) ? l : null;
                },
                [m, S, V, N],
            )),
        H = B?.id ?? null,
        K = l.guild_id ?? null,
        T = (0, s.q)(l),
        R = U && null == B ? (T?.conjureProjectId ?? null) : null;
    i.useEffect(() => {
        null != R && (0, y.tF)([R]);
    }, [R]);
    let X = (0, c.bG)([f.Ay], () => (null != R ? f.Ay.getProject(R) : null), [R]),
        q = B ?? X;
    i.useEffect(() => {
        null != H && (0, g.ensureConnection)(H);
    }, [H]);
    let J = (0, c.bG)([b.A], () => null != H && null != b.A.getSettings(H), [H]),
        O = n?.id,
        Q = i.useCallback(() => (0, p.A)(O), [O]);
    if (!U || null == K) return [];
    let $ = [];
    return (
        null != B &&
            $.push(
                (0, e.jsx)(
                    u.Dr,
                    {
                        id: "conjure-edit",
                        icon: o.PencilIcon,
                        leadingAccessory: { type: "icon", icon: o.PencilIcon },
                        label: F.intl.string(w.default.jMMrDM),
                        action: () => (0, A.pX)(P.BVt.CHANNEL(K, C.VV.CONJURE, B.id)),
                    },
                    "edit",
                ),
            ),
        null != B &&
            L &&
            (J || (0, f.PV)(B)) &&
            $.push(
                (0, e.jsx)(
                    u.Dr,
                    {
                        id: "conjure-settings",
                        icon: r.SettingsIcon,
                        leadingAccessory: { type: "icon", icon: r.SettingsIcon },
                        label: F.intl.string(w.default.I2XSKe),
                        action: () => (0, h.A)(B.id, { guildId: K, initialTab: "app" }),
                    },
                    "settings",
                ),
            ),
        null != q &&
            (0, f.H_)(q) &&
            $.push(
                (0, e.jsx)(
                    u.Dr,
                    {
                        id: "conjure-remix",
                        icon: a.CopyIcon,
                        leadingAccessory: { type: "icon", icon: a.CopyIcon },
                        label: F.intl.string(w.default["9wQTdG"]),
                        action: () => (0, I.A)(q, K),
                    },
                    "remix",
                ),
            ),
        (0, E.x1)(n) &&
            $.push(
                (0, e.jsx)(
                    u.Dr,
                    {
                        id: "conjure-close",
                        icon: d.DoorExitIcon,
                        leadingAccessory: { type: "icon", icon: d.DoorExitIcon },
                        label: F.intl.string(w.default["/TlGcK"]),
                        action: Q,
                    },
                    "close",
                ),
            ),
        $
    );
}

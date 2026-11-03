(i.d(l, { Ay: () => N, SP: () => g, cn: () => A }), i(938796));
var t,
    n,
    s = i(582128),
    a = i(821418),
    r = i(665260),
    o = i(17928),
    c = i(685073),
    d = i(928568),
    u = i(280450),
    m = i(696451),
    x = i(71393),
    I = i(299091),
    h = i(287809),
    v = i(348943),
    j = i(652215),
    g =
        (((t = {})[(t.IS_MEMBER = 0)] = "IS_MEMBER"),
        (t[(t.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (t[(t.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (t[(t.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (t[(t.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (t[(t.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (t[(t.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        t),
    A = (((n = {}).INVITE = "INVITE"), n);
function N(e, l, i) {
    let { id: t, features: n } = e,
        g = (0, o.bG)([u.default], () => u.default.getId()),
        A = (0, o.bG)([x.A], () => x.A.getGuild(t)),
        N = (0, o.bG)([h.default], () => h.default.getUser(g), [g]),
        f = (0, o.bG)([m.Ay], () => (null != t ? m.Ay.getMember(t, g) : null)?.joinedAt != null, [t, g]),
        {
            validInviteKey: b,
            isBypassInvite: y,
            inviteRoles: C,
        } = (0, o.cf)(
            [I.A],
            () => {
                let e = i ?? I.A.getInviteKeyForGuildId(t),
                    l = null != e ? I.A.getInvite(e) : null;
                return null == l || l.state === j.elq.BANNED || l.state === j.elq.EXPIRED
                    ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                    : {
                          validInviteKey: e,
                          isBypassInvite: (0, r.Lt)(l.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                          inviteRoles: l.roles,
                      };
            },
            [t, i],
        ),
        p = (0, d.A)(),
        E = s.useMemo(() => {
            if (f) {
                if ("INVITE" === l && null != C && C.length > 0 && null != N) {
                    let e = m.Ay.getMember(t, N.id),
                        l = new Set(e?.roles ?? []);
                    if (C.some((e) => !l.has(e.id))) return 6;
                }
                let i = N?.primaryGuild,
                    n = i?.identityGuildId === t && i?.identityEnabled === !0;
                return "INVITE" !== l && null != e.tag && !n && null != A && (0, c.Rg)(A) ? 1 : 0;
            }
            return p.includes(t)
                ? 2
                : n?.includes(j.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(j.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != b || e.visibility === v.n.PUBLIC_WITH_RECRUITMENT) &&
                    !y
                  ? 3
                  : null != b
                    ? 5
                    : n?.includes(j.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [f, p, t, n, b, e.visibility, e.tag, y, l, A, C, N]);
    return { guildId: t, ctaType: E, validInviteKey: b };
}

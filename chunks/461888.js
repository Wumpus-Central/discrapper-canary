i.d(l, { Ay: () => x, SP: () => g, cn: () => m }), i(938796);
var t,
    n,
    s = i(64700),
    a = i(821418),
    r = i(665260),
    u = i(17928),
    c = i(685073),
    o = i(928568),
    d = i(495544),
    I = i(696451),
    A = i(71393),
    C = i(299091),
    E = i(287809),
    _ = i(348943),
    N = i(652215),
    g =
        (((t = {})[(t.IS_MEMBER = 0)] = "IS_MEMBER"),
        (t[(t.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (t[(t.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (t[(t.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (t[(t.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (t[(t.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (t[(t.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        t),
    m = (((n = {}).INVITE = "INVITE"), n);
function x(e, l, i) {
    let { id: t, features: n } = e,
        g = (0, u.bG)([d.default], () => d.default.getId()),
        m = (0, u.bG)([A.A], () => A.A.getGuild(t)),
        x = (0, u.bG)([E.default], () => E.default.getUser(g), [g]),
        h = (0, u.bG)([I.Ay], () => (null != t ? I.Ay.getMember(t, g) : null)?.joinedAt != null, [t, g]),
        {
            validInviteKey: v,
            isBypassInvite: y,
            inviteRoles: P,
        } = (0, u.cf)([C.A], () => {
            let e = i ?? C.A.getInviteKeyForGuildId(t),
                l = null != e ? C.A.getInvite(e) : null;
            return null == l || l.state === N.elq.BANNED || l.state === N.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, r.Lt)(l.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: l.roles,
                  };
        }, [t, i]),
        T = (0, o.A)(),
        f = s.useMemo(() => {
            if (h) {
                if ("INVITE" === l && null != P && P.length > 0 && null != x) {
                    let e = I.Ay.getMember(t, x.id),
                        l = new Set(e?.roles ?? []);
                    if (P.some((e) => !l.has(e.id))) return 6;
                }
                let i = x?.primaryGuild,
                    n = i?.identityGuildId === t && i?.identityEnabled === !0;
                return "INVITE" !== l && null != e.tag && !n && null != m && (0, c.Rg)(m) ? 1 : 0;
            }
            return T.includes(t)
                ? 2
                : n?.includes(N.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(N.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != v || e.visibility === _.n.PUBLIC_WITH_RECRUITMENT) &&
                    !y
                  ? 3
                  : null != v
                    ? 5
                    : n?.includes(N.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [h, T, t, n, v, e.visibility, e.tag, y, l, m, P, x]);
    return { guildId: t, ctaType: f, validInviteKey: v };
}

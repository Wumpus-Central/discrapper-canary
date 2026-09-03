i.d(l, { Ay: () => h, SP: () => N, cn: () => E }), i(938796);
var t,
    n,
    s = i(582128),
    a = i(821418),
    r = i(665260),
    u = i(17928),
    c = i(685073),
    o = i(928568),
    d = i(280450),
    I = i(696451),
    m = i(71393),
    A = i(299091),
    C = i(287809),
    x = i(348943),
    g = i(652215),
    N =
        (((t = {})[(t.IS_MEMBER = 0)] = "IS_MEMBER"),
        (t[(t.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (t[(t.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (t[(t.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (t[(t.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (t[(t.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (t[(t.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        t),
    E = (((n = {}).INVITE = "INVITE"), n);
function h(e, l, i) {
    let { id: t, features: n } = e,
        N = (0, u.bG)([d.default], () => d.default.getId()),
        E = (0, u.bG)([m.A], () => m.A.getGuild(t)),
        h = (0, u.bG)([C.default], () => C.default.getUser(N), [N]),
        v = (0, u.bG)([I.Ay], () => (null != t ? I.Ay.getMember(t, N) : null)?.joinedAt != null, [t, N]),
        {
            validInviteKey: j,
            isBypassInvite: _,
            inviteRoles: f,
        } = (0, u.cf)([A.A], () => {
            let e = i ?? A.A.getInviteKeyForGuildId(t),
                l = null != e ? A.A.getInvite(e) : null;
            return null == l || l.state === g.elq.BANNED || l.state === g.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, r.Lt)(l.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: l.roles,
                  };
        }, [t, i]),
        p = (0, o.A)(),
        y = s.useMemo(() => {
            if (v) {
                if ("INVITE" === l && null != f && f.length > 0 && null != h) {
                    let e = I.Ay.getMember(t, h.id),
                        l = new Set(e?.roles ?? []);
                    if (f.some((e) => !l.has(e.id))) return 6;
                }
                let i = h?.primaryGuild,
                    n = i?.identityGuildId === t && i?.identityEnabled === !0;
                return "INVITE" !== l && null != e.tag && !n && null != E && (0, c.Rg)(E) ? 1 : 0;
            }
            return p.includes(t)
                ? 2
                : n?.includes(g.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != j || e.visibility === x.n.PUBLIC_WITH_RECRUITMENT) &&
                    !_
                  ? 3
                  : null != j
                    ? 5
                    : n?.includes(g.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [v, p, t, n, j, e.visibility, e.tag, _, l, E, f, h]);
    return { guildId: t, ctaType: y, validInviteKey: j };
}

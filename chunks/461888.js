l.d(t, { Ay: () => N, SP: () => I, cn: () => g }), l(938796);
var i,
    n,
    s = l(64700),
    a = l(821418),
    r = l(665260),
    c = l(311907),
    o = l(685073),
    u = l(928568),
    d = l(961350),
    m = l(696451),
    h = l(71393),
    A = l(299091),
    x = l(287809),
    f = l(348943),
    v = l(652215),
    I =
        (((i = {})[(i.IS_MEMBER = 0)] = "IS_MEMBER"),
        (i[(i.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (i[(i.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (i[(i.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (i[(i.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (i[(i.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (i[(i.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        i),
    g = (((n = {}).INVITE = "INVITE"), n);
function N(e, t, l) {
    let { id: i, features: n } = e,
        I = (0, c.bG)([d.default], () => d.default.getId()),
        g = (0, c.bG)([h.A], () => h.A.getGuild(i)),
        N = (0, c.bG)([x.default], () => x.default.getUser(I), [I]),
        j = (0, c.bG)([m.Ay], () => (null != i ? m.Ay.getMember(i, I) : null)?.joinedAt != null, [i, I]),
        {
            validInviteKey: C,
            isBypassInvite: _,
            inviteRoles: E,
        } = (0, c.cf)([A.A], () => {
            let e = l ?? A.A.getInviteKeyForGuildId(i),
                t = null != e ? A.A.getInvite(e) : null;
            return null == t || t.state === v.elq.BANNED || t.state === v.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, r.Lt)(t.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: t.roles,
                  };
        }, [i, l]),
        p = (0, u.A)(),
        y = s.useMemo(() => {
            if (j) {
                if ("INVITE" === t && null != E && E.length > 0 && null != N) {
                    let e = m.Ay.getMember(i, N.id),
                        t = new Set(e?.roles ?? []);
                    if (E.some((e) => !t.has(e.id))) return 6;
                }
                let l = N?.primaryGuild,
                    n = l?.identityGuildId === i && l?.identityEnabled === !0;
                return "INVITE" !== t && null != e.tag && !n && null != g && (0, o.Rg)(g) ? 1 : 0;
            }
            return p.includes(i)
                ? 2
                : n?.includes(v.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(v.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != C || e.visibility === f.n.PUBLIC_WITH_RECRUITMENT) &&
                    !_
                  ? 3
                  : null != C
                    ? 5
                    : n?.includes(v.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [j, p, i, n, C, e.visibility, e.tag, _, t, g, E, N]);
    return { guildId: i, ctaType: y, validInviteKey: C };
}

t.d(l, { Ay: () => N, SP: () => E, cn: () => g }), t(938796);
var i,
    n,
    s = t(582128),
    a = t(821418),
    r = t(665260),
    u = t(17928),
    c = t(685073),
    o = t(928568),
    d = t(280450),
    I = t(696451),
    A = t(71393),
    m = t(299091),
    C = t(287809),
    f = t(348943),
    x = t(652215),
    E =
        (((i = {})[(i.IS_MEMBER = 0)] = "IS_MEMBER"),
        (i[(i.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (i[(i.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (i[(i.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (i[(i.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (i[(i.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (i[(i.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        i),
    g = (((n = {}).INVITE = "INVITE"), n);
function N(e, l, t) {
    let { id: i, features: n } = e,
        E = (0, u.bG)([d.default], () => d.default.getId()),
        g = (0, u.bG)([A.A], () => A.A.getGuild(i)),
        N = (0, u.bG)([C.default], () => C.default.getUser(E), [E]),
        v = (0, u.bG)([I.Ay], () => (null != i ? I.Ay.getMember(i, E) : null)?.joinedAt != null, [i, E]),
        {
            validInviteKey: _,
            isBypassInvite: h,
            inviteRoles: j,
        } = (0, u.cf)([m.A], () => {
            let e = t ?? m.A.getInviteKeyForGuildId(i),
                l = null != e ? m.A.getInvite(e) : null;
            return null == l || l.state === x.elq.BANNED || l.state === x.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, r.Lt)(l.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: l.roles,
                  };
        }, [i, t]),
        y = (0, o.A)(),
        p = s.useMemo(() => {
            if (v) {
                if ("INVITE" === l && null != j && j.length > 0 && null != N) {
                    let e = I.Ay.getMember(i, N.id),
                        l = new Set(e?.roles ?? []);
                    if (j.some((e) => !l.has(e.id))) return 6;
                }
                let t = N?.primaryGuild,
                    n = t?.identityGuildId === i && t?.identityEnabled === !0;
                return "INVITE" !== l && null != e.tag && !n && null != g && (0, c.Rg)(g) ? 1 : 0;
            }
            return y.includes(i)
                ? 2
                : n?.includes(x.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(x.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != _ || e.visibility === f.n.PUBLIC_WITH_RECRUITMENT) &&
                    !h
                  ? 3
                  : null != _
                    ? 5
                    : n?.includes(x.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [v, y, i, n, _, e.visibility, e.tag, h, l, g, j, N]);
    return { guildId: i, ctaType: p, validInviteKey: _ };
}

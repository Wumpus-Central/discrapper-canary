l.d(t, { Ay: () => L, SP: () => P, cn: () => g }), l(938796);
var i,
    n,
    r = l(64700),
    s = l(821418),
    a = l(665260),
    u = l(17928),
    c = l(685073),
    o = l(928568),
    d = l(495544),
    I = l(696451),
    A = l(71393),
    _ = l(299091),
    E = l(287809),
    h = l(348943),
    C = l(652215),
    P =
        (((i = {})[(i.IS_MEMBER = 0)] = "IS_MEMBER"),
        (i[(i.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (i[(i.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (i[(i.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (i[(i.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (i[(i.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (i[(i.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        i),
    g = (((n = {}).INVITE = "INVITE"), n);
function L(e, t, l) {
    let { id: i, features: n } = e,
        P = (0, u.bG)([d.default], () => d.default.getId()),
        g = (0, u.bG)([A.A], () => A.A.getGuild(i)),
        L = (0, u.bG)([E.default], () => E.default.getUser(P), [P]),
        m = (0, u.bG)([I.Ay], () => (null != i ? I.Ay.getMember(i, P) : null)?.joinedAt != null, [i, P]),
        {
            validInviteKey: y,
            isBypassInvite: p,
            inviteRoles: f,
        } = (0, u.cf)([_.A], () => {
            let e = l ?? _.A.getInviteKeyForGuildId(i),
                t = null != e ? _.A.getInvite(e) : null;
            return null == t || t.state === C.elq.BANNED || t.state === C.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, a.Lt)(t.flags ?? 0, s.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: t.roles,
                  };
        }, [i, l]),
        v = (0, o.A)(),
        N = r.useMemo(() => {
            if (m) {
                if ("INVITE" === t && null != f && f.length > 0 && null != L) {
                    let e = I.Ay.getMember(i, L.id),
                        t = new Set(e?.roles ?? []);
                    if (f.some((e) => !t.has(e.id))) return 6;
                }
                let l = L?.primaryGuild,
                    n = l?.identityGuildId === i && l?.identityEnabled === !0;
                return "INVITE" !== t && null != e.tag && !n && null != g && (0, c.Rg)(g) ? 1 : 0;
            }
            return v.includes(i)
                ? 2
                : n?.includes(C.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    n?.includes(C.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != y || e.visibility === h.n.PUBLIC_WITH_RECRUITMENT) &&
                    !p
                  ? 3
                  : null != y
                    ? 5
                    : n?.includes(C.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [m, v, i, n, y, e.visibility, e.tag, p, t, g, f, L]);
    return { guildId: i, ctaType: N, validInviteKey: y };
}

t(938796);
var i,
    n,
    s = t(582128),
    a = t(821418),
    r = t(665260),
    o = t(855986),
    c = t(685073),
    d = t(928568),
    u = t(46653),
    m = t(696451),
    x = t(71393),
    I = t(299091),
    h = t(287809),
    v = t(348943),
    j = t(652215),
    g =
        (((i = {})[(i.IS_MEMBER = 0)] = "IS_MEMBER"),
        (i[(i.ADOPT_TAG = 1)] = "ADOPT_TAG"),
        (i[(i.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
        (i[(i.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
        (i[(i.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
        (i[(i.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
        (i[(i.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
        i),
    A = (((n = {}).INVITE = "INVITE"), n);
t.d(
    l,
    {},
    {
        Ay: function (e, l, t) {
            let { id: i, features: n } = e,
                g = (0, o.bG)([u.default], () => u.default.getId()),
                A = (0, o.bG)([x.A], () => x.A.getGuild(i)),
                N = (0, o.bG)([h.default], () => h.default.getUser(g), [g]),
                f = (0, o.bG)([m.Ay], () => (null != i ? m.Ay.getMember(i, g) : null)?.joinedAt != null, [i, g]),
                {
                    validInviteKey: b,
                    isBypassInvite: y,
                    inviteRoles: C,
                } = (0, o.cf)(
                    [I.A],
                    () => {
                        let e = t ?? I.A.getInviteKeyForGuildId(i),
                            l = null != e ? I.A.getInvite(e) : null;
                        return null == l || l.state === j.elq.BANNED || l.state === j.elq.EXPIRED
                            ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                            : {
                                  validInviteKey: e,
                                  isBypassInvite: (0, r.Lt)(l.flags ?? 0, a.Q.IS_APPLICATION_BYPASS),
                                  inviteRoles: l.roles,
                              };
                    },
                    [i, t],
                ),
                p = (0, d.A)(),
                E = s.useMemo(() => {
                    if (f) {
                        if ("INVITE" === l && null != C && C.length > 0 && null != N) {
                            let e = m.Ay.getMember(i, N.id),
                                l = new Set(e?.roles ?? []);
                            if (C.some((e) => !l.has(e.id))) return 6;
                        }
                        let t = N?.primaryGuild,
                            n = t?.identityGuildId === i && t?.identityEnabled === !0;
                        return "INVITE" !== l && null != e.tag && !n && null != A && (0, c.Rg)(A) ? 1 : 0;
                    }
                    return p.includes(i)
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
                }, [f, p, i, n, b, e.visibility, e.tag, y, l, A, C, N]);
            return { guildId: i, ctaType: E, validInviteKey: b };
        },
        SP: g,
        cn: A,
    },
);

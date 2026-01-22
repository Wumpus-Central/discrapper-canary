n.d(t, {
    Ay: () => E,
    SP: () => m,
    cn: () => g,
}),
    n(938796),
    n(896048);
var r = n(64700),
    i = n(821418),
    a = n(665260),
    s = n(311907),
    o = n(685073),
    l = n(928568),
    c = n(961350),
    u = n(696451),
    d = n(71393),
    f = n(299091),
    p = n(287809),
    _ = n(348943),
    h = n(652215),
    m = (function (e) {
        return (
            (e[(e.IS_MEMBER = 0)] = "IS_MEMBER"),
            (e[(e.ADOPT_TAG = 1)] = "ADOPT_TAG"),
            (e[(e.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
            (e[(e.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
            (e[(e.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
            (e[(e.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
            (e[(e.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
            e
        );
    })({}),
    g = (function (e) {
        return (e.INVITE = "INVITE"), e;
    })({});
function E(e, t, n) {
    let { id: m, features: g } = e,
        E = (0, s.bG)([c.default], () => c.default.getId()),
        b = (0, s.bG)([d.A], () => d.A.getGuild(m)),
        y = (0, s.bG)([p.default], () => p.default.getUser(E), [E]),
        O = (0, s.bG)([u.Ay], () => {
            var e;
            return (null == (e = null != m ? u.Ay.getMember(m, E) : null) ? void 0 : e.joinedAt) != null;
        }, [m, E]),
        {
            validInviteKey: A,
            isBypassInvite: v,
            inviteRoles: S,
        } = (0, s.cf)([f.A], () => {
            var e;
            let t = null != n ? n : f.A.getInviteKeyForGuildId(m),
                r = null != t ? f.A.getInvite(t) : null;
            return null == r || r.state === h.elq.BANNED || r.state === h.elq.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1,
                      inviteRoles: null,
                  }
                : {
                      validInviteKey: t,
                      isBypassInvite: (0, a.Lt)(null != (e = r.flags) ? e : 0, i.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: r.roles,
                  };
        }, [m, n]),
        I = (0, l.A)(),
        T = r.useMemo(() => {
            if (O) {
                if ("INVITE" === t && null != S && S.length > 0 && null != y) {
                    var n;
                    let e = u.Ay.getMember(m, y.id),
                        t = new Set(null != (n = null == e ? void 0 : e.roles) ? n : []);
                    if (S.some((e) => !t.has(e.id))) return 6;
                }
                let r = null == y ? void 0 : y.primaryGuild,
                    i =
                        (null == r ? void 0 : r.identityGuildId) === m &&
                        (null == r ? void 0 : r.identityEnabled) === !0;
                return "INVITE" !== t && null != e.tag && !i && null != b && (0, o.Rg)(b) ? 1 : 0;
            }
            return I.includes(m)
                ? 2
                : (null == g ? void 0 : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                    (null == g ? void 0 : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) &&
                    (null != A || e.visibility === _.n.PUBLIC_WITH_RECRUITMENT) &&
                    !v
                  ? 3
                  : null != A
                    ? 5
                    : (null == g ? void 0 : g.includes(h.GuildFeatures.DISCOVERABLE))
                      ? 4
                      : null;
        }, [O, I, m, g, A, e.visibility, e.tag, v, t, b, S, y]);
    return {
        guildId: m,
        ctaType: T,
        validInviteKey: A,
    };
}

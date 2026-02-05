"use strict";
n.d(t, { Ay: () => E, SP: () => m, cn: () => g }), n(938796);
var r = n(64700),
    i = n(821418),
    a = n(665260),
    s = n(311907),
    o = n(685073),
    l = n(928568),
    u = n(961350),
    c = n(696451),
    d = n(71393),
    _ = n(299091),
    f = n(287809),
    p = n(348943),
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
        E = (0, s.bG)([u.default], () => u.default.getId()),
        A = (0, s.bG)([d.A], () => d.A.getGuild(m)),
        I = (0, s.bG)([f.default], () => f.default.getUser(E), [E]),
        T = (0, s.bG)([c.Ay], () => (null != m ? c.Ay.getMember(m, E) : null)?.joinedAt != null, [m, E]),
        {
            validInviteKey: y,
            isBypassInvite: S,
            inviteRoles: v,
        } = (0, s.cf)([_.A], () => {
            let e = n ?? _.A.getInviteKeyForGuildId(m),
                t = null != e ? _.A.getInvite(e) : null;
            return null == t || t.state === h.elq.BANNED || t.state === h.elq.EXPIRED
                ? { validInviteKey: null, isBypassInvite: !1, inviteRoles: null }
                : {
                      validInviteKey: e,
                      isBypassInvite: (0, a.Lt)(t.flags ?? 0, i.Q.IS_APPLICATION_BYPASS),
                      inviteRoles: t.roles,
                  };
        }, [m, n]),
        C = (0, l.A)(),
        b = r.useMemo(() => {
            if (T) {
                if ("INVITE" === t && null != v && v.length > 0 && null != I) {
                    let e = c.Ay.getMember(m, I.id),
                        t = new Set(e?.roles ?? []);
                    if (v.some((e) => !t.has(e.id))) return 6;
                }
                let n = I?.primaryGuild,
                    r = n?.identityGuildId === m && n?.identityEnabled === !0;
                return "INVITE" !== t && null != e.tag && !r && null != A && (0, o.Rg)(A) ? 1 : 0;
            }
            return C.includes(m)
                ? 2
                : g?.includes(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) &&
                    g?.includes(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                    (null != y || e.visibility === p.n.PUBLIC_WITH_RECRUITMENT) &&
                    !S
                  ? 3
                  : null != y
                    ? 5
                    : g?.includes(h.GuildFeatures.DISCOVERABLE)
                      ? 4
                      : null;
        }, [T, C, m, g, y, e.visibility, e.tag, S, t, A, v, I]);
    return { guildId: m, ctaType: b, validInviteKey: y };
}

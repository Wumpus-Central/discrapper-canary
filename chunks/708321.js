(n.d(t, {
    Z: () => E,
    o: () => g
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(447543),
    s = n(66511),
    l = n(300284),
    c = n(703656),
    u = n(769654),
    d = n(900849),
    _ = n(330705),
    f = n(993860),
    p = n(981631),
    h = n(526761),
    m = n(388032);
function g(e) {
    let { guildId: t, ctaType: n, submitting: o, onGoToGuild: s, onAcceptInvite: u, onStartApplication: _, onComplete: g } = e,
        [E, b] = i.useState(!1),
        y = (0, l.Z)({ scrollPosition: h.Y_.GUILD_TAG }),
        O = i.useCallback(() => {
            (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        v = i.useCallback(async () => {
            await (0, d.Ub)(t, { object: p.qAy.GUILD_PROFILE });
        }, [t]),
        { text: I, onClick: T } = i.useMemo(() => {
            switch (n) {
                case f.sE.IS_MEMBER:
                    return {
                        text: m.intl.string(m.t.IRoQXl),
                        onClick: s
                    };
                case f.sE.ADOPT_TAG:
                    return {
                        text: m.intl.string(m.t.cQDYRk),
                        onClick: y
                    };
                case f.sE.HAS_APPLICATION:
                    return {
                        text: m.intl.string(m.t['4yfIDg']),
                        onClick: O
                    };
                case f.sE.APPLY_TO_JOIN:
                    return {
                        text: m.intl.string(m.t['7XdMW1']),
                        onClick: _
                    };
                case f.sE.LURK_DISCOVERABLE:
                    return {
                        text: m.intl.string(m.t.VJlc0d),
                        onClick: v
                    };
                case f.sE.JOIN_VIA_INVITE:
                    return {
                        text: m.intl.string(m.t.VJlc0d),
                        onClick: u
                    };
                default:
                    return {
                        text: null,
                        onClick: null
                    };
            }
        }, [n, O, v, u, s, _, y]),
        S = i.useCallback(
            async (e) => {
                (e.stopPropagation(), b(!0));
                try {
                    await (null == T ? void 0 : T());
                } catch (e) {
                } finally {
                    (null == g || g(), b(!1));
                }
            },
            [T, g]
        );
    return null == I
        ? null
        : (0, r.jsx)(a.zxk, {
              variant: 'active',
              size: 'sm',
              text: I,
              fullWidth: !0,
              loading: E || o,
              onClick: S
          });
}
function E(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: c } = (0, f.ZP)(t),
        d = i.useCallback(() => (0, u.X)(a), [a]),
        p = i.useCallback(() => {
            null != l &&
                o.ZP.acceptInvite({
                    inviteKey: l,
                    context: { location: 'guild_profile' }
                });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== _.k.PUBLIC_WITH_RECRUITMENT && null != l ? p() : s.Z.openMemberVerificationModal(a, void 0, l);
        }, [p, a, t.visibility, l]);
    return null == c
        ? null
        : (0, r.jsx)(g, {
              guildId: a,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: p,
              onStartApplication: h,
              onComplete: n
          });
}

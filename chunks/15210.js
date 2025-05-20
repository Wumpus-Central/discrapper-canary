n.d(t, {
    Z: () => E,
    o: () => g
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(447543),
    s = n(66511),
    l = n(300284),
    c = n(703656),
    u = n(769654),
    d = n(900849),
    f = n(330705),
    _ = n(993860),
    p = n(981631),
    h = n(526761),
    m = n(388032);
function g(e) {
    let { guildId: t, ctaType: n, submitting: a, onGoToGuild: s, onAcceptInvite: u, onStartApplication: f, onComplete: g, inIterationExperiment: E } = e,
        [b, y] = i.useState(!1),
        O = (0, l.Z)({ scrollPosition: h.Y_.GUILD_TAG }),
        v = i.useCallback(() => {
            (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        I = i.useCallback(async () => {
            await (0, d.Ub)(t, { object: p.qAy.GUILD_PROFILE });
        }, [t]),
        { text: S, onClick: T } = i.useMemo(() => {
            switch (n) {
                case _.sE.IS_MEMBER:
                    return {
                        text: m.intl.string(m.t.IRoQXl),
                        onClick: s
                    };
                case _.sE.ADOPT_TAG:
                    return {
                        text: m.intl.string(m.t.cQDYRk),
                        onClick: O
                    };
                case _.sE.HAS_APPLICATION:
                    return {
                        text: m.intl.string(m.t['4yfIDg']),
                        onClick: v
                    };
                case _.sE.APPLY_TO_JOIN:
                    return {
                        text: E ? m.intl.string(m.t['1Qm829']) : m.intl.string(m.t['7XdMW1']),
                        onClick: f
                    };
                case _.sE.LURK_DISCOVERABLE:
                    return {
                        text: E ? m.intl.string(m.t.VJlc0d) : m.intl.string(m.t.eb9gDA),
                        onClick: I
                    };
                case _.sE.JOIN_VIA_INVITE:
                    return {
                        text: E ? m.intl.string(m.t.VJlc0d) : m.intl.string(m.t.eb9gDA),
                        onClick: u
                    };
                default:
                    return {
                        text: null,
                        onClick: null
                    };
            }
        }, [n, v, I, E, u, s, f, O]),
        A = i.useCallback(
            async (e) => {
                e.stopPropagation(), y(!0);
                try {
                    await (null == T ? void 0 : T());
                } catch (e) {
                } finally {
                    null == g || g(), y(!1);
                }
            },
            [T, g]
        );
    return null == S
        ? null
        : (0, r.jsx)(o.zxk, {
              color: E ? o.zxk.Colors.GREEN : o.zxk.Colors.BRAND,
              size: o.zxk.Sizes.SMALL,
              fullWidth: !0,
              submitting: b || a,
              onClick: A,
              children: S
          });
}
function E(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: o, validInviteKey: l, ctaType: c } = (0, _.ZP)(t),
        d = i.useCallback(() => (0, u.X)(o), [o]),
        p = i.useCallback(() => {
            null != l &&
                a.ZP.acceptInvite({
                    inviteKey: l,
                    context: { location: 'guild_profile' }
                });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l ? p() : s.Z.openMemberVerificationModal(o, void 0, l);
        }, [p, o, t.visibility, l]);
    return null == c
        ? null
        : (0, r.jsx)(g, {
              guildId: o,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: p,
              onStartApplication: h,
              onComplete: n
          });
}

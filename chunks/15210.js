n.d(t, {
    Z: () => E,
    o: () => g
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(447543),
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
    let { guildId: t, ctaType: n, submitting: o, onGoToGuild: s, onAcceptInvite: u, onStartApplication: f, onComplete: g } = e,
        [E, b] = i.useState(!1),
        y = (0, l.Z)({ scrollPosition: h.Y_.GUILD_TAG }),
        v = i.useCallback(() => {
            (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        O = i.useCallback(async () => {
            await (0, d.Ub)(t, { object: p.qAy.GUILD_PROFILE });
        }, [t]),
        { text: I, onClick: S } = i.useMemo(() => {
            switch (n) {
                case _.sE.IS_MEMBER:
                    return {
                        text: m.intl.string(m.t.IRoQXl),
                        onClick: s
                    };
                case _.sE.ADOPT_TAG:
                    return {
                        text: m.intl.string(m.t.cQDYRk),
                        onClick: y
                    };
                case _.sE.HAS_APPLICATION:
                    return {
                        text: m.intl.string(m.t['4yfIDg']),
                        onClick: v
                    };
                case _.sE.APPLY_TO_JOIN:
                    return {
                        text: m.intl.string(m.t['7XdMW1']),
                        onClick: f
                    };
                case _.sE.LURK_DISCOVERABLE:
                    return {
                        text: m.intl.string(m.t.eb9gDA),
                        onClick: O
                    };
                case _.sE.JOIN_VIA_INVITE:
                    return {
                        text: m.intl.string(m.t.eb9gDA),
                        onClick: u
                    };
                default:
                    return {
                        text: null,
                        onClick: null
                    };
            }
        }, [n, v, O, u, s, f, y]),
        T = i.useCallback(
            async (e) => {
                e.stopPropagation(), b(!0);
                try {
                    await (null == S ? void 0 : S());
                } catch (e) {
                } finally {
                    null == g || g(), b(!1);
                }
            },
            [S, g]
        );
    return null == I
        ? null
        : (0, r.jsx)(a.zxk, {
              size: a.zxk.Sizes.SMALL,
              fullWidth: !0,
              submitting: E || o,
              onClick: T,
              children: I
          });
}
function E(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: c } = (0, _.ZP)(t),
        d = i.useCallback(() => (0, u.X)(a), [a]),
        p = i.useCallback(() => {
            null != l &&
                o.ZP.acceptInvite({
                    inviteKey: l,
                    context: { location: 'guild_profile' }
                });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l ? p() : s.Z.openMemberVerificationModal(a, void 0, l);
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

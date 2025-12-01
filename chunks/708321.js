n.d(t, {
    Z: () => g,
    o: () => h,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(447543),
    s = n(66511),
    l = n(226746),
    c = n(703656),
    u = n(769654),
    d = n(900849),
    f = n(330705),
    p = n(993860),
    _ = n(981631),
    m = n(388032);
function h(e) {
    let {
            guildId: t,
            ctaType: n,
            submitting: o,
            onGoToGuild: s,
            onAcceptInvite: u,
            onStartApplication: f,
            onComplete: h,
        } = e,
        [g, E] = i.useState(!1),
        b = (0, l.Z)(t),
        y = i.useCallback(() => {
            (0, c.uL)(_.Z5c.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        O = i.useCallback(async () => {
            await (0, d.Ub)(t, { object: _.qAy.GUILD_PROFILE });
        }, [t]),
        { text: v, onClick: S } = i.useMemo(() => {
            switch (n) {
                case p.sE.IS_MEMBER:
                    return {
                        text: m.intl.string(m.t.IRoQXr),
                        onClick: s,
                    };
                case p.sE.ADOPT_TAG:
                    return {
                        text: m.intl.string(m.t.cQDYRu),
                        onClick: b,
                    };
                case p.sE.HAS_APPLICATION:
                    return {
                        text: m.intl.string(m.t["4yfIDk"]),
                        onClick: y,
                    };
                case p.sE.APPLY_TO_JOIN:
                    return {
                        text: m.intl.string(m.t["7XdMW2"]),
                        onClick: f,
                    };
                case p.sE.LURK_DISCOVERABLE:
                    return {
                        text: m.intl.string(m.t.VJlc0S),
                        onClick: O,
                    };
                case p.sE.JOIN_VIA_INVITE:
                    return {
                        text: m.intl.string(m.t.VJlc0S),
                        onClick: u,
                    };
                case p.sE.ACCEPT_ROLES:
                    return {
                        text: m.intl.string(m.t.MMlhsr),
                        onClick: u,
                    };
                default:
                    return {
                        text: null,
                        onClick: null,
                    };
            }
        }, [n, y, O, u, s, f, b]),
        I = i.useCallback(
            async (e) => {
                e.stopPropagation(), E(!0);
                try {
                    await (null == S ? void 0 : S());
                } catch (e) {
                } finally {
                    null == h || h(), E(!1);
                }
            },
            [S, h],
        );
    return null == v
        ? null
        : (0, r.jsx)(a.Button, {
              variant: "active",
              size: "sm",
              text: v,
              fullWidth: !0,
              loading: g || o,
              onClick: I,
          });
}
function g(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: c } = (0, p.ZP)(t),
        d = i.useCallback(() => (0, u.X)(a), [a]),
        _ = i.useCallback(() => {
            null != l &&
                o.ZP.acceptInvite({
                    inviteKey: l,
                    context: { location: "guild_profile" },
                });
        }, [l]),
        m = i.useCallback(() => {
            t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l
                ? _()
                : s.Z.openMemberVerificationModal(a, void 0, l);
        }, [_, a, t.visibility, l]);
    return null == c
        ? null
        : (0, r.jsx)(h, {
              guildId: a,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: _,
              onStartApplication: m,
              onComplete: n,
          });
}

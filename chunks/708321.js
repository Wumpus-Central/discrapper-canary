n.d(t, {
    Z: () => g,
    o: () => m,
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
    _ = n(993860),
    p = n(981631),
    h = n(388032);
function m(e) {
    let {
            guildId: t,
            ctaType: n,
            submitting: o,
            onGoToGuild: s,
            onAcceptInvite: u,
            onStartApplication: f,
            onComplete: m,
        } = e,
        [g, E] = i.useState(!1),
        b = (0, l.Z)(t),
        y = i.useCallback(() => {
            (0, c.uL)(p.Z5c.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        O = i.useCallback(async () => {
            await (0, d.Ub)(t, { object: p.qAy.GUILD_PROFILE });
        }, [t]),
        { text: v, onClick: I } = i.useMemo(() => {
            switch (n) {
                case _.sE.IS_MEMBER:
                    return {
                        text: h.intl.string(h.t.IRoQXr),
                        onClick: s,
                    };
                case _.sE.ADOPT_TAG:
                    return {
                        text: h.intl.string(h.t.cQDYRu),
                        onClick: b,
                    };
                case _.sE.HAS_APPLICATION:
                    return {
                        text: h.intl.string(h.t["4yfIDk"]),
                        onClick: y,
                    };
                case _.sE.APPLY_TO_JOIN:
                    return {
                        text: h.intl.string(h.t["7XdMW2"]),
                        onClick: f,
                    };
                case _.sE.LURK_DISCOVERABLE:
                    return {
                        text: h.intl.string(h.t.VJlc0S),
                        onClick: O,
                    };
                case _.sE.JOIN_VIA_INVITE:
                    return {
                        text: h.intl.string(h.t.VJlc0S),
                        onClick: u,
                    };
                case _.sE.ACCEPT_ROLES:
                    return {
                        text: h.intl.string(h.t.MMlhsr),
                        onClick: u,
                    };
                default:
                    return {
                        text: null,
                        onClick: null,
                    };
            }
        }, [n, y, O, u, s, f, b]),
        T = i.useCallback(
            async (e) => {
                e.stopPropagation(), E(!0);
                try {
                    await (null == I ? void 0 : I());
                } catch (e) {
                } finally {
                    null == m || m(), E(!1);
                }
            },
            [I, m],
        );
    return null == v
        ? null
        : (0, r.jsx)(a.Button, {
              variant: "active",
              size: "sm",
              text: v,
              fullWidth: !0,
              loading: g || o,
              onClick: T,
          });
}
function g(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: c } = (0, _.ZP)(t),
        d = i.useCallback(() => (0, u.X)(a), [a]),
        p = i.useCallback(() => {
            null != l &&
                o.ZP.acceptInvite({
                    inviteKey: l,
                    context: { location: "guild_profile" },
                });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== f.k.PUBLIC_WITH_RECRUITMENT && null != l
                ? p()
                : s.Z.openMemberVerificationModal(a, void 0, l);
        }, [p, a, t.visibility, l]);
    return null == c
        ? null
        : (0, r.jsx)(m, {
              guildId: a,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: p,
              onStartApplication: h,
              onComplete: n,
          });
}

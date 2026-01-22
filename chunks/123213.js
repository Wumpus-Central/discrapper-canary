n.d(t, {
    A: () => g,
    Y: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(846293),
    o = n(415951),
    l = n(849841),
    c = n(976860),
    u = n(345942),
    d = n(449054),
    f = n(348943),
    p = n(461888),
    _ = n(652215),
    h = n(985018);

function m(e) {
    let {
            guildId: t,
            ctaType: n,
            submitting: s,
            onGoToGuild: o,
            onAcceptInvite: u,
            onStartApplication: f,
            onComplete: m,
        } = e,
        [g, E] = i.useState(!1),
        b = (0, l.A)(t),
        y = i.useCallback(() => {
            (0, c.pX)(_.BVt.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        O = i.useCallback(async () => {
            await (0, d.Z2)(t, {
                object: _.ZSU.GUILD_PROFILE,
            });
        }, [t]),
        { text: A, onClick: v } = i.useMemo(() => {
            switch (n) {
                case p.SP.IS_MEMBER:
                    return {
                        text: h.intl.string(h.t.IRoQXr),
                        onClick: o,
                    };
                case p.SP.ADOPT_TAG:
                    return {
                        text: h.intl.string(h.t.cQDYRu),
                        onClick: b,
                    };
                case p.SP.HAS_APPLICATION:
                    return {
                        text: h.intl.string(h.t["4yfIDk"]),
                        onClick: y,
                    };
                case p.SP.APPLY_TO_JOIN:
                    return {
                        text: h.intl.string(h.t["7XdMW2"]),
                        onClick: f,
                    };
                case p.SP.LURK_DISCOVERABLE:
                    return {
                        text: h.intl.string(h.t.VJlc0S),
                        onClick: O,
                    };
                case p.SP.JOIN_VIA_INVITE:
                    return {
                        text: h.intl.string(h.t.VJlc0S),
                        onClick: u,
                    };
                case p.SP.ACCEPT_ROLES:
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
        }, [n, y, O, u, o, f, b]),
        S = i.useCallback(
            async (e) => {
                e.stopPropagation(), E(!0);
                try {
                    await (null == v ? void 0 : v());
                } catch (e) {
                } finally {
                    null == m || m(), E(!1);
                }
            },
            [v, m],
        );
    return null == A
        ? null
        : (0, r.jsx)(a.Button, {
              variant: "active",
              size: "sm",
              text: A,
              fullWidth: !0,
              loading: g || s,
              onClick: S,
          });
}

function g(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: c } = (0, p.Ay)(t),
        d = i.useCallback(() => (0, u.u)(a), [a]),
        _ = i.useCallback(() => {
            null != l &&
                s.Ay.acceptInvite({
                    inviteKey: l,
                    context: {
                        location: "guild_profile",
                    },
                });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== f.n.PUBLIC_WITH_RECRUITMENT && null != l
                ? _()
                : o.A.openMemberVerificationModal(a, void 0, l);
        }, [_, a, t.visibility, l]);
    return null == c
        ? null
        : (0, r.jsx)(m, {
              guildId: a,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: _,
              onStartApplication: h,
              onComplete: n,
          });
}

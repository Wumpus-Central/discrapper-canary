l.d(t, { A: () => v, Y: () => f });
var i = l(627968),
    n = l(64700),
    s = l(821609),
    a = l(846293),
    r = l(415951),
    c = l(849841),
    o = l(976860),
    u = l(345942),
    d = l(449054),
    m = l(348943),
    h = l(461888),
    A = l(652215),
    x = l(985018);
function f(e) {
    let {
            guildId: t,
            ctaType: l,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: u,
            onStartApplication: m,
            onComplete: f,
        } = e,
        [v, I] = n.useState(!1),
        g = (0, c.A)(t),
        N = n.useCallback(() => {
            (0, o.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        j = n.useCallback(async () => {
            await (0, d.Z2)(t, { object: A.ZSU.GUILD_PROFILE });
        }, [t]),
        { text: C, onClick: _ } = n.useMemo(() => {
            switch (l) {
                case h.SP.IS_MEMBER:
                    return { text: x.intl.string(x.t.IRoQXr), onClick: r };
                case h.SP.ADOPT_TAG:
                    return { text: x.intl.string(x.t.cQDYRu), onClick: g };
                case h.SP.HAS_APPLICATION:
                    return { text: x.intl.string(x.t["4yfIDk"]), onClick: N };
                case h.SP.APPLY_TO_JOIN:
                    return { text: x.intl.string(x.t["7XdMW2"]), onClick: m };
                case h.SP.LURK_DISCOVERABLE:
                    return { text: x.intl.string(x.t.VJlc0S), onClick: j };
                case h.SP.JOIN_VIA_INVITE:
                    return { text: x.intl.string(x.t.VJlc0S), onClick: u };
                case h.SP.ACCEPT_ROLES:
                    return { text: x.intl.string(x.t.MMlhsr), onClick: u };
                default:
                    return { text: null, onClick: null };
            }
        }, [l, N, j, u, r, m, g]),
        E = n.useCallback(
            async (e) => {
                e.stopPropagation(), I(!0);
                try {
                    await _?.();
                } catch {
                } finally {
                    f?.(), I(!1);
                }
            },
            [_, f],
        );
    return null == C
        ? null
        : (0, i.jsx)(s.$, { variant: "active", size: "sm", text: C, fullWidth: !0, loading: v || a, onClick: E });
}
function v(e) {
    let { profile: t, onComplete: l } = e,
        { guildId: s, validInviteKey: c, ctaType: o } = (0, h.Ay)(t),
        d = n.useCallback(() => (0, u.u)(s), [s]),
        A = n.useCallback(() => {
            null != c && a.Ay.acceptInvite({ inviteKey: c, context: { location: "guild_profile" } });
        }, [c]),
        x = n.useCallback(() => {
            t.visibility !== m.n.PUBLIC_WITH_RECRUITMENT && null != c
                ? A()
                : r.A.openMemberVerificationModal(s, void 0, c);
        }, [A, s, t.visibility, c]);
    return null == o
        ? null
        : (0, i.jsx)(f, {
              guildId: s,
              ctaType: o,
              onGoToGuild: d,
              onAcceptInvite: A,
              onStartApplication: x,
              onComplete: l,
          });
}

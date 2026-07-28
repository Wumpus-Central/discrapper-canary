t.d(l, { A: () => x, Y: () => f });
var i = t(477900),
    n = t(582128),
    s = t(821609),
    a = t(376728),
    r = t(415951),
    u = t(849841),
    c = t(976860),
    o = t(345942),
    d = t(385648),
    I = t(348943),
    A = t(461888),
    m = t(652215),
    C = t(375708);
function f(e) {
    let {
            guildId: l,
            ctaType: t,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: o,
            onStartApplication: I,
            onComplete: f,
        } = e,
        [x, E] = n.useState(!1),
        g = (0, u.A)(l),
        N = n.useCallback(() => {
            (0, c.pX)(m.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        v = n.useCallback(async () => {
            await (0, d.Z2)(l, { object: m.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: _, onClick: h } = n.useMemo(() => {
            switch (t) {
                case A.SP.IS_MEMBER:
                    return { text: C.intl.string(C.t.IRoQXr), onClick: r };
                case A.SP.ADOPT_TAG:
                    return { text: C.intl.string(C.t.cQDYRu), onClick: g };
                case A.SP.HAS_APPLICATION:
                    return { text: C.intl.string(C.t["4yfIDk"]), onClick: N };
                case A.SP.APPLY_TO_JOIN:
                    return { text: C.intl.string(C.t["7XdMW2"]), onClick: I };
                case A.SP.LURK_DISCOVERABLE:
                    return { text: C.intl.string(C.t.VJlc0S), onClick: v };
                case A.SP.JOIN_VIA_INVITE:
                    return { text: C.intl.string(C.t.VJlc0S), onClick: o };
                case A.SP.ACCEPT_ROLES:
                    return { text: C.intl.string(C.t.MMlhsr), onClick: o };
                default:
                    return { text: null, onClick: null };
            }
        }, [t, N, v, o, r, I, g]),
        j = n.useCallback(
            async (e) => {
                e.stopPropagation(), E(!0);
                try {
                    await h?.();
                } catch {
                } finally {
                    f?.(), E(!1);
                }
            },
            [h, f],
        );
    return null == _
        ? null
        : (0, i.jsx)(s.$, { variant: "active", size: "sm", text: _, fullWidth: !0, loading: x || a, onClick: j });
}
function x(e) {
    let { profile: l, onComplete: t } = e,
        { guildId: s, validInviteKey: u, ctaType: c } = (0, A.Ay)(l),
        d = n.useCallback(() => (0, o.u)(s), [s]),
        m = n.useCallback(() => {
            null != u && a.Ay.acceptInvite({ inviteKey: u, context: { location: "guild_profile" } });
        }, [u]),
        C = n.useCallback(() => {
            l.visibility !== I.n.PUBLIC_WITH_RECRUITMENT && null != u
                ? m()
                : r.A.openMemberVerificationModal(s, void 0, u);
        }, [m, s, l.visibility, u]);
    return null == c
        ? null
        : (0, i.jsx)(f, {
              guildId: s,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: m,
              onStartApplication: C,
              onComplete: t,
          });
}

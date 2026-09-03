i.d(l, { A: () => g, Y: () => x });
var t = i(477900),
    n = i(582128),
    s = i(821609),
    a = i(376728),
    r = i(415951),
    u = i(849841),
    c = i(976860),
    o = i(345942),
    d = i(449054),
    I = i(348943),
    m = i(461888),
    A = i(652215),
    C = i(375708);
function x(e) {
    let {
            guildId: l,
            ctaType: i,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: o,
            onStartApplication: I,
            onComplete: x,
        } = e,
        [g, N] = n.useState(!1),
        E = (0, u.A)(l),
        h = n.useCallback(() => {
            (0, c.pX)(A.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        v = n.useCallback(async () => {
            await (0, d.Z2)(l, { object: A.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: j, onClick: _ } = n.useMemo(() => {
            switch (i) {
                case m.SP.IS_MEMBER:
                    return { text: C.intl.string(C.t.IRoQXr), onClick: r };
                case m.SP.ADOPT_TAG:
                    return { text: C.intl.string(C.t.cQDYRu), onClick: E };
                case m.SP.HAS_APPLICATION:
                    return { text: C.intl.string(C.t["4yfIDk"]), onClick: h };
                case m.SP.APPLY_TO_JOIN:
                    return { text: C.intl.string(C.t["7XdMW2"]), onClick: I };
                case m.SP.LURK_DISCOVERABLE:
                    return { text: C.intl.string(C.t.VJlc0S), onClick: v };
                case m.SP.JOIN_VIA_INVITE:
                    return { text: C.intl.string(C.t.VJlc0S), onClick: o };
                case m.SP.ACCEPT_ROLES:
                    return { text: C.intl.string(C.t.MMlhsr), onClick: o };
                default:
                    return { text: null, onClick: null };
            }
        }, [i, h, v, o, r, I, E]),
        f = n.useCallback(
            async (e) => {
                e.stopPropagation(), N(!0);
                try {
                    await _?.();
                } catch {
                } finally {
                    x?.(), N(!1);
                }
            },
            [_, x],
        );
    return null == j
        ? null
        : (0, t.jsx)(s.$, { variant: "active", size: "sm", text: j, fullWidth: !0, loading: g || a, onClick: f });
}
function g(e) {
    let { profile: l, onComplete: i } = e,
        { guildId: s, validInviteKey: u, ctaType: c } = (0, m.Ay)(l),
        d = n.useCallback(() => (0, o.u)(s), [s]),
        A = n.useCallback(() => {
            null != u && a.Ay.acceptInvite({ inviteKey: u, context: { location: "guild_profile" } });
        }, [u]),
        C = n.useCallback(() => {
            l.visibility !== I.n.PUBLIC_WITH_RECRUITMENT && null != u
                ? A()
                : r.A.openMemberVerificationModal(s, void 0, u);
        }, [A, s, l.visibility, u]);
    return null == c
        ? null
        : (0, t.jsx)(x, {
              guildId: s,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: A,
              onStartApplication: C,
              onComplete: i,
          });
}

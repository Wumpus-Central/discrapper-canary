i.d(l, { A: () => N, Y: () => _ });
var t = i(627968),
    n = i(64700),
    s = i(821609),
    a = i(376728),
    r = i(415951),
    u = i(849841),
    c = i(976860),
    o = i(345942),
    d = i(385648),
    I = i(348943),
    A = i(461888),
    C = i(652215),
    E = i(375708);
function _(e) {
    let {
            guildId: l,
            ctaType: i,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: o,
            onStartApplication: I,
            onComplete: _,
        } = e,
        [N, g] = n.useState(!1),
        m = (0, u.A)(l),
        x = n.useCallback(() => {
            (0, c.pX)(C.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        h = n.useCallback(async () => {
            await (0, d.Z2)(l, { object: C.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: v, onClick: y } = n.useMemo(() => {
            switch (i) {
                case A.SP.IS_MEMBER:
                    return { text: E.intl.string(E.t.IRoQXr), onClick: r };
                case A.SP.ADOPT_TAG:
                    return { text: E.intl.string(E.t.cQDYRu), onClick: m };
                case A.SP.HAS_APPLICATION:
                    return { text: E.intl.string(E.t["4yfIDk"]), onClick: x };
                case A.SP.APPLY_TO_JOIN:
                    return { text: E.intl.string(E.t["7XdMW2"]), onClick: I };
                case A.SP.LURK_DISCOVERABLE:
                    return { text: E.intl.string(E.t.VJlc0S), onClick: h };
                case A.SP.JOIN_VIA_INVITE:
                    return { text: E.intl.string(E.t.VJlc0S), onClick: o };
                case A.SP.ACCEPT_ROLES:
                    return { text: E.intl.string(E.t.MMlhsr), onClick: o };
                default:
                    return { text: null, onClick: null };
            }
        }, [i, x, h, o, r, I, m]),
        P = n.useCallback(
            async (e) => {
                e.stopPropagation(), g(!0);
                try {
                    await y?.();
                } catch {
                } finally {
                    _?.(), g(!1);
                }
            },
            [y, _],
        );
    return null == v
        ? null
        : (0, t.jsx)(s.$, { variant: "active", size: "sm", text: v, fullWidth: !0, loading: N || a, onClick: P });
}
function N(e) {
    let { profile: l, onComplete: i } = e,
        { guildId: s, validInviteKey: u, ctaType: c } = (0, A.Ay)(l),
        d = n.useCallback(() => (0, o.u)(s), [s]),
        C = n.useCallback(() => {
            null != u && a.Ay.acceptInvite({ inviteKey: u, context: { location: "guild_profile" } });
        }, [u]),
        E = n.useCallback(() => {
            l.visibility !== I.n.PUBLIC_WITH_RECRUITMENT && null != u
                ? C()
                : r.A.openMemberVerificationModal(s, void 0, u);
        }, [C, s, l.visibility, u]);
    return null == c
        ? null
        : (0, t.jsx)(_, {
              guildId: s,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: C,
              onStartApplication: E,
              onComplete: i,
          });
}

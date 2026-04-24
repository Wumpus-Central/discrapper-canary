l.d(t, { A: () => C, Y: () => h });
var i = l(627968),
    n = l(64700),
    r = l(821609),
    s = l(376728),
    a = l(415951),
    u = l(849841),
    c = l(976860),
    o = l(345942),
    d = l(449054),
    I = l(348943),
    A = l(461888),
    _ = l(652215),
    E = l(985018);
function h(e) {
    let {
            guildId: t,
            ctaType: l,
            submitting: s,
            onGoToGuild: a,
            onAcceptInvite: o,
            onStartApplication: I,
            onComplete: h,
        } = e,
        [C, P] = n.useState(!1),
        g = (0, u.A)(t),
        L = n.useCallback(() => {
            (0, c.pX)(_.BVt.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        m = n.useCallback(async () => {
            await (0, d.Z2)(t, { object: _.ZSU.GUILD_PROFILE });
        }, [t]),
        { text: y, onClick: p } = n.useMemo(() => {
            switch (l) {
                case A.SP.IS_MEMBER:
                    return { text: E.intl.string(E.t.IRoQXr), onClick: a };
                case A.SP.ADOPT_TAG:
                    return { text: E.intl.string(E.t.cQDYRu), onClick: g };
                case A.SP.HAS_APPLICATION:
                    return { text: E.intl.string(E.t["4yfIDk"]), onClick: L };
                case A.SP.APPLY_TO_JOIN:
                    return { text: E.intl.string(E.t["7XdMW2"]), onClick: I };
                case A.SP.LURK_DISCOVERABLE:
                    return { text: E.intl.string(E.t.VJlc0S), onClick: m };
                case A.SP.JOIN_VIA_INVITE:
                    return { text: E.intl.string(E.t.VJlc0S), onClick: o };
                case A.SP.ACCEPT_ROLES:
                    return { text: E.intl.string(E.t.MMlhsr), onClick: o };
                default:
                    return { text: null, onClick: null };
            }
        }, [l, L, m, o, a, I, g]),
        f = n.useCallback(
            async (e) => {
                e.stopPropagation(), P(!0);
                try {
                    await p?.();
                } catch {
                } finally {
                    h?.(), P(!1);
                }
            },
            [p, h],
        );
    return null == y
        ? null
        : (0, i.jsx)(r.$, { variant: "active", size: "sm", text: y, fullWidth: !0, loading: C || s, onClick: f });
}
function C(e) {
    let { profile: t, onComplete: l } = e,
        { guildId: r, validInviteKey: u, ctaType: c } = (0, A.Ay)(t),
        d = n.useCallback(() => (0, o.u)(r), [r]),
        _ = n.useCallback(() => {
            null != u && s.Ay.acceptInvite({ inviteKey: u, context: { location: "guild_profile" } });
        }, [u]),
        E = n.useCallback(() => {
            t.visibility !== I.n.PUBLIC_WITH_RECRUITMENT && null != u
                ? _()
                : a.A.openMemberVerificationModal(r, void 0, u);
        }, [_, r, t.visibility, u]);
    return null == c
        ? null
        : (0, i.jsx)(h, {
              guildId: r,
              ctaType: c,
              onGoToGuild: d,
              onAcceptInvite: _,
              onStartApplication: E,
              onComplete: l,
          });
}

t.d(l, { A: () => j, Y: () => v });
var i = t(477900),
    n = t(582128),
    s = t(821609),
    a = t(376728),
    r = t(415951),
    c = t(849841),
    o = t(976860),
    d = t(345942),
    u = t(449054),
    m = t(348943),
    x = t(461888),
    I = t(652215),
    h = t(660183);
function v(e) {
    let {
            guildId: l,
            ctaType: t,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: d,
            onStartApplication: m,
            onComplete: v,
        } = e,
        [j, g] = n.useState(!1),
        A = (0, c.A)(l),
        N = n.useCallback(() => {
            (0, o.pX)(I.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        f = n.useCallback(async () => {
            await (0, u.Z2)(l, { object: I.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: C, onClick: p } = n.useMemo(() => {
            switch (t) {
                case x.SP.IS_MEMBER:
                    return { text: h.intl.string(h.t.IRoQXr), onClick: r };
                case x.SP.ADOPT_TAG:
                    return { text: h.intl.string(h.t.cQDYRu), onClick: A };
                case x.SP.HAS_APPLICATION:
                    return { text: h.intl.string(h.t["4yfIDk"]), onClick: N };
                case x.SP.APPLY_TO_JOIN:
                    return { text: h.intl.string(h.t["7XdMW2"]), onClick: m };
                case x.SP.LURK_DISCOVERABLE:
                    return { text: h.intl.string(h.t.VJlc0S), onClick: f };
                case x.SP.JOIN_VIA_INVITE:
                    return { text: h.intl.string(h.t.VJlc0S), onClick: d };
                case x.SP.ACCEPT_ROLES:
                    return { text: h.intl.string(h.t.MMlhsr), onClick: d };
                default:
                    return { text: null, onClick: null };
            }
        }, [t, N, f, d, r, m, A]),
        b = n.useCallback(
            async (e) => {
                (e.stopPropagation(), g(!0));
                try {
                    await p?.();
                } catch {
                } finally {
                    (v?.(), g(!1));
                }
            },
            [p, v],
        );
    return null == C
        ? null
        : (0, i.jsx)(s.$, { variant: "active", size: "sm", text: C, fullWidth: !0, loading: j || a, onClick: b });
}
function j(e) {
    let { profile: l, onComplete: t } = e,
        { guildId: s, validInviteKey: c, ctaType: o } = (0, x.Ay)(l),
        u = n.useCallback(() => (0, d.u)(s), [s]),
        I = n.useCallback(() => {
            null != c && a.Ay.acceptInvite({ inviteKey: c, context: { location: "guild_profile" } });
        }, [c]),
        h = n.useCallback(() => {
            l.visibility !== m.n.PUBLIC_WITH_RECRUITMENT && null != c
                ? I()
                : r.A.openMemberVerificationModal(s, void 0, c);
        }, [I, s, l.visibility, c]);
    return null == o
        ? null
        : (0, i.jsx)(v, {
              guildId: s,
              ctaType: o,
              onGoToGuild: u,
              onAcceptInvite: I,
              onStartApplication: h,
              onComplete: t,
          });
}

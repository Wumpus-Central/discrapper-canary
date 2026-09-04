t.d(l, { A: () => I, Y: () => h });
var i = t(477900),
    n = t(582128),
    s = t(821609),
    a = t(376728),
    r = t(415951),
    o = t(849841),
    c = t(976860),
    d = t(345942),
    u = t(449054),
    m = t(348943),
    x = t(461888),
    v = t(652215),
    g = t(375708);
function h(e) {
    let {
            guildId: l,
            ctaType: t,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: d,
            onStartApplication: m,
            onComplete: h,
        } = e,
        [I, j] = n.useState(!1),
        A = (0, o.A)(l),
        N = n.useCallback(() => {
            (0, c.pX)(v.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        f = n.useCallback(async () => {
            await (0, u.Z2)(l, { object: v.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: C, onClick: p } = n.useMemo(() => {
            switch (t) {
                case x.SP.IS_MEMBER:
                    return { text: g.intl.string(g.t.IRoQXr), onClick: r };
                case x.SP.ADOPT_TAG:
                    return { text: g.intl.string(g.t.cQDYRu), onClick: A };
                case x.SP.HAS_APPLICATION:
                    return { text: g.intl.string(g.t["4yfIDk"]), onClick: N };
                case x.SP.APPLY_TO_JOIN:
                    return { text: g.intl.string(g.t["7XdMW2"]), onClick: m };
                case x.SP.LURK_DISCOVERABLE:
                    return { text: g.intl.string(g.t.VJlc0S), onClick: f };
                case x.SP.JOIN_VIA_INVITE:
                    return { text: g.intl.string(g.t.VJlc0S), onClick: d };
                case x.SP.ACCEPT_ROLES:
                    return { text: g.intl.string(g.t.MMlhsr), onClick: d };
                default:
                    return { text: null, onClick: null };
            }
        }, [t, N, f, d, r, m, A]),
        b = n.useCallback(
            async (e) => {
                e.stopPropagation(), j(!0);
                try {
                    await p?.();
                } catch {
                } finally {
                    h?.(), j(!1);
                }
            },
            [p, h],
        );
    return null == C
        ? null
        : (0, i.jsx)(s.$, { variant: "active", size: "sm", text: C, fullWidth: !0, loading: I || a, onClick: b });
}
function I(e) {
    let { profile: l, onComplete: t } = e,
        { guildId: s, validInviteKey: o, ctaType: c } = (0, x.Ay)(l),
        u = n.useCallback(() => (0, d.u)(s), [s]),
        v = n.useCallback(() => {
            null != o && a.Ay.acceptInvite({ inviteKey: o, context: { location: "guild_profile" } });
        }, [o]),
        g = n.useCallback(() => {
            l.visibility !== m.n.PUBLIC_WITH_RECRUITMENT && null != o
                ? v()
                : r.A.openMemberVerificationModal(s, void 0, o);
        }, [v, s, l.visibility, o]);
    return null == c
        ? null
        : (0, i.jsx)(h, {
              guildId: s,
              ctaType: c,
              onGoToGuild: u,
              onAcceptInvite: v,
              onStartApplication: g,
              onComplete: t,
          });
}

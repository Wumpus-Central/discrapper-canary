"use strict";
n.d(t, { A: () => g, Y: () => m });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(846293),
    o = n(415951),
    l = n(849841),
    u = n(976860),
    c = n(345942),
    d = n(449054),
    _ = n(348943),
    f = n(461888),
    p = n(652215),
    h = n(985018);
function m(e) {
    let {
            guildId: t,
            ctaType: n,
            submitting: s,
            onGoToGuild: o,
            onAcceptInvite: c,
            onStartApplication: _,
            onComplete: m,
        } = e,
        [g, E] = i.useState(!1),
        A = (0, l.A)(t),
        I = i.useCallback(() => {
            (0, u.pX)(p.BVt.GUILD_MEMBER_VERIFICATION(t));
        }, [t]),
        T = i.useCallback(async () => {
            await (0, d.Z2)(t, { object: p.ZSU.GUILD_PROFILE });
        }, [t]),
        { text: y, onClick: S } = i.useMemo(() => {
            switch (n) {
                case f.SP.IS_MEMBER:
                    return { text: h.intl.string(h.t.IRoQXr), onClick: o };
                case f.SP.ADOPT_TAG:
                    return { text: h.intl.string(h.t.cQDYRu), onClick: A };
                case f.SP.HAS_APPLICATION:
                    return { text: h.intl.string(h.t["4yfIDk"]), onClick: I };
                case f.SP.APPLY_TO_JOIN:
                    return { text: h.intl.string(h.t["7XdMW2"]), onClick: _ };
                case f.SP.LURK_DISCOVERABLE:
                    return { text: h.intl.string(h.t.VJlc0S), onClick: T };
                case f.SP.JOIN_VIA_INVITE:
                    return { text: h.intl.string(h.t.VJlc0S), onClick: c };
                case f.SP.ACCEPT_ROLES:
                    return { text: h.intl.string(h.t.MMlhsr), onClick: c };
                default:
                    return { text: null, onClick: null };
            }
        }, [n, I, T, c, o, _, A]),
        v = i.useCallback(
            async (e) => {
                e.stopPropagation(), E(!0);
                try {
                    await S?.();
                } catch {
                } finally {
                    m?.(), E(!1);
                }
            },
            [S, m],
        );
    return null == y
        ? null
        : (0, r.jsx)(a.Button, { variant: "active", size: "sm", text: y, fullWidth: !0, loading: g || s, onClick: v });
}
function g(e) {
    let { profile: t, onComplete: n } = e,
        { guildId: a, validInviteKey: l, ctaType: u } = (0, f.Ay)(t),
        d = i.useCallback(() => (0, c.u)(a), [a]),
        p = i.useCallback(() => {
            null != l && s.Ay.acceptInvite({ inviteKey: l, context: { location: "guild_profile" } });
        }, [l]),
        h = i.useCallback(() => {
            t.visibility !== _.n.PUBLIC_WITH_RECRUITMENT && null != l
                ? p()
                : o.A.openMemberVerificationModal(a, void 0, l);
        }, [p, a, t.visibility, l]);
    return null == u
        ? null
        : (0, r.jsx)(m, {
              guildId: a,
              ctaType: u,
              onGoToGuild: d,
              onAcceptInvite: p,
              onStartApplication: h,
              onComplete: n,
          });
}

i.d(l, { A: () => j, Y: () => v });
var t = i(477900),
    n = i(582128),
    s = i(821609),
    a = i(376728),
    r = i(415951),
    o = i(849841),
    c = i(976860),
    d = i(345942),
    u = i(449054),
    m = i(348943),
    x = i(461888),
    I = i(652215),
    h = i(105292);
function v(e) {
    let {
            guildId: l,
            ctaType: i,
            submitting: a,
            onGoToGuild: r,
            onAcceptInvite: d,
            onStartApplication: m,
            onComplete: v,
        } = e,
        [j, g] = n.useState(!1),
        A = (0, o.A)(l),
        N = n.useCallback(() => {
            (0, c.pX)(I.BVt.GUILD_MEMBER_VERIFICATION(l));
        }, [l]),
        f = n.useCallback(async () => {
            await (0, u.Z2)(l, { object: I.ZSU.GUILD_PROFILE });
        }, [l]),
        { text: b, onClick: y } = n.useMemo(() => {
            switch (i) {
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
        }, [i, N, f, d, r, m, A]),
        C = n.useCallback(
            async (e) => {
                (e.stopPropagation(), g(!0));
                try {
                    await y?.();
                } catch {
                } finally {
                    (v?.(), g(!1));
                }
            },
            [y, v],
        );
    return null == b
        ? null
        : (0, t.jsx)(s.$, { variant: "active", size: "sm", text: b, fullWidth: !0, loading: j || a, onClick: C });
}
function j(e) {
    let { profile: l, onComplete: i } = e,
        { guildId: s, validInviteKey: o, ctaType: c } = (0, x.Ay)(l),
        u = n.useCallback(() => (0, d.u)(s), [s]),
        I = n.useCallback(() => {
            null != o && a.Ay.acceptInvite({ inviteKey: o, context: { location: "guild_profile" } });
        }, [o]),
        h = n.useCallback(() => {
            l.visibility !== m.n.PUBLIC_WITH_RECRUITMENT && null != o
                ? I()
                : r.A.openMemberVerificationModal(s, void 0, o);
        }, [I, s, l.visibility, o]);
    return null == c
        ? null
        : (0, t.jsx)(v, {
              guildId: s,
              ctaType: c,
              onGoToGuild: u,
              onAcceptInvite: I,
              onStartApplication: h,
              onComplete: i,
          });
}

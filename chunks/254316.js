i.r(t), i.d(t, { default: () => G });
var n = i(627968),
    a = i(64700),
    o = i(873263),
    r = i(17928),
    s = i(289873),
    l = i(916603),
    d = i(448564),
    u = i(997509),
    c = i(976860),
    S = i(71393),
    E = i(652215);
function G(e) {
    let { guildId: t } = e,
        i = (0, r.bG)([S.A], () => S.A.getGuild(t)),
        [G, b] = a.useState(!0);
    return (a.useEffect(() => {
        let e = setTimeout(() => {
            null == i &&
                (0, c.pX)(E.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-onboarding"));
        }, 3e3);
        return () => clearTimeout(e);
    }, [i]),
    a.useEffect(() => {
        null != i &&
            G &&
            (d.A.hasSeenCreatorOnboardingForGuild(i.id) || (0, l.G)(i.id),
            u.A.open(i.id, E.BEX.ROLE_SUBSCRIPTIONS),
            b(!1));
    }, [G, i]),
    null == i || G)
        ? (0, n.jsx)("div", {
              style: { display: "flex", justifyContent: "center", width: "100%" },
              children: (0, n.jsx)(s.y, {}),
          })
        : (0, n.jsx)(o.rd, { to: E.BVt.CHANNEL(t) });
}

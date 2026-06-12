i.r(t), i.d(t, { default: () => h });
var s = i(627968),
    r = i(64700),
    n = i(873263),
    u = i(17928),
    d = i(289873),
    l = i(916603),
    o = i(448564),
    a = i(468689),
    c = i(976860),
    p = i(71393),
    f = i(652215);
function h(e) {
    let { guildId: t } = e,
        i = (0, u.bG)([p.A], () => p.A.getGuild(t)),
        [h, b] = r.useState(!0);
    return (r.useEffect(() => {
        let e = setTimeout(() => {
            null == i &&
                (0, c.pX)(f.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-onboarding"));
        }, 3e3);
        return () => clearTimeout(e);
    }, [i]),
    r.useEffect(() => {
        null != i &&
            h &&
            (o.A.hasSeenCreatorOnboardingForGuild(i.id) || (0, l.G)(i.id),
            a.A.open(i.id, f.BEX.ROLE_SUBSCRIPTIONS),
            b(!1));
    }, [h, i]),
    null == i || h)
        ? (0, s.jsx)("div", {
              style: { display: "flex", justifyContent: "center", width: "100%" },
              children: (0, s.jsx)(d.y, {}),
          })
        : (0, s.jsx)(n.rd, { to: f.BVt.CHANNEL(t) });
}

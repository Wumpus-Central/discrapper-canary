t.r(n), t.d(n, { default: () => E }), t(388685);
var i = t(54381),
    o = t(473749),
    r = t(828700),
    a = t(442837),
    s = t(481060),
    l = t(17079),
    u = t(709246),
    d = t(434404),
    c = t(703656),
    S = t(430824),
    b = t(981631);
function E(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([S.Z], () => S.Z.getGuild(n)),
        [E, p] = o.useState(!0);
    return (o.useEffect(() => {
        let e = setTimeout(() => {
            null == t &&
                (0, c.uL)(b.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-onboarding"));
        }, 3000);
        return () => clearTimeout(e);
    }, [t]),
    o.useEffect(() => {
        null != t &&
            E &&
            (u.Z.hasSeenCreatorOnboardingForGuild(t.id) || (0, l.k)(t.id),
            d.Z.open(t.id, b.pNK.ROLE_SUBSCRIPTIONS),
            p(!1));
    }, [E, t]),
    null == t || E)
        ? (0, i.jsx)("div", {
              style: {
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
              },
              children: (0, i.jsx)(s.$jN, {}),
          })
        : (0, i.jsx)(r.l_, { to: b.Z5c.CHANNEL(n) });
}

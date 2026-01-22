n.r(t),
    n.d(t, {
        default: () => E,
    }),
    n(896048);
var i = n(627968),
    r = n(64700),
    a = n(960488),
    o = n(311907),
    s = n(397927),
    l = n(544199),
    d = n(448564),
    u = n(997509),
    c = n(976860),
    S = n(71393),
    b = n(652215);

function E(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([S.A], () => S.A.getGuild(t)),
        [E, G] = r.useState(!0);
    return (r.useEffect(() => {
        let e = setTimeout(() => {
            null == n &&
                (0, c.pX)(b.BVt.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-onboarding"));
        }, 3e3);
        return () => clearTimeout(e);
    }, [n]),
    r.useEffect(() => {
        null != n &&
            E &&
            (d.A.hasSeenCreatorOnboardingForGuild(n.id) || (0, l.G)(n.id),
            u.A.open(n.id, b.BEX.ROLE_SUBSCRIPTIONS),
            G(!1));
    }, [E, n]),
    null == n || E)
        ? (0, i.jsx)("div", {
              style: {
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
              },
              children: (0, i.jsx)(s.y$y, {}),
          })
        : (0, i.jsx)(a.rd, {
              to: b.BVt.CHANNEL(t),
          });
}

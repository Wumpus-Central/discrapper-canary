n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(417597),
    r = n(435371),
    a = n(397927),
    l = n(695515),
    o = n(923531),
    c = n(397808),
    d = n(254847),
    u = n(773349),
    _ = n(994987),
    m = n(842130),
    A = n(985018),
    g = n(721757);
let E = () => {
    let e = (0, s.bG)([l.A], () => l.A.getTopUserActivities()),
        t = (0, s.bG)([l.A], () => l.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: g.kL,
              children: [
                  e.length > 0 &&
                      (0, i.jsxs)("div", {
                          className: g.A2,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  variant: "text-md/medium",
                                  className: g.bV,
                                  children: A.intl.string(m.default.BxbvS7),
                              }),
                              (0, i.jsx)("div", {
                                  className: g.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, i.jsx)(u.A, {
                                                userId: e[0].user_id,
                                                subText: (0, o.fq)(e[0].dms_sent, e[0].call_count),
                                                className: g.q3,
                                            })
                                          : e.map((e) =>
                                                (0, i.jsx)(
                                                    _.A,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, i.jsxs)("div", {
                          className: g.A2,
                          children: [
                              (0, i.jsx)(a.Heading, {
                                  variant: "text-md/medium",
                                  className: g.bV,
                                  children: A.intl.string(m.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, i.jsx)(d.A, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, o.fq)(t[0].messages_sent, t[0].call_count),
                                        className: g._S,
                                    })
                                  : (0, i.jsx)("div", {
                                        className: g.Ce,
                                        children: t.map((e) => {
                                            let t = l.A.getGuild(e.guild_id),
                                                n = t?.name ?? "Unknown Server";
                                            return (0, i.jsx)(
                                                r.un,
                                                {
                                                    title: n,
                                                    body: (0, o.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, i.jsx)(c.A, { guildId: e?.guild_id }),
                                                },
                                                e.guild_id,
                                            );
                                        }),
                                    }),
                          ],
                      }),
              ],
          });
};

l.d(t, { A: () => j });
var n = l(627968);
l(64700);
var i = l(417597),
    s = l(459192),
    a = l(534514),
    r = l(695515),
    d = l(923531),
    c = l(397808),
    u = l(254847),
    o = l(773349),
    x = l(994987),
    h = l(602339),
    m = l(985018),
    g = l(833802);
let j = () => {
    let e = (0, i.bG)([r.A], () => r.A.getTopUserActivities()),
        t = (0, i.bG)([r.A], () => r.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, n.jsxs)("div", {
              className: g.kL,
              children: [
                  e.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: g.A2,
                          children: [
                              (0, n.jsx)(a.D, {
                                  variant: "text-md/medium",
                                  className: g.bV,
                                  children: m.intl.string(h.default.BxbvS7),
                              }),
                              (0, n.jsx)("div", {
                                  className: g.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, n.jsx)(o.A, {
                                                userId: e[0].user_id,
                                                subText: (0, d.fq)(e[0].dms_sent, e[0].call_count),
                                                className: g.q3,
                                            })
                                          : e.map((e) =>
                                                (0, n.jsx)(
                                                    x.A,
                                                    { userId: e.user_id, dmsSent: e.dms_sent, callCount: e.call_count },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, n.jsxs)("div", {
                          className: g.A2,
                          children: [
                              (0, n.jsx)(a.D, {
                                  variant: "text-md/medium",
                                  className: g.bV,
                                  children: m.intl.string(h.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, n.jsx)(u.A, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, d.fq)(t[0].messages_sent, t[0].call_count),
                                        className: g._S,
                                    })
                                  : (0, n.jsx)("div", {
                                        className: g.Ce,
                                        children: t.map((e) => {
                                            let t = r.A.getGuild(e.guild_id),
                                                l = t?.name ?? "Unknown Server";
                                            return (0, n.jsx)(
                                                s.u,
                                                {
                                                    title: l,
                                                    body: (0, d.fq)(e.messages_sent, e.call_count) ?? null,
                                                    asContainer: !0,
                                                    children: (0, n.jsx)(c.A, { guildId: e?.guild_id }),
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

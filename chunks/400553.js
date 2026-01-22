n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(417597),
    a = n(435371),
    s = n(397927),
    o = n(695515),
    l = n(923531),
    c = n(397808),
    u = n(254847),
    d = n(773349),
    f = n(994987),
    p = n(842130),
    _ = n(985018),
    h = n(721757);
let m = () => {
    let e = (0, i.bG)([o.A], () => o.A.getTopUserActivities()),
        t = (0, i.bG)([o.A], () => o.A.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: h.kL,
              children: [
                  e.length > 0 &&
                      (0, r.jsxs)("div", {
                          className: h.A2,
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: "text-md/medium",
                                  className: h.bV,
                                  children: _.intl.string(p.default.BxbvS7),
                              }),
                              (0, r.jsx)("div", {
                                  className: h.Ce,
                                  children:
                                      1 === e.length
                                          ? (0, r.jsx)(d.A, {
                                                userId: e[0].user_id,
                                                subText: (0, l.fq)(e[0].dms_sent, e[0].call_count),
                                                className: h.q3,
                                            })
                                          : e.map((e) =>
                                                (0, r.jsx)(
                                                    f.A,
                                                    {
                                                        userId: e.user_id,
                                                        dmsSent: e.dms_sent,
                                                        callCount: e.call_count,
                                                    },
                                                    e.user_id,
                                                ),
                                            ),
                              }),
                          ],
                      }),
                  t.length > 0 &&
                      (0, r.jsxs)("div", {
                          className: h.A2,
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: "text-md/medium",
                                  className: h.bV,
                                  children: _.intl.string(p.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, r.jsx)(u.A, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, l.fq)(t[0].messages_sent, t[0].call_count),
                                        className: h._S,
                                    })
                                  : (0, r.jsx)("div", {
                                        className: h.Ce,
                                        children: t.map((e) => {
                                            var t, n;
                                            let i = o.A.getGuild(e.guild_id),
                                                s = null != (t = null == i ? void 0 : i.name) ? t : "Unknown Server";
                                            return (0, r.jsx)(
                                                a.un,
                                                {
                                                    title: s,
                                                    body:
                                                        null != (n = (0, l.fq)(e.messages_sent, e.call_count))
                                                            ? n
                                                            : null,
                                                    asContainer: !0,
                                                    children: (0, r.jsx)(c.A, {
                                                        guildId: null == e ? void 0 : e.guild_id,
                                                    }),
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

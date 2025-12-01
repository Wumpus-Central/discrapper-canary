n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(399606),
    a = n(681715),
    o = n(481060),
    s = n(914788),
    l = n(546791),
    c = n(322192),
    u = n(792258),
    d = n(657825),
    f = n(872608),
    p = n(744038),
    _ = n(388032),
    m = n(336888);
let h = () => {
    let e = (0, i.e7)([s.Z], () => s.Z.getTopUserActivities()),
        t = (0, i.e7)([s.Z], () => s.Z.getTopGuildActivities());
    return 0 === e.length && 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: m.container,
              children: [
                  e.length > 0 &&
                      (0, r.jsxs)("div", {
                          className: m.actionSection,
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: "text-md/medium",
                                  className: m.sectionHeader,
                                  children: _.intl.string(p.default.BxbvS7),
                              }),
                              (0, r.jsx)("div", {
                                  className: m.avatarList,
                                  children:
                                      1 === e.length
                                          ? (0, r.jsx)(d.Z, {
                                                userId: e[0].user_id,
                                                subText: (0, l.Kp)(e[0].dms_sent, e[0].call_count),
                                                className: m.userRow,
                                            })
                                          : e.map((e) =>
                                                (0, r.jsx)(
                                                    f.Z,
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
                          className: m.actionSection,
                          children: [
                              (0, r.jsx)(o.Heading, {
                                  variant: "text-md/medium",
                                  className: m.sectionHeader,
                                  children: _.intl.string(p.default.Lq9Set),
                              }),
                              1 === t.length
                                  ? (0, r.jsx)(u.Z, {
                                        guildId: t[0].guild_id,
                                        customSubtext: (0, l.Kp)(t[0].messages_sent, t[0].call_count),
                                        className: m.guildRow,
                                    })
                                  : (0, r.jsx)("div", {
                                        className: m.avatarList,
                                        children: t.map((e) => {
                                            var t, n;
                                            let i = s.Z.getGuild(e.guild_id),
                                                o = null != (t = null == i ? void 0 : i.name) ? t : "Unknown Server";
                                            return (0, r.jsx)(
                                                a.i_,
                                                {
                                                    title: o,
                                                    body:
                                                        null != (n = (0, l.Kp)(e.messages_sent, e.call_count))
                                                            ? n
                                                            : null,
                                                    asContainer: !0,
                                                    children: (0, r.jsx)(c.Z, {
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

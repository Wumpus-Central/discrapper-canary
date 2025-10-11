n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(399606),
    a = n(681715),
    o = n(481060),
    s = n(914788),
    l = n(322192),
    c = n(792258),
    u = n(657825),
    d = n(872608),
    f = n(345909),
    _ = n(388032),
    p = n(336888);
let h = () => {
    let e = (0, i.e7)([s.Z], () => s.Z.getTopUserActivities()),
        t = (0, i.e7)([s.Z], () => s.Z.getTopGuildActivities());
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            e.length > 0 &&
                (0, r.jsxs)("div", {
                    className: p.actionSection,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "text-md/medium",
                            className: p.sectionHeader,
                            children: _.intl.string(f.default.BxbvS0),
                        }),
                        (0, r.jsx)("div", {
                            className: p.avatarList,
                            children:
                                1 === e.length
                                    ? (0, r.jsx)(u.Z, {
                                          userId: e[0].user_id,
                                          subText: _.intl.formatToPlainString(f.default.Fjwpen, {
                                              dmsSent: e[0].dms_sent,
                                              callCount: e[0].call_count,
                                          }),
                                          className: p.userRow,
                                      })
                                    : e.map((e) =>
                                          (0, r.jsx)(
                                              d.Z,
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
                    className: p.actionSection,
                    children: [
                        (0, r.jsx)(o.Heading, {
                            variant: "text-md/medium",
                            className: p.sectionHeader,
                            children: _.intl.string(f.default.Lq9Sen),
                        }),
                        1 === t.length
                            ? (0, r.jsx)(c.Z, {
                                  guildId: t[0].guild_id,
                                  customSubtext: _.intl.formatToPlainString(f.default.pzKKoK, {
                                      messageCount: t[0].messages_sent,
                                  }),
                                  className: p.guildRow,
                              })
                            : (0, r.jsx)("div", {
                                  className: p.avatarList,
                                  children: t.map((e) => {
                                      var t;
                                      let n = s.Z.getGuild(e.guild_id),
                                          i = null != (t = null == n ? void 0 : n.name) ? t : "Unknown Server";
                                      return (0, r.jsx)(
                                          a.i_,
                                          {
                                              title: i,
                                              body: _.intl.formatToPlainString(f.default.pzKKoK, {
                                                  messageCount: e.messages_sent,
                                              }),
                                              asContainer: !0,
                                              children: (0, r.jsx)(l.Z, { guildId: null == e ? void 0 : e.guild_id }),
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

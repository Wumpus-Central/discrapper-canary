n.d(t, { Z: () => x });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(990547),
    o = n(442837),
    s = n(159691),
    c = n(481060),
    u = n(26151),
    d = n(213609),
    p = n(358221),
    h = n(985588),
    f = n(686546),
    m = n(359110),
    g = n(601964),
    b = n(430824),
    y = n(933557),
    C = n(354459),
    v = n(388032),
    _ = n(115858);
function x(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        r = (0, y.ZP)(n),
        s = (0, h.s)(t, "RingToVoiceBanner", n.id),
        { userIsInCall: u, isUserRinging: m } = (0, o.cj)([p.Z], () => {
            let e = null;
            return (
                s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === C.fO.USER && e.ringing,
                }
            );
        }),
        x = (0, o.e7)([b.Z], () => b.Z.getGuild(n.guild_id)),
        O = null != x ? (0, g.EB)(x, 32, !0) : null,
        E = !s || (u && !m);
    return ((0, d.Z)(
        {
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id,
            },
        },
        { disableTrack: E },
        [t.id],
    ),
    E)
        ? null
        : (0, i.jsxs)("div", {
              className: l()(_.themed, _.chatHeaderBar),
              children: [
                  (0, i.jsxs)("div", {
                      className: _.chatHeaderBarInfo,
                      children: [
                          (0, i.jsx)(f.ZP, {
                              className: _.mask,
                              mask: f.QS.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == O
                                      ? (0, i.jsx)("div", {
                                            className: l()(_.guildIcon, _.guildIconWithoutImage),
                                            children: (0, i.jsx)("div", {
                                                className: _.guildAcronym,
                                                children: null != x ? (0, g.gM)(x) : null,
                                            }),
                                        })
                                      : (0, i.jsx)("img", {
                                            alt: null == x ? void 0 : x.name,
                                            src: O,
                                            className: _.guildIcon,
                                        }),
                          }),
                          (0, i.jsx)(c.Text, {
                              className: _.chatHeaderBarText,
                              variant: "text-md/medium",
                              color: "header-secondary",
                              children: v.intl.format(v.t.f2tNxH, {
                                  username: null == t ? void 0 : t.globalName,
                                  channelName: (0, i.jsx)(
                                      c.Text,
                                      {
                                          variant: "text-md/semibold",
                                          color: "header-primary",
                                          children: r,
                                      },
                                      n.id,
                                  ),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(j, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: m,
                  }),
              ],
          });
}
function j(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: r } = e,
        l = r ? v.intl.string(v.t.ygslb0) : v.intl.string(v.t["3Hv9qQ"]),
        a = r
            ? () => u.Z.stopRinging(t, [n])
            : () => {
                  u.Z.ring(t, [n], "dm_banner"), (0, m.Kh)(t);
              };
    return (0, i.jsx)(s.zxk, {
        variant: r ? "critical-secondary" : "secondary",
        size: "sm",
        text: l,
        iconPosition: "start",
        icon: c.gj8,
        onClick: a,
    });
}

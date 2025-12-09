n.d(t, { Z: () => O });
var i = n(54381);
n(473749);
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
    C = n(933557),
    y = n(354459),
    _ = n(388032),
    v = n(115858);
function O(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        r = (0, C.ZP)(n),
        s = (0, h.s)(t, "RingToVoiceBanner", n.id),
        { userIsInCall: u, isUserRinging: m } = (0, o.cj)([p.Z], () => {
            let e = null;
            return (
                s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === y.fO.USER && e.ringing,
                }
            );
        }),
        O = (0, o.e7)([b.Z], () => b.Z.getGuild(n.guild_id)),
        E = null != O ? (0, g.EB)(O, 32, !0) : null,
        j = !s || (u && !m);
    return ((0, d.Z)(
        {
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id,
            },
        },
        { disableTrack: j },
        [t.id],
    ),
    j)
        ? null
        : (0, i.jsxs)("div", {
              className: l()(v.themed, v.chatHeaderBar),
              children: [
                  (0, i.jsxs)("div", {
                      className: v.chatHeaderBarInfo,
                      children: [
                          (0, i.jsx)(f.ZP, {
                              className: v.mask,
                              mask: f.QS.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == E
                                      ? (0, i.jsx)("div", {
                                            className: l()(v.guildIcon, v.guildIconWithoutImage),
                                            children: (0, i.jsx)("div", {
                                                className: v.guildAcronym,
                                                children: null != O ? (0, g.gM)(O) : null,
                                            }),
                                        })
                                      : (0, i.jsx)("img", {
                                            alt: null == O ? void 0 : O.name,
                                            src: E,
                                            className: v.guildIcon,
                                        }),
                          }),
                          (0, i.jsx)(c.Text, {
                              className: v.chatHeaderBarText,
                              variant: "text-md/medium",
                              color: "text-default",
                              children: _.intl.format(_.t.f2tNxH, {
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
                  (0, i.jsx)(x, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: m,
                  }),
              ],
          });
}
function x(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: r } = e,
        l = r ? _.intl.string(_.t.ygslb0) : _.intl.string(_.t["3Hv9qQ"]),
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

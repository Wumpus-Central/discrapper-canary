n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(990547),
    s = n(442837),
    l = n(680018),
    c = n(481060),
    u = n(26151),
    d = n(213609),
    f = n(358221),
    _ = n(985588),
    p = n(686546),
    h = n(359110),
    m = n(601964),
    g = n(430824),
    E = n(933557),
    b = n(354459),
    y = n(388032),
    O = n(115858);
function v(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        i = (0, E.ZP)(n),
        l = (0, _.s)(t, "RingToVoiceBanner", n.id),
        { userIsInCall: u, isUserRinging: h } = (0, s.cj)([f.Z], () => {
            let e = null;
            return (
                l && null != n.id && (e = f.Z.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === b.fO.USER && e.ringing,
                }
            );
        }),
        v = (0, s.e7)([g.Z], () => g.Z.getGuild(n.guild_id)),
        T = null != v ? (0, m.EB)(v, 32, !0) : null,
        S = !l || (u && !h);
    return ((0, d.Z)(
        {
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id,
            },
        },
        { disableTrack: S },
        [t.id],
    ),
    S)
        ? null
        : (0, r.jsxs)("div", {
              className: o()(O.themed, O.chatHeaderBar),
              children: [
                  (0, r.jsxs)("div", {
                      className: O.chatHeaderBarInfo,
                      children: [
                          (0, r.jsx)(p.ZP, {
                              className: O.mask,
                              mask: p.QS.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == T
                                      ? (0, r.jsx)("div", {
                                            className: o()(O.guildIcon, O.guildIconWithoutImage),
                                            children: (0, r.jsx)("div", {
                                                className: O.guildAcronym,
                                                children: null != v ? (0, m.gM)(v) : null,
                                            }),
                                        })
                                      : (0, r.jsx)("img", {
                                            alt: null == v ? void 0 : v.name,
                                            src: T,
                                            className: O.guildIcon,
                                        }),
                          }),
                          (0, r.jsx)(c.Text, {
                              className: O.chatHeaderBarText,
                              variant: "text-md/medium",
                              color: "header-secondary",
                              children: y.intl.format(y.t.f2tNxM, {
                                  username: null == t ? void 0 : t.globalName,
                                  channelName: (0, r.jsx)(
                                      c.Text,
                                      {
                                          variant: "text-md/semibold",
                                          color: "header-primary",
                                          children: i,
                                      },
                                      n.id,
                                  ),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(I, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: h,
                  }),
              ],
          });
}
function I(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: i } = e,
        o = i ? "critical-secondary" : "secondary",
        a = i ? y.intl.string(y.t.ygslb2) : y.intl.string(y.t["3Hv9qa"]),
        s = i
            ? () => u.Z.stopRinging(t, [n])
            : () => {
                  u.Z.ring(t, [n], "dm_banner"), (0, h.Kh)(t);
              };
    return (0, r.jsx)(l.z, {
        variant: o,
        size: "sm",
        text: a,
        iconPosition: "start",
        icon: c.gj8,
        onClick: s,
    });
}

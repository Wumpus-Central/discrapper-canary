n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(990547),
    a = n(442837),
    s = n(680018),
    c = n(481060),
    u = n(26151),
    d = n(213609),
    p = n(358221),
    h = n(985588),
    f = n(686546),
    m = n(359110),
    g = n(601964),
    b = n(430824),
    _ = n(933557),
    y = n(354459),
    C = n(388032),
    x = n(249671);
function v(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        i = (0, _.ZP)(n),
        s = (0, h.s)(t, 'RingToVoiceBanner', n.id),
        { userIsInCall: u, isUserRinging: m } = (0, a.cj)([p.Z], () => {
            let e = null;
            return (
                s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === y.fO.USER && e.ringing
                }
            );
        }),
        v = (0, a.e7)([b.Z], () => b.Z.getGuild(n.guild_id)),
        O = null != v ? (0, g.EB)(v, 32, !0) : null,
        E = !s || (u && !m);
    return ((0, d.Z)(
        {
            type: o.ImpressionTypes.PAGE,
            name: o.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id
            }
        },
        { disableTrack: E },
        [t.id]
    ),
    E)
        ? null
        : (0, r.jsxs)('div', {
              className: l()(x.themed, x.chatHeaderBar),
              children: [
                  (0, r.jsxs)('div', {
                      className: x.chatHeaderBarInfo,
                      children: [
                          (0, r.jsx)(f.ZP, {
                              className: x.mask,
                              mask: f.QS.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == O
                                      ? (0, r.jsx)('div', {
                                            className: l()(x.guildIcon, x.guildIconWithoutImage),
                                            children: (0, r.jsx)('div', {
                                                className: x.guildAcronym,
                                                children: null != v ? (0, g.gM)(v) : null
                                            })
                                        })
                                      : (0, r.jsx)('img', {
                                            alt: null == v ? void 0 : v.name,
                                            src: O,
                                            className: x.guildIcon
                                        })
                          }),
                          (0, r.jsx)(c.Text, {
                              className: x.chatHeaderBarText,
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: C.intl.format(C.t.f2tNxM, {
                                  username: null == t ? void 0 : t.globalName,
                                  channelName: (0, r.jsx)(
                                      c.Text,
                                      {
                                          variant: 'text-md/semibold',
                                          color: 'header-primary',
                                          children: i
                                      },
                                      n.id
                                  )
                              })
                          })
                      ]
                  }),
                  (0, r.jsx)(j, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: m
                  })
              ]
          });
}
function j(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: i } = e,
        l = i ? C.intl.string(C.t.ygslb2) : C.intl.string(C.t['3Hv9qa']),
        o = i
            ? () => u.Z.stopRinging(t, [n])
            : () => {
                  (u.Z.ring(t, [n], 'dm_banner'), (0, m.Kh)(t));
              };
    return (0, r.jsx)(s.z, {
        variant: i ? 'critical-secondary' : 'secondary',
        size: 'sm',
        text: l,
        iconPosition: 'start',
        icon: c.gj8,
        onClick: o
    });
}

n.d(t, { Z: () => x });
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
    g = n(430824),
    b = n(933557),
    _ = n(354459),
    y = n(388032),
    C = n(249671);
function x(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        i = (0, b.ZP)(n),
        s = (0, h.s)(t, 'RingToVoiceBanner', n.id),
        { userIsInCall: u, isUserRinging: m } = (0, a.cj)([p.Z], () => {
            let e = null;
            return (
                s && null != n.id && (e = p.Z.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === _.fO.USER && e.ringing
                }
            );
        }),
        x = (0, a.e7)([g.Z], () => g.Z.getGuild(n.guild_id)),
        j = null != x ? x.getIconURL(32, !0) : null,
        O = !s || (u && !m);
    return ((0, d.Z)(
        {
            type: o.ImpressionTypes.PAGE,
            name: o.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id
            }
        },
        { disableTrack: O },
        [t.id]
    ),
    O)
        ? null
        : (0, r.jsxs)('div', {
              className: l()(C.themed, C.chatHeaderBar),
              children: [
                  (0, r.jsxs)('div', {
                      className: C.chatHeaderBarInfo,
                      children: [
                          (0, r.jsx)(f.ZP, {
                              className: C.mask,
                              mask: f.QS.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == j
                                      ? (0, r.jsx)('div', {
                                            className: l()(C.guildIcon, C.guildIconWithoutImage),
                                            children: (0, r.jsx)('div', {
                                                className: C.guildAcronym,
                                                children: null == x ? void 0 : x.acronym
                                            })
                                        })
                                      : (0, r.jsx)('img', {
                                            alt: null == x ? void 0 : x.toString(),
                                            src: j,
                                            className: C.guildIcon
                                        })
                          }),
                          (0, r.jsx)(c.Text, {
                              className: C.chatHeaderBarText,
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: y.intl.format(y.t.f2tNxM, {
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
                  (0, r.jsx)(v, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: m
                  })
              ]
          });
}
function v(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: i } = e,
        l = i ? y.intl.string(y.t.ygslb2) : y.intl.string(y.t['3Hv9qa']),
        o = i
            ? () => u.Z.stopRinging(t, [n])
            : () => {
                  u.Z.ring(t, [n], 'dm_banner'), (0, m.Kh)(t);
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

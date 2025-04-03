n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(990547),
    a = n(442837),
    s = n(844477),
    c = n(481060),
    u = n(26151),
    d = n(213609),
    p = n(358221),
    h = n(985588),
    f = n(686546),
    m = n(540059),
    g = n(359110),
    b = n(430824),
    _ = n(933557),
    C = n(354459),
    y = n(388032),
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
                    isUserRinging: null != e && e.type === C.fO.USER && e.ringing
                }
            );
        }),
        g = (0, a.e7)([b.Z], () => b.Z.getGuild(n.guild_id)),
        v = null != g ? g.getIconURL(32, !0) : null,
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
                                  null == v
                                      ? (0, r.jsx)('div', {
                                            className: l()(x.guildIcon, x.guildIconWithoutImage),
                                            children: (0, r.jsx)('div', {
                                                className: x.guildAcronym,
                                                children: null == g ? void 0 : g.acronym
                                            })
                                        })
                                      : (0, r.jsx)('img', {
                                            alt: null == g ? void 0 : g.toString(),
                                            src: v,
                                            className: x.guildIcon
                                        })
                          }),
                          (0, r.jsx)(c.Text, {
                              className: x.chatHeaderBarText,
                              variant: 'text-md/medium',
                              color: 'header-secondary',
                              children: y.NW.format(y.t.f2tNxM, {
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
        o = (0, m.Q3)('RingUserButton'),
        a = i ? y.NW.string(y.t.ygslb2) : y.NW.string(y.t['3Hv9qa']),
        d = i
            ? () => u.Z.stopRinging(t, [n])
            : () => {
                  u.Z.ring(t, [n]), (0, g.Kh)(t);
              };
    return o
        ? (0, r.jsx)(s.z, {
              variant: i ? 'destructive-secondary' : 'secondary',
              size: 'xs',
              text: a,
              iconPosition: 'start',
              icon: c.gj8,
              onClick: d
          })
        : (0, r.jsxs)(c.zxk, {
              size: c.zxk.Sizes.SMALL,
              className: x.chatHeaderBarButton,
              innerClassName: x.chatHeaderBarButtonInner,
              color: 'custom',
              onClick: d,
              children: [
                  (0, r.jsx)(c.gj8, {
                      size: 'xs',
                      color: 'currentColor',
                      className: l()(i ? x.voiceIconRinging : x.voiceIcon)
                  }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-sm/semibold',
                      color: i ? 'text-danger' : 'text-primary',
                      children: a
                  })
              ]
          });
}

n.d(t, { A: () => v });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(110259),
    s = n(311907),
    o = n(732955),
    c = n(397927),
    u = n(387755),
    d = n(139286),
    f = n(313961),
    p = n(325909),
    h = n(573435),
    b = n(378570),
    g = n(260509),
    m = n(71393),
    A = n(47167),
    y = n(806931),
    O = n(985018),
    j = n(287278);
function v(e) {
    let { recipientUser: t, voiceChannel: n } = e,
        l = (0, A.Ay)(n),
        o = (0, p.o)(t, "RingToVoiceBanner", n.id),
        { userIsInCall: u, isUserRinging: b } = (0, s.cf)([f.A], () => {
            let e = null;
            return (
                o && null != n.id && (e = f.A.getParticipant(n.id, t.id)),
                {
                    userIsInCall: null != e,
                    isUserRinging: null != e && e.type === y.lp.USER && e.ringing,
                }
            );
        }),
        v = (0, s.bG)([m.A], () => m.A.getGuild(n.guild_id)),
        E = null != v ? (0, g.Iv)(v, 32, !0) : null,
        _ = !o || (u && !b);
    return ((0, d.A)(
        {
            type: a.ImpressionTypes.PAGE,
            name: a.ImpressionNames.RING_TO_GUILD_VC_BANNER_SHOWN,
            properties: {
                voice_channel_id: null == n ? void 0 : n.id,
                voice_guild_id: null == n ? void 0 : n.guild_id,
            },
        },
        { disableTrack: _ },
        [t.id],
    ),
    _)
        ? null
        : (0, r.jsxs)("div", {
              className: i()(j.Sp, j.JD),
              children: [
                  (0, r.jsxs)("div", {
                      className: j.hP,
                      children: [
                          (0, r.jsx)(h.Ay, {
                              className: j.dK,
                              mask: h.hW.SQUIRCLE,
                              width: 24,
                              height: 24,
                              children:
                                  null == E
                                      ? (0, r.jsx)("div", {
                                            className: i()(j.$f, j.Gc),
                                            children: (0, r.jsx)("div", {
                                                className: j.Hj,
                                                children: null != v ? (0, g.Rb)(v) : null,
                                            }),
                                        })
                                      : (0, r.jsx)("img", {
                                            alt: null == v ? void 0 : v.name,
                                            src: E,
                                            className: j.$f,
                                        }),
                          }),
                          (0, r.jsx)(c.Text, {
                              className: j.E5,
                              variant: "text-md/medium",
                              color: "text-default",
                              children: O.intl.format(O.t.f2tNxH, {
                                  username: null == t ? void 0 : t.globalName,
                                  channelName: (0, r.jsx)(
                                      c.Text,
                                      {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: l,
                                      },
                                      n.id,
                                  ),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(x, {
                      channelId: n.id,
                      recipientUserId: t.id,
                      isUserRinging: b,
                  }),
              ],
          });
}
function x(e) {
    let { channelId: t, recipientUserId: n, isUserRinging: l } = e,
        i = l ? O.intl.string(O.t.ygslb0) : O.intl.string(O.t["3Hv9qQ"]),
        a = l
            ? () => u.A.stopRinging(t, [n])
            : () => {
                  u.A.ring(t, [n], "dm_banner"), (0, b.iN)(t);
              };
    return (0, r.jsx)(o.$nd, {
        variant: l ? "critical-secondary" : "secondary",
        size: "sm",
        text: i,
        iconPosition: "start",
        icon: c.HKD,
        onClick: a,
    });
}

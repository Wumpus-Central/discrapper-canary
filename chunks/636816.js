n.d(t, { Z: () => p }), n(653041);
var s = n(200651),
    r = n(192379),
    i = n(580685),
    l = n(481060),
    a = n(314852),
    o = n(65361),
    d = n(600553),
    c = n(63063),
    h = n(981631),
    u = n(388032);
function p(e) {
    let { guildId: t, channelType: n, className: p } = e,
        { guildProfile: N, fetchGuildProfile: m, fetchStatus: g } = (0, o.u)(t),
        C = (0, d.Dj)({
            guildId: t,
            location: 'channel_create',
            autoTrackExposure: !0
        }),
        x = g === a.a.FETCHED && C && (null == N ? void 0 : N.visibility) !== i.k.PUBLIC;
    r.useEffect(() => {
        m();
    }, [t, m]);
    let I = [];
    return (n === h.d4z.GUILD_ANNOUNCEMENT && (I.push(u.NW.format(u.t.tI7KNT, { documentationLink: c.Z.getArticleURL(h.BhN.ANNOUNCEMENT_CHANNELS) })), x && I.push(u.NW.string(u.t['2Ab4IS']))), 0 === I.length)
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: I.map((e, t) =>
                  (0, s.jsx)(
                      l.R94,
                      {
                          className: p,
                          type: l.R94.Types.DESCRIPTION,
                          children: e
                      },
                      'description-'.concat(t)
                  )
              )
          });
}

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
        x = g !== a.a.FETCHED,
        I = null != N && i.Y.VISIBLE.has(N.visibility);
    r.useEffect(() => {
        m();
    }, [t, m]);
    let E = [];
    if (n === h.d4z.GUILD_ANNOUNCEMENT && (E.push(u.NW.format(u.t.tI7KNT, { documentationLink: c.Z.getArticleURL(h.BhN.ANNOUNCEMENT_CHANNELS) })), !x && !I)) {
        let e = C ? u.NW.string(u.t['2Ab4IS']) : u.NW.string(u.t['/8VkyM']);
        E.push(e);
    }
    return 0 === E.length
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: E.map((e, t) =>
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

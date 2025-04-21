n.d(t, { Z: () => p }), n(539854);
var s = n(200651),
    i = n(192379),
    l = n(580685),
    r = n(481060),
    a = n(314852),
    o = n(65361),
    d = n(600553),
    c = n(63063),
    h = n(981631),
    u = n(388032);
function p(e) {
    let { guildId: t, channelType: n, className: p } = e,
        { guildProfile: m, fetchGuildProfile: g, fetchStatus: C } = (0, o.u)(t),
        N = (0, d.Dj)({
            guildId: t,
            location: 'channel_create',
            autoTrackExposure: !0
        }),
        x = C !== a.a.FETCHED,
        I = null != m && l.Y.VISIBLE.has(m.visibility);
    i.useEffect(() => {
        g();
    }, [t, g]);
    let E = [];
    if (n === h.d4z.GUILD_ANNOUNCEMENT && (E.push(u.intl.format(u.t.tI7KNT, { documentationLink: c.Z.getArticleURL(h.BhN.ANNOUNCEMENT_CHANNELS) })), !x && !I)) {
        let e = N ? u.intl.string(u.t['2Ab4IS']) : u.intl.string(u.t['/8VkyM']);
        E.push(e);
    }
    return 0 === E.length
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: E.map((e, t) =>
                  (0, s.jsx)(
                      r.R94,
                      {
                          className: p,
                          type: r.R94.Types.DESCRIPTION,
                          children: e
                      },
                      'description-'.concat(t)
                  )
              )
          });
}

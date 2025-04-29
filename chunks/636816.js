n.d(t, { Z: () => u }), n(539854);
var s = n(255367),
    i = n(73800),
    l = n(580685),
    r = n(481060),
    a = n(314852),
    o = n(65361),
    d = n(63063),
    c = n(981631),
    h = n(388032);
function u(e) {
    let { guildId: t, channelType: n, className: u } = e,
        { guildProfile: p, fetchGuildProfile: m, fetchStatus: g } = (0, o.u)(t),
        C = g !== a.a.FETCHED,
        N = null != p && l.Y.VISIBLE.has(p.visibility);
    i.useEffect(() => {
        m();
    }, [t, m]);
    let x = [];
    if (n === c.d4z.GUILD_ANNOUNCEMENT && (x.push(h.intl.format(h.t.tI7KNT, { documentationLink: d.Z.getArticleURL(c.BhN.ANNOUNCEMENT_CHANNELS) })), !C && !N)) {
        let e = h.intl.string(h.t['2Ab4IS']);
        x.push(e);
    }
    return 0 === x.length
        ? null
        : (0, s.jsx)(s.Fragment, {
              children: x.map((e, t) =>
                  (0, s.jsx)(
                      r.R94,
                      {
                          className: u,
                          type: r.R94.Types.DESCRIPTION,
                          children: e
                      },
                      'description-'.concat(t)
                  )
              )
          });
}

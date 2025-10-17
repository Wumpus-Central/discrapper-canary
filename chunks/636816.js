n.d(t, { Z: () => u }), n(539854);
var r = n(951288),
    i = n(647438),
    s = n(580685),
    l = n(481060),
    a = n(314852),
    o = n(65361),
    c = n(63063),
    d = n(981631),
    h = n(388032);
function u(e) {
    let { guildId: t, channelType: n, className: u } = e,
        { guildProfile: p, fetchGuildProfile: g, fetchStatus: m } = (0, o.u)(t),
        C = m !== a.a.FETCHED,
        b = null != p && s.Y.VISIBLE.has(p.visibility);
    i.useEffect(() => {
        g();
    }, [t, g]);
    let x = [];
    if (
        n === d.d4z.GUILD_ANNOUNCEMENT &&
        (x.push(h.intl.format(h.t.tI7KNT, { documentationLink: c.Z.getArticleURL(d.BhN.ANNOUNCEMENT_CHANNELS) })),
        !C && !b)
    ) {
        let e = h.intl.string(h.t["2Ab4IS"]);
        x.push(e);
    }
    return 0 === x.length
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: x.map((e, t) =>
                  (0, r.jsx)(
                      l.Text,
                      {
                          className: u,
                          variant: "text-sm/normal",
                          children: e,
                      },
                      "description-".concat(t),
                  ),
              ),
          });
}

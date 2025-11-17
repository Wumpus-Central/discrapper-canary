n.d(t, { Z: () => h }), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(580685),
    s = n(481060),
    a = n(314852),
    o = n(65361),
    c = n(63063),
    u = n(981631),
    d = n(388032);
function h(e) {
    let { guildId: t, channelType: n, className: h } = e,
        { guildProfile: p, fetchGuildProfile: g, fetchStatus: m } = (0, o.u)(t),
        C = m !== a.a.FETCHED,
        f = null != p && l.Y.VISIBLE.has(p.visibility);
    r.useEffect(() => {
        g();
    }, [t, g]);
    let O = [];
    if (
        n === u.d4z.GUILD_ANNOUNCEMENT &&
        (O.push(d.intl.format(d.t.tI7KNX, { documentationLink: c.Z.getArticleURL(u.BhN.ANNOUNCEMENT_CHANNELS) })),
        !C && !f)
    ) {
        let e = d.intl.string(d.t["2Ab4Id"]);
        O.push(e);
    }
    return 0 === O.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: O.map((e, t) =>
                  (0, i.jsx)(
                      s.Text,
                      {
                          className: h,
                          variant: "text-sm/normal",
                          children: e,
                      },
                      "description-".concat(t),
                  ),
              ),
          });
}

n.d(t, { A: () => d }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(280513),
    s = n(397927),
    a = n(837011),
    o = n(90084),
    u = n(975571),
    c = n(652215),
    h = n(985018);
function d(e) {
    let { guildId: t, channelType: n, className: d } = e,
        { guildProfile: p, fetchGuildProfile: g, fetchStatus: b } = (0, o.u)(t),
        m = b !== a.X.FETCHED,
        f = null != p && l.i.VISIBLE.has(p.visibility);
    r.useEffect(() => {
        g();
    }, [t, g]);
    let O = [];
    if (
        n === c.rbe.GUILD_ANNOUNCEMENT &&
        (O.push(h.intl.format(h.t.tI7KNX, { documentationLink: u.A.getArticleURL(c.MVz.ANNOUNCEMENT_CHANNELS) })),
        !m && !f)
    ) {
        let e = h.intl.string(h.t["2Ab4Id"]);
        O.push(e);
    }
    return 0 === O.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: O.map((e, t) =>
                  (0, i.jsx)(
                      s.Text,
                      {
                          className: d,
                          variant: "text-sm/normal",
                          children: e,
                      },
                      "description-".concat(t),
                  ),
              ),
          });
}

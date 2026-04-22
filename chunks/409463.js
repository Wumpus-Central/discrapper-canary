n.d(t, { A: () => c }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(280513),
    r = n(834730),
    a = n(837011),
    o = n(90084),
    d = n(975571),
    h = n(652215),
    u = n(985018);
function c(e) {
    let { guildId: t, channelType: n, className: c } = e,
        { guildProfile: g, fetchGuildProfile: p, fetchStatus: m } = (0, o.u)(t),
        A = m !== a.X.FETCHED,
        E = null != g && s.i.VISIBLE.has(g.visibility);
    l.useEffect(() => {
        p();
    }, [t, p]);
    let C = [];
    if (
        n === h.rbe.GUILD_ANNOUNCEMENT &&
        (C.push(u.intl.format(u.t.tI7KNX, { documentationLink: d.A.getArticleURL(h.MVz.ANNOUNCEMENT_CHANNELS) })),
        !A && !E)
    ) {
        let e = u.intl.string(u.t["2Ab4Id"]);
        C.push(e);
    }
    return 0 === C.length
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: C.map((e, t) =>
                  (0, i.jsx)(r.E, { className: c, variant: "text-sm/normal", children: e }, `description-${t}`),
              ),
          });
}

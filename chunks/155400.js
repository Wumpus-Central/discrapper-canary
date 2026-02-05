n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(435546),
    a = n(466853),
    r = n(742710);
function s(e) {
    let { user: t, widget: n, guildId: s, channelId: o, disableInteraction: d, ...c } = e,
        u = n.games[0];
    return (0, i.jsx)(a.A, {
        userId: t.id,
        widget: n,
        disableInteraction: d,
        ...c,
        children:
            null != u
                ? (0, i.jsx)(r.A, {
                      user: t,
                      widgetType: n.type,
                      game: u,
                      guildId: s,
                      channelId: o,
                      disableInteraction: d,
                  })
                : (0, i.jsx)(l.A, { widget: n }),
    });
}

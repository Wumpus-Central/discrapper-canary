n.d(t, { A: () => s });
var i = n(627968);
n(64700);
var l = n(435546),
    a = n(466853),
    r = n(120791);
function s(e) {
    let { user: t, widget: n, guildId: s, channelId: o, disableInteraction: d, ...c } = e;
    return (0, i.jsx)(a.A, {
        userId: t.id,
        widget: n,
        disableInteraction: d,
        ...c,
        children:
            n.games.length > 0
                ? (0, i.jsx)(r.A, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: s,
                      channelId: o,
                      disableInteraction: d,
                  })
                : (0, i.jsx)(l.A, { widget: n }),
    });
}

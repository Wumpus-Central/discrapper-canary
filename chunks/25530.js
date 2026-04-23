i.d(t, { A: () => r });
var n = i(627968);
i(64700);
var l = i(435546),
    s = i(466853),
    a = i(294868);
function r(e) {
    let { user: t, widget: i, guildId: r, channelId: d, disableInteraction: o, ...c } = e;
    return (0, n.jsx)(s.A, {
        userId: t.id,
        widget: i,
        disableInteraction: o,
        ...c,
        children:
            i.games.length > 0
                ? (0, n.jsx)(a.A, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: r,
                      channelId: d,
                      disableInteraction: o,
                  })
                : (0, n.jsx)(l.A, { widget: i }),
    });
}

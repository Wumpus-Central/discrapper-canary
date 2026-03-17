n.d(t, { A: () => r });
var a = n(627968),
    l = n(942528),
    i = n(409626);
function r(e) {
    let { entry: t, viewId: n, officialGuildId: r, source: s } = e;
    return (0, a.jsx)(l.A, {
        ...e,
        onReaction: () => {
            (0, i.Tn)({
                action: i.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: r,
                source: s,
            });
        },
        onRequestOpen: () => {
            (0, i.Tn)({
                action: i.Ws.ClickMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: r,
                source: s,
            });
        },
    });
}

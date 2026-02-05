i.d(t, { A: () => s });
var l = i(627968),
    a = i(942528),
    n = i(409626);
function s(e) {
    let { entry: t, viewId: i, officialGuildId: s, source: r } = e;
    return (0, l.jsx)(a.A, {
        ...e,
        onReaction: () => {
            (0, n.Tn)({
                action: n.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: i,
                officialGuildId: s,
                source: r,
            });
        },
        onRequestOpen: () => {
            (0, n.Tn)({
                action: n.Ws.ClickMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: i,
                officialGuildId: s,
                source: r,
            });
        },
    });
}

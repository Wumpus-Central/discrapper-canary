n.d(t, { A: () => r });
var l = n(627968),
    a = n(942528),
    i = n(409626);
function r(e) {
    let { entry: t, viewId: n, officialGuildId: r, source: s } = e;
    return (0, l.jsx)(a.A, {
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

"use strict";
n.d(t, { A: () => r });
var i = n(627968),
    l = n(942528),
    a = n(409626);
function r(e) {
    let { entry: t, viewId: n, officialGuildId: r, source: s } = e;
    return (0, i.jsx)(l.A, {
        ...e,
        onReaction: () => {
            (0, a.Tn)({
                action: a.Ws.SendMessageUser,
                applicationId: t.extra.application_id,
                gameName: t.extra.game_name,
                recipientUserId: t.author_id,
                viewId: n,
                officialGuildId: r,
                source: s,
            });
        },
        onRequestOpen: () => {
            (0, a.Tn)({
                action: a.Ws.ClickMessageUser,
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

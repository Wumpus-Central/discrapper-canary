"use strict";
n.d(t, { O: () => s });
var r = n(734066),
    i = n(64683);
function s() {
    return [
        {
            type: "voiceChannel",
            name: "ml-audio-classification",
            isEnabled: r.J,
            importHandler: () => n.e("77639").then(n.bind(n, 686586)),
        },
        {
            type: "voiceChannel",
            name: "distributed-clipping",
            isEnabled: r.J,
            importHandler: () => n.e("70726").then(n.bind(n, 949285)),
        },
        {
            type: "application",
            name: "steam-timeline",
            isEnabled: r.J,
            importHandler: () => n.e("61206").then(n.bind(n, 447765)),
        },
        {
            type: "application",
            name: "league-of-legends",
            applicationId: i.m,
            isEnabled: r.J,
            importHandler: () => n.e("64062").then(n.bind(n, 905837)),
        },
    ];
}

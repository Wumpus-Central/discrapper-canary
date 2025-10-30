n.d(t, { C: () => a });
var r = n(924557),
    i = n(597796);
function a() {
    return [
        {
            type: "voiceChannel",
            name: "ml-audio-classification",
            isEnabled: r.NS,
            importHandler: () => n.e("87955").then(n.bind(n, 230304)),
        },
        {
            type: "voiceChannel",
            name: "distributed-clipping",
            isEnabled: r.NS,
            importHandler: () => n.e("7279").then(n.bind(n, 549379)),
        },
        {
            type: "application",
            name: "steam-timeline",
            isEnabled: r.NS,
            importHandler: () => n.e("49947").then(n.bind(n, 656791)),
        },
        {
            type: "application",
            name: "league-of-legends",
            applicationId: i.D,
            isEnabled: r.NS,
            importHandler: () => n.e("92521").then(n.bind(n, 33806)),
        },
    ];
}

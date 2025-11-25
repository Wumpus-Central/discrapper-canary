n.d(t, { C: () => a });
var r = n(924557),
    i = n(597796);
function a() {
    return [
        {
            type: "voiceChannel",
            name: "ml-audio-classification",
            isEnabled: r.NS,
            importHandler: () => n.e("18683").then(n.bind(n, 372878)),
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
            importHandler: () => n.e("93234").then(n.bind(n, 654155)),
        },
    ];
}

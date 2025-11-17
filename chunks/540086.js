n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(876215),
    l = n(67320),
    a = n(742171),
    s = n(823873),
    o = n(707874);
function c(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, r.jsx)(s.Z, { eventId: t.data.eventId });
        case "message":
        case "channelSummary":
        case "generatedCandidate":
        case "forumThread":
            return (0, r.jsx)(o.Z, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case i.s.CUSTOM_STATUS:
                    return (0, r.jsx)(l.Z, { item: t });
                case i.s.PLAYED_GAME:
                case i.s.TOP_GAME:
                    return (0, r.jsx)(a.Z, { item: t });
                default:
                    return (0, r.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, r.jsx)("div", { children: "Unknown item type" });
    }
}

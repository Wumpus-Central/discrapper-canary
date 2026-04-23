n.d(t, { A: () => o });
var a = n(627968);
n(64700);
var i = n(681154),
    s = n(900062),
    l = n(470881),
    r = n(497302),
    d = n(670861);
function o(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, a.jsx)(r.A, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, a.jsx)(d.A, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case i.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, a.jsx)(s.A, { item: t });
                case i.ContentInventoryEntryType.PLAYED_GAME:
                case i.ContentInventoryEntryType.TOP_GAME:
                    return (0, a.jsx)(l.A, { item: t });
                default:
                    return (0, a.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, a.jsx)("div", { children: "Unknown item type" });
    }
}

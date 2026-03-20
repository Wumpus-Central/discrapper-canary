n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var a = n(681154),
    l = n(677681),
    r = n(470881),
    s = n(497302),
    o = n(670861);
function d(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, i.jsx)(s.A, { eventId: t.data.eventId });
        case "message":
        case "forumThread":
            return (0, i.jsx)(o.A, { item: t });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case a.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, i.jsx)(l.A, { item: t });
                case a.ContentInventoryEntryType.PLAYED_GAME:
                case a.ContentInventoryEntryType.TOP_GAME:
                    return (0, i.jsx)(r.A, { item: t });
                default:
                    return (0, i.jsx)("div", { children: "Unsupported content inventory type" });
            }
        default:
            return (0, i.jsx)("div", { children: "Unknown item type" });
    }
}

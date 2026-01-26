n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(681154),
    l = n(900062),
    a = n(470881),
    s = n(497302),
    o = n(670861);

function c(e) {
    let { item: t } = e;
    switch (t.data.kind) {
        case "guildEvent":
            return (0, r.jsx)(s.A, {
                eventId: t.data.eventId,
            });
        case "message":
        case "generatedCandidate":
        case "forumThread":
            return (0, r.jsx)(o.A, {
                item: t,
            });
        case "contentInventory":
            switch (t.data.content.content_type) {
                case i.ContentInventoryEntryType.CUSTOM_STATUS:
                    return (0, r.jsx)(l.A, {
                        item: t,
                    });
                case i.ContentInventoryEntryType.PLAYED_GAME:
                case i.ContentInventoryEntryType.TOP_GAME:
                    return (0, r.jsx)(a.A, {
                        item: t,
                    });
                default:
                    return (0, r.jsx)("div", {
                        children: "Unsupported content inventory type",
                    });
            }
        default:
            return (0, r.jsx)("div", {
                children: "Unknown item type",
            });
    }
}

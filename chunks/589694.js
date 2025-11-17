n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(924301),
    s = n(703656),
    o = n(359110),
    c = n(892001),
    u = n(540086),
    d = n(860160),
    p = n(981631),
    f = n(715632);
function h(e) {
    let { item: t } = e,
        n = i.useCallback(
            (e) => {
                if (
                    null ==
                    e.target.closest(
                        'img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]',
                    )
                )
                    switch (t.data.kind) {
                        case "message":
                            (0, o.jd)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "channelSummary":
                            (0, o.jd)(t.data.topic.channelId, t.data.topic.startId);
                            break;
                        case "guildEvent": {
                            let e = a.ZP.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, s.uL)(p.Z5c.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, o.jd)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "generatedCandidate":
                            (0, o.jd)(t.data.item.channel_id, t.data.item.message_ids[0]);
                            break;
                        case "contentInventory":
                            (0, c.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, r.jsxs)(l.P3F, {
        className: f.container,
        onClick: n,
        children: [
            (0, r.jsx)(d.Z, { item: t }),
            (0, r.jsx)("div", {
                className: f.messageContentContainer,
                children: (0, r.jsx)(u.Z, { item: t }),
            }),
        ],
    });
}

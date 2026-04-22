n.d(t, { A: () => g });
var a = n(627968),
    i = n(64700),
    s = n(939249),
    l = n(698441),
    r = n(976860),
    d = n(378570),
    o = n(657331),
    c = n(665583),
    u = n(244625),
    m = n(652215),
    h = n(709393);
function g(e) {
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
                            (0, d.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = l.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, r.pX)(m.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, d.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, o.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, a.jsxs)(s.D, {
        className: h.k,
        onClick: n,
        children: [
            (0, a.jsx)(u.A, { item: t }),
            (0, a.jsx)("div", { className: h.o, children: (0, a.jsx)(c.A, { item: t }) }),
        ],
    });
}

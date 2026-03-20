n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(698441),
    s = n(976860),
    o = n(378570),
    d = n(657331),
    c = n(665583),
    u = n(244625),
    A = n(652215),
    h = n(429694);
function _(e) {
    let { item: t } = e,
        n = a.useCallback(
            (e) => {
                if (
                    null ==
                    e.target.closest(
                        'img, video, audio, [class*="imageWrapper"], [class*="embedWrapper"], [class*="attachment"], [class*="mediaPlayer"]',
                    )
                )
                    switch (t.data.kind) {
                        case "message":
                            (0, o.ci)(t.data.message.channel_id, t.data.message.id);
                            break;
                        case "guildEvent": {
                            let e = r.Ay.getGuildScheduledEvent(t.data.eventId);
                            null != e && (0, s.pX)(A.BVt.GUILD_EVENT_DETAILS(e.guild_id, e.id));
                            break;
                        }
                        case "forumThread":
                            (0, o.ci)(t.data.threadChannel.id, t.data.message.id);
                            break;
                        case "contentInventory":
                            (0, d.openUserProfileModal)({ userId: t.data.content.author_id });
                    }
            },
            [t],
        );
    return (0, i.jsxs)(l.DUT, {
        className: h.k,
        onClick: n,
        children: [
            (0, i.jsx)(u.A, { item: t }),
            (0, i.jsx)("div", { className: h.o, children: (0, i.jsx)(c.A, { item: t }) }),
        ],
    });
}

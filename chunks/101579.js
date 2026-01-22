n.d(t, { y: () => o });
var l = n(335871),
    r = n(73153),
    a = n(594061),
    i = n(954571),
    s = n(652215);
async function o(e, t) {
    await (0, a.TG)(
        e,
        (e) => ((e.guildRecentsDismissedAt = l.D.fromDate(new Date())), !0),
        a.Sb.INFREQUENT_USER_ACTION,
    ),
        r.h.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: e,
            channelIds: t,
        }),
        i.default.track(s.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

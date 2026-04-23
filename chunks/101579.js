n.d(t, { y: () => u });
var l = n(335871),
    i = n(73153),
    r = n(594061),
    E = n(954571),
    a = n(652215);
async function u(e, t) {
    await (0, r.TG)(
        e,
        (e) => ((e.guildRecentsDismissedAt = l.D.fromDate(new Date())), !0),
        r.Sb.INFREQUENT_USER_ACTION,
    ),
        i.h.dispatch({ type: "BULK_CLEAR_RECENTS", guildId: e, channelIds: t }),
        E.default.track(a.HAw.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

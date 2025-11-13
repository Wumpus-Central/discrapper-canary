n.d(t, { n: () => o });
var r = n(835913),
    i = n(570140),
    l = n(675478),
    a = n(626135),
    s = n(981631);
async function o(e, t) {
    await (0, l.PS)(
        e,
        (e) => ((e.guildRecentsDismissedAt = r.E.fromDate(new Date())), !0),
        l.fy.INFREQUENT_USER_ACTION,
    ),
        i.Z.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: e,
            channelIds: t,
        }),
        a.default.track(s.rMx.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

n.d(t, { n: () => o });
var l = n(835913),
    r = n(570140),
    i = n(675478),
    a = n(626135),
    s = n(981631);
async function o(e, t) {
    await (0, i.PS)(
        e,
        (e) => ((e.guildRecentsDismissedAt = l.E.fromDate(new Date())), !0),
        i.fy.INFREQUENT_USER_ACTION,
    ),
        r.Z.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: e,
            channelIds: t,
        }),
        a.default.track(s.rMx.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

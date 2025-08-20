t.d(e, { n: () => a });
var n = t(835913),
    r = t(570140),
    l = t(675478),
    i = t(626135),
    s = t(981631);
async function a(A, e) {
    await (0, l.PS)(
        A,
        (A) => ((A.guildRecentsDismissedAt = n.E.fromDate(new Date())), !0),
        l.fy.INFREQUENT_USER_ACTION,
    ),
        r.Z.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: A,
            channelIds: e,
        }),
        i.default.track(s.rMx.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

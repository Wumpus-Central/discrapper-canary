e.d(t, { n: () => B });
var r = e(835913),
    g = e(570140),
    v = e(675478),
    n = e(626135),
    f = e(981631);
async function B(A, t) {
    await (0, v.PS)(
        A,
        (A) => ((A.guildRecentsDismissedAt = r.E.fromDate(new Date())), !0),
        v.fy.INFREQUENT_USER_ACTION,
    ),
        g.Z.dispatch({
            type: "BULK_CLEAR_RECENTS",
            guildId: A,
            channelIds: t,
        }),
        n.default.track(f.rMx.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
}

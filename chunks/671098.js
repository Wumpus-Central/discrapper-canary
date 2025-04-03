n.d(t, { n: () => o });
var r = n(835913),
    l = n(570140),
    a = n(675478),
    s = n(626135),
    i = n(981631);
async function o(e, t) {
    await (0, a.PS)(e, (e) => ((e.guildRecentsDismissedAt = r.E.fromDate(new Date())), !0), a.fy.INFREQUENT_USER_ACTION),
        l.Z.dispatch({
            type: 'BULK_CLEAR_RECENTS',
            guildId: e,
            channelIds: t
        }),
        s.default.track(i.rMx.CHANNEL_LIST_UPDATED, { action_type: 'recents_dismissed' });
}

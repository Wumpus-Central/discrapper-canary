n.d(t, { n: () => i });
var r = n(835913),
    l = n(570140),
    s = n(675478),
    a = n(626135),
    o = n(981631);
async function i(e, t) {
    await (0, s.PS)(e, (e) => ((e.guildRecentsDismissedAt = r.E.fromDate(new Date())), !0), s.fy.INFREQUENT_USER_ACTION),
        l.Z.dispatch({
            type: 'BULK_CLEAR_RECENTS',
            guildId: e,
            channelIds: t
        }),
        a.default.track(o.rMx.CHANNEL_LIST_UPDATED, { action_type: 'recents_dismissed' });
}

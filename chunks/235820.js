n.d(t, { Z: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
let o = {
    setGuildFilter(e) {
        let { guildFilter: t, roleFilter: n, everyoneFilter: r } = e;
        i.Z.dispatch({
            type: 'SET_RECENT_MENTIONS_FILTER',
            guildFilter: t,
            roleFilter: n,
            everyoneFilter: r
        });
    },
    clearMentions() {
        i.Z.dispatch({ type: 'CLEAR_MENTIONS' });
    },
    truncateMentions(e) {
        i.Z.dispatch({
            type: 'TRUNCATE_MENTIONS',
            size: e
        });
    },
    fetchRecentMentions(e) {
        let { before: t, limit: n = a.DJj, guildId: o = null, roles: s = !0, everyone: l = !0, feature: c } = e;
        return (
            i.Z.dispatch({
                type: 'LOAD_RECENT_MENTIONS',
                guildId: o
            }),
            r.tn
                .get({
                    url: a.ANM.MENTIONS,
                    query: {
                        before: t,
                        limit: n,
                        guild_id: o,
                        roles: s,
                        everyone: l,
                        feature: c
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (e) => {
                        let { body: n } = e;
                        i.Z.dispatch({
                            type: 'LOAD_RECENT_MENTIONS_SUCCESS',
                            messages: n,
                            isAfter: null != t,
                            hasMoreAfter: n.length >= a.DJj
                        });
                    },
                    () => {
                        i.Z.dispatch({ type: 'LOAD_RECENT_MENTIONS_FAILURE' });
                    }
                )
        );
    },
    deleteRecentMention(e) {
        (r.tn.del({
            url: a.ANM.MENTIONS_MESSAGE_ID(e),
            retries: 2,
            oldFormErrors: !0,
            rejectWithError: !0
        }),
            i.Z.dispatch({
                type: 'RECENT_MENTION_DELETE',
                id: e
            }));
    },
    setRecentMentionsStale() {
        i.Z.dispatch({ type: 'SET_RECENT_MENTIONS_STALE' });
    }
};

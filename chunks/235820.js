n.d(t, { Z: () => r });
var i = n(544891),
    l = n(570140),
    a = n(981631);
let r = {
    setGuildFilter(e) {
        let { guildFilter: t, roleFilter: n, everyoneFilter: i } = e;
        l.Z.dispatch({
            type: 'SET_RECENT_MENTIONS_FILTER',
            guildFilter: t,
            roleFilter: n,
            everyoneFilter: i
        });
    },
    clearMentions() {
        l.Z.dispatch({ type: 'CLEAR_MENTIONS' });
    },
    truncateMentions(e) {
        l.Z.dispatch({
            type: 'TRUNCATE_MENTIONS',
            size: e
        });
    },
    fetchRecentMentions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DJj,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        l.Z.dispatch({
            type: 'LOAD_RECENT_MENTIONS',
            guildId: n
        }),
            i.tn
                .get({
                    url: a.ANM.MENTIONS,
                    query: {
                        before: e,
                        limit: t,
                        guild_id: n,
                        roles: r,
                        everyone: s
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (t) => {
                        let { body: n } = t;
                        l.Z.dispatch({
                            type: 'LOAD_RECENT_MENTIONS_SUCCESS',
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= a.DJj
                        });
                    },
                    () => {
                        l.Z.dispatch({ type: 'LOAD_RECENT_MENTIONS_FAILURE' });
                    }
                );
    },
    deleteRecentMention(e) {
        i.tn.del({
            url: a.ANM.MENTIONS_MESSAGE_ID(e),
            retries: 2,
            oldFormErrors: !0,
            rejectWithError: !0
        }),
            l.Z.dispatch({
                type: 'RECENT_MENTION_DELETE',
                id: e
            });
    },
    setRecentMentionsStale() {
        l.Z.dispatch({ type: 'SET_RECENT_MENTIONS_STALE' });
    }
};

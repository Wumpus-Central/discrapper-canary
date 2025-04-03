n.d(t, { Z: () => l });
var r = n(544891),
    i = n(570140),
    a = n(981631);
let l = {
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.DJj,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
        i.Z.dispatch({
            type: 'LOAD_RECENT_MENTIONS',
            guildId: n
        }),
            r.tn
                .get({
                    url: a.ANM.MENTIONS,
                    query: {
                        before: e,
                        limit: t,
                        guild_id: n,
                        roles: l,
                        everyone: o
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then(
                    (t) => {
                        let { body: n } = t;
                        i.Z.dispatch({
                            type: 'LOAD_RECENT_MENTIONS_SUCCESS',
                            messages: n,
                            isAfter: null != e,
                            hasMoreAfter: n.length >= a.DJj
                        });
                    },
                    () => {
                        i.Z.dispatch({ type: 'LOAD_RECENT_MENTIONS_FAILURE' });
                    }
                );
    },
    deleteRecentMention(e) {
        r.tn.del({
            url: a.ANM.MENTIONS_MESSAGE_ID(e),
            retries: 2,
            oldFormErrors: !0,
            rejectWithError: !0
        }),
            i.Z.dispatch({
                type: 'RECENT_MENTION_DELETE',
                id: e
            });
    },
    setRecentMentionsStale() {
        i.Z.dispatch({ type: 'SET_RECENT_MENTIONS_STALE' });
    }
};

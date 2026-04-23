"use strict";
n.d(t, { A: () => a });
var r = n(562465),
    i = n(73153),
    s = n(652215);
let a = {
    setGuildFilter(e) {
        let { guildFilter: t, roleFilter: n, everyoneFilter: r } = e;
        i.h.dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter: t, roleFilter: n, everyoneFilter: r });
    },
    clearMentions() {
        i.h.dispatch({ type: "CLEAR_MENTIONS" });
    },
    truncateMentions(e) {
        i.h.dispatch({ type: "TRUNCATE_MENTIONS", size: e });
    },
    fetchRecentMentions(e) {
        let { before: t, limit: n = s.Ue3, guildId: a = null, roles: o = !0, everyone: l = !0, feature: u } = e;
        return (
            i.h.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId: a }),
            r.Bo.get({
                url: s.Rsh.MENTIONS,
                query: { before: t, limit: n, guild_id: a, roles: o, everyone: l, feature: u },
                retries: 2,
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) => {
                    let { body: n } = e;
                    i.h.dispatch({
                        type: "LOAD_RECENT_MENTIONS_SUCCESS",
                        messages: n,
                        isAfter: null != t,
                        hasMoreAfter: n.length >= s.Ue3,
                    });
                },
                () => {
                    i.h.dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
                },
            )
        );
    },
    deleteRecentMention(e) {
        r.Bo.del({ url: s.Rsh.MENTIONS_MESSAGE_ID(e), retries: 2, oldFormErrors: !0, rejectWithError: !0 }),
            i.h.dispatch({ type: "RECENT_MENTION_DELETE", id: e });
    },
    setRecentMentionsStale() {
        i.h.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
    },
};

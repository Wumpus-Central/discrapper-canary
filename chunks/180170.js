"use strict";
n.d(t, { fq: () => d, He: () => u, Il: () => c });
var l = n(228366);
n(793574), n(734057);
var i = n(309010),
    s = n(967198);
n(287809);
var a = n(954571),
    r = n(435738),
    o = n(652215);
let c = () => {
    l.h.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
        a.default.track(o.HAw.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: i.A.getChannelId(),
            guild_id: s.A.getGuildId(),
            hidden: r.A.hidden,
        });
};
function u() {
    l.h.dispatch({ type: "GAME_PROFILE_OPEN" });
}
function d() {
    l.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}

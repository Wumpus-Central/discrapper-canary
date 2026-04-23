"use strict";
n.d(t, { fq: () => u, He: () => _, Il: () => d });
var i = n(228366);
n(793574), n(734057);
var r = n(309010),
    s = n(967198);
n(287809);
var a = n(954571),
    o = n(435738),
    l = n(652215);
let d = () => {
    i.h.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
        a.default.track(l.HAw.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.A.getChannelId(),
            guild_id: s.A.getGuildId(),
            hidden: o.A.hidden,
        });
};
function _() {
    i.h.dispatch({ type: "GAME_PROFILE_OPEN" });
}
function u() {
    i.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}

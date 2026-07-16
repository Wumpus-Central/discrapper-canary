"use strict";
n.d(t, { fq: () => u, He: () => c, Il: () => d });
var i = n(228366);
n(793574), n(734057);
var r = n(309010),
    a = n(967198);
n(287809);
var s = n(174459),
    l = n(435738),
    o = n(652215);
function d() {
    i.h.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
        s.default.track(o.HAw.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.Ay.getChannelId(),
            guild_id: a.A.getGuildId(),
            hidden: l.A.hidden,
        });
}
function c() {
    i.h.dispatch({ type: "GAME_PROFILE_OPEN" });
}
function u() {
    i.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}

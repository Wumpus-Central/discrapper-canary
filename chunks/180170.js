"use strict";
n.d(t, { fq: () => d, He: () => c, Il: () => u });
var i = n(228366);
n(793574), n(734057);
var r = n(309010),
    s = n(967198);
n(287809);
var a = n(174459),
    o = n(435738),
    l = n(652215);
let u = () => {
    i.h.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" }),
        a.default.track(l.HAw.MEMBERLIST_CONTENT_FEED_HIDDEN, {
            channel_id: r.A.getChannelId(),
            guild_id: s.A.getGuildId(),
            hidden: o.A.hidden,
        });
};
function c() {
    i.h.dispatch({ type: "GAME_PROFILE_OPEN" });
}
function d() {
    i.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}

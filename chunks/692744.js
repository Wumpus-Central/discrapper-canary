"use strict";
n.d(t, { el: () => u, xf: () => l });
var r = n(572808),
    i = n(588703),
    a = n(985018);
function s(e) {
    return { userId: e.user_id, position: e.position, avatar: e.avatar };
}
function o(e) {
    return { id: e.id, claimedBy: e.claimed_by };
}
function l(e) {
    return { roomId: e.room_id, participants: e.participants.map(s), seats: e.seats.map(o) };
}
function u(e) {
    switch (e) {
        case r.wS.RADIO:
            return a.intl.string(i.default.AjiGKB);
        case r.wS.ENVIRONMENT:
            return a.intl.string(i.default.YEYIbI);
        case r.wS.CAMPFIRE:
            return a.intl.string(i.default["Vk9+Ez"]);
        default:
            return "";
    }
}

"use strict";
n.d(t, { el: () => u, xf: () => l });
var r = n(572808),
    i = n(368662),
    s = n(985018);
function a(e) {
    return { userId: e.user_id, position: e.position, avatar: e.avatar };
}
function o(e) {
    return { id: e.id, claimedBy: e.claimed_by };
}
function l(e) {
    return { roomId: e.room_id, participants: e.participants.map(a), seats: e.seats.map(o) };
}
function u(e) {
    switch (e) {
        case r.wS.RADIO:
            return s.intl.string(i.default.AjiGKB);
        case r.wS.ENVIRONMENT:
            return s.intl.string(i.default.YEYIbI);
        case r.wS.CAMPFIRE:
            return s.intl.string(i.default["Vk9+Ez"]);
        default:
            return "";
    }
}

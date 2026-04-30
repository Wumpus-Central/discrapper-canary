"use strict";
n.d(t, { el: () => u, xf: () => l });
var i = n(572808),
    r = n(368662),
    s = n(375708);
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
        case i.wS.RADIO:
            return s.intl.string(r.default.AjiGKB);
        case i.wS.ENVIRONMENT:
            return s.intl.string(r.default.YEYIbI);
        case i.wS.CAMPFIRE:
            return s.intl.string(r.default["Vk9+Ez"]);
        default:
            return "";
    }
}

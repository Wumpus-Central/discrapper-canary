n.d(t, { el: () => d, xf: () => o });
var i = n(572808),
    l = n(368662),
    a = n(985018);
function r(e) {
    return { userId: e.user_id, position: e.position, avatar: e.avatar };
}
function s(e) {
    return { id: e.id, claimedBy: e.claimed_by };
}
function o(e) {
    return { roomId: e.room_id, participants: e.participants.map(r), seats: e.seats.map(s) };
}
function d(e) {
    switch (e) {
        case i.wS.RADIO:
            return a.intl.string(l.default.AjiGKB);
        case i.wS.ENVIRONMENT:
            return a.intl.string(l.default.YEYIbI);
        case i.wS.CAMPFIRE:
            return a.intl.string(l.default["Vk9+Ez"]);
        default:
            return "";
    }
}

n.d(t, { el: () => d, xf: () => o });
var i = n(572808),
    r = n(368662),
    l = n(985018);
function a(e) {
    return { userId: e.user_id, position: e.position, avatar: e.avatar };
}
function s(e) {
    return { id: e.id, claimedBy: e.claimed_by };
}
function o(e) {
    return { roomId: e.room_id, participants: e.participants.map(a), seats: e.seats.map(s) };
}
function d(e) {
    switch (e) {
        case i.wS.RADIO:
            return l.intl.string(r.default.AjiGKB);
        case i.wS.ENVIRONMENT:
            return l.intl.string(r.default.YEYIbI);
        case i.wS.CAMPFIRE:
            return l.intl.string(r.default["Vk9+Ez"]);
        default:
            return "";
    }
}

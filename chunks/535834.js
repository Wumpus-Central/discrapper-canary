n.d(t, {
    CK: () => l,
    Tx: () => c,
});
var r = n(390551),
    i = n(610746),
    a = n(388032);
function o(e) {
    return {
        userId: e.user_id,
        position: e.position,
        avatar: e.avatar,
    };
}
function s(e) {
    return {
        id: e.id,
        claimedBy: e.claimed_by,
    };
}
function l(e) {
    return {
        roomId: e.room_id,
        participants: e.participants.map(o),
        seats: e.seats.map(s),
    };
}
function c(e) {
    switch (e) {
        case r.Yg.RADIO:
            return a.intl.string(i.default.AjiGKB);
        case r.Yg.ENVIRONMENT:
            return a.intl.string(i.default.YEYIbI);
        case r.Yg.CAMPFIRE:
            return a.intl.string(i.default["Vk9+Ez"]);
        default:
            return "";
    }
}

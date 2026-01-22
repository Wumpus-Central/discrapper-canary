n.d(t, { R: () => a });
var r = n(157347),
    i = n(70738);
function a(e, t) {
    let n = (0, r.vn)(e.joinedAt);
    switch (t) {
        case i.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
            return n;
        case i.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
            return -n;
        case i.mF.ORDER_BY_USER_ID_ASC:
            return parseInt(e.userId);
        case i.mF.ORDER_BY_USER_ID_DESC:
            return -parseInt(e.userId);
        default:
            return -n;
    }
}

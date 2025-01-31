n.d(t, { b: () => a });
var i = n(815790),
    r = n(588215);
function a(e, t) {
    let n = (0, i.Dw)(e.joinedAt);
    switch (t) {
        case r.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
            return n;
        case r.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
            return -n;
        case r.d$.ORDER_BY_USER_ID_ASC:
            return parseInt(e.userId);
        case r.d$.ORDER_BY_USER_ID_DESC:
            return -parseInt(e.userId);
        default:
            return -n;
    }
}

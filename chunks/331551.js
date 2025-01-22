r.d(n, {
    b: function () {
        return o;
    }
});
var i = r(815790),
    a = r(588215);
function o(e, n) {
    let r = (0, i.Dw)(e.joinedAt);
    switch (n) {
        case a.d$.ORDER_BY_GUILD_JOINED_AT_ASC:
            return r;
        case a.d$.ORDER_BY_GUILD_JOINED_AT_DESC:
            return -r;
        case a.d$.ORDER_BY_USER_ID_ASC:
            return parseInt(e.userId);
        case a.d$.ORDER_BY_USER_ID_DESC:
            return -parseInt(e.userId);
        default:
            return -r;
    }
}

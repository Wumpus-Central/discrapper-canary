"use strict";
n.d(t, { R: () => s });
var i = n(157347),
    r = n(70738);
function s(e, t) {
    let n = (0, i.vn)(e.joinedAt);
    switch (t) {
        case r.mF.ORDER_BY_GUILD_JOINED_AT_ASC:
            return n;
        case r.mF.ORDER_BY_GUILD_JOINED_AT_DESC:
            return -n;
        case r.mF.ORDER_BY_USER_ID_ASC:
            return parseInt(e.userId);
        case r.mF.ORDER_BY_USER_ID_DESC:
            return -parseInt(e.userId);
        default:
            return -n;
    }
}

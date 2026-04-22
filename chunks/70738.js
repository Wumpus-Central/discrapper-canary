"use strict";
n.d(t, { mF: () => a, tX: () => r, vf: () => i });
let r = 2 * n(927813).A.Millis.DAY;
function i(e) {
    let { joinedAt: t, userId: n } = e;
    return null == t ? null : { guild_joined_at: new Date(t).getTime(), user_id: n };
}
var s,
    a =
        (((s = {})[(s.ORDER_BY_UNSPECIFIED = 0)] = "ORDER_BY_UNSPECIFIED"),
        (s[(s.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = "ORDER_BY_GUILD_JOINED_AT_DESC"),
        (s[(s.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = "ORDER_BY_GUILD_JOINED_AT_ASC"),
        (s[(s.ORDER_BY_USER_ID_DESC = 3)] = "ORDER_BY_USER_ID_DESC"),
        (s[(s.ORDER_BY_USER_ID_ASC = 4)] = "ORDER_BY_USER_ID_ASC"),
        s);

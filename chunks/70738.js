n.d(t, { mF: () => s, tX: () => i, vf: () => r });
let i = 2 * n(927813).A.Millis.DAY;
function r(e) {
    let { joinedAt: t, userId: n } = e;
    return null == t ? null : { guild_joined_at: new Date(t).getTime(), user_id: n };
}
var a,
    s =
        (((a = {})[(a.ORDER_BY_UNSPECIFIED = 0)] = "ORDER_BY_UNSPECIFIED"),
        (a[(a.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = "ORDER_BY_GUILD_JOINED_AT_DESC"),
        (a[(a.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = "ORDER_BY_GUILD_JOINED_AT_ASC"),
        (a[(a.ORDER_BY_USER_ID_DESC = 3)] = "ORDER_BY_USER_ID_DESC"),
        (a[(a.ORDER_BY_USER_ID_ASC = 4)] = "ORDER_BY_USER_ID_ASC"),
        a);

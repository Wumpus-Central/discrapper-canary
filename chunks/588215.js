n.d(t, {
    d$: () => o,
    rL: () => r,
    si: () => i
});
let r = 2 * n(70956).Z.Millis.DAY;
function i(e) {
    let { joinedAt: t, userId: n } = e;
    return null == t
        ? null
        : {
              guild_joined_at: new Date(t).getTime(),
              user_id: n
          };
}
var o = (function (e) {
    return (e[(e.ORDER_BY_UNSPECIFIED = 0)] = 'ORDER_BY_UNSPECIFIED'), (e[(e.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = 'ORDER_BY_GUILD_JOINED_AT_DESC'), (e[(e.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = 'ORDER_BY_GUILD_JOINED_AT_ASC'), (e[(e.ORDER_BY_USER_ID_DESC = 3)] = 'ORDER_BY_USER_ID_DESC'), (e[(e.ORDER_BY_USER_ID_ASC = 4)] = 'ORDER_BY_USER_ID_ASC'), e;
})({});

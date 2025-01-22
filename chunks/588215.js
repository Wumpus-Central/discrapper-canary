var i;
r.d(n, {
    d$: function () {
        return i;
    },
    rL: function () {
        return a;
    },
    si: function () {
        return o;
    }
});
let a = 2 * r(70956).Z.Millis.DAY;
function o(e) {
    let { joinedAt: n, userId: r } = e;
    return null == n
        ? null
        : {
              guild_joined_at: new Date(n).getTime(),
              user_id: r
          };
}
!(function (e) {
    (e[(e.ORDER_BY_UNSPECIFIED = 0)] = 'ORDER_BY_UNSPECIFIED'), (e[(e.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = 'ORDER_BY_GUILD_JOINED_AT_DESC'), (e[(e.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = 'ORDER_BY_GUILD_JOINED_AT_ASC'), (e[(e.ORDER_BY_USER_ID_DESC = 3)] = 'ORDER_BY_USER_ID_DESC'), (e[(e.ORDER_BY_USER_ID_ASC = 4)] = 'ORDER_BY_USER_ID_ASC');
})(i || (i = {}));

r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(149765),
    a = r(430824),
    o = r(981631);
let s = [o.d4z.GUILD_TEXT, o.d4z.GUILD_VOICE, o.d4z.GUILD_ANNOUNCEMENT, o.d4z.GUILD_FORUM, o.d4z.PUBLIC_THREAD, o.d4z.PRIVATE_THREAD],
    l = i.$e(o.Plq.VIEW_CHANNEL, o.Plq.SEND_MESSAGES);
function u(e) {
    if (null == e || !s.includes(e.type)) return [];
    let n = a.Z.getGuild(e.guild_id);
    return null == n
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var r, o;
                  return 0 === e.type && (null === (o = a.Z.getRoles(n.id)[e.id]) || void 0 === o ? void 0 : null === (r = o.tags) || void 0 === r ? void 0 : r.guild_connections) === null && !i.Db(e.deny, l);
              })
              .map((e) => a.Z.getRoles(n.id)[e.id])
              .filter((e) => null != e);
}

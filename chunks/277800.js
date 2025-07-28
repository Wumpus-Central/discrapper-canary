n.d(t, { Z: () => c });
var r = n(149765),
    i = n(485386),
    a = n(430824),
    o = n(981631);
let s = [o.d4z.GUILD_TEXT, o.d4z.GUILD_VOICE, o.d4z.GUILD_ANNOUNCEMENT, o.d4z.GUILD_FORUM, o.d4z.PUBLIC_THREAD, o.d4z.PRIVATE_THREAD],
    l = r.$e(o.Plq.VIEW_CHANNEL, o.Plq.SEND_MESSAGES);
function c(e) {
    if (null == e || !s.includes(e.type)) return [];
    let t = a.Z.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var n, a;
                  return 0 === e.type && (null == (a = i.Z.getRole(t.id, e.id)) || null == (n = a.tags) ? void 0 : n.guild_connections) === null && !r.Db(e.deny, l);
              })
              .map((e) => i.Z.getRole(t.id, e.id))
              .filter((e) => null != e);
}

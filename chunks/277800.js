n.d(t, { Z: () => c });
var r = n(149765),
    i = n(485386),
    o = n(430824),
    a = n(981631);
let s = [a.d4z.GUILD_TEXT, a.d4z.GUILD_VOICE, a.d4z.GUILD_ANNOUNCEMENT, a.d4z.GUILD_FORUM, a.d4z.PUBLIC_THREAD, a.d4z.PRIVATE_THREAD],
    l = r.$e(a.Plq.VIEW_CHANNEL, a.Plq.SEND_MESSAGES);
function c(e) {
    if (null == e || !s.includes(e.type)) return [];
    let t = o.Z.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var n, o;
                  return 0 === e.type && (null == (o = i.Z.getRole(t.id, e.id)) || null == (n = o.tags) ? void 0 : n.guild_connections) === null && !r.Db(e.deny, l);
              })
              .map((e) => i.Z.getRole(t.id, e.id))
              .filter((e) => null != e);
}

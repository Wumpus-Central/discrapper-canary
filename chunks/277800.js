n.d(t, { Z: () => l });
var r = n(149765),
    i = n(430824),
    o = n(981631);
let a = [o.d4z.GUILD_TEXT, o.d4z.GUILD_VOICE, o.d4z.GUILD_ANNOUNCEMENT, o.d4z.GUILD_FORUM, o.d4z.PUBLIC_THREAD, o.d4z.PRIVATE_THREAD],
    s = r.$e(o.Plq.VIEW_CHANNEL, o.Plq.SEND_MESSAGES);
function l(e) {
    if (null == e || !a.includes(e.type)) return [];
    let t = i.Z.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var n, o;
                  return 0 === e.type && (null == (o = i.Z.getRoles(t.id)[e.id]) || null == (n = o.tags) ? void 0 : n.guild_connections) === null && !r.Db(e.deny, s);
              })
              .map((e) => i.Z.getRoles(t.id)[e.id])
              .filter((e) => null != e);
}

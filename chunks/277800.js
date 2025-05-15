n.d(t, { Z: () => l });
var r = n(149765),
    i = n(430824),
    a = n(981631);
let o = [a.d4z.GUILD_TEXT, a.d4z.GUILD_VOICE, a.d4z.GUILD_ANNOUNCEMENT, a.d4z.GUILD_FORUM, a.d4z.PUBLIC_THREAD, a.d4z.PRIVATE_THREAD],
    s = r.$e(a.Plq.VIEW_CHANNEL, a.Plq.SEND_MESSAGES);
function l(e) {
    if (null == e || !o.includes(e.type)) return [];
    let t = i.Z.getGuild(e.guild_id);
    return null == t
        ? []
        : Object.values(e.permissionOverwrites)
              .filter((e) => {
                  var n, a;
                  return 0 === e.type && (null == (a = i.Z.getRoles(t.id)[e.id]) || null == (n = a.tags) ? void 0 : n.guild_connections) === null && !r.Db(e.deny, s);
              })
              .map((e) => i.Z.getRoles(t.id)[e.id])
              .filter((e) => null != e);
}

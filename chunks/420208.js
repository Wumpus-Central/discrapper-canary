n.d(t, { Q: () => f });
var i = n(843472),
    l = n(508675),
    a = n(451909),
    r = n(361670),
    s = n(631576),
    o = n(679382),
    d = n(842086),
    c = n(71393),
    u = n(287809),
    m = n(690521),
    _ = n(661191),
    h = n(652215),
    p = n(307731),
    g = n(381941);
function A(e) {
    let t = c.A.getGuild(e);
    return null != t && (t.nsfwLevel === h.ftr.DEFAULT || t.nsfwLevel === h.ftr.SAFE);
}
async function f(e, t) {
    let n = t.getGuildId();
    if (null == n || null == c.A.getGuild(n)) return;
    let h = u.default.getCurrentUser();
    if (null == h) return;
    await (0, s.YB)();
    let f = Array.from(o.A.getAllGuildStickers().values())
        .flat()
        .filter((e) => A(e.guild_id) && (0, r.G7)(e, h, t))
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (f.length > 5) {
        let n = [f[Math.floor(Math.pow(Math.random(), 2) * f.length)].id];
        i.A.sendStickers(t.id, n, "", {
            messageReference: { guild_id: t.getGuildId() ?? void 0, channel_id: t.id, message_id: e },
            location: g.Hx.CHANNEL_PROMPT,
        });
        return;
    }
    let x = c.A.getGuildIds()
        .filter(A)
        .map((e) => l.Ay.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) => null == m.Ay.getEmojiUnavailableReason({ emoji: e, channel: t, guildId: n, intention: p.b_.CHAT }),
        )
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (x.length > 10) {
        let n = x[Math.floor(Math.pow(Math.random(), 2) * x.length)];
        i.A.sendMessage(t.id, a.Ay.parse(t, (0, m.N)(n)), !1, {
            location: g.Hx.CHANNEL_PROMPT,
            messageReference: { guild_id: t.getGuildId() ?? void 0, channel_id: t.id, message_id: e },
        });
        return;
    }
    let E = Array.from(o.A.getAllPackStickers().values())
            .flat()
            .filter((e) => e.type === d.NL.STANDARD),
        C = [E[Math.floor(Math.random() * E.length)].id];
    i.A.sendStickers(t.id, C, "", {
        messageReference: { guild_id: t.getGuildId() ?? void 0, channel_id: t.id, message_id: e },
        location: g.Hx.CHANNEL_PROMPT,
    });
}

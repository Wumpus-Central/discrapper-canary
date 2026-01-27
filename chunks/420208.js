n.d(t, {
    Q: () => b,
}),
    n(896048),
    n(864466),
    n(443073),
    n(638769);
var r = n(843472),
    i = n(508675),
    l = n(451909),
    a = n(361670),
    s = n(631576),
    o = n(679382),
    c = n(842086),
    u = n(71393),
    d = n(287809),
    p = n(690521),
    m = n(661191),
    f = n(652215),
    g = n(307731),
    h = n(381941);

function _(e) {
    let t = u.A.getGuild(e);
    return null != t && (t.nsfwLevel === f.ftr.DEFAULT || t.nsfwLevel === f.ftr.SAFE);
}
async function b(e, t) {
    var n, f, b;
    let A = t.getGuildId();
    if (null == A || null == u.A.getGuild(A)) return;
    let y = d.default.getCurrentUser();
    if (null == y) return;
    await (0, s.YB)();
    let v = Array.from(o.A.getAllGuildStickers().values())
        .flat()
        .filter((e) => _(e.guild_id) && (0, a.G7)(e, y, t))
        .sort((e, t) => -m.default.compare(e.id, t.id));
    if (v.length > 5) {
        let n = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
        r.A.sendStickers(t.id, n, "", {
            messageReference: {
                guild_id: null != (f = t.getGuildId()) ? f : void 0,
                channel_id: t.id,
                message_id: e,
            },
            location: h.Hx.CHANNEL_PROMPT,
        });
        return;
    }
    let x = u.A.getGuildIds()
        .filter(_)
        .map((e) => i.Ay.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                p.Ay.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: A,
                    intention: g.b_.CHAT,
                }),
        )
        .sort((e, t) => -m.default.compare(e.id, t.id));
    if (x.length > 10) {
        let n = x[Math.floor(Math.pow(Math.random(), 2) * x.length)];
        r.A.sendMessage(t.id, l.Ay.parse(t, (0, p.N)(n)), !1, {
            location: h.Hx.CHANNEL_PROMPT,
            messageReference: {
                guild_id: null != (b = t.getGuildId()) ? b : void 0,
                channel_id: t.id,
                message_id: e,
            },
        });
        return;
    }
    let O = Array.from(o.A.getAllPackStickers().values())
            .flat()
            .filter((e) => e.type === c.NL.STANDARD),
        E = [O[Math.floor(Math.random() * O.length)].id];
    r.A.sendStickers(t.id, E, "", {
        messageReference: {
            guild_id: null != (n = t.getGuildId()) ? n : void 0,
            channel_id: t.id,
            message_id: e,
        },
        location: h.Hx.CHANNEL_PROMPT,
    });
}

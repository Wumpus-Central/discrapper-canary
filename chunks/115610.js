(n.d(t, { O: () => h }), n(642613), n(472816), n(794429));
var r = n(904245),
    i = n(339085),
    l = n(957730),
    a = n(285651),
    o = n(268350),
    s = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    p = n(176354),
    m = n(709054),
    f = n(981631),
    _ = n(185923);
function g(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE);
}
async function h(e, t) {
    var n, f, h;
    let b = t.getGuildId();
    if (null == b || null == u.Z.getGuild(b)) return;
    let E = d.default.getCurrentUser();
    if (null == E) return;
    await (0, o.$p)();
    let C = Array.from(s.Z.getAllStickersIterator()),
        O = C.filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, a.kl)(e, E, t))
            .sort((e, t) => -m.default.compare(e.id, t.id));
    if (O.length > 5) {
        let i = [O[Math.floor(Math.pow(Math.random(), 2) * O.length)].id];
        r.Z.sendStickers(t.id, i, '', {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let y = u.Z.getGuildIds()
        .filter(g)
        .map((e) => i.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                p.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: b,
                    intention: _.Hz.CHAT
                })
        )
        .sort((e, t) => -m.default.compare(e.id, t.id));
    if (y.length > 10) {
        let n = y[Math.floor(Math.pow(Math.random(), 2) * y.length)];
        r.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null != (f = t.getGuildId()) ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let v = C.filter((e) => e.type === c.n0.STANDARD),
        x = [v[Math.floor(Math.random() * v.length)].id];
    r.Z.sendStickers(t.id, x, '', {
        messageReference: {
            guild_id: null != (h = t.getGuildId()) ? h : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

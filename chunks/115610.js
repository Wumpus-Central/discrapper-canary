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
    let y = Array.from(s.Z.getAllStickersIterator()),
        C = y
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, a.kl)(e, E, t))
            .sort((e, t) => -m.default.compare(e.id, t.id));
    if (C.length > 5) {
        let i = [C[Math.floor(Math.pow(Math.random(), 2) * C.length)].id];
        r.Z.sendStickers(t.id, i, '', {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let x = u.Z.getGuildIds()
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
    if (x.length > 10) {
        let n = x[Math.floor(Math.pow(Math.random(), 2) * x.length)];
        r.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null != (f = t.getGuildId()) ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let v = y.filter((e) => e.type === c.n0.STANDARD),
        O = [v[Math.floor(Math.random() * v.length)].id];
    r.Z.sendStickers(t.id, O, '', {
        messageReference: {
            guild_id: null != (h = t.getGuildId()) ? h : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

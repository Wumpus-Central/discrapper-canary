n.d(t, { O: () => f }), n(536091);
var i = n(904245),
    l = n(339085),
    a = n(957730),
    r = n(285651),
    s = n(268350),
    o = n(926491),
    c = n(373228),
    d = n(430824),
    u = n(594174),
    m = n(176354),
    _ = n(709054),
    h = n(981631),
    p = n(185923);
function g(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === h.V_K.DEFAULT || t.nsfwLevel === h.V_K.SAFE);
}
async function f(e, t) {
    var n, h, f;
    let x = t.getGuildId();
    if (null == x || null == d.Z.getGuild(x)) return;
    let C = u.default.getCurrentUser();
    if (null == C) return;
    await (0, s.$p)();
    let E = Array.from(o.Z.getAllStickersIterator()),
        v = E.filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, r.kl)(e, C, t))
            .sort((e, t) => -_.default.compare(e.id, t.id));
    if (v.length > 5) {
        let l = [v[Math.floor(Math.pow(Math.random(), 2) * v.length)].id];
        i.Z.sendStickers(t.id, l, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let I = d.Z.getGuildIds()
        .filter(g)
        .map((e) => l.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                m.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: x,
                    intention: p.Hz.CHAT
                })
        )
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (I.length > 10) {
        let n = I[Math.floor(Math.pow(Math.random(), 2) * I.length)];
        i.Z.sendMessage(t.id, a.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (h = t.getGuildId()) && void 0 !== h ? h : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let N = E.filter((e) => e.type === c.n0.STANDARD),
        S = [N[Math.floor(Math.random() * N.length)].id];
    i.Z.sendStickers(t.id, S, '', {
        messageReference: {
            guild_id: null !== (f = t.getGuildId()) && void 0 !== f ? f : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

n.d(t, { O: () => f }), n(536091);
var i = n(904245),
    a = n(339085),
    r = n(957730),
    l = n(285651),
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
    let N = u.default.getCurrentUser();
    if (null == N) return;
    await (0, s.$p)();
    let v = Array.from(o.Z.getAllStickersIterator()),
        C = v
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, l.kl)(e, N, t))
            .sort((e, t) => -_.default.compare(e.id, t.id));
    if (C.length > 5) {
        let a = [C[Math.floor(Math.pow(Math.random(), 2) * C.length)].id];
        i.Z.sendStickers(t.id, a, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let E = d.Z.getGuildIds()
        .filter(g)
        .map((e) => a.ZP.getUsableGuildEmoji(e))
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
    if (E.length > 10) {
        let n = E[Math.floor(Math.pow(Math.random(), 2) * E.length)];
        i.Z.sendMessage(t.id, r.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (h = t.getGuildId()) && void 0 !== h ? h : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let I = v.filter((e) => e.type === c.n0.STANDARD),
        S = [I[Math.floor(Math.random() * I.length)].id];
    i.Z.sendStickers(t.id, S, '', {
        messageReference: {
            guild_id: null !== (f = t.getGuildId()) && void 0 !== f ? f : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

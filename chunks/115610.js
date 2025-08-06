n.d(t, { O: () => b }), n(642613), n(472816), n(794429);
var r = n(904245),
    i = n(339085),
    o = n(957730),
    a = n(285651),
    s = n(268350),
    l = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    f = n(176354),
    _ = n(709054),
    p = n(981631),
    h = n(185923);
let m = 5,
    g = 10;
function E(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === p.V_K.DEFAULT || t.nsfwLevel === p.V_K.SAFE);
}
async function b(e, t) {
    var n, p, b;
    let y = t.getGuildId();
    if (null == y || null == u.Z.getGuild(y)) return;
    let O = d.default.getCurrentUser();
    if (null == O) return;
    await (0, s.$p)();
    let v = Array.from(l.Z.getAllStickersIterator()),
        I = v
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => E(e.guild_id) && (0, a.kl)(e, O, t))
            .sort((e, t) => -_.default.compare(e.id, t.id));
    if (I.length > m) {
        let i = [I[Math.floor(Math.pow(Math.random(), 2) * I.length)].id];
        r.Z.sendStickers(t.id, i, "", {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e,
            },
        });
        return;
    }
    let T = u.Z.getGuildIds()
        .filter(E)
        .map((e) => i.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                f.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: y,
                    intention: h.Hz.CHAT,
                }),
        )
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (T.length > g) {
        let n = T[Math.floor(Math.pow(Math.random(), 2) * T.length)];
        r.Z.sendMessage(t.id, o.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null != (p = t.getGuildId()) ? p : void 0,
                channel_id: t.id,
                message_id: e,
            },
        });
        return;
    }
    let S = v.filter((e) => e.type === c.n0.STANDARD),
        A = [S[Math.floor(Math.random() * S.length)].id];
    r.Z.sendStickers(t.id, A, "", {
        messageReference: {
            guild_id: null != (b = t.getGuildId()) ? b : void 0,
            channel_id: t.id,
            message_id: e,
        },
    });
}

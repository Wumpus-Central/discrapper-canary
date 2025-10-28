n.d(t, { O: () => y }), n(388685), n(472816), n(794429), n(642613);
var r = n(904245),
    i = n(339085),
    a = n(957730),
    o = n(285651),
    s = n(268350),
    l = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    f = n(176354),
    _ = n(709054),
    p = n(981631),
    h = n(185923),
    m = n(959517);
let g = 5,
    E = 10;
function b(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === p.V_K.DEFAULT || t.nsfwLevel === p.V_K.SAFE);
}
async function y(e, t) {
    var n, p, y;
    let O = t.getGuildId();
    if (null == O || null == u.Z.getGuild(O)) return;
    let v = d.default.getCurrentUser();
    if (null == v) return;
    await (0, s.$p)();
    let I = Array.from(l.Z.getAllGuildStickers().values())
        .flat()
        .filter((e) => b(e.guild_id) && (0, o.kl)(e, v, t))
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (I.length > g) {
        let i = [I[Math.floor(Math.pow(Math.random(), 2) * I.length)].id];
        r.Z.sendStickers(t.id, i, "", {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e,
            },
            location: m.dy.CHANNEL_PROMPT,
        });
        return;
    }
    let T = u.Z.getGuildIds()
        .filter(b)
        .map((e) => i.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                f.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: O,
                    intention: h.Hz.CHAT,
                }),
        )
        .sort((e, t) => -_.default.compare(e.id, t.id));
    if (T.length > E) {
        let n = T[Math.floor(Math.pow(Math.random(), 2) * T.length)];
        r.Z.sendMessage(t.id, a.ZP.parse(t, (0, f.nY)(n)), !1, {
            location: m.dy.CHANNEL_PROMPT,
            messageReference: {
                guild_id: null != (p = t.getGuildId()) ? p : void 0,
                channel_id: t.id,
                message_id: e,
            },
        });
        return;
    }
    let S = Array.from(l.Z.getAllPackStickers().values())
            .flat()
            .filter((e) => e.type === c.n0.STANDARD),
        A = [S[Math.floor(Math.random() * S.length)].id];
    r.Z.sendStickers(t.id, A, "", {
        messageReference: {
            guild_id: null != (y = t.getGuildId()) ? y : void 0,
            channel_id: t.id,
            message_id: e,
        },
        location: m.dy.CHANNEL_PROMPT,
    });
}

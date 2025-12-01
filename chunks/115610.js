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
    p = n(709054),
    _ = n(981631),
    m = n(185923),
    h = n(959517);
let g = 5,
    E = 10;
function b(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === _.V_K.DEFAULT || t.nsfwLevel === _.V_K.SAFE);
}
async function y(e, t) {
    var n, _, y;
    let O = t.getGuildId();
    if (null == O || null == u.Z.getGuild(O)) return;
    let v = d.default.getCurrentUser();
    if (null == v) return;
    await (0, s.$p)();
    let S = Array.from(l.Z.getAllGuildStickers().values())
        .flat()
        .filter((e) => b(e.guild_id) && (0, o.kl)(e, v, t))
        .sort((e, t) => -p.default.compare(e.id, t.id));
    if (S.length > g) {
        let i = [S[Math.floor(Math.pow(Math.random(), 2) * S.length)].id];
        r.Z.sendStickers(t.id, i, "", {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e,
            },
            location: h.dy.CHANNEL_PROMPT,
        });
        return;
    }
    let I = u.Z.getGuildIds()
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
                    intention: m.Hz.CHAT,
                }),
        )
        .sort((e, t) => -p.default.compare(e.id, t.id));
    if (I.length > E) {
        let n = I[Math.floor(Math.pow(Math.random(), 2) * I.length)];
        r.Z.sendMessage(t.id, a.ZP.parse(t, (0, f.nY)(n)), !1, {
            location: h.dy.CHANNEL_PROMPT,
            messageReference: {
                guild_id: null != (_ = t.getGuildId()) ? _ : void 0,
                channel_id: t.id,
                message_id: e,
            },
        });
        return;
    }
    let T = Array.from(l.Z.getAllPackStickers().values())
            .flat()
            .filter((e) => e.type === c.n0.STANDARD),
        A = [T[Math.floor(Math.random() * T.length)].id];
    r.Z.sendStickers(t.id, A, "", {
        messageReference: {
            guild_id: null != (y = t.getGuildId()) ? y : void 0,
            channel_id: t.id,
            message_id: e,
        },
        location: h.dy.CHANNEL_PROMPT,
    });
}

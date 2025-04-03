n.d(t, { O: () => _ }), n(230036), n(86693), n(536091);
var r = n(904245),
    i = n(339085),
    a = n(957730),
    l = n(285651),
    o = n(268350),
    s = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    p = n(176354),
    m = n(709054),
    f = n(981631),
    h = n(185923);
function g(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE);
}
async function _(e, t) {
    var n, f, _;
    let b = t.getGuildId();
    if (null == b || null == u.Z.getGuild(b)) return;
    let x = d.default.getCurrentUser();
    if (null == x) return;
    await (0, o.$p)();
    let y = Array.from(s.Z.getAllStickersIterator()),
        E = y
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, l.kl)(e, x, t))
            .sort((e, t) => -m.default.compare(e.id, t.id));
    if (E.length > 5) {
        let i = [E[Math.floor(Math.pow(Math.random(), 2) * E.length)].id];
        r.Z.sendStickers(t.id, i, '', {
            messageReference: {
                guild_id: null != (n = t.getGuildId()) ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let v = u.Z.getGuildIds()
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
                    intention: h.Hz.CHAT
                })
        )
        .sort((e, t) => -m.default.compare(e.id, t.id));
    if (v.length > 10) {
        let n = v[Math.floor(Math.pow(Math.random(), 2) * v.length)];
        r.Z.sendMessage(t.id, a.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null != (f = t.getGuildId()) ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let O = y.filter((e) => e.type === c.n0.STANDARD),
        N = [O[Math.floor(Math.random() * O.length)].id];
    r.Z.sendStickers(t.id, N, '', {
        messageReference: {
            guild_id: null != (_ = t.getGuildId()) ? _ : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

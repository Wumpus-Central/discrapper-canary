n.d(t, { O: () => _ }), n(230036), n(86693), n(536091);
var r = n(904245),
    i = n(339085),
    a = n(957730),
    o = n(285651),
    l = n(268350),
    s = n(926491),
    c = n(373228),
    d = n(430824),
    u = n(594174),
    p = n(176354),
    m = n(709054),
    f = n(981631),
    h = n(185923);
function g(e) {
    let t = d.Z.getGuild(e);
    return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE);
}
async function _(e, t) {
    var n, f, _;
    let b = t.getGuildId();
    if (null == b || null == d.Z.getGuild(b)) return;
    let v = u.default.getCurrentUser();
    if (null == v) return;
    await (0, l.$p)();
    let y = Array.from(s.Z.getAllStickersIterator()),
        x = y
            .filter((e) => e.type === c.n0.GUILD)
            .filter((e) => g(e.guild_id) && (0, o.kl)(e, v, t))
            .sort((e, t) => -m.default.compare(e.id, t.id));
    if (x.length > 5) {
        let i = [x[Math.floor(Math.pow(Math.random(), 2) * x.length)].id];
        r.Z.sendStickers(t.id, i, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let O = d.Z.getGuildIds()
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
    if (O.length > 10) {
        let n = O[Math.floor(Math.pow(Math.random(), 2) * O.length)];
        r.Z.sendMessage(t.id, a.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (f = t.getGuildId()) && void 0 !== f ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let E = y.filter((e) => e.type === c.n0.STANDARD),
        j = [E[Math.floor(Math.random() * E.length)].id];
    r.Z.sendStickers(t.id, j, '', {
        messageReference: {
            guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

n.d(t, {
    O: function () {
        return g;
    }
}),
    n(536091);
var i = n(904245),
    r = n(339085),
    l = n(957730),
    a = n(285651),
    o = n(268350),
    s = n(926491),
    c = n(373228),
    u = n(430824),
    d = n(594174),
    m = n(176354),
    h = n(709054),
    f = n(981631),
    p = n(185923);
function _(e) {
    let t = u.Z.getGuild(e);
    return null != t && (t.nsfwLevel === f.V_K.DEFAULT || t.nsfwLevel === f.V_K.SAFE);
}
async function g(e, t) {
    var n, f, g;
    let E = t.getGuildId();
    if (null == E || null == u.Z.getGuild(E)) return;
    let C = d.default.getCurrentUser();
    if (null == C) return;
    await (0, o.$p)();
    let I = Array.from(s.Z.getAllStickersIterator()),
        x = I.filter((e) => e.type === c.n0.GUILD)
            .filter((e) => _(e.guild_id) && (0, a.kl)(e, C, t))
            .sort((e, t) => -h.default.compare(e.id, t.id));
    if (x.length > 5) {
        let r = [x[Math.floor(Math.pow(Math.random(), 2) * x.length)].id];
        i.Z.sendStickers(t.id, r, '', {
            messageReference: {
                guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let N = u.Z.getGuildIds()
        .filter(_)
        .map((e) => r.ZP.getUsableGuildEmoji(e))
        .flat()
        .filter(
            (e) =>
                null ==
                m.ZP.getEmojiUnavailableReason({
                    emoji: e,
                    channel: t,
                    guildId: E,
                    intention: p.Hz.CHAT
                })
        )
        .sort((e, t) => -h.default.compare(e.id, t.id));
    if (N.length > 10) {
        let n = N[Math.floor(Math.pow(Math.random(), 2) * N.length)];
        i.Z.sendMessage(t.id, l.ZP.parse(t, n.allNamesString), !1, {
            messageReference: {
                guild_id: null !== (f = t.getGuildId()) && void 0 !== f ? f : void 0,
                channel_id: t.id,
                message_id: e
            }
        });
        return;
    }
    let v = I.filter((e) => e.type === c.n0.STANDARD),
        T = [v[Math.floor(Math.random() * v.length)].id];
    i.Z.sendStickers(t.id, T, '', {
        messageReference: {
            guild_id: null !== (g = t.getGuildId()) && void 0 !== g ? g : void 0,
            channel_id: t.id,
            message_id: e
        }
    });
}

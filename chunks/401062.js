n.d(t, {
    kq: () => g,
    vy: () => h,
});
var r = n(392711),
    i = n(544891),
    a = n(100527),
    o = n(339085),
    s = n(697426),
    l = n(100986),
    c = n(944486),
    u = n(696900),
    d = n(963838),
    f = n(353368),
    p = n(981631),
    _ = n(710111);
function m(e) {
    let t = new AbortController(),
        n = (0, r.throttle)((n) => {
            c.Z.getVoiceChannelId() !== e && t.abort();
        }, 1000);
    return {
        abortController: t,
        onRequestProgress: n,
    };
}
function h(e, t, n) {
    var r;
    let { abortController: o, onRequestProgress: c } = m(e),
        _ = null != (r = u.Z.getState().animationType) ? r : f.q.BASIC,
        h = {
            animation_type: _,
            animation_id: (0, d.Iu)(_, d.v),
        };
    i.tn
        .post({
            url: p.ANM.CUSTOM_CALL_SOUNDS(e),
            body: h,
            signal: o.signal,
            onRequestProgress: c,
            rejectWithError: !0,
        })
        .then(p.VqG, () => {
            if (o.signal.aborted) return;
        }),
        (0, l.Z)([a.Z.CHANNEL_CALL], n, t, s.jy.ENTRY);
}
function g(e, t, n, r, a) {
    var c;
    let u = null != t.emojiId ? o.ZP.getCustomEmojiById(t.emojiId) : null,
        { abortController: d, onRequestProgress: f } = m(e),
        h = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null != (c = t.emojiName) ? c : null == u ? void 0 : u.name,
        };
    t.guildId !== _.X8 && (h.source_guild_id = t.guildId),
        i.tn
            .post({
                url: p.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: h,
                signal: d.signal,
                onRequestProgress: f,
                rejectWithError: !0,
            })
            .then(p.VqG, () => {
                if (d.signal.aborted) return;
            }),
        (0, l.Z)(null != r ? r : [], n, t, s.jy.DEFAULT, a);
}

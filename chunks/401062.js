n.d(t, {
    Lx: () => S,
    kq: () => I,
    vy: () => O,
    yX: () => y
});
var r = n(392711),
    i = n(544891),
    o = n(570140),
    a = n(100527),
    s = n(367907),
    l = n(339085),
    c = n(697426),
    u = n(100986),
    d = n(944486),
    f = n(70956),
    _ = n(176354),
    p = n(696900),
    h = n(456631),
    m = n(963838),
    g = n(353368),
    E = n(981631),
    b = n(710111),
    y = (function (e) {
        return (e.EMOJI_PICKER = 'emoji_picker'), (e.EFFECT_BAR = 'effect_bar'), e;
    })({});
function v(e) {
    let t = new AbortController(),
        n = (0, r.throttle)((n) => {
            d.Z.getVoiceChannelId() !== e && t.abort();
        }, 1000);
    return {
        abortController: t,
        onRequestProgress: n
    };
}
function O(e, t, n) {
    var r;
    let { abortController: o, onRequestProgress: s } = v(e),
        l = null != (r = p.Z.getState().animationType) ? r : g.q.BASIC,
        d = {
            animation_type: l,
            animation_id: (0, m.Iu)(l, m.v)
        };
    i.tn
        .post({
            url: E.ANM.CUSTOM_CALL_SOUNDS(e),
            body: d,
            signal: o.signal,
            onRequestProgress: s,
            rejectWithError: !0
        })
        .then(E.VqG, () => {
            if (o.signal.aborted) return;
        }),
        (0, u.Z)([a.Z.CHANNEL_CALL], n, t, c.jy.ENTRY);
}
function I(e, t, n, r) {
    var o, a;
    let s = l.ZP.getCustomEmojiById(null != (o = t.emojiId) ? o : ''),
        { abortController: d, onRequestProgress: f } = v(e),
        _ = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null != (a = t.emojiName) ? a : null == s ? void 0 : s.name
        };
    t.guildId !== b.X8 && (_.source_guild_id = t.guildId),
        i.tn
            .post({
                url: E.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: _,
                signal: d.signal,
                onRequestProgress: f,
                rejectWithError: !0
            })
            .then(E.VqG, () => {
                if (d.signal.aborted) return;
            }),
        (0, u.Z)(null != r ? r : [], n, t, c.jy.DEFAULT);
}
let S = async (e) => {
        let { channel: t, emoji: n, location: r, animationType: a, animationId: s, isPremium: l } = e;
        if (null == n || h.Z.isOnCooldown) return;
        let c = l && null != a ? a : g.q.BASIC;
        try {
            let e =
                null != n.id
                    ? {
                          emoji_id: n.id,
                          emoji_name: n.name,
                          animation_type: c,
                          animation_id: s
                      }
                    : {
                          emoji_id: null,
                          emoji_name: n.optionallyDiverseSequence,
                          animation_type: c,
                          animation_id: s
                      };
            await i.tn.post({
                url: E.ANM.VOICE_CHANNEL_EFFECTS(t.id),
                body: e,
                rejectWithError: !1
            }),
                N(t, n, r, c),
                o.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * f.Z.Millis.SECOND;
                o.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: t
                });
            }
        }
    },
    T = {
        [g.q.BASIC]: 'Basic',
        [g.q.PREMIUM]: 'Premium'
    },
    N = (e, t, n, r) => {
        let { unicode: i, custom: o, customExternal: a, managed: l, managedExternal: c, animated: u } = (0, _.sp)([t], e.getGuildId()),
            d = T[r];
        s.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: i,
            emoji_custom: o,
            emoji_custom_external: a,
            emoji_managed: l,
            emoji_managed_external: c,
            emoji_animated: u,
            animation_type: d
        });
    };

n.d(t, {
    Lx: () => S,
    kq: () => T,
    vy: () => b,
    yX: () => y
});
var i = n(392711),
    r = n(544891),
    a = n(570140),
    s = n(100527),
    o = n(367907),
    l = n(339085),
    u = n(697426),
    c = n(100986),
    d = n(944486),
    f = n(70956),
    _ = n(176354),
    p = n(696900),
    h = n(456631),
    m = n(963838),
    g = n(353368),
    E = n(981631),
    v = n(710111),
    y = (function (e) {
        return (e.EMOJI_PICKER = 'emoji_picker'), (e.EFFECT_BAR = 'effect_bar'), e;
    })({});
function I(e) {
    let t = new AbortController(),
        n = (0, i.throttle)((n) => {
            d.Z.getVoiceChannelId() !== e && t.abort();
        }, 1000);
    return {
        abortController: t,
        onRequestProgress: n
    };
}
function b(e, t, n) {
    var i;
    let { abortController: a, onRequestProgress: o } = I(e),
        l = null !== (i = p.Z.getState().animationType) && void 0 !== i ? i : g.q.BASIC,
        d = {
            animation_type: l,
            animation_id: (0, m.Iu)(l, m.v)
        };
    r.tn
        .post({
            url: E.ANM.CUSTOM_CALL_SOUNDS(e),
            body: d,
            signal: a.signal,
            onRequestProgress: o,
            rejectWithError: !0
        })
        .then(E.VqG, () => {
            if (a.signal.aborted) return;
        }),
        (0, c.Z)([s.Z.CHANNEL_CALL], n, t, u.jy.ENTRY);
}
function T(e, t, n, i) {
    var a, s;
    let o = l.ZP.getCustomEmojiById(null !== (a = t.emojiId) && void 0 !== a ? a : ''),
        { abortController: d, onRequestProgress: f } = I(e),
        _ = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null !== (s = t.emojiName) && void 0 !== s ? s : null == o ? void 0 : o.name
        };
    t.guildId !== v.X8 && (_.source_guild_id = t.guildId),
        r.tn
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
        (0, c.Z)(null != i ? i : [], n, t, u.jy.DEFAULT);
}
let S = async (e) => {
        let { channel: t, emoji: n, location: i, animationType: s, animationId: o, isPremium: l } = e;
        if (null == n || h.Z.isOnCooldown) return;
        let u = l && null != s ? s : g.q.BASIC;
        try {
            let e =
                null != n.id
                    ? {
                          emoji_id: n.id,
                          emoji_name: n.name,
                          animation_type: u,
                          animation_id: o
                      }
                    : {
                          emoji_id: null,
                          emoji_name: n.optionallyDiverseSequence,
                          animation_type: u,
                          animation_id: o
                      };
            await r.tn.post({
                url: E.ANM.VOICE_CHANNEL_EFFECTS(t.id),
                body: e,
                rejectWithError: !1
            }),
                N(t, n, i, u),
                a.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let t = e.body.retry_after * f.Z.Millis.SECOND;
                a.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: t
                });
            }
        }
    },
    A = {
        [g.q.BASIC]: 'Basic',
        [g.q.PREMIUM]: 'Premium'
    },
    N = (e, t, n, i) => {
        let { unicode: r, custom: a, customExternal: s, managed: l, managedExternal: u, animated: c } = (0, _.sp)([t], e.getGuildId()),
            d = A[i];
        o.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: n,
            emoji_unicode: r,
            emoji_custom: a,
            emoji_custom_external: s,
            emoji_managed: l,
            emoji_managed_external: u,
            emoji_animated: c,
            animation_type: d
        });
    };

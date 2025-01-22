r.d(n, {
    Lx: function () {
        return A;
    },
    kq: function () {
        return S;
    },
    vy: function () {
        return T;
    },
    yX: function () {
        return i;
    }
});
var i,
    a = r(392711);
var o = r(544891),
    s = r(570140),
    l = r(100527),
    u = r(367907),
    c = r(339085),
    d = r(697426),
    f = r(100986),
    p = r(944486),
    h = r(70956),
    _ = r(176354),
    m = r(696900),
    g = r(456631),
    E = r(963838),
    v = r(353368),
    y = r(981631),
    b = r(710111);
function I(e) {
    let n = new AbortController(),
        r = (0, a.throttle)((r) => {
            p.Z.getVoiceChannelId() !== e && n.abort();
        }, 1000);
    return {
        abortController: n,
        onRequestProgress: r
    };
}
function T(e, n, r) {
    var i;
    let { abortController: a, onRequestProgress: s } = I(e),
        u = null !== (i = m.Z.getState().animationType) && void 0 !== i ? i : v.q.BASIC,
        c = {
            animation_type: u,
            animation_id: (0, E.Iu)(u, E.v)
        };
    o.tn
        .post({
            url: y.ANM.CUSTOM_CALL_SOUNDS(e),
            body: c,
            signal: a.signal,
            onRequestProgress: s,
            rejectWithError: !0
        })
        .then(y.VqG, () => {
            if (a.signal.aborted) return;
        }),
        (0, f.Z)([l.Z.CHANNEL_CALL], r, n, d.jy.ENTRY);
}
function S(e, n, r, i) {
    var a, s;
    let l = c.ZP.getCustomEmojiById(null !== (a = n.emojiId) && void 0 !== a ? a : ''),
        { abortController: u, onRequestProgress: p } = I(e),
        h = {
            sound_id: n.soundId,
            emoji_id: n.emojiId,
            emoji_name: null !== (s = n.emojiName) && void 0 !== s ? s : null == l ? void 0 : l.name
        };
    n.guildId !== b.X8 && (h.source_guild_id = n.guildId),
        o.tn
            .post({
                url: y.ANM.SEND_SOUNDBOARD_SOUND(e),
                body: h,
                signal: u.signal,
                onRequestProgress: p,
                rejectWithError: !0
            })
            .then(y.VqG, () => {
                if (u.signal.aborted) return;
            }),
        (0, f.Z)(null != i ? i : [], r, n, d.jy.DEFAULT);
}
!(function (e) {
    (e.EMOJI_PICKER = 'emoji_picker'), (e.EFFECT_BAR = 'effect_bar');
})(i || (i = {}));
let A = async (e) => {
        let { channel: n, emoji: r, location: i, animationType: a, animationId: l, isPremium: u } = e;
        if (null == r || g.Z.isOnCooldown) return;
        let c = u && null != a ? a : v.q.BASIC;
        try {
            let e =
                null != r.id
                    ? {
                          emoji_id: r.id,
                          emoji_name: r.name,
                          animation_type: c,
                          animation_id: l
                      }
                    : {
                          emoji_id: null,
                          emoji_name: r.optionallyDiverseSequence,
                          animation_type: c,
                          animation_id: l
                      };
            await o.tn.post({
                url: y.ANM.VOICE_CHANNEL_EFFECTS(n.id),
                body: e,
                rejectWithError: !1
            }),
                N(n, r, i, c),
                s.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_SENT_LOCAL' });
        } catch (e) {
            if (429 === e.status && null != e.body.retry_after) {
                let n = e.body.retry_after * h.Z.Millis.SECOND;
                s.Z.dispatch({
                    type: 'VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP',
                    cooldownEndsAtMs: n
                });
            }
        }
    },
    C = {
        [v.q.BASIC]: 'Basic',
        [v.q.PREMIUM]: 'Premium'
    },
    N = (e, n, r, i) => {
        let { unicode: a, custom: o, customExternal: s, managed: l, managedExternal: c, animated: d } = (0, _.sp)([n], e.getGuildId()),
            f = C[i];
        u.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_EFFECT_SENT, {
            channel_id: e.id,
            guild_id: e.getGuildId(),
            location: r,
            emoji_unicode: a,
            emoji_custom: o,
            emoji_custom_external: s,
            emoji_managed: l,
            emoji_managed_external: c,
            emoji_animated: d,
            animation_type: f
        });
    };

"use strict";
let i;
n.d(t, { Rc: () => C, Wv: () => R });
var r = n(735438),
    s = n(636537),
    a = n(793574),
    o = n(159273),
    l = n(807348),
    d = n(328153),
    _ = n(734057),
    u = n(763827),
    c = n(309010),
    E = n(954571);
n(980504);
var h = n(652215),
    m = n(788868);
function f(e, t, n, i, r) {
    let s = _.A.getChannel(c.A.getVoiceChannelId()),
        a = s?.getGuildId(),
        o = u.A.getMediaSessionId(),
        l = u.A.getRTCConnectionId(),
        f = d.Ay.getCurrentGameForAnalytics()?.name,
        g = a !== n.guildId && "0" !== n.guildId,
        p = "0" === n.guildId ? "default" : g ? "custom-external" : "custom";
    E.default.track(h.HAw.PREMIUM_FEATURE_USAGE, {
        feature_name: m.Ae.SOUNDBOARD_PLAY,
        feature_tier: g ? m.tz.PREMIUM_STANDARD : m.tz.FREE,
        guild_id: a,
        home_guild_id: n.guildId,
        location_stack: e,
        rtc_connection_id: l,
        media_session_id: o,
        in_overlay: t,
        application_name: f,
        emoji_count: +(null != n.emojiId || null != n.emojiName),
        feature_selection: p,
        feature_selection_id: n.soundId,
        sound_type: i,
        sequence_number: null != r ? r + 1 : null,
    });
}
var g = n(17928),
    p = n(228366),
    A = n(194486);
class I extends g.Ay.PersistedStore {
    static displayName = "VoiceChannelEffectsPersistedStore";
    static persistKey = "VoiceChannelEffectsPersistedStore";
    initialize(e) {
        i = e?.animationType ?? A.B.PREMIUM;
    }
    getState() {
        return { animationType: i };
    }
}
let T = new I(p.h, {
    VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: () => {
        i = i === A.B.BASIC ? A.B.PREMIUM : A.B.BASIC;
    },
});
var S = n(104142);
function N(e) {
    let t = new AbortController(),
        n = (0, r.throttle)((n) => {
            c.A.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return { abortController: t, onRequestProgress: n };
}
function C(e, t, n) {
    let { abortController: i, onRequestProgress: r } = N(e),
        o = T.getState().animationType ?? A.B.BASIC,
        d = { animation_type: o, animation_id: (0, S.oS)(o, S.m4) };
    s.Bo.post({
        url: h.Rsh.CUSTOM_CALL_SOUNDS(e),
        body: d,
        signal: i.signal,
        onRequestProgress: r,
        rejectWithError: !0,
    }).then(h.FXj, () => {
        if (i.signal.aborted) return;
    }),
        f([a.A.CHANNEL_CALL], n, t, l.ib.ENTRY);
}
function R(e, t, n, i, r) {
    let a = null != t.emojiId ? o.Ay.getCustomEmojiById(t.emojiId) : null,
        { abortController: d, onRequestProgress: _ } = N(e),
        u = { sound_id: t.soundId, emoji_id: t.emojiId, emoji_name: t.emojiName ?? a?.name };
    "0" !== t.guildId && (u.source_guild_id = t.guildId),
        s.Bo.post({
            url: h.Rsh.SEND_SOUNDBOARD_SOUND(e),
            body: u,
            signal: d.signal,
            onRequestProgress: _,
            rejectWithError: !0,
        }).then(h.FXj, () => {
            if (d.signal.aborted) return;
        }),
        f(i ?? [], n, t, l.ib.DEFAULT, r);
}

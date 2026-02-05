let i;
n.d(t, { A: () => _, a: () => m }), n(667532);
var l = n(735438),
    a = n(311907),
    s = n(582754),
    r = n(73153),
    o = n(927813),
    c = n(667050);
n(806931);
let d = [],
    u = {},
    h = [],
    m = (e) => {
        null != e && r.h.dispatch({ type: "VOICE_CHANNEL_EFFECT_CLEAR", userId: e });
    },
    A = [],
    p = 10 * o.A.Millis.SECOND,
    g = (0, l.debounce)(() => {
        let e = (0, c.fr)(h);
        s.OR.announce(e, "polite"), (h = []);
    }, 500);
class f extends a.Ay.Store {
    static displayName = "VoiceChannelEffectsStore";
    get recentlyUsedEmojis() {
        return d;
    }
    get isOnCooldown() {
        return null != i && new Date() < i;
    }
    get effectCooldownEndTime() {
        return i;
    }
    getEffectForUserId(e) {
        return u[e];
    }
}
let _ = new f(r.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != u[t] && delete u[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (d.unshift(t), (d = (0, l.uniqBy)(d, "name")).length > 9 && d.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: i } = e;
        null != t &&
            null != i &&
            ((u[n] = { emoji: t, sentAt: Date.now(), animationType: i }),
            (h = [...h, { emojiName: t.name, userId: n }]),
            g());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((A = [e, ...A].slice(0, 20)).length >= 20) {
            let t = A[A.length - 1],
                n = e.getTime() - t.getTime();
            n < p && (i = new Date(e.getTime() + p - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        i = new Date(Date.now() + t);
    },
});

let i;
n.d(t, { A: () => x, a: () => f }), n(667532);
var l = n(735438),
    a = n(17928),
    r = n(765178),
    s = n(228366),
    o = n(927813),
    d = n(104142);
n(806931);
let c = [],
    u = {},
    _ = [],
    f = (e) => {
        null != e && s.h.dispatch({ type: "VOICE_CHANNEL_EFFECT_CLEAR", userId: e });
    },
    m = [],
    p = 10 * o.A.Millis.SECOND,
    g = (0, l.debounce)(() => {
        let e = (0, d.fr)(_);
        r.O.announce(e, "polite"), (_ = []);
    }, 500);
class h extends a.Ay.Store {
    static displayName = "VoiceChannelEffectsStore";
    get recentlyUsedEmojis() {
        return c;
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
let x = new h(s.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != u[t] && delete u[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (c.unshift(t), (c = (0, l.uniqBy)(c, "name")).length > 9 && c.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: i } = e;
        null != t &&
            null != i &&
            ((u[n] = { emoji: t, sentAt: Date.now(), animationType: i }),
            (_ = [..._, { emojiName: t.name, userId: n }]),
            g());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((m = [e, ...m].slice(0, 20)).length >= 20) {
            let t = m[m.length - 1],
                n = e.getTime() - t.getTime();
            n < p && (i = new Date(e.getTime() + p - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        i = new Date(Date.now() + t);
    },
});

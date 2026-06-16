let l;
n.d(t, { A: () => x, a: () => p }), n(667532);
var i = n(735438),
    s = n(17928),
    r = n(765178),
    a = n(228366),
    o = n(927813),
    u = n(104142);
n(806931);
let c = [],
    d = {},
    m = [],
    p = (e) => {
        null != e && a.h.dispatch({ type: "VOICE_CHANNEL_EFFECT_CLEAR", userId: e });
    },
    g = [],
    h = 10 * o.A.Millis.SECOND,
    f = (0, i.debounce)(() => {
        let e = (0, u.fr)(m);
        r.O.announce(e, "polite"), (m = []);
    }, 500);
class A extends s.Ay.Store {
    static displayName = "VoiceChannelEffectsStore";
    get recentlyUsedEmojis() {
        return c;
    }
    get isOnCooldown() {
        return null != l && new Date() < l;
    }
    get effectCooldownEndTime() {
        return l;
    }
    getEffectForUserId(e) {
        return d[e];
    }
}
let x = new A(a.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != d[t] && delete d[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (c.unshift(t), (c = (0, i.uniqBy)(c, "name")).length > 9 && c.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: l } = e;
        null != t &&
            null != l &&
            ((d[n] = { emoji: t, sentAt: Date.now(), animationType: l }),
            (m = [...m, { emojiName: t.name, userId: n }]),
            f());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((g = [e, ...g].slice(0, 20)).length >= 20) {
            let t = g[g.length - 1],
                n = e.getTime() - t.getTime();
            n < h && (l = new Date(e.getTime() + h - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        l = new Date(Date.now() + t);
    },
});

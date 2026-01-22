let l;
n.d(t, {
    A: () => _,
    a: () => g,
}),
    n(896048),
    n(667532);
var r,
    i,
    a = n(735438),
    s = n(311907),
    o = n(582754),
    c = n(73153),
    u = n(927813),
    d = n(667050);
n(806931);
let f = [],
    p = {},
    b = [],
    g = (e) => {
        null != e &&
            c.h.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e,
            });
    },
    m = [],
    h = 10 * u.A.Millis.SECOND,
    A = (0, a.debounce)(() => {
        let e = (0, d.fr)(b);
        o.OR.announce(e, "polite"), (b = []);
    }, 500);
class y extends (r = s.Ay.Store) {
    get recentlyUsedEmojis() {
        return f;
    }
    get isOnCooldown() {
        return null != l && new Date() < l;
    }
    get effectCooldownEndTime() {
        return l;
    }
    getEffectForUserId(e) {
        return p[e];
    }
}
(i = "displayName") in y
    ? Object.defineProperty(y, i, {
          value: "VoiceChannelEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (y[i] = "VoiceChannelEffectsStore");
let _ = new y(c.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != p[t] && delete p[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (f.unshift(t), (f = (0, a.uniqBy)(f, "name")).length > 9 && f.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: l } = e;
        null != t &&
            null != l &&
            ((p[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: l,
            }),
            (b = [
                ...b,
                {
                    emojiName: t.name,
                    userId: n,
                },
            ]),
            A());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((m = [e, ...m].slice(0, 20)).length >= 20) {
            let t = m[m.length - 1],
                n = e.getTime() - t.getTime();
            n < h && (l = new Date(e.getTime() + h - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        l = new Date(Date.now() + t);
    },
});

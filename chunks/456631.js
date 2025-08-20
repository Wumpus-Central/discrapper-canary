let r;
n.d(t, {
    H: () => g,
    Z: () => O,
}),
    n(388685),
    n(290780);
var l,
    i,
    a = n(392711),
    o = n(442837),
    u = n(780384),
    s = n(570140),
    c = n(70956),
    d = n(963838),
    f = n(354459);
let p = [],
    m = {},
    E = [],
    g = (e) => {
        null != e &&
            s.Z.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e,
            });
    },
    v = [],
    S = 10 * c.Z.Millis.SECOND,
    h = (0, a.debounce)(() => {
        let e = (0, d.cX)(E);
        u.uv.announce(e, "polite"), (E = []);
    }, 500);
class b extends (l = o.ZP.Store) {
    get recentlyUsedEmojis() {
        return p;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return m[e];
    }
}
(i = "displayName") in b
    ? Object.defineProperty(b, i, {
          value: "VoiceChannelEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (b[i] = "VoiceChannelEffectsStore");
let O = new b(s.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != m[t] && delete m[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (p.unshift(t), (p = (0, a.uniqBy)(p, "name")).length > f.e5 + 1 && p.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((m[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r,
            }),
            (E = [
                ...E,
                {
                    emojiName: t.name,
                    userId: n,
                },
            ]),
            h());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((v = [e, ...v].slice(0, 20)).length >= 20) {
            let t = v[v.length - 1],
                n = e.getTime() - t.getTime();
            n < S && (r = new Date(e.getTime() + S - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
});

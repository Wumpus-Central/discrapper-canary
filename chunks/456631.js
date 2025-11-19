let r;
n.d(t, {
    H: () => g,
    Z: () => y,
}),
    n(388685),
    n(290780);
var i,
    l,
    a = n(392711),
    o = n(442837),
    c = n(780384),
    s = n(570140),
    u = n(70956),
    d = n(963838),
    f = n(354459);
let p = [],
    m = {},
    _ = [],
    g = (e) => {
        null != e &&
            s.Z.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e,
            });
    },
    b = [],
    v = 10 * u.Z.Millis.SECOND,
    E = (0, a.debounce)(() => {
        let e = (0, d.cX)(_);
        c.uv.announce(e, "polite"), (_ = []);
    }, 500);
class h extends (i = o.ZP.Store) {
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
(l = "displayName") in h
    ? Object.defineProperty(h, l, {
          value: "VoiceChannelEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[l] = "VoiceChannelEffectsStore");
let y = new h(s.Z, {
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
            (_ = [
                ..._,
                {
                    emojiName: t.name,
                    userId: n,
                },
            ]),
            E());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((b = [e, ...b].slice(0, 20)).length >= 20) {
            let t = b[b.length - 1],
                n = e.getTime() - t.getTime();
            n < v && (r = new Date(e.getTime() + v - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
});

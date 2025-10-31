let r;
n.d(t, {
    H: () => g,
    Z: () => v,
}),
    n(388685),
    n(290780);
var i,
    l,
    a = n(392711),
    o = n(442837),
    s = n(780384),
    c = n(570140),
    u = n(70956),
    d = n(963838),
    p = n(354459);
let f = [],
    h = {},
    m = [],
    g = (e) => {
        null != e &&
            c.Z.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e,
            });
    },
    b = [],
    _ = 10 * u.Z.Millis.SECOND,
    y = (0, a.debounce)(() => {
        let e = (0, d.cX)(m);
        s.uv.announce(e, "polite"), (m = []);
    }, 500);
class C extends (i = o.ZP.Store) {
    get recentlyUsedEmojis() {
        return f;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return h[e];
    }
}
(l = "displayName") in C
    ? Object.defineProperty(C, l, {
          value: "VoiceChannelEffectsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[l] = "VoiceChannelEffectsStore");
let v = new C(c.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != h[t] && delete h[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (f.unshift(t), (f = (0, a.uniqBy)(f, "name")).length > p.e5 + 1 && f.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((h[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r,
            }),
            (m = [
                ...m,
                {
                    emojiName: t.name,
                    userId: n,
                },
            ]),
            y());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((b = [e, ...b].slice(0, 20)).length >= 20) {
            let t = b[b.length - 1],
                n = e.getTime() - t.getTime();
            n < _ && (r = new Date(e.getTime() + _ - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
});

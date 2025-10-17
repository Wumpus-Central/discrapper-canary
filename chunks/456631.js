let r;
n.d(t, {
    H: () => g,
    Z: () => S,
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
    _ = {},
    m = [],
    g = (e) => {
        null != e &&
            s.Z.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e,
            });
    },
    E = [],
    b = 10 * u.Z.Millis.SECOND,
    v = (0, a.debounce)(() => {
        let e = (0, d.cX)(m);
        c.uv.announce(e, "polite"), (m = []);
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
        return _[e];
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
let S = new h(s.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != _[t] && delete _[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (p.unshift(t), (p = (0, a.uniqBy)(p, "name")).length > f.e5 + 1 && p.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((_[n] = {
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
            v());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((E = [e, ...E].slice(0, 20)).length >= 20) {
            let t = E[E.length - 1],
                n = e.getTime() - t.getTime();
            n < b && (r = new Date(e.getTime() + b - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
});

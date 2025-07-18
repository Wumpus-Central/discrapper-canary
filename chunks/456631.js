let r;
(n.d(t, {
    H: () => v,
    Z: () => y
}),
    n(388685),
    n(290780));
var l,
    i,
    a,
    o = n(392711),
    u = n(442837),
    s = n(780384),
    c = n(570140),
    d = n(70956),
    f = n(963838),
    p = n(354459);
let m = [],
    E = {},
    g = [],
    v = (e) => {
        null != e &&
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    h = [],
    S = 10 * d.Z.Millis.SECOND,
    b = (0, o.debounce)(() => {
        let e = (0, f.cX)(g);
        (s.uv.announce(e, 'polite'), (g = []));
    }, 500);
class O extends (l = u.ZP.Store) {
    get recentlyUsedEmojis() {
        return m;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return E[e];
    }
}
((a = 'VoiceChannelEffectsStore'),
    (i = 'displayName') in O
        ? Object.defineProperty(O, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[i] = a));
let y = new O(c.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: (e) => {
        let { userId: t } = e;
        null != E[t] && delete E[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: (e) => {
        let { emoji: t } = e;
        null != t && (m.unshift(t), (m = (0, o.uniqBy)(m, 'name')).length > p.e5 + 1 && m.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((E[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r
            }),
            (g = [
                ...g,
                {
                    emojiName: t.name,
                    userId: n
                }
            ]),
            b());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
        let e = new Date();
        if ((h = [e, ...h].slice(0, 20)).length >= 20) {
            let t = h[h.length - 1],
                n = e.getTime() - t.getTime();
            n < S && (r = new Date(e.getTime() + S - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    }
});

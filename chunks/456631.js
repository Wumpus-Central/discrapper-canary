let i;
n.d(t, {
    H: () => m,
    Z: () => C
}),
    n(47120),
    n(733860);
var r,
    a = n(392711),
    s = n(442837),
    o = n(780384),
    l = n(570140),
    u = n(70956),
    c = n(963838),
    d = n(354459);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = [],
    p = {},
    h = [],
    m = (e) => {
        null != e &&
            l.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    g = [],
    E = 20,
    v = 10 * u.Z.Millis.SECOND,
    y = () => {
        let e = new Date();
        if ((g = [e, ...g].slice(0, E)).length >= E) {
            let t = g[g.length - 1],
                n = e.getTime() - t.getTime();
            n < v && (i = new Date(e.getTime() + v - n));
        }
    },
    I = (e) => {
        let { cooldownEndsAtMs: t } = e;
        i = new Date(Date.now() + t);
    },
    T = (0, a.debounce)(() => {
        let e = (0, c.cX)(h);
        o.uv.announce(e, 'polite'), (h = []);
    }, 500),
    b = (e) => {
        let { emoji: t, userId: n, animationType: i } = e;
        null != t &&
            null != i &&
            ((p[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: i
            }),
            (h = [
                ...h,
                {
                    emojiName: t.name,
                    userId: n
                }
            ]),
            T());
    },
    S = (e) => {
        let { emoji: t } = e;
        null != t && (_.unshift(t), (_ = (0, a.uniqBy)(_, 'name')).length > d.e5 + 1 && _.pop());
    },
    A = (e) => {
        let { userId: t } = e;
        null != p[t] && delete p[t];
    };
class N extends (r = s.ZP.Store) {
    get recentlyUsedEmojis() {
        return _;
    }
    get isOnCooldown() {
        return null != i && new Date() < i;
    }
    get effectCooldownEndTime() {
        return i;
    }
    getEffectForUserId(e) {
        return p[e];
    }
}
f(N, 'displayName', 'VoiceChannelEffectsStore');
let C = new N(l.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: A,
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: S,
    VOICE_CHANNEL_EFFECT_SEND: b,
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: y,
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: I
});

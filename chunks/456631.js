let r;
n.d(t, {
    H: () => m,
    Z: () => A
}),
    n(47120),
    n(733860);
var i,
    o = n(392711),
    a = n(442837),
    s = n(780384),
    l = n(570140),
    c = n(70956),
    u = n(963838),
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
    b = 10 * c.Z.Millis.SECOND,
    y = () => {
        let e = new Date();
        if ((g = [e, ...g].slice(0, E)).length >= E) {
            let t = g[g.length - 1],
                n = e.getTime() - t.getTime();
            n < b && (r = new Date(e.getTime() + b - n));
        }
    },
    v = (e) => {
        let { cooldownEndsAtMs: t } = e;
        r = new Date(Date.now() + t);
    },
    O = (0, o.debounce)(() => {
        let e = (0, u.cX)(h);
        s.uv.announce(e, 'polite'), (h = []);
    }, 500),
    I = (e) => {
        let { emoji: t, userId: n, animationType: r } = e;
        null != t &&
            null != r &&
            ((p[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: r
            }),
            (h = [
                ...h,
                {
                    emojiName: t.name,
                    userId: n
                }
            ]),
            O());
    },
    S = (e) => {
        let { emoji: t } = e;
        null != t && (_.unshift(t), (_ = (0, o.uniqBy)(_, 'name')).length > d.e5 + 1 && _.pop());
    },
    T = (e) => {
        let { userId: t } = e;
        null != p[t] && delete p[t];
    };
class N extends (i = a.ZP.Store) {
    get recentlyUsedEmojis() {
        return _;
    }
    get isOnCooldown() {
        return null != r && new Date() < r;
    }
    get effectCooldownEndTime() {
        return r;
    }
    getEffectForUserId(e) {
        return p[e];
    }
}
f(N, 'displayName', 'VoiceChannelEffectsStore');
let A = new N(l.Z, {
    VOICE_CHANNEL_EFFECT_CLEAR: T,
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: S,
    VOICE_CHANNEL_EFFECT_SEND: I,
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: y,
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: v
});

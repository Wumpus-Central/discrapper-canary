let i;
r.d(n, {
    H: function () {
        return v;
    }
});
var a,
    o = r(47120);
var s = r(733860);
var l = r(392711);
var u = r(442837),
    c = r(780384),
    d = r(570140),
    f = r(70956),
    p = r(963838),
    h = r(354459);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = [],
    g = {},
    E = [],
    v = (e) => {
        null != e &&
            d.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_CLEAR',
                userId: e
            });
    },
    y = [],
    b = 20,
    I = 10 * f.Z.Millis.SECOND,
    T = () => {
        let e = new Date();
        if ((y = [e, ...y].slice(0, b)).length >= b) {
            let n = y[y.length - 1],
                r = e.getTime() - n.getTime();
            r < I && (i = new Date(e.getTime() + I - r));
        }
    },
    S = (e) => {
        let { cooldownEndsAtMs: n } = e;
        i = new Date(Date.now() + n);
    },
    A = (0, l.debounce)(() => {
        let e = (0, p.cX)(E);
        c.uv.announce(e, 'polite'), (E = []);
    }, 500),
    C = (e) => {
        let { emoji: n, userId: r, animationType: i } = e;
        null != n &&
            null != i &&
            ((g[r] = {
                emoji: n,
                sentAt: Date.now(),
                animationType: i
            }),
            (E = [
                ...E,
                {
                    emojiName: n.name,
                    userId: r
                }
            ]),
            A());
    },
    N = (e) => {
        let { emoji: n } = e;
        if (null != n) m.unshift(n), (m = (0, l.uniqBy)(m, 'name')).length > h.e5 + 1 && m.pop();
    },
    R = (e) => {
        let { userId: n } = e;
        null != g[n] && delete g[n];
    };
class O extends (a = u.ZP.Store) {
    get recentlyUsedEmojis() {
        return m;
    }
    get isOnCooldown() {
        return null != i && new Date() < i;
    }
    get effectCooldownEndTime() {
        return i;
    }
    getEffectForUserId(e) {
        return g[e];
    }
}
_(O, 'displayName', 'VoiceChannelEffectsStore'),
    (n.Z = new O(d.Z, {
        VOICE_CHANNEL_EFFECT_CLEAR: R,
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: N,
        VOICE_CHANNEL_EFFECT_SEND: C,
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: T,
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: S
    }));

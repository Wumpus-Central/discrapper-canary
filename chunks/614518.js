let i;
(n.d(t, { A: () => A, a: () => g }), n(667532));
var l = n(435558),
    s = n(17928),
    r = n(765178),
    a = n(73153),
    o = n(927813),
    u = n(104142);
n(806931);
let c = [],
    d = {},
    m = [];
function g(e) {
    null != e && a.h.dispatch({ type: "VOICE_CHANNEL_EFFECT_CLEAR", userId: e });
}
let p = [],
    f = 10 * o.A.Millis.SECOND,
    h = (0, l.debounce)(() => {
        let e = (0, u.fr)(m);
        (r.O.announce(e, "polite"), (m = []));
    }, 500);
class x extends s.Ay.Store {
    static displayName = "VoiceChannelEffectsStore";
    get recentlyUsedEmojis() {
        return c;
    }
    get isOnCooldown() {
        return null != i && new Date() < i;
    }
    get effectCooldownEndTime() {
        return i;
    }
    getEffectForUserId(e) {
        return d[e];
    }
}
let A = new x(a.h, {
    VOICE_CHANNEL_EFFECT_CLEAR: function (e) {
        let { userId: t } = e;
        null != d[t] && delete d[t];
    },
    VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function (e) {
        let { emoji: t } = e;
        null != t && (c.unshift(t), (c = (0, l.uniqBy)(c, "name")).length > 9 && c.pop());
    },
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
        let { emoji: t, userId: n, animationType: i } = e;
        null != t &&
            null != i &&
            ((d[n] = { emoji: t, sentAt: Date.now(), animationType: i }),
            (m = [...m, { emojiName: t.name, userId: n }]),
            h());
    },
    VOICE_CHANNEL_EFFECT_SENT_LOCAL: function () {
        let e = new Date();
        if ((p = [e, ...p].slice(0, 20)).length >= 20) {
            let t = p[p.length - 1],
                n = e.getTime() - t.getTime();
            n < f && (i = new Date(e.getTime() + f - n));
        }
    },
    VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function (e) {
        let { cooldownEndsAtMs: t } = e;
        i = new Date(Date.now() + t);
    },
});

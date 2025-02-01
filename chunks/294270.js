n.d(t, { Z: () => O }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(846519),
    s = n(147913),
    o = n(460181),
    l = n(314897),
    u = n(70956),
    c = n(697492),
    d = n(37091),
    f = n(721264);
function _(e, t, n) {
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
let p = 15 * u.Z.Millis.SECOND,
    h = 15 * u.Z.Millis.SECOND,
    m = 550,
    g = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    E = g.length,
    v = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    },
    y = new a.V7(),
    I = [],
    T = {},
    b = (0, o.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    S = (0, o.tu)('highfive_clap', 'highfive_clap', 0.6);
function A(e) {
    let { emoji: t, channelId: n, userId: i } = e,
        a = l.default.getId(),
        s = d.Z.getEnabled();
    if (null != t) {
        if (s && (0, f.Z)(t.name)) return C(t.name, i, n);
        i === a && ((I = [...I, t.name].slice(-1 * E)), r().isEqual(I, g) ? (b.play(), y.stop(), (I = []), (0, c.ME)(!s)) : y.start(p, () => (I = [])));
    }
}
function N(e) {
    let { completingUserId: t, waitingUserId: n, channelId: i } = e,
        r = v(''.concat(t).concat(n), i, !0);
    (T[r] = new a.sW(m, () => {
        delete T[r], (0, c.hu)(t, n, i);
    })),
        T[r].delay();
}
function C(e, t, n) {
    var i;
    let r = v(t, n);
    if (null != d.Z.getWaitingHighFive(n, t)) return;
    let [s, o] =
        null !==
            (i = Object.entries(T).find((e) => {
                let [t] = e;
                return t !== r;
            })) && void 0 !== i
            ? i
            : [];
    if (null != s && null != o) o.cancel(), S.play(), delete T[s], (0, c.Ym)(s.split(':')[0], t, n, e);
    else {
        (0, c._g)(e, t, n), b.play();
        let i = new a.sW(h, () => {
            delete T[t], (0, c.Gd)(t, n);
        });
        (T[t] = i), i.delay();
    }
}
class R extends s.Z {
    _terminate() {
        Object.values(T).forEach((e) => e.cancel()), (T = {});
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: A,
                HIGH_FIVE_COMPLETE: N
            });
    }
}
let O = new R();

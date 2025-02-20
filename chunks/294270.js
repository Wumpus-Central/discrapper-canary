n.d(t, { Z: () => R }), n(47120), n(301563);
var r = n(392711),
    i = n.n(r),
    o = n(846519),
    a = n(147913),
    s = n(460181),
    l = n(314897),
    c = n(70956),
    u = n(697492),
    d = n(37091),
    f = n(721264);
function p(e, t, n) {
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
let _ = 15 * c.Z.Millis.SECOND,
    h = 15 * c.Z.Millis.SECOND,
    m = 550,
    g = ['\uD83C\uDDE9', '\uD83C\uDDF4', '\uD83C\uDDF9', '\uD83C\uDDE6'],
    E = g.length,
    v = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return ''.concat(e, ':').concat(t, ':').concat(n);
    },
    b = new o.V7(),
    y = [],
    O = {},
    S = (0, s.tu)('highfive_whistle', 'highfive_whistle', 0.6),
    I = (0, s.tu)('highfive_clap', 'highfive_clap', 0.6);
function T(e) {
    let { emoji: t, channelId: n, userId: r } = e,
        o = l.default.getId(),
        a = d.Z.getEnabled();
    if (null != t) {
        if (a && (0, f.Z)(t.name)) return A(t.name, r, n);
        r === o && ((y = [...y, t.name].slice(-1 * E)), i().isEqual(y, g) ? (S.play(), b.stop(), (y = []), (0, u.ME)(!a)) : b.start(_, () => (y = [])));
    }
}
function N(e) {
    let { completingUserId: t, waitingUserId: n, channelId: r } = e,
        i = v(''.concat(t).concat(n), r, !0);
    (O[i] = new o.sW(m, () => {
        delete O[i], (0, u.hu)(t, n, r);
    })),
        O[i].delay();
}
function A(e, t, n) {
    var r;
    let i = v(t, n);
    if (null != d.Z.getWaitingHighFive(n, t)) return;
    let [a, s] =
        null !==
            (r = Object.entries(O).find((e) => {
                let [t] = e;
                return t !== i;
            })) && void 0 !== r
            ? r
            : [];
    if (null != a && null != s) s.cancel(), I.play(), delete O[a], (0, u.Ym)(a.split(':')[0], t, n, e);
    else {
        (0, u._g)(e, t, n), S.play();
        let r = new o.sW(h, () => {
            delete O[t], (0, u.Gd)(t, n);
        });
        (O[t] = r), r.delay();
    }
}
class C extends a.Z {
    _terminate() {
        Object.values(O).forEach((e) => e.cancel()), (O = {});
    }
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                VOICE_CHANNEL_EFFECT_SEND: T,
                HIGH_FIVE_COMPLETE: N
            });
    }
}
let R = new C();
